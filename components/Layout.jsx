import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, title }) {
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
        <main key={title.toString()} className="mt-[84px] md:mt-[85px]">
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
