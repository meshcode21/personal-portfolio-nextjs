'use client'

import Masonry from 'react-masonry-css';

export default function MasonryLayout() {
  const contacts = [
    {
      name: "Mahesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I am facing an issue with the application where it crashes unexpectedly when I try to upload a file. This happens consistently and I have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    },
    {
      name: "Ramesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I am  have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    },
    {
      name: "Ganesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I am facing an issue with the applnd I have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    },
    {
      name: "Mahesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I amy and I have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    },
    {
      name: "Ramesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I am  have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    },
    {
      name: "Ganesh Udas",
      email: "maheshudas2077@gmail.com",
      message: "I am facing an issue with the applnd I have tried different file types and sizes, but the problem persists. Can you please look into this and provide a solution? Thank you!",
      date: "16 Oct, 2025"
    }

  ];

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4 p-4 transition-transform duration-300"
      columnClassName="flex flex-col gap-4 bg-clip-padding"
    >
      {contacts.map((contact, index) => (
        <div key={index} className=" flex flex-col gap-1 bg-[#f8f4f3] text-black rounded-2xl border border-gray-300 drop-shadow-xl p-5">
          <div className="flex justify-between items-center">
            <svg className="size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.62231 6.78278C10.0546 6.43909 10.1265 5.81001 9.78277 5.3777C9.43908 4.94539 8.81001 4.87354 8.37769 5.21724C4.73471 8.11342 4 11.8784 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C10 14.3432 8.65685 13 7 13C6.71233 13 6.43412 13.0405 6.17076 13.1161C6.5162 10.5872 7.45738 8.50391 9.62231 6.78278ZM20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 11.8784 14.7347 8.11342 18.3777 5.21724C18.81 4.87354 19.4391 4.94539 19.7828 5.3777C20.1265 5.81001 20.0546 6.43909 19.6223 6.78278C17.4574 8.50391 16.5162 10.5872 16.1708 13.1161C16.4341 13.0405 16.7123 13 17 13C18.6569 13 20 14.3432 20 16Z" fill="#aaaaaa" /> </g></svg>

            <div className="italic">{contact.date}</div>
          </div>
          <div className="text-justify leading-6 mb-2 indent-8 italic">
            &quot;{contact.message}&quot;
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div className="size-10 mt-1 mr-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
              </div>
              <div>
                <div className="text-2xl font-semibold">{contact.name}</div>
                <div className="leading-2 text-sm">{contact.email}</div>
              </div>
            </div>
            <button className="bg-green-600 rounded-xl px-4 py-2 hover:bg-green-700">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>

            </button>
          </div>
        </div>
      ))}
    </Masonry>
  );
}
