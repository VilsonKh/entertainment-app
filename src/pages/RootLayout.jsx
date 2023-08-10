import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { useMemo, useState } from "react";
import VideosGrid from "../components/VideosGrid/VideosGrid";




const RootLayout = () => {
	const [inputText, setInputText] = useState()

	const HeaderMemo = () => useMemo(() => <Header/>, [inputText])
	return (
		<>
			<HeaderMemo/>
			<div className="container">
				<Search setInputText={setInputText} inputText={inputText}/>
				{inputText === undefined || inputText.length === 0 ? <Outlet /> : <VideosGrid filter={inputText}/>}
			</div>
		</>
	);
};

export default RootLayout;
