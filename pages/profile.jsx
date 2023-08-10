import React from "react";
import Layout from "../components/Layout";
import { FaBriefcase, FaHome, FaLock, FaTruck, FaUser } from "react-icons/fa";
import Link from "next/link";

const shipping = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Primary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque!",
  },
  {
    id: 2,
    icon: <FaHome />,
    title: "Home",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque!",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "primary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque!",
  },
];

const profile = () => {
  return (
    <Layout title={"MPO: Profile "}>
      <div className="flex flex-col px-5 md:px-20 py-10 md:py-20">
        <div className="w-[90%] mx-auto sm:w-[80%]">
          <div className="flex flex-row bg-stone-100 mb-5 mx-auto box-border">
            <Link href="" className="m-7" style={{ fontSize: "50px" }}>
              <FaBriefcase />
            </Link>
            <div className="flex items-center text-3xl font-semibold">
              <p>What is in my plan?</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-stone-100 mb-5 box-border mx-auto">
            <div className="my-4 text-center sm:text-center md:text-start">
              <p className="mx-auto md:ml-7 m-auto text-3xl font-semibold">
                Email
              </p>
              <button className="mx-auto md:ml-7 my-3 w-52 btn--primary-profile">
                Edit Email Address
              </button>
            </div>

            <div className="my-4 lg:ml-40 md:ml-0 mx-auto px-auto">
              <p className="mx-auto md:ml-7 text-3xl font-semibold ">Email</p>
              <div>
                <button className="mx-auto md:ml-7 lg:ml-0 my-3 btn--dark-profile">
                  user035@demo.com
                </button>
              </div>
              <div>
                <button className="mx-auto md:ml-7 lg:ml-0 btn--dark-profile">
                  *********************
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row bg-stone-100 mb-5 box-border">
            <div className="my-4 mx-auto">
              <p className="mx-auto md:ml-7 text-3xl font-semibold">Address</p>
              <button className="mx-auto md:ml-7 my-3 w-52 btn--primary-profile">
                Edit Address
              </button>
            </div>

            <div className="my-4 grid sm:grid-cols-1 md:grid-cols-3 xl:ml-40 md:ml-0 mx-auto pl-2">
              {shipping.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="bg-slate-50 max-w-sm rounded overflow-hidden shadow-lg mr-2 my-2 box-border"
                  >
                    <div className="px-6 py-4">
                      <h4 className="text-3xl flex justify-center text-center">
                        {data.icon}
                      </h4>
                      <div className="font-bold text-xl mb-2">{data.title}</div>
                      <p className="text-gray-700 text-base">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <h3 className="text-xl font-semibold mb-3">Welcome, Username</h3>
        <div className="flex mb-8 border-b pb-3">
          <div>
            <h3>User info</h3>
            <div className="flex">
              <FaUser /> example@email.com
            </div>
            <div className="flex">
              <FaLock /> User detail
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">Delivery &amp; Shipping</h3>
        <div className="flex justify-between md:py-20 border-b pb-3">
          {shipping.map((data) => {
            return (
              <div key={data.id} className="md:mr-8 text-center">
                <h4 className="text-4xl flex justify-center">{data.icon}</h4>
                <h3 className="text-xl font-semibold my-3">{data.title}</h3>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div> */}
        {/* <h3 className="text-xl font-semibold">Order History</h3>
        <div className="flex"></div> */}
        {/* <h3 className="text-xl font-semibold mt-3 mb-3">
          Subscriptions/My plans
        </h3>
        <div className="flex">
          <div className="h-24 w-24 rounded-full bg-gray-100 shadow-lg flex items-center justify-center flex-col mr-5">
            <h4>1200</h4> <span>Cal</span>
          </div>
          <div className="h-24 w-24 rounded-full bg-gray-100 shadow-lg flex items-center justify-center flex-col mr-5">
            <h4>120gm</h4> <span>Fats</span>
          </div>
          <div className="h-24 w-24 rounded-full bg-gray-100 shadow-lg flex items-center justify-center flex-col">
            <h4>60g</h4>
            <span>Protein</span>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default profile;
