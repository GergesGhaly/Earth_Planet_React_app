import "./App.css";
import My3DModel from "./My3DModel";
import wall1 from "../src/assets/wall1.jpg";
import Header from "./Header";
import PageContantOne from "./PageContantOne";
import PageContantTwo from "./PageContantTwo";
import NotAvailable from "./NotAvailable";
import PageContantThree from "./PageContantThree";
function App() {
  return (
    <>
      <div
        className="Home"
        style={{
          backgroundImage: `url(${wall1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "300vh",
          width: "100%",
          boxShadow: "inset 0px 0px 100px 50px rgba(0, 0, 0, 0.8)", // ظل داخلي بلون أسود
          // scrollSnapType: "y mandatory", // سناب سكرول عمودي
          // // overflow: "hidden",
          // overflowY: "scroll", // تمكين التمرير العمودي
          // scrollBehavior: "smooth", // التمرير السلس
        }}
      >
        <Header />
        <div
          style={{
            position: "fixed",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            height: "100vh",
            width: "100%",
            zIndex: 2,
          }}
        >
          <My3DModel />
        </div>
        <PageContantOne />
        <PageContantTwo />
        <PageContantThree />
      </div>
      <NotAvailable />
    </>
  );
}

export default App;
