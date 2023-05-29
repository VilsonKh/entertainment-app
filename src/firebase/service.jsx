import { getFirestore, collection, query, where, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from "./config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getAllSerials, concatVideos, getWishlistItems} from '../store/videosSlice'

export const useQueryAllVideos = () => {
  const dispatch = useDispatch()
	const [isPending, setIsPending] = useState(false)


  useEffect(() => {
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/movies");
		getDocs(ref).then((snapshot) => {

			let results = [];
			snapshot.docs.forEach((doc) => {

		
				results.push({ id: doc.id, ...doc.data() });
			});
      dispatch(getAllMovies(results))
		});
	}, []);

	console.log('получил все фильмы')

  useEffect(() => {
		const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
      dispatch(getAllSerials(results))
		});
	}, []);

	console.log('получил все сериалы')

	useEffect(() => {
		const ref = collection(db, "wishlist");
		getDocs(ref).then((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
      dispatch(getWishlistItems(results))
		});
	}, []);
};

export const usePostCollection = (data, category) => {
  if(category === 'movie') {
    const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/movies");
    addDoc(ref, data)
  } else if (category === 'serial') {
    const ref = collection(db, "videos/elUR9WQsWsqUqaC1wwlE/serials");
    addDoc(ref, data)
  }
}

export const usePostWishlistItem	=	(data) => {
	const ref = doc(db,"wishlist")
	addDoc(ref,data)
}
