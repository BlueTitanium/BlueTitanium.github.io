import SocialLinks from "./SocialLinks.jsx";
import DotGrid from "./DotGrid.jsx";

export default function Layout({ children }) {
  return (
    <div className="site">
      <DotGrid />
      <main>{children}</main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Taneim Miah</p>
        <SocialLinks />
      </footer>
    </div>
  );
}
