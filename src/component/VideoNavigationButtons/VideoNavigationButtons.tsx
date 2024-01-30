/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import style from "./VideoNavigationButtons.module.css";
import { useNavigate } from "react-router-dom";
interface IVideoNavigationButtonProps {
  currentModuleIndex: number;
  currentVideoIndex: number;
  course: any;
  setCurrentModuleIndex: (value: number) => void;
  setCurrentVideoIndex: (value: number) => void;
}
const VideoNavigationButtons = ({
  currentModuleIndex,
  currentVideoIndex,
  course,
  setCurrentModuleIndex,
  setCurrentVideoIndex,
}: IVideoNavigationButtonProps) => {
  const navigate = useNavigate();
  const handleNext = () => {

    if (
      currentVideoIndex <
      course?.modules[currentModuleIndex]?.videos.length - 1
    ) {
      setCurrentVideoIndex(currentVideoIndex + 1);
  
      navigate(
        `/student/dashboard/course/${course.id}/${encodeURIComponent(
          course.modules[currentModuleIndex].moduleName
        )}/${encodeURIComponent(
          course?.modules[currentModuleIndex]?.videos[currentVideoIndex + 1]
            .title
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

  return (
    <div className="flex justify-between">
      <button onClick={handlePrev} className={`${style.prevBtn}`}>
        <ArrowLeftOutlined /> Previous
      </button>

      <button onClick={handleNext} className={`${style.nextBtn}`}>
        <ArrowRightOutlined /> Next
      </button>
    </div>
  );
};

export default VideoNavigationButtons;
