import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center justify-center rounded-md bg-white">
        <section className="flex flex-col text-center">
          <h1 className="max-w-xl text-6xl font-bold text-black">
            Something Random
          </h1>
          <p className="text-xl text-gray-600">Something Random</p>
        </section>

        {/* button section  */}
        <section className=" flex justify-around">
          <button className="mx-1 flex items-center justify-center rounded-lg bg-yellow-600   px-8 py-3 text-lg ">
            Download
          </button>
        </section>

        <div>
          <img
            src="https://www.devui.in/Amigos%20Work%20Space.png"
            alt="image"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
