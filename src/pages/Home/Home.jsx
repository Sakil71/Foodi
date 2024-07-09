import AppDownload from "../../components/AppDownload/AppDownload";
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExploreMenu></ExploreMenu>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;