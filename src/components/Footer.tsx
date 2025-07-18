// import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="overflow-clip relative bg-gradient-to-t from-black to-gray-950 text-white border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* About */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Mahesh Udas</h3>
          <p className="text-gray-400 max-w-sm">
            A passionate full stack developer skilled in React, Node.js, Tailwind CSS, and more.
            I love building modern, scalable apps that solve real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {["home", "about", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-white hover:underline underline-offset-4 transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/meshcode21"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-udas-a691b32b3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/maheshudas10101"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/mahesh.10110"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* background circle */}
      <div className="w-[40%] h-[200px] rounded-[50%] -rotate-0  bg-blue-500/50 absolute -bottom-8 -right-32 blur-[120px] z-0" />

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mahesh Udas. All rights reserved.
      </div>
    </footer >
  );
}