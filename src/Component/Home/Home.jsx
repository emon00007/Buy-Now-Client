import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import ProdactPage from "../ProdactPages/ProdactPage";

const Home = () => {
    return (
        <div className="mx-4">

            <Banner></Banner>
            <ProdactPage></ProdactPage>
            <AboutUs></AboutUs>
            <ContactUs ></ContactUs>
        </div>
    );
};

export default Home;