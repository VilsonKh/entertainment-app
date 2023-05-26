import TrendingSlider from "../TrendingSlider/TrendingSlider";
import "./Trending.scss";

const Trending = () => {
  return (
    <div className="trending">
      <h1 className="trending__heading">Trending</h1>
      <TrendingSlider/>
    </div>
  )
}

export default Trending