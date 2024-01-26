/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetClassesbyCourseIdQuery } from "../../../redux/api/classApi";
import According from "../../../component/UI/According/According";
import { PiVideo } from "react-icons/pi";
import { Col, Row } from "antd";

const Classes = () => {
  const { id } = useParams();
  const { data: course } = useGetClassesbyCourseIdQuery(Number(id));

  return (
    <div className="h-screen">
      <div className="">
        <h1 className="text-2xl font-semibold mb-6">Module Classes</h1>
        <div>
          {course?.data?.map((module: any, moduleIndex: number) => (
            <According
              key={moduleIndex}
              editable={true}
              title={module.module_title}
              moduleDuration={module.moduleDuration}
              index={moduleIndex}
              moduleLenth={course?.data?.length}
            >
              {module?.module_class?.map((video: any, videoIndex: number) => (
                <button
                  key={video.id}
                  className={`flex items-center py-1 gap-x-2 text-lg text-[#333333] cursor-pointer hover:text-customPrimary`}
                >
                  <span>
                    <PiVideo style={{ color: "#2492EB" }} />
                  </span>
                  <span className="text-customPrimary">
                    {video.id}. {video.name}
                  </span>
                </button>
              ))}
            </According>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
