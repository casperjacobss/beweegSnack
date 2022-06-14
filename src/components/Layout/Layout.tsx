import Footer from "../../Footer";
import Header from "../../Header";
import HomePage from "../../pages/HomePage";

const Layout = (props: any) => {
	return (
		<div className="body">
			<Header />
			<HomePage/>
			<Footer />
		</div>
	);
};

export default Layout;
