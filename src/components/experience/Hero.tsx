import React from 'react'
import experince from '../../assets/images/experience.webp'

const Hero: React.FC = () => {
    return (
        <div className="@container">
            <div className="p-0">
                <div
                    className="group relative flex min-h-80 flex-col gap-6
                                items-start justify-end
                                rounded-xl px-6 pb-10 md:px-10
                                shadow-lg overflow-hidden"
                >
                    <img
                        src={experince}
                        alt="Abstract digital blue waves representing technology flow"
                        className="absolute inset-0 h-full w-full object-cover
                            transition-transform duration-700
                            group-hover:scale-105
                            "
                        loading='lazy'
                    />

                    {/* Gradient overlay (light + dark aware) */}
                    <div
                        className="
      absolute inset-0
      bg-linear-to-t
      from-black/70 via-black/40 to-black/20
      dark:from-black/85 dark:via-black/60 dark:to-black/30
    "
                    />

                    {/* Brand tint */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-2 text-left">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="rounded bg-primary px-2 py-1 text-xs font-bold text-white">
                                CAREER &amp; PORTFOLIO
                            </span>
                        </div>

                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl">
                            Experience
                        </h1>

                        <h2 className="max-w-2xl text-sm font-normal leading-normal text-gray-200 md:text-lg">
                            A timeline of my professional journey and key technical projects.
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
