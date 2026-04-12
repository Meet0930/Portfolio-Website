import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workItems = [
  {
    number: "01",
    title: "Smart Feedback Form",
    category: "AI Automation",
    tools: "n8n, workflow automation, APIs",
    image: "/images/feedback.webp",
    alt: "Smart Feedback Form project preview",
  },
  {
    number: "02",
    title: "E-commerce Platform",
    category: "Full Stack Development",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/ecommerce.webp",
    alt: "E-commerce platform project preview",
  },
  {
    number: "03",
    title: "Weather App",
    category: "Frontend Project",
    tools: "JavaScript, APIs, responsive UI",
    image: "/images/weather.jpeg",
    alt: "Weather app project preview",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item) => (
            <div className="work-box" key={item.number}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{item.number}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
