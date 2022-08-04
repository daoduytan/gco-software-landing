import type { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, About } from "../components";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage = ({ about }: Props) => {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <About description={about.description} title={about.title} />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api");

  return {
    props: { ...(await res.json()) },
  };
};

export default Home;
