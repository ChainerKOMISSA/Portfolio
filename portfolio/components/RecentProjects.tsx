"use client";

import { CardHoverEffectDemo } from "./Projects";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          Quelques uns de mes{" "}
          <span className="text-purple">récents projets</span>
        </h1>
        <CardHoverEffectDemo />
      </div>
    </section>
  );
};

export default RecentProjects;
