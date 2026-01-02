import React from "react";
import type { ProjectCardProps } from "../../types/experienceType";


const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    role,
    image,
    Icon,
    alt,
    description,
    points,
    tags,
}) => {
    return (
        <div
            id={id}
            className="
        flex flex-col md:flex-row
        rounded-xl overflow-hidden
        border border-gray-200 dark:border-card-border
        bg-white dark:bg-[#1c1d27]
        shadow-sm hover:shadow-md transition-all
      "
        >
            {/* Image */}
            <div className="relative w-full md:w-64 min-h-[200px] shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={alt}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

                <div className="absolute top-4 left-4">
                    <div className="bg-background-light dark:bg-background-dark p-2 rounded-lg shadow-lg">
                        <Icon size={20} />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-6 flex-1">
                <div>
                    <h3 className="text-xl font-bold tracking-[-0.015em]">{title}</h3>
                    <p className="text-primary font-medium">{role}</p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                </p>

                <ul className="list-disc ml-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {points.map((point: string, index: number) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <div className="flex gap-2 flex-wrap mt-2">
                    {tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="
                px-3 py-1 rounded-md text-xs font-medium
                bg-gray-100 dark:bg-card-border
                text-gray-700 dark:text-gray-300
              "
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProjectCard);
