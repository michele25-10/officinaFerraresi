import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Officina Ferraresi</title>
        <meta name="description" content="Officina Ferraresi sito web" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Navbar />
      <Footer />
    </>
  );
}
