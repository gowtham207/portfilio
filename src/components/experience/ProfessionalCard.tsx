import React, { memo } from 'react'
import type { professionalExperienceType } from '../../types/experienceType'

const ProfessionalCard: React.FC<professionalExperienceType> = (
    {
        position, company, description, duration, image
    }
) => {
    return (
        <div
            className="flex flex-col p-6  rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-[#1c1d27] shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                <div className="flex items-start gap-4">
                    <img alt="Full-stack Developer Setup"
                        className="mt-1 hidden sm:block size-12 shrink-0 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                        src={image} />
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{position}</h3>
                        <p className="text-primary font-medium">{company}
                        </p>
                    </div>
                </div>
                <span
                    className="inline-flex items-center rounded-md bg-gray-100 dark:bg-card-border px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10">{duration}</span>
            </div>
            <div className="pl-0 sm:pl-16">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default memo(ProfessionalCard)
