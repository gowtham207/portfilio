import React, { useEffect } from 'react'
import Hero from '../components/experience/Hero'
import Professional from '../components/experience/Professional'
import ProjectExperience from '../components/experience/ProjectExperience'
import { useLocation } from 'react-router'

const Experience: React.FC = () => {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash])

    return (
        <main className="layout-container  justify-center p-5 lg:px-10 flex h-full grow flex-col">
            <Hero />
            <Professional />
            <ProjectExperience />
        </main>
    )
}

export default Experience