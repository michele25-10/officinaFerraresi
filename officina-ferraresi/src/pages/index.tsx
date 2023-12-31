import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ChiSiamo from "@/components/chiSiamo/chiSiamo";
import HeaderSite from "@/components/headerSite/headerSite";
import Line from "@/components/line/line";
import Galleria from "@/components/galleria/galleria";
import DoveTrovarci from "@/components/doveTrovarci/doveTrovarci";
import RichiediPreventivo from "@/components/richiediPreventivo/richiediPreventivo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Officina Ferraresi</title>
        <meta name="description" content="Officina Ferraresi sito web" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main className="body">
        <Navbar />
        <HeaderSite />
        <Line />
        <ChiSiamo />
        <Line />
        <DoveTrovarci />
        <Line />
        <RichiediPreventivo />
        <Line />
        <Galleria />
        <Footer />
      </main>
    </>
  );
}
