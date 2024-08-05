import React, { useState, useEffect } from "react";
import "./Slider.css";
import img1 from "./krishna_bg_img_slider.png";
import img2 from "./newSliderimg.png";
// import logo from "./logo.png";

const images = [img1, img2];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
// import { FaCircle } from "react-icons/fa";
// import { useState, useEffect } from "react";

// export default function Slider() {
//   const slides = [
//     {
//       url: "https://drive.google.com/file/d/1l4btjv4mhfFXQUWggw5OU5gokNZ3dHMg/view?usp=drive_link",
//     },
//     {
//       url: "https://drive.google.com/file/d/1zoOet27At0aoKgg8vohuiod8uklWbJUY/view?usp=drive_link",
//     },
//     {
//       url: "https://drive.google.com/file/d/1F5c7CGusa5YjeadARZ8ICHZSNaUshMDU/view?usp=drive_link",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1597533940506-674748ab67d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG11c2V1bXxlbnwwfDF8MHx8fDA%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1545990569-98afd2e72852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG11c2V1bXxlbnwwfDF8MHx8fDA%3D",
//     },
//     {
//       url: "https://plus.unsplash.com/premium_photo-1694475429278-5f14e38b7d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG11c2V1bXxlbnwwfDF8MHx8fDA%3D",
//     },
//     {
//       url: "krishna_bg_img_slider.jpeg",
//     },
//     {
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHM23VnAKkM1bJm1Q3faHHfo08i2vLF7v1NA&s",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(1);

//   useEffect(() => {
//     const updateVisibleSlides = () => {
//       const width = window.innerWidth;
//       if (width > 1200) {
//         setVisibleSlides(4);
//       } else if (width > 900) {
//         setVisibleSlides(3);
//       } else if (width > 600) {
//         setVisibleSlides(2);
//       } else {
//         setVisibleSlides(1);
//       }
//     };

//     window.addEventListener("resize", updateVisibleSlides);
//     updateVisibleSlides();

//     return () => window.removeEventListener("resize", updateVisibleSlides);
//   }, []);

//   const prevSlide = () => {
//     // setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   const nextSlide = () => {
//     // setCurrentSlide((currentSlide + 1) % slides.length);
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   const getVisibleSlides = () => {
//     let visible = [];
//     for (let i = 0; i < visibleSlides; i++) {
//       visible.push(slides[(currentSlide + i) % slides.length]);
//     }
//     return visible;
//   };

//   return (
//     <div className="w-[100vw] h-[100vh]  m-auto lg:py-16 py-8 px-4 relative flex items-center justify-center overflow-hidden">
//       {/* Left Arrow */}
//       <div
//         className="absolute top-[40%] -translate-y-[-50%] left-5 text-2xl rounded-full  cursor-pointer text-white transition-transform duration-300 hover:scale-110"
//         onClick={prevSlide}
//       >
//         <HiArrowLongLeft
//           size={45}
//           className="absolute left-[20px]  transition-transform hover:-translate-x-2 duration-500 z-10"
//         />
//         <FaCircle size={50} className="text-orange-500" />
//       </div>

//       {/* Slides */}
//       <div className="w-full h-full flex items-center overflow-hidden gap-12 transition-transform duration-800 ease-in-out">
//         {getVisibleSlides().map((slide, index) => (
//           <div
//             key={index}
//             className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full  bg-center bg-cover border-2 mx-auto "
//             style={{
//               backgroundImage: url("./krishna_bg_img_slider.jpg"),
//             }}
//             // style={{ backgroundImage: `url(${slide.url})` }}
//           ></div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <div
//         className="absolute top-[40%] -translate-y-[-50%] right-5 text-2xl rounded-full  cursor-pointer text-white transition-transform duration-300 hover:scale-110"
//         onClick={nextSlide}
//       >
//         <HiArrowLongRight
//           size={45}
//           className="absolute left-[-10px] transition-transform hover:translate-x-2 duration-300 z-10"
//         />
//         <FaCircle size={50} className="text-orange-500" />
//       </div>
//     </div>
//   );
// }
