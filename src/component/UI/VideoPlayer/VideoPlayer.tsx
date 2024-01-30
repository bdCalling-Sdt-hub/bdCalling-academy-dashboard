/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

export default function VideoPlayer({ title, moduleId, data }: any) {
  return (
    <div>
      <iframe
        width="890"
        height="500"
        src={`${data?.video}&autoplay=1`}
        title={title}
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h1 className="text-[22px] my-5 text-[#333]">
        {moduleId}. {title?.split("-")?.join(" ")}
      </h1>
    </div>
  );
}
