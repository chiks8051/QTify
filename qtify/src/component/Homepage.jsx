import React from "react";
import Hero from "./Hero";
import Section from "./Section";

const Homapage = () => {
  return (
    <>
      <Hero />
      <Section title="Top Albums" endpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" endpoint="https://qtify-backend-labs.crio.do/albums/new" />
    </>
  );
};

export default Homapage;
