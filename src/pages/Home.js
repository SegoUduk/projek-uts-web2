import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="banner">
        <img
          src="gambar.jpg"
          alt="Banner"
          className="banner-image"
        />
        <h1 className="banner-title">Selamat Datang di P Loker</h1>
      </div>
      <div className="home-content">
        <h2>Cari Pekerjaan Impian Anda</h2>
        <p>
          Temukan lowongan pekerjaan yang sesuai dengan keahlian Anda dan
          dapatkan karir terbaik untuk masa depan.
        </p>
        <button
          className="explore-button"
          onClick={() => (window.location.href = "/jobsearch")}
        >
          Telusuri Lowongan
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
