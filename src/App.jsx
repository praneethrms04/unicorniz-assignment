import BlogCard from "./components/BlogCard";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Banner from "./components/Videoplayer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Banner />
      </div>
      <div className="absolute pt-96">
        <Cards />
      </div>
      <div className="absolute pt-96">
        <BlogCard />
      </div>
      <div className="absolute pt-96 right-14  ">
        <Profile />
      </div>
    </div>
  );
}

export default App;
