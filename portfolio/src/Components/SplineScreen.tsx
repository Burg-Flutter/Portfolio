"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

const SplineScene = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <Spline scene="https://prod.spline.design/M9l7mU5M44hKKn-Z/scene.splinecode" />
    </div>
  );
};

export default SplineScene;
