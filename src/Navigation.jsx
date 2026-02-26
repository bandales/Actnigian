import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
	return (
		<div>
			<nav className="site-nav">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/price-checker" className="nav-link">
					Price Checker
				</Link>
			</nav>
			<main className="main-content">
				<Outlet />
			</main>
		</div>
	)
}

