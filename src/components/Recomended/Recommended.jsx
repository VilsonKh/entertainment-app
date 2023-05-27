import { useEffect } from "react";
import RecommendedGrid from "../RecommendedGrid/RecommendedGrid";
import "./Recommended.scss";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { getAllMovies, getAllSerials } from "../../store/videosSlice";
import { videosActions } from "../../store/videosSlice";

const Recommended = () => {

  
  const dispatch = useDispatch()
  useEffect(() => {
		const ref = collection(db, "videos/Vrn6D1TSRhvN4cbMKgPy/movies");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
      console.log(results)
      dispatch(getAllMovies(results))
		});
	}, []);

  useEffect(() => {
		const ref = collection(db, "videos/Vrn6D1TSRhvN4cbMKgPy/serials");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
      console.log(results)
      dispatch(getAllSerials(results))
		});
	}, []);


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