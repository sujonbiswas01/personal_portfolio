import Abouts from "@/components/About";
import ContactForm from "@/components/ContactForm";
// import ContactForm from "@/components/ContactForm";
import EducationPage from "@/components/Education";
import { ImagesSliderDemo } from "@/components/HeroSlider";
import { ProjectCard } from "@/components/ProjectCard";
import Skills from "@/components/Skill";
import { projects } from "@/data/project";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <ImagesSliderDemo />
      <Abouts />
      <Skills />
      <EducationPage />

      <section id="projects" className="w-full flex justify-center px-4 py-16">
        <div className="w-full max-w-[1440px]">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              My Projects
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A selection of my recent work showcasing real-world applications.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
      <ContactForm/>
    </div>
  );
};

export default HomePage;
