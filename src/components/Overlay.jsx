import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen font-mono ">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold text-2xl">
            Olá, sou Márcio Machado
          </h1>
          <p className="text-violet-700 font-bold uppercase">Bem vindo ao meu portfolio</p>
          <p className="mt-3">Eu sei:</p>
          <ul className="leading-9">
            <li>🧑‍💻 Como codificar</li>
            <li>🧑‍🏫 Como aprender</li>
            <li>📦 Como entregarr</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold text-2xl">
            Minhas Skills 🔥
          </h1>
          <p className="mt-3 text-sky-500">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9 list-disc list-inside">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Tailwind</li>
            <li>ThreeJs</li>
          </ul>
          <p className="mt-3 text-[crimson]">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9 list-disc list-inside">
            <li>Javascript/NodeJS</li>
            <li>Python</li>
            <li>Strapi</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce text-xl mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold text-3xl">
          📢 Contato
          </h1>
          <p className="text-violet-500">
            Eu sou muito caro, mas você não vai se arrepender
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞🇧🇷 <a href="tel:(+42) 4242-4242-424242">(+55) 21-99323-3208</a>
          </p>

          <span className="font-sans font-thin text-sm">Márcio Machado Pontes</span>
        </Section>
      </div>
    </Scroll>
  );
};
