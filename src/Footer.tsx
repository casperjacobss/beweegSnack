import logoUcll from "./images/logo_ucleuvenlimburg_socialmedia_rgb.png";
import logoUHasselt from "./images/logo_uhasselt.png";

const Footer = () => {
	return (
		<header className="footer">
			<a href="https://www.ucll.be/nl">
				<img src={logoUcll} className="logo" alt="logo" />
			</a>
			<a href="https://www.uhasselt.be/nl">
				<img src={logoUHasselt} className="logo" alt="logo" />
			</a>
		</header>
	);
};

export default Footer;
