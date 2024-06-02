import React from "react";
import Layout from "../components/layout";
import images from "../images/image2.png";

const IndexPage = () => {
  return (
    <Layout>
      <div className=" bg-lime-400 min-h-screen flex flex-col items-center justify-center">
        <p className="bg-white bg-opacity-20 text-gray-900 text-5xl text-center py-40 font-['rammentto']">
          “Supplier pasir dan batu jabodetabek, aman dan terpercaya siap kirim ke semua wilayah jabodetabek”
        </p>
        <div className="flex justify-center items-center">
          <img src={images} alt="sumberpasir" className="max-w-full h-auto" />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
