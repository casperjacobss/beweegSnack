import logo from "./images/logo.png";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} className="logo" alt="logo" />
			<nav>
				<ul></ul>
			</nav>
		</header>
	);
};

export default Header;
