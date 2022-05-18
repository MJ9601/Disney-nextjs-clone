import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement } from "react";
import HeroHome from "../components/HeroHome";
import PrimaryRow from "../components/PrimaryRow";
import Row from "../components/Row";
import PageLayout from "../layout/PageLayout";
import Requests from "../apiRequsts/requests";
import { MoviesObject } from "../typing";

const Home = ({ movieObj }: { movieObj: MoviesObject }) => {
  const randomMovieList =
    Object.values(movieObj)[
      Math.floor(Math.random() * Object.keys(movieObj).length)
    ].results;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-white text-xl container mx-auto px-1 py-4">
        <HeroHome movieList={randomMovieList} />
        <PrimaryRow />
        <Row />
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);
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

  return {
    props: {
      session,
      movieObj,
    },
  };
};
