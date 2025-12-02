import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-surface-2/60 to-surface">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
