import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout";
import Head from "next/head";

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Projects</title>
      </Head>
    </>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Projects;
