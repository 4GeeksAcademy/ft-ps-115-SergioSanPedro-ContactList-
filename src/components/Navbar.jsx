import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Lista de contactos</span>
				</Link>
				<div className="ml-auto">
					
					<Link to={'/create-contact'}>
						<button className="btn btn-success">Añadir contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};