/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from "../../../../component/UI/VideoPlayer/VideoPlayer";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ModuleList from "../../../../component/Modulelist/ModuleList";
import VideoNavigationButtons from "../../../../component/VideoNavigationButtons/VideoNavigationButtons";
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
interface ICourse {
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
  const [course, setCourse] = useState<ICourse | null>(null);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoInfo, setVideoInfo] = useState({
    videoId: "",
    title: "",
    moduleId: 0,
  });
  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const course = data.find(
          (c: any) => c.id === "complete-html-course-01"
        );
        setCourse(course);
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
      // setShowNextButton(
      //   currentVideoIndex < course.modules[currentModuleIndex].videos.length - 1
      // );
      // setShowPrevButton(currentVideoIndex > 0);
    }
  }, [course, currentModuleIndex, currentVideoIndex, setVideoInfo]);
  const handleback = () => {
    navigate("/student/dashboard");
  };
  return (
    <div className="h-screen">
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
          <VideoNavigationButtons
            course={course}
            currentModuleIndex={currentModuleIndex}
            currentVideoIndex={currentVideoIndex}
            setCurrentModuleIndex={setCurrentModuleIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
          />
        </div>
        <div className="w-4/5	ms-4 mt-16">
          <ModuleList
            course={course}
            setCurrentModuleIndex={setCurrentModuleIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
          />
        </div>
      </div>
    </div>
  );
}
