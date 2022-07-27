import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-extrabold">
      Home
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/components">Components</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Home;
