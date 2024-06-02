import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const contactPage = () => {
  return (
    <Layout>
      <div className="bg-lime-400 min-h-screen flex flex-col items-center justify-center">
        <p className="bg-white bg-opacity-20 text-gray-900 text-5xl text-center py-40 font-rammentto">
          “Segera kontak kami”
        
        <a 
          href="https://wa.me/0895328073722" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white mt-10"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-6xl" />  
        </a>
        </p>
      </div>
    </Layout>
  );
};

export default contactPage;
