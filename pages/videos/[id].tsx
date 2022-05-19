import React, { ReactElement, useState } from "react";
import PageLayout from "../../layout/PageLayout";
import Requests, {
  IMAGE_BASE_URL,
  urlForMovieWithId,
} from "../../apiRequsts/requests";
import { MovieObjectOnPage, MoviesRespObj } from "../../typing";
import { GetStaticProps } from "next";
import Head from "next/head";
import { PlayerPlay, Plus } from "tabler-icons-react";
import { UserGroupIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player/youtube";

const VideoPage = ({ movie }: { movie: MovieObjectOnPage }) => {
  const [player, setPlayer] = useState(false);
  const index = movie?.videos?.results.findIndex(
    (element) => element.type === "Trailer"
  );
  return (
    <>
      <Head>
        <title>{movie?.original_title}</title>
      </Head>
      <div className="h-[100vh] relative">
        <img
          src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
        <div className="absolute inset-y-[200px] md:inset-y-[500px] inset-0 z-20 container mx-auto px-3">
          <h1 className="my-6 text-[45px] font-extrabold tracking-wide font-serif">
            {movie.original_title || movie.title}
          </h1>
          <div className="flex items-center justify-start  gap-4">
            <button className="general white">
              <PlayerPlay className="fill-gray-700" /> play
            </button>
            <button className="general black" onClick={() => setPlayer(true)}>
              <PlayerPlay className="h-6 fill-white" /> trailer
            </button>
            <button className="general black icon">
              <Plus className="h-6" />
            </button>
            <button className=" general black icon">
              <UserGroupIcon className="h-6" />
            </button>
          </div>
          <div className="flex items-center justify-start gap-1 my-6">
            <p className="text-sm flex items-center">
              {movie?.release_date} . {Math.floor(movie?.runtime / 60)}h{" "}
              {movie?.runtime % 60}m .{" "}
              {movie?.genres?.map((genre, index) => (
                <span className="mx-[3px]" key={index}>
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
          <div className="">
            <p className="tracking-normal text-lg">{movie.overview}</p>
          </div>
        </div>
        {player && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80 z-[150]">
            <div className="absolute inset-y-[15%] lg:inset-y-[5%] inset-x-[10%]">
              <div className="w-[100%] bg-black py-2 rounded-t-md flex items-center justify-between px-3">
                <h2>{movie?.title}</h2>
                <XIcon
                  className="h-8 hover:text-red-500 transition-all duration-200 cursor-pointer"
                  onClick={() => setPlayer(false)}
                />
              </div>
              <div className="relative w-[100%] h-[70%] lg:h-[85%]">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${movie.videos?.results[index]?.key}`}
                  controls
                  playing={player}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

VideoPage.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default VideoPage;

export const getStaticPaths = async () => {
  const videosResp = await Promise.all(
    Object.values(Requests).map((url) => fetch(url))
  );
  const videos = await Promise.all(videosResp.map((element) => element.json()));

  const ids: number[] = [];
  videos
    .map((moviesList: MoviesRespObj) =>
      moviesList.results.map((movie) => movie.id)
    )
    .forEach((packIds) => ids.push(...packIds));

  const paths = ids.map((id: number) => ({
    params: {
      id: String(id),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = urlForMovieWithId(String(params?.id));

  const movie = await (await fetch(url)).json();

  if (!movie)
    return {
      notFound: true,
    };
  return {
    props: {
      movie,
    },
    revalidate: 3600 * 60 * 24,
  };
};
