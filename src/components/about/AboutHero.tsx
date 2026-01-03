import React, { useCallback } from 'react'
import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';


const AboutHero: React.FC = () => {

  const navigate = useNavigate()

  const navigateExperience = useCallback(() => {
    navigate('/experience#project')
  }, [navigate])

  const navigateContact = useCallback(() => {
    navigate('/contact')
  }, [navigate])

  const handleMargin = useCallback((index: number) => {
    if (index === 0) {
      return ' mr-4'
    }
    if ([1, 6].includes(index)) {
      return ' mr-10'
    }
    if ([2, 3, 4, 7, 8, 9, 10, 11].includes(index)) {
      return 'mr-16'
    }
  }, [])

  return (
    <section className="w-full max-w-6xl  lg:px-10 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-primary text-xs font-bold tracking-wide uppercase">
              Open to work
            </span>
          </div>

          <h1 className="text-xl lg:text-6xl font-black leading-tight tracking-tight">
            Hello, I'm Gowtham. <br />

            <span className="block min-h-[3.0em] lg:min-h-[3.1em]">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                <Typewriter
                  words={[
                    'Full Stack Developer.',
                    'React & \nReact Native Engineer.',
                    'Python Developer.',
                    'Software Engineer.',
                    'Data Engineer.',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </h1>


          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            I engineer scalable solutions where data meets design. With deep expertise
            in Python, React Native, and AWS, I specialize in building healthcare ETL
            pipelines and mobile-first applications that drive analytics and chronic
            care management.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <button onClick={navigateContact} className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
              Contact Me
            </button>

            <button onClick={navigateExperience} className="flex items-center justify-center rounded-lg h-12 px-6 bg-card-dark border border-border-dark text-white text-base font-bold hover:bg-border-dark transition-all">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Code Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-full relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

          <div className="relative rounded-xl bg-[#1e1e1e] border border-border-dark shadow-2xl overflow-hidden">

            <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-border-dark gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 font-mono">
                gowtham_kannan.py
              </div>
            </div>

            <div className="p-6 font-mono text-sm leading-6 text-gray-300 overflow-x-auto custom-scrollbar">
              {[
                ['class', 'Developer:'],
                ['def', '__init__(self):'],
                ['self.name = "Gowtham Kannan R"'],
                ['self.focus = "Healthcare & Cloud"'],
                ['self.passion = "Mobile-First Design"'],
                [],
                ['def', 'get_stack(self):'],
                ['return {'],
                ['"app": ["React Native", "React"],'],
                ['"api": ["FastAPI", "GraphQL"],'],
                ['"aws": ["Lambda", "ECS", "Gateway"]'],
                ['}'],
              ].map((line, i) => (
                <div key={i} className="flex">
                  <span className={`w-5 text-gray-600 select-none text-right ${handleMargin(i)}`}>
                    {i + 1}
                  </span>
                  <p className="pl-4">{line.join(' ')}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutHero
