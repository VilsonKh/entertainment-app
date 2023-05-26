import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Trending from "./components/Trending/Trending";
import Recommended from "./components/Recomended/Recommended";
import Home from "./pages/Home";
import { db } from "./firebase/config";
import { collection, doc, query, where, getDocs } from "firebase/firestore";

const App = () => {
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		// const ref = collection(db, "videos")
		// const ref = query(collection(db, "videos"));
		// const ref = collection(db,'videos')
		// getDocs(ref).then((snapshot) => {
		// 	let results = [];
		// 	snapshot.docs.forEach((doc) => {
		// 		results.push({ id: doc.id, ...doc.data() });
		// 	});
		// 	setMovies(results);
		// });

		const docRef = doc(db, 'videos', 'movies');
		const docSnap = async() => {
		 const data = await getDocs(docRef)
		 return data
		}

		if(docSnap().exist()) {
			console.log(docSnap().data())
		}
			

	}, []);

	console.log(movies);

	return (
		<Router>
			<>
				<Header></Header>
				<Search></Search>
				<Home></Home>
			</>
		</Router>
	);
};
export default App;
