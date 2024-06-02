import React from "react";
import Layout from "../components/layout";
import image from "../images/Batu-Split-Koral.png";
import image1 from "../images/Batu-Sirdam.png";
import image2 from "../images/Batu-Screening.png";
import image3 from "../images/batu-merah.png";
import image4 from "../images/batu-abu.png";
import image5 from "../images/Pasir-Cuci-Cilegon.png";
import image6 from "../images/Pasir-Hitam-Cor.png";
import image7 from "../images/pasir-rangkas.png";

const galeryPage = () => {
  return (
    <Layout>
      <div className="text-slate-900 text-base ml-20 mt-8">
        <h1 className="text-3xl font-bold mb-8">Halaman Produk</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <p className="mb-2">Jual Batu Abu</p>
            <img src={image4} alt="Batu Makadam" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Jual Batu Sirdam</p>
            <img src={image1} alt="Batu Sirdam" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Jual Batu Split-Coral</p>
            <img src={image} alt="Batu Split-Coral" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Jual Batu Screening</p>
            <img src={image2} alt="Batu Screening" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Jual Bata Merah</p>
            <img src={image3} alt="Bata Merah" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Tersedia Pasir Cuci Cilegon</p>
            <img src={image5} alt="Pasir Cuci Cilegon" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Tersedia Pasir Hitam Cor</p>
            <img src={image6} alt="Pasir Hitam Cor" className="max-w-full h-auto" />
          </div>
          <div className="mb-4">
            <p className="mb-2">Tersedia Pasir Rangkas</p>
            <img src={image7} alt="Pasir Rangkas" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default galeryPage;
