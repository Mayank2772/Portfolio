import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { FaGithub} from "react-icons/fa";
import AnimatedBorderButton from '../components/AnimatedBorderButton';
const projects = [
  {
    title: "Imagify",
    description:
      "An AI-powered image generation platform built with the MERN stack that transforms text prompts into high-quality images. Includes authentication, image downloads, responsive UI, and seamless AI API integration.",
    image: "/projects/Imagify.png",
    tags: ["React.js", "Node.js", "MongoDB", "AI API"],
    link: "#",
    github: "https://github.com/Mayank2772/Imagify",
  },
  {
    title: "Virtual Keyboard",
    description:
      "A computer vision based virtual keyboard that allows users to type using hand gestures through webcam input. Built using OpenCV and MediaPipe with real-time finger tracking and gesture recognition for touchless interaction.",
    image: "/projects/virtual-keyboard.png",
    tags: ["Python", "OpenCV", "MediaPipe"],
    link: "#",
    github: "https://github.com/Mayank2772/Virtual-Keyboard",
  },
  {
    title: "Blog Website",
    description:
      "A responsive blogging platform built with React.js and Tailwind CSS featuring category-based blogs, clean UI, and smooth navigation. Designed to provide a modern reading experience across all devices.",
    image: "/projects/Blog-Website.png",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://mayankgarg-blog.vercel.app",
    github: "https://github.com/Mayank2772/Blog-Website",
  },

];
const Projects = () => {
  return (
    <section id = "projects" className='py-32 relative overflow-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal  text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A few projects I’ve worked on while exploring web development, AI,
and problem-solving through hands-on learning and real-world ideas.
          </p>
        </div>
        {/* Project */}
        <div className='grid md:grid-cols-2 gap-8'>
          {
            projects.map((project,idx)=>(
              <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{animationDelay:`${(idx+1)*100}ms`}}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                  <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent' />
                {/* Overlay */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5'/>
                  </a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <FaGithub className='w-5 h-5'/>
                  </a>
                </div>
                </div>
                {/* Content */}
                <div className='p-5 space-y-6 '>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                    <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
                    group-hover:-translate-y-1 transition-all'/>
                  </div>
                  <p className='text-muted-foreground text-sm'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>{project.tags.map((tag,tagIdx)=>(
                    <span key = {tagIdx}className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer'>{tag}</span>
                  ))}</div>
                </div>
              </div>
            ))
          }
        </div>
        {/* View alll */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <a href="https://github.com/Mayank2772">
            <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5'/>
          </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
