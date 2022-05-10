import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="text-white text-xl">Yoo Hoo</div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Home;
