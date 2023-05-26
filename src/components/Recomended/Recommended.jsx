import RecommendedGrid from "../RecommendedGrid/RecommendedGrid";
import "./Recommended.scss";



const Recommended = () => {



  return (
    <section className="recommended">
      <div className="container">
        <h1 className="recommended__heading">Recommended for you</h1>
        <RecommendedGrid/>
      </div>
    </section>
  )
}

export default Recommended