import ImageSlider from "./ImageSlider";

const Slider = () => {

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "carne" },
    { url: "http://localhost:3000/image-2.jpeg", title: "carne" },
    { url: "http://localhost:3000/image-3.jpeg", title: "carne" },
    { url: "http://localhost:3000/image-4.jpeg", title: "carne" },
    { url: "http://localhost:3000/image-5.jpeg", title: "carne" },
  ];

  const containerStyles = {
    width: "1500px",
    height: "600px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1>Monterrey BBQ</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
