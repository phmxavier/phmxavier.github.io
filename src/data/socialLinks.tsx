import { SVGProps } from "react";

export type SocialLink = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.24 8.64h4.52V24H.24zM8.54 8.64h4.33v2.08h.06c.6-1.13 2.07-2.32 4.27-2.32 4.56 0 5.4 3 5.4 6.88V24h-4.74v-7.42c0-1.77-.03-4.05-2.47-4.05-2.48 0-2.86 1.93-2.86 3.93V24H8.54z" />
  </svg>
);

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.16.68-3.82-1.53-3.82-1.53-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.14.08 1.75 1.18 1.75 1.18 1.02 1.74 2.66 1.24 3.3.95.1-.74.4-1.24.73-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.45-2.26 1.18-3.05-.12-.29-.51-1.46.11-3.06 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.6.23 2.77.11 3.06.73.79 1.18 1.81 1.18 3.05 0 4.36-2.66 5.31-5.2 5.59.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const BlogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" d="M2 12h20M12 2c3 3.5 3 16 0 20M12 2c-3 3.5-3 16 0 20" />
  </svg>
);

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/phmxavier",
    icon: LinkedInIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/phmxavier",
    icon: GitHubIcon,
  },
  {
    name: "Blog",
    href: "https://blog.pedroxavier.com",
    icon: BlogIcon,
  },
];
