import { ArrowUp } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <span>© {new Date().getFullYear()} Ashu Chauhan</span>
        <span className="footer-note">
          Built with intention. Always learning.
        </span>
        <a href="#main-content">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
