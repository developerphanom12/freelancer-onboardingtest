import React, { useState } from "react";
import ReactPlayer from "react-player";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { FaPlay, FaPause } from "react-icons/fa";

// --- helpers
const getYouTubeId = (url) => {
  if (!url) return null;
  const trimmed = url.trim();

  const vMatch = trimmed.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (vMatch && vMatch[1]) return vMatch[1];

  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  const ybMatch = trimmed.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (ybMatch && ybMatch[1]) return ybMatch[1];

  const fallback = trimmed.match(/([A-Za-z0-9_-]{11})$/);
  return fallback ? fallback[1] : null;
};

const toWatchUrl = (id) => (id ? `https://www.youtube.com/watch?v=${id}` : null);
const thumbFor = (id) => (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null);

const VideoSection = ({ bg }) => {
  const videos = [
    { src: "https://youtube.com/shorts/TEm701PQb9U?si=T24VLIWm3_yFebnt", title: "Vaishnavi Khadi", name: "Mr. Puneet Gaba" },
    { src: "https://youtube.com/shorts/Y083KfXfEQk?si=arGg-IdBossWeEA2", title: "Youngistan Tattoos", name: "Mr. Vishal Manhas" },
    { src: "https://youtu.be/62QxQRt7Yr4?si=1kqYzMckLs_T8hCq", title: "Shop Closed", name: "Mr. Thomas" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [mutedStates, setMutedStates] = useState({});

  const toggleMute = (index) => {
    setMutedStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handlePlayClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`sm:h-[715px] ${bg ? "bg-white" : "bg-gradient-to-b from-[#F8F6FE] to-[#8E59E2]"} sm:py-10 py-18 px-[13px] flex flex-col items-center justify-start overflow-hidden`}>
      <h1 className="sm:text-[48px] text-[36px] text-left font-sauce font-bold text-[#8E59E2] w-[90%] mb-10">
        Real Stories, Real Impact: Our User's Shares Their Experience
      </h1>

      <div className="flex md:flex-row flex-col gap-6 w-full justify-center items-center">
        {videos.map((video, index) => {
          const id = getYouTubeId(video.src);
          const watchUrl = toWatchUrl(id); // canonical watch URL
          const thumb = thumbFor(id);

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                onClick={() => handlePlayClick(index)}
                className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? "w-[320px] h-[420px]" : "w-[250px] h-[350px]"}`}
                aria-label={`Video card ${index}`}
              >
                {/* Video or thumbnail */}
                {activeIndex === index ? (
                  <div className="relative w-full h-full bg-black">
                    <ReactPlayer
                      url={watchUrl}
                      playing={activeIndex === index}
                      muted={mutedStates[index] ?? true}
                      controls={false} // hide YouTube native controls to remove 0/0
                      width="100%"
                      height="100%"
                      loop
                      className="!absolute !top-0 !left-0 !w-full !h-full"
                      config={{
                        youtube: {
                          playerVars: {
                            modestbranding: 1,
                            rel: 0,
                            playsinline: 1,
                            origin: window.location.origin,
                            enablejsapi: 1,
                            loop: 1,
                            playlist: id, // required for looping Shorts
                          },
                        },
                      }}
                      onReady={() => console.log(`YT ready: ${video.title}`, watchUrl)}
                      onError={(e) => console.error(`YT error (${video.title}):`, e)}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => handlePlayClick(index)}
                    className="relative w-full h-full block"
                    aria-label={`Play thumbnail for ${video.title}`}
                    type="button"
                    style={{
                      backgroundImage: thumb ? `url(${thumb})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!thumb && <div className="w-full h-full bg-black" />}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 p-3 rounded-full text-white">
                        <FaPlay />
                      </div>
                    </div>
                  </button>
                )}

                {/* Play/Pause overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    className="bg-black bg-opacity-50 text-white p-3 rounded-full pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayClick(index);
                    }}
                    aria-label={activeIndex === index ? "Pause video" : "Play video"}
                  >
                    {activeIndex === index ? <FaPause /> : <FaPlay />}
                  </button>
                </div>

                {/* Mute/Unmute */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute(index);
                  }}
                  className="absolute bottom-4 right-4 text-white p-2 bg-black bg-opacity-40 rounded"
                  aria-label={(mutedStates[index] ?? true) ? "Unmute" : "Mute"}
                >
                  {(mutedStates[index] ?? true) ? <HiOutlineSpeakerXMark size={20} /> : <HiOutlineSpeakerWave size={20} />}
                </button>
              </div>

              {/* <div className="text-black flex flex-col justify-center items-center mt-3">
                <h1 className="text-[20px] font-semibold">{video.name}</h1>
                <p className="text-[16px] font-normal">{video.title}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSection;
