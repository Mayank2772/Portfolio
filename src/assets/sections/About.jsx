import { Book, Code2, Lightbulb, RocketIcon, Users } from 'lucide-react'
import React from 'react'

const highlights= [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building modern and responsive web applications using React, Node.js, Express, and MongoDB.",
  },
    {
    icon: RocketIcon,
    title: "AI & Machine Learning",
    description: "Exploring AI-field,like AQI prediction project and other smart solutions through hands-on projects.",
  },
    {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Practicing Data Structures & Algorithms to strengthen logical thinking and coding skills.",
  },
  {
    icon: Book,
    title: "Continuous Learning",
    description: "Learning new technologies and improving every day through projects and experimentation.",
  },
]
const About = () => {
  return (
    <section id = "about" className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            Building the future,
            <span className='font-serif italic font-normal text-white'> one component at a time.</span>
          </h2>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>
             Hi, I'm Mayank Garg — a Computer Science Engineering student at Thapar University, Patiala. I completed my diploma in Computer Science from Thapar Polytechnic College, where my interest in development and technology really started growing.
            </p>
            <p>
              I enjoy building full stack web applications using the MERN stack and exploring AI and Machine Learning concepts. I love turning ideas into real projects that are both useful and visually clean.
            </p>
            <p>
              Over time, I've built projects like an AI Im a Blog website, an AQI Prediction System and a Virtual Keyboard using Hand Gesture Recognition. Along with development, I'm also improving my problem-solving skills through DSA and competitive programming.
            </p>
          </div>
          <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
            <p className='text-lg font-medium italic text-foreground'>
              “Always learning, always building, and always curious about creating technology that makes an impact.”
            </p>
          </div>
        </div>
          {/* Right column */}
          <div className='grid sm:grid-cols-2 gap-6'>
          {highlights.map((item,idx)=>(
            <div key={idx} className='glass p-6 rounded-2xl animate-fade-in' style={{animationDelay:`${(idx+1)*100}ms`}}>
              <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                <item.icon className='w-6 h-6 text-primary'/>
              </div>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
