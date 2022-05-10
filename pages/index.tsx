import Head from "next/head";
import { ReactElement } from "react";
import HeroHome from "../components/HeroHome";
import PrimaryRow from "../components/PrimaryRow";
import Row from "../components/Row";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-white text-xl">
        <HeroHome />
        <PrimaryRow />
        <Row />
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;
