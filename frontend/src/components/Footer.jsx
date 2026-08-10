import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = "text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors duration-150";

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-6 antialiased font-sans mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Company Trademark Left Cluster */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold tracking-tight text-sm">YASSH</span>
            <span className="text-[10px] tracking-[3px] text-slate-500 font-bold uppercase">ENTERPRISES</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1.5 font-medium">
            &copy; {new Date().getFullYear()} YASSH ENTERPRISES. All Rights Reserved.
          </p>
        </div>

        {/* Informational Sub-Navigation Stack */}
        <nav className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2">
          <Link to="/about" className={linkStyle}>
            About Us
          </Link>
          <Link to="/products" className={linkStyle}>
            Products
          </Link>
          <Link to="/contact" className={linkStyle}>
            Contact
          </Link>
          <a href="#privacy" className={linkStyle}>
            Privacy Policy
          </a>
          <a href="#terms" className={linkStyle}>
            Terms of Service
          </a>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;