import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Bookmarks from "./pages/Bookmarks";
import Wishlist from "./pages/Wishlist";
import RootLayout from "./pages/RootLayout";
import ItemCard from "./components/ItemCard/ItemCard";
import ErrorPage from './pages/ErrorPage';
const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			errorElement: <ErrorPage/>,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "movies",
					element: <Movies />,
				},
				{
					path: "serials",
					element: <Serials />,
				},
				{
					path: "bookmarks",
					element: <Bookmarks />,
				},
				{
					path: "wishlist",
					element: <Wishlist />,
				},
				{
					path: ':path/card/:filmName',
					element: <ItemCard/>
				}
			],
		},
	]);

	return <RouterProvider router={router} />;
};
export default App;
