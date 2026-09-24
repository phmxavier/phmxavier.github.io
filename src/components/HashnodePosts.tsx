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

type HashnodePostsProps = {
  publicationHost?: string;
  limit?: number;
};

type ParsedFeedPost = {
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImageUrl?: string;
};

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

const isValidDateString = (value: string) => {
  if (!value.trim()) {
    return false;
  }

  return !Number.isNaN(new Date(value).getTime());
};

const decodeHtml = (value: string) => {
  if (typeof window === "undefined") {
    return value;
  }

  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
};

const toAbsoluteUrl = (value: string | null | undefined, baseUrl: string) => {
  if (!value) {
    return "";
  }

  try {
    return new URL(value, baseUrl).toString();
  } catch {
    return value;
  }
};

const getSlugFromUrl = (value: string) => {
  try {
    const url = new URL(value);
    const segments = url.pathname.split("/").filter(Boolean);

    return segments.at(-1) ?? value;
  } catch {
    return value;
  }
};

const getPostKey = (value: string) => {
  const normalized = value.trim();

  if (!normalized) {
    return "";
  }

  return getSlugFromUrl(normalized);
};

const normalizePost = (post: ParsedFeedPost, baseUrl: string): HashnodePost => {
  const url = toAbsoluteUrl(post.url, baseUrl);

  return {
    title: post.title.trim(),
    brief: post.brief.trim(),
    url,
    slug: getSlugFromUrl(url),
    publishedAt: post.publishedAt,
    coverImage: post.coverImageUrl
      ? {
          url: toAbsoluteUrl(post.coverImageUrl, baseUrl)
        }
      : null
  };
};

const parsePostsFromHtml = (html: string, baseUrl: string) => {
  const parser = new DOMParser();
  const documentNode = parser.parseFromString(html, "text/html");
  const articleNodes = Array.from(documentNode.querySelectorAll("article.post-card"));

  return articleNodes
    .map((article) => {
      const titleLink = article.querySelector<HTMLAnchorElement>("h2 a");
      const description = article.querySelector<HTMLParagraphElement>(".post-card-description");
      const image = article.querySelector<HTMLImageElement>("img.post-card-cover");
      const publishedTime =
        article.querySelector<HTMLTimeElement>("time[datetime]")?.dateTime?.trim() ??
        article.querySelector<HTMLElement>("[datetime]")?.getAttribute("datetime")?.trim() ??
        article.querySelector<HTMLElement>("[data-published-at]")?.getAttribute("data-published-at")?.trim() ??
        article.querySelector(".post-card-meta time")?.textContent?.trim() ??
        article.querySelector(".post-card-meta span")?.textContent?.trim() ??
        "";

      if (!titleLink?.textContent?.trim() || !titleLink.getAttribute("href")) {
        return null;
      }

      return normalizePost(
        {
          title: titleLink.textContent,
          brief: description?.textContent ?? "",
          url: titleLink.getAttribute("href") ?? "",
          publishedAt: publishedTime,
          coverImageUrl: image?.getAttribute("src") ?? undefined
        },
        baseUrl
      );
    })
    .filter((post): post is HashnodePost => Boolean(post));
};

const parsePostsFromRss = (xml: string, baseUrl: string) => {
  const parser = new DOMParser();
  const documentNode = parser.parseFromString(xml, "application/xml");
  const items = Array.from(documentNode.querySelectorAll("channel > item"));

  return items
    .map((item) => {
      const title = item.querySelector("title")?.textContent?.trim() ?? "";
      const description = decodeHtml(item.querySelector("description")?.textContent?.trim() ?? "");
      const link = item.querySelector("link")?.textContent?.trim() ?? "";
      const publishedAt = item.querySelector("pubDate")?.textContent?.trim() ?? "";

      if (!title || !link) {
        return null;
      }

      return normalizePost(
        {
          title,
          brief: description,
          url: link,
          publishedAt
        },
        baseUrl
      );
    })
    .filter((post): post is HashnodePost => Boolean(post));
};

const mergePosts = (postsFromHtml: HashnodePost[], postsFromRss: HashnodePost[]) => {
  const rssByKey = new Map<string, HashnodePost>();

  postsFromRss.forEach((post) => {
    const key = getPostKey(post.url) || getPostKey(post.slug);
    if (key) {
      rssByKey.set(key, post);
    }
  });

  const mergedPosts = postsFromHtml.map((htmlPost) => {
    const key = getPostKey(htmlPost.url) || getPostKey(htmlPost.slug);
    const rssPost = key ? rssByKey.get(key) : undefined;

    if (!rssPost) {
      return htmlPost;
    }

    return {
      ...rssPost,
      ...htmlPost,
      publishedAt: isValidDateString(htmlPost.publishedAt) ? htmlPost.publishedAt : rssPost.publishedAt,
      brief: htmlPost.brief || rssPost.brief,
      coverImage: htmlPost.coverImage?.url ? htmlPost.coverImage : rssPost.coverImage
    };
  });

  if (mergedPosts.length > 0) {
    return mergedPosts;
  }

  return postsFromRss;
};

const fetchBlogPosts = async (baseUrl: string, signal: AbortSignal) => {
  let postsFromHtml: HashnodePost[] = [];

  try {
    const homepageResponse = await fetch(baseUrl, { signal });

    if (!homepageResponse.ok) {
      throw new Error(`Falha ao buscar posts (${homepageResponse.status})`);
    }

    const homepageHtml = await homepageResponse.text();
    postsFromHtml = parsePostsFromHtml(homepageHtml, baseUrl);
  } catch (error) {
    if (signal.aborted) {
      throw error;
    }
  }

  const rssResponse = await fetch(new URL("/rss.xml", baseUrl).toString(), { signal });

  if (!rssResponse.ok) {
    throw new Error(`Falha ao buscar feed (${rssResponse.status})`);
  }

  const rssXml = await rssResponse.text();
  const postsFromRss = parsePostsFromRss(rssXml, baseUrl);

  return mergePosts(postsFromHtml, postsFromRss);
};

export const HashnodePosts = ({ publicationHost = "posts.pedroxavier.com", limit = 5 }: HashnodePostsProps) => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const resolvedLimit = normalizeLimit(limit);
    const baseUrl = `https://${publicationHost}`;

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const parsedPosts = await fetchBlogPosts(baseUrl, controller.signal);
        setPosts(parsedPosts.slice(0, resolvedLimit));
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
