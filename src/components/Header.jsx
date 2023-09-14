import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Company application</h1>
      <Link to="/">Home</Link>
      <Link to="/newEmployee">New Employee</Link>
    </header>
  );
};
