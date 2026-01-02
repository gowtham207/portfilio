import React, { memo } from 'react'
import type { educationType } from '../../types/aboutType'



const EducationCard: React.FC<educationType> = ({
    duration, degree, description, institute
}) => {
    return (
        <div className="relative">
            <div
                className="absolute -left-[21px]  h-3 w-3 rounded-full bg-blue-500 ring-4 ">
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{duration}</span>
                <h3 className="text-zinc-950 dark:text-white text-xl font-bold">{degree}</h3>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                    {institute}
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default memo(EducationCard);
