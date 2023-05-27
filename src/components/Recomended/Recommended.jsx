import { useEffect } from "react";
import VideosGrid from "../VideosGrid/VideosGrid";
import "./Recommended.scss";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { getAllMovies } from "../../store/videosSlice";
import { videosActions } from "../../store/videosSlice";
import { useQueryAllVideos } from "../../firebase/service";

const Recommended = () => {
  //получает все видео 
  useQueryAllVideos()


    return (
    <section className="recommended">
      <div className="container">
        <h1 className="recommended__heading">Recommended for you</h1>
        <VideosGrid/>
      </div>
    </section>
  )
}

export default Recommended