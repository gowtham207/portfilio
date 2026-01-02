import React, { memo } from 'react'
import { MdCloudDownload } from "react-icons/md";
import hero from '../../assets/images/hero1.webp';

const Hero: React.FC = () => {
    return (
        <section className="w-full px-4 md:px-10 py-12 md:py-6 max-w-7xl">
            <div className="@container">
                <div className="flex flex-col-reverse gap-10 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 flex-1 text-left">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Full-Stack Developer
                                &amp; Data Engineer</span>
                            <h1
                                className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl">
                                Building scalable mobile apps &amp; serverless backends.
                            </h1>
                            <h2 className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
                                Hi, I'm <span className="text-slate-900 dark:text-white font-bold">Gowtham Kannan R</span>.
                                I specialize in <span className="text-primary font-medium">React Native</span>, <span
                                    className="text-primary font-medium">Python (Flask/FastAPI)</span>, <span
                                        className="text-primary font-medium">GraphQL</span>, and <span
                                            className="text-primary font-medium">AWS</span>. I craft robust databases and solve
                                real-world problems with mobile-first design.
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button
                                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary dark:bg-card-border border border-slate-200 dark:border-transparent  dark:hover:bg-[#323647] transition-colors text-gray-100 dark:text-white text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="flex items-center gap-4 text-xl">
                                    <MdCloudDownload color='#fffff' size={30} />
                                    <span className="truncate">Resume</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex justify-center @[864px]:justify-end">
                        <div className="w-full max-w-[600px] aspect-square @[480px]:aspect-video @[864px]:aspect-square rounded-2xl shadow-2xl relative overflow-hidden group">
                            <img
                                src={hero}
                                alt="Abstract digital workspace with code syntax highlighting and modern aesthetic"
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-background-dark to-transparent h-1/2 opacity-60" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default memo(Hero)
