import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
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
