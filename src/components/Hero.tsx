import heroPhoto from "../assets/mahesh.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 relative text-white min-h-[calc(100vh-80px)] flex items-center w-full overflow-x-clip">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-6 overflow-x-clip">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hello Guys <br /> I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              Mahesh Udas
            </span>
            <br />
            Full Stack Developer
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            I love building full stack web apps using modern technologies like
            React, Node.js, and TailwindCSS. Let’s connect and create something impactful.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg "
            >
              Contact Me
            </a>
            <a
              href="/Mahesh_Udas_CV.pdf"
              download
              className="px-6 py-3 rounded-full border border-gray-500 hover:border-white text-white font-semibold transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          <div className="relative z-10 w-[350px] aspect-square md:aspect-auto md:w-[400px] mx-auto rounded-full p-1 md:p-0 md:rounded-3xl overflow-clip border md:border-2 border-gray-700 shadow-2xl">
            <Image
              priority
              fill
              quality={80}
              src={heroPhoto}
              alt="Mahesh Udas"
              className="m-auto relative! size-75 md:size-auto md:h-auto object-cover object-top md:object-cover "
            />
          </div>

        </div>
        {/* Glowing Circle Background */}
        <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full bg-blue-600/40 blur-[120px] z-0"></div>
        {/* line */}
        <div className="-z-10 absolute -top-36 -right-58 rotate-[30deg] w-7/12 h-[300px] blur-[100px] bg-red-600/50" />
        {/* line circle  */}
        <div className="-z-10 absolute -bottom-8 -right-40 w-[550px] h-[550px] border border-gray-500/50 rounded-[50%]" />
        <div className="-z-10 absolute -bottom-10 -right-20 w-[450px] h-[450px] border border-gray-500/50 rounded-[50%]" />
        {/* circle */}
        <div className="-z-10 hidden md:block absolute bottom-0 right-[13%] translate-x-1/4  w-[500px] h-[500px] rounded-full bg-blue-600/70 blur-[100px]"></div>
      </div>
    </section >
  );
}