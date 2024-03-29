/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiVideo } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import According from "../UI/According/According";

const ModuleList = ({
  course,
  courseId,
  courseTitle,
  setCurrentModuleIndex,
  setCurrentVideoIndex,
}: any) => {
  const handleVideoClick = (moduleId: number, videoIndex: number) => {
    setCurrentModuleIndex(moduleId);
    setCurrentVideoIndex(videoIndex);
  };

  return (
    <div className="h-screen">
      {/* <Input
        className="py-[16px] border border-[#D3D3D3] mb-[20px] "
        prefix={<CiSearch />}
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
        style={{
          boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
        }}
      /> */}
      <div>
        {course?.data?.map((module: any, moduleIndex: number) => (
          <According
            key={moduleIndex}
            title={module.module_title}
            moduleDuration={module.moduleDuration}
            index={moduleIndex}
            moduleLenth={course?.data?.length}
          >
            {module?.module_class?.map((video: any, videoIndex: number) => (
              <NavLink
                to={`/${courseTitle}/${courseId}/${module?.id}/${
                  module?.module_no
                }/${video?.name?.split(" ").join("-")}`}
              >
                <button
                  key={video.id}
                  className={`flex items-center py-1 gap-x-2 text-lg text-[#333333] cursor-pointer hover:text-customPrimary`}
                  onClick={() => handleVideoClick(module.moduleId, videoIndex)}
                >
                  {/* <span>
                    <PiVideo />
                  </span> */}
                  <span>
                    {videoIndex + 1}. {video.name}
                  </span>
                </button>
              </NavLink>
            ))}
          </According>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
