import Image from "next/image";
import styles from "./page.module.css";
import Landing from "@/Components/Landing";
import AboutMe from "@/Components/AboutMe";
import SkillsGrid from "@/Components/SkillsGrid";
import Astronaut from "@/Components/Astranaut";
import EducationCard from "@/Components/Educationcard";
import ExperienceTimeline from "@/Components/Experience";
import ContactForm from "@/Components/ContactForm";
import Projects from "@/Components/Projects";

export default function Home() {
  return (
    <>
      <Astronaut />
      <main style={{ position: "relative", zIndex: 1 }}>
        <div id='home'><Landing /></div>
        <div id='about'><AboutMe /></div>
        <div id='skills'><SkillsGrid /></div>
        <div id='education'>
        <EducationCard /></div>
        <div id='experience'><ExperienceTimeline /></div>
        <div id='projects'><Projects/></div>
        <div id='contact'><ContactForm /></div>
        
        {/* <SkillsGrid /> */}
        
        
      </main>
    </>
  );
}
