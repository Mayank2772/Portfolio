import React from "react";
import Button from "../components/Button";
import { ArrowRight, ChevronDown, Download} from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
const skills = [
  "React",
  "Tailwind CSS",
  "Mongo DB",
  "Node.js",
  "Git",
  "Github",
  "Machine Learning",
  "Deep Learning"
]
const Hero = () => {
  return (
    <section
      className="relative min-h-screen
    flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Computer Science Student + Full Stack Developer + ML Explorer
              </span>
            </div>
            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Exploring <span className="text-primary glow-text"> the future </span>
                <br />
                through code and
                <br />
                <span className="font-serif italic font-normal text-white">
                  Aritifical Intelligence.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Computer science student focused on building responsive MERN stack applications and exploring AI-powered technologies through real-world projects.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <a href="#contact">
                <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
              <a href="/Mayank_Garg-Resume.pdf" download>
                <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
              </a>
            </div>
            {/* social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 px-2">
              <span className="text-xl text-muted-foreground">Follow Me:</span>
              {[
                { icon: FaGithub, href: "https://github.com/Mayank2772" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/mayank2772/" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column Image */}
          <div className="realative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="realative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.png" alt="Mayank Garg"className="w-full aspect-[4/5] object-cover rounded-2xl" />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3rd Year</div>
                  <div className="text-xs text-primary">CS Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill,idx)=>(
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer">{skill}</span>
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
