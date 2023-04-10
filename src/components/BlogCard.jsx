 import React from "react";
import { blogs } from "../constants";

const BlogCard = () => {
  return (
    <div className="max-w-4xl">
    <div className="pt-96 mt-24 grid grid-rows-3 grid-flow-col mb-10 gap-5 ms-6">
      {blogs.map((blog, ind) => (
        <div class="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-5 ">
            <img
              class="rounde"
              src={blog.imgsrc}
              alt=""
            />
          <div className="ms-3 pt-2 text-[#245953]">popular </div>
          <div class="">
            <h5 class="mb-2 text- font-medium text-red-800 ms-3">
              Noteworthy technology acquisitions 2021
            </h5>

            <button
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explore
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="flex flex-row gap-9 ms-3 me-2">
              <p>Hello </p>
              <p>world</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BlogCard;
