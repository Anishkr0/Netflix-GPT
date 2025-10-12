const VideoTitle = ({ title, overview, backdropPath }) => {
  //const bgUrl = `https://image.tmdb.org/t/p/original${backdropPath}`;

  return (
    <div
      className="w-full h-[90vh] flex flex-col justify-center px-12 text-white overflow-hidden absolute">
      {/* Overlay (dark gradient for readability) */}
      <div className=" w-screen aspect-video absolute inset-0 bg-gradient-to-r from-black "></div>

      {/* Movie info  via-black/70 to-transparent*/}
      <div className="relative z-10 max-w-2xl space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-lg">{title}</h1>
        <p className="text-lg leading-relaxed opacity-90 w-2/4">{overview}</p>

        <div className="flex gap-4 mt-4">
          <button className="bg-white text-black text-lg font-semibold px-6 py-2 rounded-lg hover:bg-gray-300 transition-all bg-opacity-50">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-gray-600 transition-all  bg-opacity-50">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
