import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found page-width">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>This path ends here.</h1>
        <p>
          The portfolio has a new structure. Head back to explore the selected
          work.
        </p>
        <Link className="button button-primary" href="/">
          <ArrowLeft size={16} />
          Back to the portfolio
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
