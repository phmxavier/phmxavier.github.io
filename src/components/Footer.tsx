import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-surface-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} phmxavier.com</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <link.icon className="h-5 w-5" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
