import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="logo">
          Taneim Miah
        </Link>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Taneim Miah</p>
      </footer>
    </div>
  );
}
