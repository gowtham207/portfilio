import React, { memo } from 'react'
import { MdOutlineSchool, MdHistoryEdu } from "react-icons/md";

const EducationTab: React.FC = () => {
    return (
        <section className="w-full max-w-6xl px-4 lg:px-10 py-10">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight">
                    Educational Background
                </h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-border-dark"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Degree */}
                <div className="group relative rounded-2xl 
                    bg-white dark:bg-card-dark 
                    border border-gray-200 dark:border-border-dark 
                    p-8 hover:border-primary/50 
                    transition-all duration-300 shadow-lg dark:shadow-xl">

                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MdOutlineSchool className="material-symbols-outlined text-gray-900 dark:text-white text-[70px]" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center rounded-lg 
                            bg-primary/10 dark:bg-primary/20 
                            text-primary px-3 py-1 text-xs font-bold mb-4 uppercase tracking-wider">
                            Aug 2019 — July 2023
                        </div>

                        <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">
                            Bachelor of Engineering
                        </h3>

                        <p className="text-primary font-medium text-lg mb-4">
                            Agni College of Technology, Chennai
                        </p>

                        <div className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400">
                            <span
                                className="material-symbols-outlined text-yellow-500"
                                style={{ fontSize: "20px" }}
                            >
                                grade
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                                8.01 CGPA
                            </span>
                            <span className="mx-2">|</span>
                            <span>Computer Science Focus</span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Deeply involved in CS fundamentals including Data Structures, Algorithms, and Software Engineering.
                            Developed a strong technical foundation that facilitates the creation of complex full-stack solutions.
                        </p>
                    </div>
                </div>

                {/* School */}
                <div className="group relative rounded-2xl 
                    bg-white dark:bg-card-dark 
                    border border-gray-200 dark:border-border-dark 
                    p-8 hover:border-primary/50 
                    transition-all duration-300 shadow-lg dark:shadow-xl">

                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MdHistoryEdu className="material-symbols-outlined text-gray-900 dark:text-white text-[70px]" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center rounded-lg 
                            bg-gray-200 dark:bg-gray-500/20 
                            text-gray-700 dark:text-gray-400 
                            px-3 py-1 text-xs font-bold mb-4 uppercase tracking-wider">
                            June 2017 — June 2019
                        </div>

                        <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">
                            SSLC
                        </h3>

                        <p className="text-primary font-medium text-lg mb-4">
                            Vidhya Matric Higher Secondary School, Chennai
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                            Completed higher secondary education with a focus on science and mathematics, laying the groundwork for
                            a career in engineering and technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(EducationTab);
