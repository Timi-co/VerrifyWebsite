import React from "react";
import Navbar from "../components/(global)/Navbar";
import BlogInterface from "../components/(blog)/BlogInterface";
const page = () => {
  return (
    <div className="bg-primary">
      <header className="h-[20vh]">
        <Navbar />
      </header>
      <BlogInterface />
    </div>
  );
};

export default page;
