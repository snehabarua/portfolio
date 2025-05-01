
import React from "react";
import heroImg from "/assets/sneha-portfolio-image.png";
function Hero() {
    const PDF_FILE_URL="http://localhost:5173/snehabarua.pdf"
  const downloadFile=(url)=>{
const fileName = url.split("/").pop();
const aTag = document.createElement("a");
aTag.href=url;
aTag.setAttribute("download",fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove()
  }
    return (
    <div className="mt-10">
      <div className="container md:flex items-center ">
        <div className="left-hero">
          <h2 className="text-[#a755f7] text-xl md:text-2xl">Hi 👋🏻, I am</h2>
          <h1 className="md:text-8xl text-5xl font-semibold ml-4">Sneha Barua</h1>
          <h2 className="text-[#a755f7] text-xl md:text-2xl ml-6 mt-2">
            A Frontend Developer
          </h2>
          <h2 className="leading-8 mt-3">
            🚀 A passionate Software Developer based in Raigarh (C.G.) , India.{" "}
            <br />
            🛠️ I primarily work with technologies like Tailwind CSS, React, and Nextjs.<br /> I'm currently learning Backend technologies. 
             Also, trying my hands at technical writing.
          </h2>
          <button className="btn btn-border-reveal mt-5 md:p-3 p-2" onClick={()=>{downloadFile(PDF_FILE_URL)}}>Download Resume</button>
        </div>
        <div className="right-hero align-middle">
            <img src={heroImg} alt="Photo" className="w-150" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
