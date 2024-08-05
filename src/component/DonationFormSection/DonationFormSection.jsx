import React from "react";
import "./DonationFormSection.css";
import { useForm } from "react-hook-form";
import Header from "../Header";
import { useRef } from "react";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import Quotes from "../Quotes";
import logo from "./logo.png";
import Slider from "../Slider/Slider";
import krishnaYashodhaMayya from "./donate-form-img.png";

function DonationFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center py-2  px-2 md:px-8 bg-white w-full drop-shadow-md h-16 fixed">
        <img
          src={logo}
          alt="logo"
          className="w-20 md:w-24 shadow-lg pt-8 z-10"
        />

        <button className="flex justify-center items-center gap-2 w-28 md:w-36 h-[34px] md:h-[40px] px-4 py-0 mr-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#4173b4] via-[#0c63d6] to-[#006fff] hover:shadow-xl hover:shadow-yellow-600 hover:scale-105 duration-300 hover:from-[#FFAC00] hover:to-[#ffaa00a2] ">
          <span className="text-sm" onClick={handleClick}>
            Donate Now
          </span>
        </button>
      </div>

      <Slider></Slider>
      <Quotes></Quotes>
      <Card></Card>

      <div class="main-container1" ref={ref}>
        <div class="left-container">
          <img
            id="donate-left-img"
            fetchpriority="high"
            decoding="async"
            width="510"
            height="480"
            src={krishnaYashodhaMayya}
            class="attachment-full size-full wp-image-25757"
            sizes="(max-width: 802px) 100vw, 802px"
          />
          <h2>In Everyone's Heart </h2>
          <p>
            Janmashtami is a cherished celebration marking the divine appearance
            of Lord Krishna. As the day unfolds, devotees observe a fast, their
            hearts and minds filled with anticipation for the midnight hour, the
            sacred moment of Krishna’s birth. The temple resonates with the
            sweet melodies of devotional songs, heartfelt prayers, and the
            sincere participation in age-old rituals. This festival is a
            profound spiritual journey that brings devotees closer to Krishna,
            reinforcing their faith and devotion. Janmashtami is also a time for
            sharing the essence of Krishna consciousness, inspiring others to
            embrace a life of devotion and service. For the ISKCON community,
            this celebration is a heartfelt expression of love and reverence for
            Lord Krishna, deepening their understanding of his timeless
            teachings.s{" "}
          </p>
        </div>
        <div className="right-container">
          <h2>Please fill the details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}

            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              {...register("age", { required: "Age is required", min: 1 })}
            />
            {errors.age && <p style={{ color: "red" }}>{errors.dob.message}</p>}

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && <p style={{ color: "red" }}>{errors.dob.message}</p>}

            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              rows="4"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}
            <label htmlFor="pincode">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              {...register("pincode", {
                required: "Pin Code is required",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Invalid Pin Code",
                },
              })}
            />
            {errors.pincode && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p style={{ color: "red" }}>{errors.dob.message}</p>
            )}

            <div id="donate-form-submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default DonationFormSection;
