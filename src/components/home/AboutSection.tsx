import React, { memo } from 'react'
import proifle from '../../assets/images/profile-pic.webp'

const AboutSection: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10 max-w-7xl">
      <div
        className="rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-card-border p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="shrink-0">
            <img
              src={proifle}
              alt="Professional headshot of the developer"
              className="object-contain rounded-xl w-32 h-32 md:w-40 md:h-40 shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">About Me</h3>
              <p className="text-primary text-sm font-medium">Data-Driven Full Stack Engineer</p>
            </div>
            <p
              className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
              I am a Full-Stack Developer and Data Engineer with a passion for solving real-world
              problems. My expertise lies in building scalable mobile apps using React Native,
              architecting serverless backends with Python (Flask/FastAPI) and AWS, and managing robust
              data pipelines. I focus on delivering mobile-first designs and efficient cloud solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default memo(AboutSection);
