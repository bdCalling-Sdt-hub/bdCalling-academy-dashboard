/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface videoPlayerParams {
  title: string;
  moduleId: string | number;
  videoId: string;
  setCurrentModuleIndex?: string | number;
  setCurrentVideoIndex?: string | number;
  autoplay?: boolean;
  loading?: boolean;
}
export default function VideoPlayer({
  title,
  videoId,
  autoplay = true,
  loading,
  moduleId,
}: videoPlayerParams) {
  return (
    <div>
      <iframe
        width="890"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h1 className="text-[22px] my-5 text-[#333]">
        {moduleId}. {title}
      </h1>
    </div>
  );
}
