import { useEffect, useState } from "react";
import According from "../../../../component/UI/According/According";
import { useNavigate, useParams } from "react-router-dom";
import { PiVideo } from "react-icons/pi";
import style from "../studentDashboard.module.css";
import VideoPlayer from "../../../../component/UI/VideoPlayer/VideoPlayer";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export default function StudentEnrolledCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [videoInfo, setVideoInfo] = useState({ videoId: "", title: "" });
  const [currentindex, SetCurrentIndex] = useState(0);
  console.log(currentindex);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showprevButton, setShowPrevButton] = useState(true);

  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => {
        const course = data.find((c) => c.id === id);
        setCourse(course);
      });
  }, []);
  useEffect(() => {
    if (course?.videos && course.videos.length > 0) {
      const selectedVideo = course.videos[currentindex];
      setVideoInfo({
        videoId: selectedVideo.videoId,
        title: selectedVideo.title,
      });
      if (currentindex === course.videos.length - 1) {
        setShowNextButton(false);
      } else {
        setShowNextButton(true);
      }
      if (currentindex === 0) {
        setShowPrevButton(false);
      } else {
        setShowPrevButton(true);
      }
    }
  }, [course, currentindex]);
  const handleback = () => {
    navigate("/");
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
          <VideoPlayer title={videoInfo.title} videoId={videoInfo.videoId} />
          <div className="flex justify-between">
            <button
              onClick={() => SetCurrentIndex(currentindex - 1)}
              className={`${style.prevBtn} ${!showprevButton && "invisible "}`}
            >
              <ArrowLeftOutlined /> Previous
            </button>
            <button
              onClick={() => SetCurrentIndex(currentindex + 1)}
              className={`${style.nextBtn} ${!showNextButton && "hidden"}`}
            >
              <ArrowRightOutlined /> Next
            </button>
          </div>
        </div>
        <div className="w-4/5	ms-4 mt-8">
          <div>
            {course?.modules?.map((moduleTitle, index) => (
              <According key={index} title={moduleTitle}>
                {course.videos
                  .filter((video) => video.module === moduleTitle)
                  .map((video, videoIndex) => (
                    <div
                      key={videoIndex}
                      className="flex items-center gap-x-2 text-lg cursor-pointer"
                      onClick={() => SetCurrentIndex(videoIndex)}
                    >
                      <p>
                        <PiVideo />
                      </p>
                      <p>{video.title}</p>
                    </div>
                  ))}
              </According>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
