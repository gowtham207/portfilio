import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router';

const Collaborate: React.FC = () => {
    const nav = useNavigate()

    const onclick = useCallback(() => {
        nav('/contact')
    }, [nav])

    return (
        <section className="w-full max-w-6xl px-4 lg:px-10 py-16">
            <div
                className="
                    relative overflow-hidden rounded-2xl border p-10 lg:p-16 text-center
                    bg-linear-to-r
                    from-background-light to-white
                    dark:from-background-dark dark:to-[#1a1c2e]
                    border-slate-200 dark:border-border-dark
                "
            >
                {/* Glow blobs */}
                <div
                    className="
                        absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full blur-3xl
                        bg-primary/20 dark:bg-primary/30
                    "
                />
                <div
                    className="
                        absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 rounded-full blur-3xl
                        bg-purple-400/20 dark:bg-purple-500/20
                    "
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2
                        className="
                            text-3xl lg:text-4xl font-black tracking-tight
                            text-slate-900 dark:text-white
                        "
                    >
                        Ready to build scalable solutions?
                    </h2>

                    <p
                        className="
                            text-lg max-w-xl
                            text-slate-600 dark:text-gray-400
                        "
                    >
                        Whether you have a complex ETL challenge, a mobile app idea, or need cloud expertise, I'm
                        always open to discussing new opportunities.
                    </p>

                    <button
                        className="
                            flex items-center justify-center h-12 px-8 rounded-lg
                            bg-primary text-white text-base font-bold
                            shadow-lg shadow-primary/30
                            hover:shadow-primary/50 hover:scale-105
                            transition-all duration-300
                        "
                        type='button'
                        onClick={onclick}
                    >
                        Let&apos;s Collaborate
                    </button>
                </div>
            </div>
        </section>
    )
}

export default memo(Collaborate)
