// src/Floor.js
import React from "react";
import { Plane } from "@react-three/drei";

const Floor = () => {
  return (
    <Plane
      args={[10, 10]} // Tamanho do piso (largura, profundidade)
      position={[0, -1, 0]} // Posição do piso (x, y, z)
      rotation={[-Math.PI / 2, 0, 0]} // Rotação do piso (x, y, z)
      receiveShadow // Permite que o piso receba sombras
    >
      {/* Material do piso */}
      <meshStandardMaterial color={"#808080"} />
    </Plane>
  );
};

export default Floor;
