import { useContext } from "react";
import AppDownload from "../../components/AppDownload/AppDownload";
import Banner from "../../components/Banner/Banner";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { FoodiContext } from "../../contexts/FoodiProvider";
import Login from "../../components/Login.jsx/Login";

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