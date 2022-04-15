/* eslint-disable import/no-unresolved */
import SearchBar from "@components/SearchBar";
import WallPic from "@components/WallPic";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>
        BeCareFood
        <WallPic />
        <div>
          vous permet de sélectionner vos produits BIO favoris en fonction de
          vos allergies ou de celles de vos enfants.
        </div>
      </h1>
      <SearchBar />
    </div>
  );
}

export default Home;
