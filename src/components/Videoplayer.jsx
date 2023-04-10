import React from 'react';

const Banner = () => {
  return (
    <div className="height-100 width-100 blue-overlay video-state flex justify-center items-center absolute">
    <video
      id="banner-video1"
      preload="none"
      className="vedioplayerone absolute width-100 height-100 member-media"
      muted
      autoPlay
      style={{ objectFit: "cover" }}
      loop
      src="https://video.gumlet.io/60e563a0b502bacef88e556b/60ffa619738c1c4caeab6c90/0.mp4"
    ></video>
    <div className="member-media col-12" style={{ zIndex: 88 }}>
      <h2 className="font-size-giant text-[#fff] font-black italic no-margin-bottom trashand text-center">
        ANDAMANS. YOUR WAY.
      </h2>
      <p className="font-size-largest text-white text-center">
        The best of Andamans, curated for you.
      </p>
    </div>
  </div>
  );
};

export default Banner;
