import React from "react";
import { useSelector } from "react-redux";
import Bookmark from "../components/UI/Bookmark";
import VideosGrid from "../components/VideosGrid/VideosGrid";
import { useLoaderData } from "react-router-dom";

const Bookmarks = () => {

	const data = useLoaderData()

	const contentData = data.docs.map((doc) => doc.data())
	console.log(contentData)


	return (
		<div className="bookmarks">
			<h1 className="section-heading">Bookmarked</h1>
      {/* <div className="row row-cols-3 row-cols-md-4 row-cols-xxl-5 g-4 mb-5">
				{allVideos.map((video) => {
					if (video.isBookmarked && video.category === 'movie') {
						const { thumbnail, year, category, rating, title, id } = video;
						return (
							<div key={id} className="col recommended__item">
								<div className="recommended__img-container">
									<img className="recommended__img" src={thumbnail} alt="" />
								</div>
								<div className="recommended__caption">
									<div className="recommended__info">
										<p className="recommended__year">{year}</p>
										<div className="recommended__category-container align-items-center">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
													fill="white"
												/>
											</svg>

											<p className="recommended__category">{category}</p>
										</div>
										<p className="caption__rating">{rating}</p>
									</div>
									<div className="recommended__title">{title}</div>
								</div>
								<Bookmark isBookmarked={video.isBookmarked} videoId={video.id}/>
							</div>
						);
					}
          return false
				})}
			</div> */}
			<VideosGrid/>
      {/* <h1 className="section-heading">Bookmarked TV Series</h1> */}
      {/* <div className="row row-cols-3 row-cols-md-4 row-cols-xxl-5 g-4">
				{allVideos.map((video) => {
					if (video.isBookmarked && video.category === 'serial') {
						const { thumbnail, year, category, rating, title, id } = video;
						return (
							<div key={id} className="col recommended__item">
								<div className="recommended__img-container">
									<img className="recommended__img" src={thumbnail} alt="" />
								</div>
								<div className="recommended__caption">
									<div className="recommended__info">
										<p className="recommended__year">{year}</p>
										<div className="recommended__category-container align-items-center">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
													fill="white"
												/>
											</svg>

											<p className="recommended__category">{category}</p>
										</div>
										<p className="caption__rating">{rating}</p>
									</div>
									<div className="recommended__title">{title}</div>
								</div>
								<Bookmark isBookmarked={video.isBookmarked} videoId={video.id} category={video.category}/>
							</div>
						);
					}
          return false
				})}
			</div> */}
			{/* <VideosGrid/> */}
		</div>
	);
};

export default Bookmarks;
