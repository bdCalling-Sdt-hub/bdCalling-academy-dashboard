/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import According from "../../../../component/UI/According/According";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiVideo } from "react-icons/pi";
import style from "../studentDashboard.module.css";
import VideoPlayer from "../../../../component/UI/VideoPlayer/VideoPlayer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
import { CiSearch } from "react-icons/ci";
import { Spin } from "antd";

interface Video {
  id: string;
  video: string;
  title: string;
  module?: string;
}

interface Module {
  moduleId: number;
  moduleDuration: string;
  moduleName: string;
  videos: Video[];
}

interface Course {
  id: string;
  completation: number;
  rating: number;
  image: string;
  title: string;
  duration: string;
  modules: Module[];
}
export default function StudentEnrolledCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>();
  const [videoInfo, setVideoInfo] = useState({
    videoId: "",
    title: "",
    moduleId: 0,
  });
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(true);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  console.log(activeVideoIndex, currentVideoIndex);
  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => {
        const course = data.find((c: any) => c.id === id);
        setCourse(course);
        // if (course.modules && course.modules.length > 0) {
        //   setSelectedModule(course.modules[0]);
        // }
      });
  }, [id]);
  useEffect(() => {
    if (course?.modules && course.modules.length > 0) {
      const selectedVideo =
        course.modules[currentModuleIndex].videos[currentVideoIndex];
      setVideoInfo({
        videoId: selectedVideo.video,
        title: selectedVideo.title,
        moduleId: currentModuleIndex,
      });

      setShowNextButton(
        currentVideoIndex < course.modules[currentModuleIndex].videos.length - 1
      );
      setShowPrevButton(currentVideoIndex > 0);
    }
  }, [course, currentModuleIndex, currentVideoIndex]);

  if (!course) {
    return <Spin />;
  }
  const handleNext = () => {
    if (
      currentVideoIndex <
      course.modules[currentModuleIndex].videos.length - 1
    ) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      console.log(currentModuleIndex, currentVideoIndex);
      navigate(
        `/student/dashboard/course/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex].moduleName
        )}/${encodeURIComponent(
          course.modules[currentModuleIndex].videos[currentVideoIndex + 1].title
        )}`
      );
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentVideoIndex(0);
      navigate(
        `/student/dashboard/course/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex + 1].moduleName
        )}/${encodeURIComponent(
          course.modules[currentModuleIndex + 1].videos[0].title
        )}`
      );
    }
  };

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      navigate(
        `/student/dashboard/course/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex].moduleName
        )}/${encodeURIComponent(
          course.modules[currentModuleIndex].videos[currentVideoIndex - 1].title
        )}`
      );
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentVideoIndex(
        course.modules[currentModuleIndex - 1].videos.length - 1
      );
      console.log(currentModuleIndex, currentVideoIndex);
      navigate(
        `/student/dashboard/course/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex - 1].moduleName
        )}/${encodeURIComponent(
          course.modules[currentModuleIndex - 1].videos[
            course.modules[currentModuleIndex - 1].videos.length - 1
          ].title
        )}`
      );
    }
  };
  const handleback = () => {
    navigate("/");
  };
  const handleVideoClick = (moduleId: number, videoIndex: number) => {
    console.log(moduleId, videoIndex);
    ("clicked ");
    setCurrentModuleIndex(moduleId);
    setCurrentVideoIndex(videoIndex);
    setActiveVideoIndex(videoIndex);
  };

  return (
    <div className="h-screen container mx-auto">
      <div className="flex justify-around ">
        <div>
          <div className="text-[22px] flex justify-between  mb-8">
            <div className="flex gap-x-3  items-center ">
              <ArrowLeftOutlined
                onClick={handleback}
                style={{
                  cursor: "pointer",
                }}
              />
              <button>BACK</button>
            </div>
            <h1>Class Video</h1>
          </div>
          <VideoPlayer
            title={videoInfo.title}
            videoId={videoInfo.videoId}
            moduleId={videoInfo.moduleId}
          />
          <div className="flex justify-between">
            <button onClick={handlePrev} className={`${style.prevBtn}`}>
              <ArrowLeftOutlined /> Previous
            </button>

            <button onClick={handleNext} className={`${style.nextBtn}`}>
              <ArrowRightOutlined /> Next
            </button>
          </div>
        </div>
        <div className="w-4/5	ms-4 mt-16">
          <div>
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
                  index={module.moduleId}
                >
                  {module.videos.map((video, videoIndex) => (
                    <Link
                      to={`/student/dashboard/course/${
                        course.id
                      }/${encodeURIComponent(
                        module.moduleName
                      )}/${encodeURIComponent(video.title)}`}
                    >
                      <button
                        key={video.id}
                        className={`flex items-center py-1 gap-x-2 text-lg text-[#333333] cursor-pointer hover:text-customPrimary ${
                          videoIndex === activeVideoIndex ? "bg-red-500" : ""
                        }`}
                        onClick={() =>
                          handleVideoClick(module.moduleId, videoIndex)
                        }
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
        </div>
      </div>
    </div>
  );
}
