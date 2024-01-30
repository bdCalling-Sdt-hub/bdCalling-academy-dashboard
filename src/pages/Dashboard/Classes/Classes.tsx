/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetClassesbyCourseIdQuery } from "../../../redux/api/classApi";
import According from "../../../component/UI/According/According";
import { PiVideo } from "react-icons/pi";
import { Col, Row } from "antd";
import { useGetSingleCourseQuery } from "../../../redux/api/courseApi";

import VideoPlayer from "../../../component/UI/VideoPlayer/VideoPlayer";
import { USER_ROLE } from "../../../constants/role";
import NoData from "../../../utils/NoData";
import { imageUrl } from "../../../utils/Common";

const Classes = () => {
  const { courseTitle, videoTitle, moduleNo, classId, id } = useParams();
  const { data: classes } = useGetClassesbyCourseIdQuery(Number(id));
  const { data: courseData }: any = useGetSingleCourseQuery(Number(id));
  console.log("classes", classes);
  const singleVideo = classes?.data
    ?.find((c: any) => c?.id == classId && c?.module_no == moduleNo)
    ?.module_class?.find(
      (video: any) => video?.name === videoTitle?.split("-").join(" ")
    );

  return (
    <div className="h-screen">
      <div className="">
        <h1 className="text-2xl font-semibold mb-6">
          Modules:{" "}
          <span className="text-customPrimary">
            {courseData?.data?.courseName}
          </span>
        </h1>
        {classes?.data?.length > 0 ? (
          <div className="flex justify-between gap-x-4">
            {courseData?.data?.status !== "video" ? (
              <div>
                <img src={imageUrl(courseData?.data?.courseThumbnail)} alt="" />
              </div>
            ) : (
              <div className="">
                <VideoPlayer
                  data={singleVideo}
                  title={videoTitle}
                  videoId={""}
                  moduleId={classId}
                />
              </div>
            )}
            <div className="w-full">
              {classes?.data?.map((module: any, moduleIndex: number) => (
                <According
                  id={id}
                  classId={module?.id}
                  key={moduleIndex}
                  editable={true}
                  title={module.module_title}
                  moduleDuration={module.moduleDuration}
                  index={moduleIndex}
                  moduleLenth={classes?.data?.length}
                >
                  {module?.module_class?.map((video: any) => (
                    <Link
                      to={`/${USER_ROLE.ADMIN}/${courseTitle}/${id}/${
                        module?.id
                      }/${module?.module_no}/${video?.name
                        ?.split(" ")
                        .join("-")}`}
                    >
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
                    </Link>
                  ))}
                </According>
              ))}
            </div>
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Classes;
