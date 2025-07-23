import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-opacity">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-title-gradient">Agenda de contactos</span>
        </Link>
        <div className="ml-auto">
          <Link to={"/create-contact"}>
            <button className="btn-gradient">Añadir contacto</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
