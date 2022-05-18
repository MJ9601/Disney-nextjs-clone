import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import HeroHome from "../components/HeroHome";
import Row from "../components/Row";
import PageLayout from "../layout/PageLayout";
import Requests from "../apiRequsts/requests";
import { MovieRespObj, MoviesObject } from "../typing";
import PrimalCard from "../components/PrimalCard";

const Home = ({ movieObj }: { movieObj: MoviesObject }) => {
  const [randomMovieList, setRandomMovieList] = useState<MovieRespObj[]>([]);
  useEffect(() => {
    const randomMovieList =
      Object.values(movieObj)[
        Math.floor(Math.random() * Object.keys(movieObj).length)
      ].results;
    setRandomMovieList(randomMovieList);
  }, [movieObj]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {randomMovieList && <HeroHome movieList={randomMovieList} />}
      <div className="text-white text-xl space-y-6  mx-auto px-4 py-4 scrollbar-hide">
        <div className="flex flex-wrap gap-4 justify-center my-6">
          <PrimalCard title="Disney" videoSrc="disney.mp4" />
          <PrimalCard title="Marvel" videoSrc="marvel.mp4" />
          <PrimalCard title="Pixar" videoSrc="pixar.mp4" />
          <PrimalCard title="Star wars" videoSrc="star-wars.mp4" />
          <PrimalCard
            title="National Geographic"
            videoSrc="national-geographic.mp4"
          />
        </div>
        <div className="my-8 space-y-4 w-[100%] container mx-auto">
          {Object.values(movieObj).map((movieType, index) => (
            <Row
              key={index}
              title={Object.keys(movieObj)[index]}
              movieList={movieType.results}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;

export const getServerSideProps = async ({ req }: { req: any }) => {
  const session = await getSession({ req });
  const rowHeadlines = Object.keys(Requests);
  const rowValuesResp = await Promise.all(
    Object.values(Requests).map((url) => fetch(url))
  );
  const rowValues = await Promise.all(
    rowValuesResp.map((element) => element.json())
  );
  const movieObj = rowHeadlines.reduce((acc, headline, index) => {
    return { ...acc, [headline]: rowValues[index] };
  }, {});

  if (session)
    return {
      props: {
        session,
        movieObj,
      },
    };

  return {
    props: {
      movieObj,
    },
  };
};
