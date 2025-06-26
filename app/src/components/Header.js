import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <Nav />
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    </header>
  );
}

export default Header;