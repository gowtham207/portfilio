import React from 'react'
import Hero from '../components/experience/Hero'
import Professional from '../components/experience/Professional'
import ProjectExperience from '../components/experience/ProjectExperience'

const Experience: React.FC = () => {
    return (
        <main className="layout-container p-5 flex h-full grow flex-col">
            <Hero />
            <Professional />
            <ProjectExperience />
        </main>
    )
}

export default Experience