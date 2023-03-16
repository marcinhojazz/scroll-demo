import { OrbitControls, ScrollControls } from "@react-three/drei";
import React from "react";
import Floor from "./Floor";
import { Office } from "./models/Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Floor />
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};
