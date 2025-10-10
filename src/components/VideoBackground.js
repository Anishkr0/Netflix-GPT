import { useEffect } from "react";
import { API_options } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/1038392/videos?language=en-US',
      API_options
    );
    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe src={"https://www.youtube.com/embed/"+trailer.key} title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
