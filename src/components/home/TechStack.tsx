import React, { memo } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineHub } from "react-icons/md";
import { FaAws } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { TbBrandReact } from "react-icons/tb";
import TechComponents from '../TechComponents';

type element = {
    name:string;
    Icon: React.ElementType
}


const TechStack:React.FC= () => {
    const TechData:element[] =[
    {
        name:"Python (Flask/FastAPI)",
        Icon: IoCodeSlash
    },
    {
        name:"React Native",
        Icon: CiMobile1
    },
    {
        name:"GraphQL",
        Icon: MdOutlineHub
    },
    {
        name:"AWS",
        Icon: FaAws
    },
    {   
        name:"PostgreSQL",
        Icon: FaDatabase
    },
    {   
        name:"React",
        Icon: TbBrandReact
    }
] 
  return (
    <section className="w-full px-4 md:px-10 py-10 max-w-7xl">
            <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-8">My
                Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {
                    TechData.map((ele,i)=><TechComponents Icon={ele.Icon} name={ele.name}  key={i}/>)
                }
            </div>
        </section>
  )
}

export default memo(TechStack)
