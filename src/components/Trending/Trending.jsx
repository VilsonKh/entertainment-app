import { useDispatch } from "react-redux";
import TrendingSlider from "../TrendingSlider/TrendingSlider";
import "./Trending.scss";
import { concatVideos } from "../../store/videosSlice";

const Trending = () => {



  return (
    <div className="trending">
      <h1 className="trending__heading">Trending</h1>
      <TrendingSlider/>
    </div>
  )
}

export default Trending