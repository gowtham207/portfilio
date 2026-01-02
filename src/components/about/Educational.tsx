import React from 'react'
import type { educationType } from '../../types/aboutType'
import EducationCard from './EducationCard'
import { MdFormatQuote } from "react-icons/md";
import about from '../../assets/images/about.webp'

const Educational: React.FC = () => {
    const educationDetails: educationType[] = [
        {
            duration: "August 2019 — July 2023",
            degree: "Bachelor of Engineering",
            description: "Graduated with 8.01 CGPA, demonstrating strong academic performance in computer science fundamentals, software development, and engineering principles.",
            institute: "Agni College of Technology, Chennai"
        },
        {
            duration: "June 2017 — June 2019",
            degree: "Secondary School Leaving Certificate",
            description: "        Successfully completed.",
            institute: "Vidhya Matric Higher Secondary School, Chennai"
        }
    ]
    return (
        <section className="w-full max-w-6xl px-4 lg:px-10 py-10 flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
                <h2 className="text-zinc-950 dark:text-white text-2xl font-bold leading-tight mb-8">Educational Qualifications</h2>
                <div className="relative pl-4 border-l border-border-dark space-y-10">
                    {
                        educationDetails.map((item, index) => <EducationCard key={index} degree={item.degree} description={item.description} duration={item.duration} institute={item.institute} />)
                    }
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <h2 className="text-white text-2xl font-bold leading-tight mb-8">The Human Side</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative group overflow-hidden rounded-xl bg-card-dark border border-border-dark">
                        <div className="aspect-4/3 w-full overflow-hidden">
                            <img
                                src={about}
                                alt="Retro gaming console setup with neon lights"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-4">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <p className="text-white font-bold text-sm">Tech Enthusiast</p>
                                <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    Exploring Cloud Trends
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 mt-2">
                        <div className="flex gap-2 items-start">
                            <MdFormatQuote
                                size={40}
                                className="text-primary shrink-0"
                            />

                            <p className="text-gray-800 text-sm leading-relaxed italic">
                                I have a deep passion for mobile-first design and developing cloud solutions
                                that solve real-world problems. Whether I'm exploring new data pipelines or
                                hiking a new trail, I'm driven by the pursuit of knowledge, efficiency, and
                                continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Educational