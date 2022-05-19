import { MovieRespObj } from "../typing";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IMAGE_BASE_URL } from "../apiRequsts/requests";

const HeroHome = ({ movieList }: { movieList: MovieRespObj[] }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={6000}
    >
      {movieList.map((movie) => (
        <div className="max-h-[720px] relative" key={movie.id}>
          <img
            loading="lazy"
            src={`${IMAGE_BASE_URL}${movie?.backdrop_path}` || ""}
            alt=""
            className=" object-cover"
          />
          <div className="absolute top-[20%] bg-opacity-5 text-left px-8 left-0 right-0 bottom-0 bg-gradient-to-t from-[#111]  to-transparent">
            <div className="absolute bottom-0 top-[30%] md:top-[50%] px-8 left-0 right-0">
              <h3 className="font-semibold text-xl  md:text-4xl shadow-sm mb-4">
                {movie?.name || movie?.title || movie?.original_title}
              </h3>
              <h4 className="space-x-3">
                <span className="mr-2 bg-yellow-600 px-1 py-[2px] font-semibold rounded-md text-black text-base">
                  imdb
                </span>
                {movie?.vote_average}
              </h4>
              <p className="mt-1 md:mt-4 w-[50%]  line-clamp-1 md:line-clamp-3">
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroHome;
