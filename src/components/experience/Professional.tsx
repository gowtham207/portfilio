import React from 'react';
import type { professionalExperienceType } from '../../types/experienceType';
import software_engineer from '../../assets/images/software_engineer.webp';
import intern from '../../assets/images/internship.webp';
import trainer from '../../assets/images/trainer.webp';
import ProfessionalCard from './ProfessionalCard';
import { MdOutlineWork } from "react-icons/md";

const Professional: React.FC = () => {
    const professionalExperience: professionalExperienceType[] = [
        {
            company: "Clustrex Data Private Limited, Chennai",
            description: "Detail experience in Python, React, React Native, and AWS, focusing on scalable and efficient web and mobile applications, architecting robust solutions, and leveraging AWS cloud services.",
            duration: "July 2023 — Present",
            image: software_engineer,
            position: 'Software Engineer'
        },
        {
            company: "Clustrex Data Private Limited, Chennai",
            description: "Include practical experience with Python, React, React Native, and AWS, and contributions to scalable and efficient web and mobile application features.",
            duration: "October 2022 — June 2023",
            image: intern,
            position: 'Software Engineer Intern'
        }, {
            company: "Besant Technologies, Chennai",
            description: " Describe responsibilities as a trainer, delivering interactive and hands-on sessions, focusing on real-time examples, live coding, and project-based learning for Python and Java fundamentals.",
            duration: "January 2021 — July 2022",
            image: trainer,
            position: 'Python and Java Trainer (Part Time)'
        }
    ]

    return (
        <section className="flex flex-col mt-6">
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-card-border pb-4">
                <div
                    className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MdOutlineWork />
                </div>
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em]">Professional Experience
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {
                    professionalExperience.map((item, index) => <ProfessionalCard company={item.company} description={item.description} duration={item.duration} image={item.image} position={item.position} key={index} />)
                }
            </div>
        </section>
    )
}

export default Professional