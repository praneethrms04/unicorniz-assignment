import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="pt-96 relative">
        <div className="pt-24 py-20 ">
          <main className="bg-gray-400 w- bg-opacity-25 border border-white-800 ">
            <div className="">
              <header className="flex flex-wrap items-center">
                <div className="md:w-2/12 md:ml-16 mr-3 pb-3">
                  <img
                    className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full
                     border-2 border-pink-600 p-1 mb-28"
                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    alt="profile"
                  />
                </div>
                <div className="w-12 md:w-7/12 pt-5">
                  <div className="md:flex md:flex-wrap md:items-center mb-5 ">
                    <h2 className="text-xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                      Praneeth Kumar
                    </h2>
                    <span
                      className="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
                      aria-hidden="true"
                    >
                      <i
                        className="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"
                      ></i>
                    </span>

                    <a
                      href="#"
                      className="bg-blue-500 px-2 py-1  
                        text-white font-semibold text-sm rounded block text-center 
                        "
                    >
                      Follow
                    </a>
                  </div>

                  <ul className="hidden md:flex flex-row space-x-8 mb-4 mr-4">
                    <li className="flex flex-col">
                      <span className="font-semibold">136</span>
                      posts
                    </li>

                    <li className="flex flex-col">
                      <span className="font-semibold">40.5k</span>
                      followers
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold">302</span>
                      following
                    </li>
                  </ul>

                  <div className="hidden md:block">
                    <h1 className="font-semibold">Developer</h1>
                    <span>Travel, Nature and Music</span>
                    <p>Nature Gives Everything</p>
                  </div>
                </div>
              </header>

              <div className="px-px md:px-3">
                <ul
                  className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t"
                >
                  <li className="">
                    <a className="inline-block p-3" href="#">
                      <span className="hidden md:inline">post</span>
                    </a>
                  </li>
                  <li>
                    <a className="inline-block p-3" href="#">
                      <span className="hidden md:inline">Videos</span>
                    </a>
                  </li>
                  <li>
                    <a className="inline-block p-3" href="#">
                      <span className="hidden md:inline">saved</span>
                    </a>
                  </li>
                </ul>
                <div className="flex flex-wrap  md:-mx-3">
                  <div className="w-1/3 p-px md:px-3">
                    <a href="#">
                      <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                        <img
                          className="w-full h-full absolute left-0 top-0 object-cover ms-3"
                          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="image"
                        />
                      </article>
                    </a>
                  </div>
                  <div className="w-1/3 p-px md:px-3">
                    <a href="#">
                      <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                        <img
                          className="w-full h-full absolute left-0 top-0 object-cover"
                          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="image"
                        />
                      </article>
                    </a>
                  </div>
                  <div className="w-1/3 p-px md:px-3">
                    <a href="#">
                      <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                        <img
                          className="w-full h-full absolute right-3 top-0 object-cover"
                          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="image"
                        />
                      </article>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
