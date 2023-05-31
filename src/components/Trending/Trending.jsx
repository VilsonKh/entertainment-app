import TrendingSlider from "../TrendingSlider/TrendingSlider";
import "./Trending.scss";

const Trending = () => {



  return (
    <div className="trending">
   <div className="container">
        <h1 className="trending__heading">Trending</h1>
        <TrendingSlider/>
   </div>
    </div>
  )
}

export default Trending