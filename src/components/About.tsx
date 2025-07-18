import Image from "next/image";
import maheshImage from "../assets/aboutMePic.png";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            priority
            src={maheshImage}
            alt="Mahesh Udas"
            className="w-72 h-auto rounded-3xl border-2 p-1 border-gray-700 shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            Hello! I&apos;m Mahesh Udas — a passionate full-stack web developer who
            enjoys building scalable web applications and beautiful user
            experiences. I'm skilled in the MERN stack, Tailwind CSS and exploring new technologies frequently.
          </p>

          <p className="text-gray-400">
            I love working with both frontend and backend technologies and I&apos;m
            always eager to learn and contribute to impactful projects. Whether
            it&apos;s automating workflows or crafting user interfaces, I aim to
            bring value to every line of code I write.
          </p>
        </div>
      </div>
    </section>
  );
}
