import React from "react";
import Layout from "../components/Layout";
import { FaBriefcase, FaHome, FaLock, FaTruck, FaUser } from "react-icons/fa";

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
        <h3 className="text-xl font-semibold mb-3">Welcome, Username</h3>
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
        </div>
        {/* <h3 className="text-xl font-semibold">Order History</h3>
        <div className="flex"></div> */}
        <h3 className="text-xl font-semibold mt-3 mb-3">
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
        </div>
      </div>
    </Layout>
  );
};

export default profile;
