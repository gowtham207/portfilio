import React, { memo } from 'react'
import { FaGithub,FaLinkedin  } from "react-icons/fa6";

import { HiOutlineMailOpen } from "react-icons/hi";

const Footer:React.FC = () => {
  return (
        <footer className="w-full border-t border-solid border-slate-200 dark:border-card-border bg-white dark:bg-[#111218] py-8">
        <div className="px-4 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span className="font-bold text-lg">Gowtham.dev</span>
            </div>
            <div className="flex gap-6">
                <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    href={'https://github.com/GOWTHAM207'.toLowerCase()} target="_blank">
                    <FaGithub />
                    <span className="material-symbols-outlined">code</span>
                </a>
                <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    href="https://www.linkedin.com/in/gowtham-kannan-80a23b206" target="_blank">
                    <FaLinkedin />
                    <span className="material-symbols-outlined">work</span>
                </a>
                <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                    href="mailto:gowthamkannan207@gmail.com"   rel="noopener noreferrer">
                    <HiOutlineMailOpen />
                    <span className="material-symbols-outlined">mail</span>
                </a>
            </div>
            <p className="text-slate-500 dark:text-slate-500 text-sm">
                © 2025 Gowtham Kannan R. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default memo(Footer)
