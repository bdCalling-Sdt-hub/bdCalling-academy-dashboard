import notFoundImage from "./assets/not found/not found.jpg";
const NotFound = () => {
  return (
    <div className="h-screen">
      <img className="h-[100vh] mx-auto" src={notFoundImage} alt="" />
    </div>
  );
};

export default NotFound;
