import React from "react";
import {
  Typography,
  Card,
  Button,
} from "@material-tailwind/react";
import BG1 from "../assets/BG1.png";

export default function Hero() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto fw-bold max-w-screen-md py-12 text-center text-white">
        <Typography variant="h2" color="blue-gray" className="mb-2 font-extrabold">
          <span className="text-white">LOVING GOD INTENTIONALLY</span> <br />
          <div className="bg-gray-800 p-3 rounded-lg">LOVING PEOPLE INTENTIONALLY</div>
        </Typography>
        {/* Buttons */}
        <div className="mt-8">
          <Button textColor="white" ripple="light" className="mr-20 bg-transparent hover:bg-black font-semibold py-3 px-12 border-2 border-white rounded-full">
            EVENTS
          </Button>
          <Button textColor="white" ripple="light" className="mr-20 bg-transparent hover:bg-black font-semibold py-3 px-12 border-2 border-white rounded-full">
            SERVICE
          </Button>
          <Button textColor="white" ripple="light" className=" bg-transparent hover:bg-black font-semibold py-3 px-12 border-2 border-white rounded-full">
            GALLERY
          </Button>
        </div>
      </div>
    </div>
  );
}
