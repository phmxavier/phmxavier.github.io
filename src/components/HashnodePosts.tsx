import { useEffect, useState } from "react";

type HashnodePost = {
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  coverImage?: {
    url?: string | null;
  } | null;
};

type HashnodePostEdge = {
  node: HashnodePost | null;
};

type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges: HashnodePostEdge[];
      } | null;
    } | null;
  };
  errors?: {
    message?: string;
  }[];
};

type HashnodePostsProps = {
  publicationHost?: string;
  limit?: number;
};

const HASHNODE_ENDPOINT = "https://gql.hashnode.com/";

const normalizeLimit = (value?: number) => {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.floor(value);
  }

  return 5;
};

const formatDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Data desconhecida";
  }

  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(date);
};

export const HashnodePosts = ({ publicationHost = "blog.pedroxavier.com", limit = 5 }: HashnodePostsProps) => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const resolvedLimit = normalizeLimit(limit);

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(HASHNODE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: `
              query HashnodePosts($host: String!, $first: Int!) {
                publication(host: $host) {
                  posts(first: $first) {
                    edges {
                      node {
                        title
                        brief
                        slug
                        url
                        publishedAt
                        coverImage { url }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
              host: publicationHost,
              first: resolvedLimit
            }
          }),
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Falha ao buscar posts (${response.status})`);
        }

        const json: HashnodeResponse = await response.json();

        if (json.errors?.length) {
          throw new Error(json.errors[0]?.message ?? "Erro ao carregar posts");
        }

        const edges = json.data?.publication?.posts?.edges ?? [];
        const parsedPosts = edges
          .map((edge) => edge?.node)
          .filter((node): node is HashnodePost => Boolean(node));

        setPosts(parsedPosts);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Erro inesperado ao carregar posts");
          setPosts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, [publicationHost, limit]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow">
          Carregando posts...
        </div>
      );
    }

    if (error) {
      return (
        <div className="rounded-xl border border-red-900/60 bg-red-950/60 p-6 text-sm text-red-200 shadow">
          Erro ao carregar posts: {error}
        </div>
      );
    }

    if (posts.length === 0) {
      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300 shadow">
          Nenhum post encontrado.
        </div>
      );
    }

    return (
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-surface-2 shadow transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-accent/20"
          >
            {post.coverImage?.url ? (
              <div className="aspect-[9/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="h-2 w-full bg-gradient-to-r from-accent to-accent-2" />
            )}
            <div
              className={`flex flex-1 flex-col ${post.coverImage?.url ? "gap-3 p-4" : "gap-4 p-6"} transition-colors`}
            >
              <div className="text-xs uppercase tracking-[0.15em] text-accent-2">{formatDate(post.publishedAt)}</div>
              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">{post.title}</h3>
              <p className="text-sm text-slate-300">{post.brief}</p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <section aria-labelledby="hashnode-posts" className="space-y-4">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent-2">Blog</p>
          <h2 id="hashnode-posts" className="text-2xl font-semibold text-white">
            Últimos posts
          </h2>
        </div>
        <a
          href={`https://${publicationHost}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent transition hover:text-accent-2"
        >
          Ver blog
        </a>
      </div>
      {renderContent()}
    </section>
  );
};
