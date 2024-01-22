/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "antd";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiVideo } from "react-icons/pi";
import { Link } from "react-router-dom";
import According from "../UI/According/According";

interface IVideo {
  id: string;
  video: string;
  title: string;
  module?: string;
}

interface IModule {
  moduleId: number;
  moduleDuration: string;
  moduleName: string;
  videos: IVideo[];
}
interface ICourse {
  id: string;
  completation: number;
  rating: number;
  image: string;
  title: string;
  duration: string;
  modules: IModule[];
}

interface IModulelistProps {
  course: ICourse | null;
  setCurrentModuleIndex: (value: number) => void;
  setCurrentVideoIndex: (value: number) => void;
}
const ModuleList = ({
  course,
  setCurrentModuleIndex,
  setCurrentVideoIndex,
}: IModulelistProps) => {
  const handleVideoClick = (moduleId: number, videoIndex: number) => {
    setCurrentModuleIndex(moduleId);
    setCurrentVideoIndex(videoIndex);
  };
  console.log("courses here in module list", course);
  return (
    <div className="h-screen">
      <Input
        className="py-[16px] border border-[#D3D3D3] mb-[20px] "
        prefix={<CiSearch />}
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
        style={{
          boxShadow: " 0px 0px 20px 0px rgba(0, 0, 0, 0.08)",
        }}
      />
      <div>
        {course?.modules?.map((module, moduleIndex) => (
          <According
            key={module.moduleId}
            title={module.moduleName}
            moduleDuration={module.moduleDuration}
            index={moduleIndex}
            moduleLenth={course.modules.length}
          >
            {module.videos.map((video, videoIndex) => (
              <Link
                to={`/student/dashboard/course/${
                  course.id
                }/${encodeURIComponent(module.moduleName)}/${encodeURIComponent(
                  video.title
                )}`}
              >
                <button
                  key={video.id}
                  className={`flex items-center py-1 gap-x-2 text-lg text-[#333333] cursor-pointer hover:text-customPrimary`}
                  onClick={() => handleVideoClick(module.moduleId, videoIndex)}
                >
                  <span>
                    <PiVideo />
                  </span>
                  <span>
                    {video.id}. {video.title}
                  </span>
                </button>
              </Link>
            ))}
          </According>
        ))}
      </div>
    </div>
  );
};

export default ModuleList;
