import Banner from "@/components/HomePage/Banner";
import Stats from "@/components/HomePage/Stats";
import Services from "@/components/HomePage/Services";
import Projects from "@/components/HomePage/Projects";
import Testimonial from "@/components/HomePage/Testimonial";
import Contact from "@/components/HomePage/Contact";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}
