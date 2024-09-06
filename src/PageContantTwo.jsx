const PageContantTwo = () => {
    // Function to scroll the page up by 100vh
    const scrollToTop = (e) => {
      e.preventDefault(); // Prevent the default behavior of the link
      window.scrollTo({
        top: 0, // Scroll the page to the top of the viewport (100vh to the top)
        behavior: "smooth", // Smooth scrolling
      });
    };
  
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          color: "#FCFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "5px 50px",
            height: "100%",
            width: "100%",
            color: "white",
            zIndex: 50,
          }}
        >
          <h6
            style={{
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            Hello World From Earth Planet
          </h6>
          <p
            style={{
              padding: "15px 0",
              lineHeight: "1.5",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
            reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
            reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
            reprehenderit cumque, modi voluptates earum doloremque aliquid saepe.
          </p>
          <a
            href="#"
            onClick={scrollToTop} // Call the scroll function to the top when clicked
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back To Top
          </a>
        </div>
        <div></div>
      </div>
    );
  };
  
  export default PageContantTwo;
  