import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import { ProjectProps } from "../../types/projectTypes";
import axios from "../../lib/axios";
import Layout from "../../components/Layout";
import Head from "next/head";
import LinkButton from "../../components/LinkButton";

const ProjectEdit: NextPageWithLayout = ({ project }: ProjectProps) => {
  console.log(project);
  return (
    <>
      <Head>
        <title>Dashboard | Edit</title>
      </Head>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Edit Page</h1>
            <p className="mt-2 text-sm text-gray-700">Edit this project.</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <LinkButton href="projects/create">Delete Project</LinkButton>
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          {/* Content here */}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projectId = context.params?.id;
  const response = await axios.get(`/projects/${projectId}`);

  return {
    props: {
      project: response.data,
    },
  };
};

ProjectEdit.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectEdit;
