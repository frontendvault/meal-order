import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LoadingOverlay } from "@mantine/core";

function Layout({ children, title, loading = false }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - MPO" : "Meal Ordering Prep"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <div className="flex flex-col justify-between">
        <Header />
        <main key={title?.toString()} className="mt-[84px] md:mt-[85px]">
          <LoadingOverlay visible={loading} />
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
