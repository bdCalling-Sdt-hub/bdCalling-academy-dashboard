import { useEffect, useState } from "react";
import According from "../../../../component/UI/According/According";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiVideo } from "react-icons/pi";
import style from "../studentDashboard.module.css";
import VideoPlayer from "../../../../component/UI/VideoPlayer/VideoPlayer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export default function StudentEnrolledCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [videoInfo, setVideoInfo] = useState({ videoId: "", title: "" });
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [encodedUrl, setencodedUrl] = useState("");
  console.log("encodded url", encodedUrl);
  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => {
        const course = data.find((c) => c.id === id);
        setCourse(course);
        // if (course.modules && course.modules.length > 0) {
        //   setSelectedModule(course.modules[0]);
        // }
      });
  }, []);
  useEffect(() => {
    if (course?.modules && course.modules.length > 0) {
      const selectedVideo =
        course.modules[currentModuleIndex].videos[currentVideoIndex];
      setVideoInfo({
        videoId: selectedVideo.video,
        title: selectedVideo.title,
        moduleId: course?.modules[currentModuleIndex].moduleId,
      });

      setShowNextButton(
        currentVideoIndex < course.modules[currentModuleIndex].videos.length - 1
      );
      setShowPrevButton(currentVideoIndex > 0);
    }
  }, [course, currentModuleIndex, currentVideoIndex]);

  const handleNext = () => {
    if (
      currentVideoIndex <
      course.modules[currentModuleIndex].videos.length - 1
    ) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      console.log(currentModuleIndex, currentVideoIndex);
      navigate(
        `/studentEnrolledCourse/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex].moduleName
        )}/${encodeURIComponent(
          course.modules[currentModuleIndex].videos[currentVideoIndex + 1].title
        )}`
      );
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentVideoIndex(0);
      navigate(
        `/studentEnrolledCourse/${course.id}/${encodeURIComponent(
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
        `/studentEnrolledCourse/${course.id}/${encodeURIComponent(
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
        `/studentEnrolledCourse/${course.id}/${encodeURIComponent(
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
  const handleVideoClick = (moduleId, videoIndex) => {
    console.log(moduleId, videoIndex);
    ("clicked ");
    setCurrentModuleIndex(moduleId);
    setCurrentVideoIndex(videoIndex);
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
          <div className="flex justify-between">
            <Link to={encodedUrl}>
              {" "}
              <button onClick={handlePrev} className={`${style.prevBtn}`}>
                <ArrowLeftOutlined /> Previous
              </button>
            </Link>

            <button onClick={handleNext} className={`${style.nextBtn}`}>
              <ArrowRightOutlined /> Next
            </button>
          </div>
        </div>
        <div className="w-4/5	ms-4 mt-8">
          <div>
            <div>
              {course?.modules?.map((module, moduleIndex) => (
                <According
                  key={module.moduleId}
                  title={module.moduleName}
                  index={module.moduleId}
                >
                  {module.videos.map((video, videoIndex) => (
                    <Link
                      to={`/studentEnrolledCourse/${
                        course.id
                      }/${encodeURIComponent(
                        module.moduleName
                      )}/${encodeURIComponent(video.title)}`}
                    >
                      <div
                        key={video.id}
                        className="flex items-center gap-x-2 text-lg cursor-pointer"
                        onClick={() =>
                          handleVideoClick(module.moduleId, videoIndex)
                        }
                      >
                        <p>
                          <PiVideo />
                        </p>
                        <p>
                          {video.id}. {video.title}
                        </p>
                      </div>
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
