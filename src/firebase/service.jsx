import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "./config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getAllSerials, concatVideos} from '../store/videosSlice'

export const useQueryAllVideos = () => {
  const dispatch = useDispatch()
  useEffect(() => {
		const ref = collection(db, "videos/Vrn6D1TSRhvN4cbMKgPy/movies");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
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
      dispatch(getAllSerials(results))
		});
	}, []);
};

export const usePostCollection = (data, category) => {
  if(category === 'movie') {
    const ref = collection(db, "videos/Vrn6D1TSRhvN4cbMKgPy/movies");
    addDoc(ref, data)
  } else if (category === 'serial') {
    const ref = collection(db, "videos/Vrn6D1TSRhvN4cbMKgPy/serials");
    addDoc(ref, data)
  }
}
