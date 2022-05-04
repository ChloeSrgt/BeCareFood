/* eslint-disable import/no-unresolved */
import SearchBar from "@components/SearchBar";
import WallPic from "@components/WallPic";
import "./Home.css";
import Wrap from "@components/Wrap";
import MoreProductsButton from "@components/MoreProductsButton";
import Intro from "@components/Intro";

function Home() {
  return (
    <div className="home-container">
      <WallPic />
      <Intro />
      <SearchBar />
      <Wrap />
      <MoreProductsButton />
    </div>
  );
}

export default Home;
