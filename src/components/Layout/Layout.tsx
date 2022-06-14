import Footer from "../../Footer";
import Header from "../../Header";

const Layout = (props: any) => {
	return (
		<div className="body">
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
