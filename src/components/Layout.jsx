import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
	return <div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="collapse navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav">
		      <li className="nav-item">
		        <Link className="nav-link" to="/users">Users</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/register">Register</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
		<Outlet />
	</div>
};

export default Layout;