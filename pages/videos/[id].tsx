import React, { ReactElement } from "react";
import PageLayout from "../../layout/PageLayout";
import Requests, {
  IMAGE_BASE_URL,
  urlForMovieWithId,
} from "../../apiRequsts/requests";
import { MovieObjectOnPage, MoviesRespObj } from "../../typing";
import { GetStaticProps } from "next";
import Head from "next/head";

const VideoPage = ({ movie }: { movie: MovieObjectOnPage }) => {
  console.log(movie);
  return (
    <>
      <Head>
        <title>{movie?.original_title}</title>
      </Head>
      <div className="h-[100vh]">
        <img
          src={`${IMAGE_BASE_URL}${movie?.backdrop_path}`}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
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
