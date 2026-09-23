export default function Layout({ children }) {
  return (
    <div className="site">
      <main>{children}</main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Taneim Miah</p>
      </footer>
    </div>
  );
}
