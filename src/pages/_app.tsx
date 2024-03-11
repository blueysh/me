import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="mx-auto max-w-[75%] selection:bg-blue-500 selection:text-white">
      <Head>
        <title>Jan Santiago</title>
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1764744194390650880/ZycqT3sJ_400x400.jpg"
        />
      </Head>
      <Analytics />
      <Component {...pageProps} />
      <Navbar />
      <Footer />
    </main>
  );
}
