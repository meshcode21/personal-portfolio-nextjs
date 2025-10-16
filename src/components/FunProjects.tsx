export default function FunProjects() {
  const projects = [
    {
      name: "Analog Clock",
      logo: (
        <svg
          className=""
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="0.1"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill="#d4d4d4"
            />{" "}
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#d4d4d4"
              strokeWidth={2}
            />{" "}
            <path
              d="M12 7L12 11.5L12 11.5196C12 11.8197 12.15 12.1 12.3998 12.2665V12.2665L15 14"
              stroke="#d4d4d4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>
        </svg>
      ),
      github: "https://github.com/meshcode21/Analog-Clock",
      demo: "https://meshcode21.github.io/Analog-Clock/",
    },
    {
      name: "Flipkart Home Page clone",
      logo: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#d4d4d4" strokeWidth="1.5" /> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#d4d4d4" strokeWidth="1.5" /> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#d4d4d4" strokeWidth="1.5" strokeLinecap="round" /> </g></svg>
,
      github: "https://github.com/meshcode21/flipkart-copy",
      demo: "https://meshcode21.github.io/flipkart-copy/",
    },
    {
      name: "Simple Todo Project",
      logo: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9543 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z" fill="#d4d4d4" /> <path d="M7.98809 10.2877C7.6736 10.0181 7.20012 10.0546 6.93056 10.369C6.66099 10.6835 6.69741 11.157 7.01191 11.4266L7.98809 10.2877ZM8.5 11.7143L8.01191 12.2837C8.29277 12.5245 8.70723 12.5245 8.98809 12.2837L8.5 11.7143ZM10.9881 10.5694C11.3026 10.2999 11.339 9.8264 11.0694 9.51191C10.7999 9.19741 10.3264 9.16099 10.0119 9.43056L10.9881 10.5694ZM7.98809 14.5734C7.6736 14.3038 7.20012 14.3403 6.93056 14.6548C6.66099 14.9693 6.69741 15.4427 7.01191 15.7123L7.98809 14.5734ZM8.5 16L8.01191 16.5694C8.29277 16.8102 8.70723 16.8102 8.98809 16.5694L8.5 16ZM10.9881 14.8552C11.3026 14.5856 11.339 14.1121 11.0694 13.7976C10.7999 13.4831 10.3264 13.4467 10.0119 13.7163L10.9881 14.8552ZM13 10.5357C12.5858 10.5357 12.25 10.8715 12.25 11.2857C12.25 11.6999 12.5858 12.0357 13 12.0357V10.5357ZM16.5 12.0357C16.9142 12.0357 17.25 11.6999 17.25 11.2857C17.25 10.8715 16.9142 10.5357 16.5 10.5357V12.0357ZM13 14.8214C12.5858 14.8214 12.25 15.1572 12.25 15.5714C12.25 15.9856 12.5858 16.3214 13 16.3214V14.8214ZM16.5 16.3214C16.9142 16.3214 17.25 15.9856 17.25 15.5714C17.25 15.1572 16.9142 14.8214 16.5 14.8214V16.3214ZM7.01191 11.4266L8.01191 12.2837L8.98809 11.1448L7.98809 10.2877L7.01191 11.4266ZM8.98809 12.2837L10.9881 10.5694L10.0119 9.43056L8.01191 11.1448L8.98809 12.2837ZM7.01191 15.7123L8.01191 16.5694L8.98809 15.4306L7.98809 14.5734L7.01191 15.7123ZM8.98809 16.5694L10.9881 14.8552L10.0119 13.7163L8.01191 15.4306L8.98809 16.5694ZM13 12.0357H16.5V10.5357H13V12.0357ZM13 16.3214H16.5V14.8214H13V16.3214Z" fill="#d4d4d4" /> </g></svg>
,
      github: "https://github.com/meshcode21/todo-project",
      demo: "https://meshcode21.github.io/todo-project/",
    },
    {
      name: "Tower of Hanoi Project",
      logo: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <rect x={17} y={31} width={14} height={13} stroke="#d4d4d4" strokeWidth={4} strokeLinejoin="round" /> <rect x={19} y={17} width={10} height={14} stroke="#d4d4d4" strokeWidth={4} strokeLinejoin="round" /> <rect x={21} y={4} width={6} height={13} stroke="#d4d4d4" strokeWidth={4} strokeLinejoin="round" /> <path d="M4 44H44" stroke="#d4d4d4" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
,
      github: "https://github.com/meshcode21/Tower-of-Hanio",
      demo: "https://meshcode21.github.io/Tower-of-Hanio/",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-10 bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Fun Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl py-6 px-4 shadow-md hover:shadow-blue-600/30 transition-shadow duration-300 flex w-[80%] md:w-85"
            >
              <div className="size-20">{project.logo}</div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>

                <div className="flex gap-2 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-gray-500 hover:border-white transition text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm transition"
                  >
                    Live View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
