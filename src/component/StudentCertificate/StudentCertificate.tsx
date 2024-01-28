import { Row } from "antd";
import image from "../../assets/StudentCoursesAndCertificates/noCertificate.png";

export default function StudentCertificate() {
  // const certificates = [
  //   {
  //     image: "https://t.ly/lzSun",
  //   },
  //   {
  //     image: "https://t.ly/lzSun",
  //   },
  // ];

  // const browseCourses = () => {};

  return (
    <div>
      <Row gutter={16}>
        {/* {certificates.map((certificate) => (
          <Col lg={6}>
            <img
              src={certificate.image}
              alt=""
              className="w-[400px] h-[300px] mx-auto my-6"
            />
          </Col>
        ))} */}
      </Row>

      {/* {certificates.length > 0 && ( */}
      <div className="text-center">
        <img src={image} alt="" className="mx-auto pb-4 h-[317px] w-[352px]" />
        {/* <h1 className="text-4xl font-medium text-[#333]">
          You are not enrolled in any courses
        </h1> */}
        <p className="py-4 text-4xl font-medium ">
          You have no certificate. Browse the course again
        </p>
        {/* <Button
            onClick={browseCourses}
            size="large"
            className="bg-customPrimary"
            style={{
              color: "white",
            }}
          >
            Browse Courses
          </Button> */}
      </div>
      {/* )} */}
    </div>
  );
}
