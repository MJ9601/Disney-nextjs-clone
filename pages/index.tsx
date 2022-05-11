import { Session } from "inspector";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { Context, ContextType, ReactElement } from "react";
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

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};
