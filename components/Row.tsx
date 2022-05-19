import { useRouter } from "next/router";
import React from "react";
import { IMAGE_BASE_URL } from "../apiRequsts/requests";
import { MovieRespObj } from "../typing";

const Row = ({
  title,
  movieList,
}: {
  title: string;
  movieList: MovieRespObj[];
}) => {
  const router = useRouter();
  return (
    <section>
      <h4 className="capitalize mb-3 mt-5">{title}</h4>
      <div className="flex flex-nowrap overflow-x-scroll border-3 space-x-8 scrollbar-hide w-[100%] mx-auto p-4">
        {movieList.map((movie) => (
          <div
            className="relative min-w-72 cursor-pointer shadow-md shadow-gray-800 h-40 border-4 border-gray-700 rounded-md hover:border-white group transition-all duration-200 hover:scale-[1.05]"
            key={movie.id}
            onClick={() => router.push(`/videos/${movie.id}`)}
          >
            <h3 className="w-72"></h3>
            <img
              src={
                `${IMAGE_BASE_URL}${movie.backdrop_path}` ||
                `${IMAGE_BASE_URL}${movie?.poster_path}`
              }
              alt={movie?.name || movie?.title || movie?.original_title}
              className="object-cover w-[100%] h-[100%] min-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Row;
