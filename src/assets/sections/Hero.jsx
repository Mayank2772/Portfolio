import React from "react";
import Button from "../components/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import Prism from "../components/Prism";

const skills = [
  "React",
  "Tailwind CSS",
  "Mongo DB",
  "Node.js",
  "Git",
  "Github",
  "Machine Learning",
  "Deep Learning",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-background
      "
    >
      {/* =====================================================
          PRISM BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>
      </div>

      {/* =====================================================
          DARK GRADIENT OVERLAY
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-background/20
          via-background/55
          to-background
        "
      />

      {/* Side vignette */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background)/0.65)_100%)]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          px-6
          pt-32
          pb-16
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1.05fr_0.95fr]
            gap-12
            lg:gap-16
            items-center
            min-h-[calc(100vh-150px)]
          "
        >
          {/* =================================================
              LEFT — TEXT
          ================================================== */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  glass
                  border
                  border-white/10
                  backdrop-blur-xl
                  text-sm
                  text-primary
                  shadow-[0_0_25px_hsl(var(--primary)/0.08)]
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-primary
                    animate-pulse
                    shadow-[0_0_10px_hsl(var(--primary))]
                  "
                />
                Computer Science Student
                <span>+</span>
                Full Stack Developer
                <span>+</span>
                ML Explorer
              </span>
            </div>

            {/* =================================================
                HEADLINE
            ================================================== */}
            <div className="space-y-3">
              <h1
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-[5.2rem]
                  font-bold
                  leading-[0.98]
                  tracking-tight
                  animate-fade-in
                  animation-delay-100
                "
              >
                Exploring{" "}
                <span
                  className="
                    text-primary
                    glow-text
                  "
                >
                  the future
                </span>
                <br />
                through code
                <br />
                <span
                  className="
                    font-serif
                    italic
                    font-normal
                    text-white
                  "
                >
                  and Artificial Intelligence.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  text-lg
                  text-muted-foreground
                  max-w-xl
                  leading-relaxed
                  pt-3
                  animate-fade-in
                  animation-delay-200
                "
              >
                Computer science student focused on building responsive MERN
                stack applications and exploring AI-powered technologies through
                real-world projects.
              </p>
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <div
              className="
                flex
                flex-wrap
                gap-4
                animate-fade-in
                animation-delay-300
              "
            >
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/Mayank_Garg-Resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* =================================================
                SOCIALS
            ================================================== */}
            <div
              className="
                flex
                items-center
                gap-4
                animate-fade-in
                animation-delay-400
              "
            >
              <span className="text-sm text-muted-foreground">Follow Me</span>

              <a
                href="https://github.com/Mayank2772"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  glass
                  border
                  border-white/10
                  text-muted-foreground
                  hover:text-primary
                  hover:bg-primary/10
                  hover:border-primary/30
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mayank2772/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-full
                  glass
                  border
                  border-white/10
                  text-muted-foreground
                  hover:text-primary
                  hover:bg-primary/10
                  hover:border-primary/30
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT — LARGE PROFILE IMAGE
          ================================================== */}
          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
              animate-fade-in
              animation-delay-300
            "
          >
            {/* Large ambient glow */}
            <div
              className="
                absolute
                inset-8
                rounded-[2rem]
                bg-primary/20
                blur-3xl
                opacity-70
                animate-pulse
              "
            />

            {/* Image container */}
            <div
              className="
                relative
                w-full
                max-w-md
              "
            >
              {/* Glass frame */}
              <div
                className="
                  relative
                  glass
                  rounded-[2rem]
                  p-2
                  border
                  border-white/10
                  backdrop-blur-xl
                  shadow-[0_0_60px_hsl(var(--primary)/0.15)]
                  glow-border
                "
              >
                <img
                  src="/profile-photo.png"
                  alt="Mayank Garg"
                  className="
                    relative
                    w-full
                    aspect-[4/5]
                    object-cover
                    rounded-[1.5rem]
                  "
                />

                {/* Image bottom gradient */}
                <div
                  className="
                    absolute
                    inset-x-2
                    bottom-2
                    h-1/3
                    rounded-b-[1.5rem]
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                    pointer-events-none
                  "
                />
              </div>

              {/* =================================================
                  3RD YEAR BADGE
              ================================================== */}
              <div
                className="
                  absolute
                  -top-5
                  -left-5
                  glass
                  rounded-2xl
                  px-4
                  py-3
                  border
                  border-white/10
                  backdrop-blur-xl
                  shadow-lg
                  animate-float
                "
              >
                <div className="text-xl font-bold text-primary">3rd Year</div>

                <div className="text-xs text-muted-foreground">CS Student</div>
              </div>

              {/* =================================================
                  OPEN TO OPPORTUNITIES
              ================================================== */}
              <div
                className="
                  absolute
                  -bottom-5
                  -right-5
                  glass
                  rounded-2xl
                  px-4
                  py-3
                  border
                  border-white/10
                  backdrop-blur-xl
                  shadow-lg
                  animate-float
                  animation-delay-500
                "
              >
                <div className="flex items-center gap-2">
                  <span
                    className="
                      w-2.5
                      h-2.5
                      bg-green-500
                      rounded-full
                      animate-pulse
                    "
                  />

                  <span className="text-sm font-medium">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGIES
        ====================================================== */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            animate-fade-in
            animation-delay-600
          "
        >
          <p
            className="
              text-sm
              text-muted-foreground
              mb-6
              text-center
            "
          >
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="
                    flex-shrink-0
                    px-8
                  "
                >
                  <span
                    className="
                      text-lg
                      font-semibold
                      text-muted-foreground/50
                      hover:text-primary
                      transition-colors
                      cursor-pointer
                    "
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
