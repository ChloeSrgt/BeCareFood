/* eslint-disable import/no-unresolved */
import SearchBar from "@components/SearchBar";
import WallPic from "@components/WallPic";
import "./Home.css";
import Intro from "@components/Intro";
import Wrap from "@components/Wrap";

function Home() {
  return (
    <div>
      <WallPic />
      <Intro />
      <SearchBar />
      <Wrap />
    </div>
  );
}

export default Home;
