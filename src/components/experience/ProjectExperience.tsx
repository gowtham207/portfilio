import React, { memo } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectCardProps } from "../../types/experienceType";
import { MdSchool, MdOutlineSmartphone, MdMedicalServices, MdOutlineRocketLaunch, MdMonitorHeart, MdOutlineHealthAndSafety } from "react-icons/md";

const ProjectExperience: React.FC = () => {
    const projectsData: ProjectCardProps[] = [
        {
            "id": "project-1",
            "title": "School Management App",
            "role": "Full-Stack Development",
            "Icon": MdSchool,
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAc0VltyRAhFEx14eXrQGfCtiym_0DxjuSgnWyNKdwPZfJJVEjckEJ4vzQ7KUTNjMAX7UmysQ9DQcmKRlZK_BQGIpI90CLQtcJX9DSHlkNf-Dhwp3vJCHBpmsHCIxeqM7Y__DQ7XpisIJrZhPd7YWJaPtqjRRTSQFARwTr6PEtDVVfLD1eQWompIESaeLyHRMi98tvn1EbWxuYikpnIhxA_cpGGg6fcsu0aacQUgZ5XS9oT-ItiLOgv-TTj2YM36zpBCRDvXSFKDm7U",
            "alt": "Digital school management interface",
            "description": "Developed a comprehensive application for teachers to manage academic processes.",
            "points": [
                "Enabled teachers to conduct exams, track student performance, and publish marks efficiently.",
                "Implemented frontend with HTML, Tailwind CSS, and JavaScript.",
                "Built backend services using Python, PostgreSQL (RDS), and Google Sheets integrations.",
                "Deployed scalable infrastructure using AWS API Gateway, Lambda, and CloudFront."
            ],
            "tags": ["Python", "PostgreSQL", "AWS Lambda", "Tailwind CSS"]
        },
        {
            "id": "project-2",
            "title": "Social Media Mobile App",
            "role": "Mobile App Developer",
            "Icon": MdOutlineSmartphone,
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCzCZR18I60FCG7yPagBrCtuZzFENyG3l1-4Pe1i5ZkMLi7A424uGoWY5YqGfuTPIhSZywMBBXJybV36Dc17UVfKm3kq7uI02NG_79q3W-J5mvBjdVfQUYpQNmFU3tYAMDOsMfWRYuCr7DNV89TdCLeCSaPGSxTdoIYpmOJOTTIxQCyV2IPmBtcRHhzW9G6Y2xrqPdbZ_4lTi4EqoFQSr0OD6-aCsu0Z3KtWOAlf24Qrl27w4kMXXEv3Zk6Ds08tTB5jXV8dm5Yr8",
            "alt": "Social media feed on mobile",
            "description": "Engineered a feature-rich social networking application for mobile platforms.",
            "points": [
                "Developed cross-platform mobile interfaces using React Native.",
                "Integrated robust user management and authentication with AWS Cognito.",
                "Utilized GraphQL for efficient data querying and manipulation.",
                "Collaborated on building engaging social features using React ecosystems."
            ],
            "tags": ["React Native", "GraphQL", "AWS Cognito"]
        },
        {
            "id": "project-3",
            "title": "Health Care Application",
            "role": "Full-Stack Development",
            "Icon": MdMedicalServices,
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBVRtJWmt93XlVSvPc6Kvf6hNYtvt8HTRzf3IhWeom2hUaOvITXoZUfgNSkVWCcnl9aKag_p7iHGRoyuhzyhup7VrHQzCaGlJjJeIVHrQ9HHK-s3JzGzZqTgbufNVzd8KtOu4yguc_zbsrDDeGzweTbVRMaGm1eNlTyGKpf12KmakmPnjpD7uIgABudra79c3NXa1Mh3fyeHTfn1eVvRjoUMEKBkK0BzU2TmfJpiX0cmU44I_iSoqJNdi6EeZfvRacHDXOlLbmF53Fm",
            "alt": "Digital patient tracking and booking",
            "description": "Created comprehensive healthcare solutions including patient tracking and admin systems.",
            "points": [
                "Developed a patient tracking app with features for appointment booking, cancellations, chat, and medication tracking.",
                "Backend powered by Python Flask APIs on AWS (Lambda, API Gateway, ECS).",
                "Frontend built with React (admin dashboard) and React Native (mobile app), styled with Tailwind CSS.",
                "Designed specialized modules for clinical trial applications."
            ],
            "tags": ["Python Flask", "AWS ECS", "React", "React Native"]
        },
        {
            "id": "project-4",
            "title": "Chronic Care Management",
            "role": "Full-Stack Development & Maintenance",
            "Icon": MdMonitorHeart,
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBqc_elbjOWpyP37DvNCvIO6bItn8upSNth9TZDxVG3TwUM9zFSGW6KIYXR0TnuNLta-TsuScu6hhCr8Ls9S48t1F4mJ1pZDWeuIPRviCa_rI3QG52KpoOfPp937C2chaLRJZCd1OEnRveTcX8A9tHurYAyBqPwFUPDUpujBx4M-9dqT7FP9kkKNB20OaqCCGWUfMh75y5AYdVc9JBy55Q5CE4T6tUYmE5VwqmYj4RH_UgT5cA6shBADSHCVNvzKdvx6ALLbfTKfZeb",
            "alt": "Health data dashboard",
            "description": "Managed and optimized a suite of 8 production-grade mobile applications.",
            "points": [
                "Implemented CI/CD pipelines for streamlined deployment and updates.",
                "Optimized backend services using Flask for high performance.",
                "Utilized Nx monorepo tools with React Native for mobile apps and Vue.js for dashboard interfaces."
            ],
            "tags": ["Flask", "Nx", "Vue.js", "CI/CD"]
        },
        {
            "id": "project-5",
            "title": "Medical Inventory Management",
            "role": "Full-Stack Developer & Data Engineer",
            "Icon": MdOutlineHealthAndSafety,
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD6B_so4Xgc_pc80dBkyQ72dUT_SNquw2ILYKQ363978n_eb8GqzZT_UD6ZgsE3gKwQoeDNYUC8A1h5jvi2DnxeeNzfQ1dDZdsXwEBmrmR_PGPKnjR49tMX838wWqhe_XRI40qJflMzk9NRoRbUqbL0uBjuP209WdAQ0qLqYYT16o5sfKgf6DozOoH-C1tFWtws3yv3sZ-rZsbwXi3ON9ejIj4lzgJa0HEUK8igulstCJUdOJ3piwceHJG8aT-OSLNqxiEbRen3MuGt",
            "alt": "Medical inventory management",
            "description": "Designed data pipelines and backend systems for medical inventory tracking.",
            "points": [
                "Built high-performance backend services in Go using GORM ORM and PostgreSQL.",
                "Developed ETL pipelines with Python to process data from EMR/PM sources.",
                "Optimized data pipelines using DuckDB and pandas.",
                "Deployed scalable microservices on AWS ECS, Lambda, and EventBridge."
            ],
            "tags": ["Go", "DuckDB", "AWS EventBridge", "ETL", "AWS ECS", 'AWS Lambda']
        }
    ]


    return (
        <section className="flex flex-col gap-6 mt-12">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-200 dark:border-card-border pb-4">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {/* <span className="material-symbols-outlined">rocket_launch</span> */}
                    <MdOutlineRocketLaunch />
                </div>
                <h2 className="text-2xl font-bold tracking-[-0.015em]">
                    Project Experience
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                {
                    projectsData.map((item, index) => <ProjectCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        role={item.role}
                        Icon={item.Icon}
                        image={item.image}
                        alt={item.alt}
                        description={item.description}
                        points={item.points}
                        tags={item.tags}
                    />)
                }

            </div>
        </section>
    );
};

export default memo(ProjectExperience);
