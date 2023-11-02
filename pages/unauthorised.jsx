import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <>
      <Head>
        <title>{"MPO - Unauthorized Page"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col items-center justify-center flex">
        <h1 className="text-xl">Access Denied</h1>
        {message && <div className="mb-4 text-red-500">{message}</div>}
      </div>
    </>
  );
}
