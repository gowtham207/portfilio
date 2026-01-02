import React, { memo } from 'react'
import { TbBrandReactNative } from "react-icons/tb";
import { FaPython,FaAws,FaDatabase   } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { CgBrowser } from "react-icons/cg";
import { MdHub,MdOutlineApi,MdDevices,MdOutlineTerminal   } from "react-icons/md";
import type { AboutTypeProps } from '../../types/aboutType';
import TechStackCard from './TechStackCard';


const TechStack:React.FC = () => {
    const stack:AboutTypeProps[] = [
        {
            title:"Python APIs",
            Icon: FaPython
        },
        {
            title:"React Native",
            Icon: TbBrandReactNative
        },
        {
            title:"React ",
            Icon:CgBrowser
        },
         {
            title:"TypeScript",
            Icon:SiTypescript
        },
         {
            title:"PostgreSQL",
            Icon:FaDatabase
        },
         {
            title:"AWS",
            Icon: FaAws 
        },  {
            title:"GraphQL",
            Icon: MdHub 
        },{
            title:"REST API",
            Icon: MdOutlineApi 
        },
         {
            title:"Flutter",
            Icon: MdDevices  
        },
         {
            title:"Go",
            Icon: MdOutlineTerminal  
        }
    ]
  return (
        <section className="w-full max-w-6xl px-4 lg:px-10 py-10">
                <h2 className="dark:text-white text-2xl font-bold leading-tight mb-6">My Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                   {
                    stack.map((item,index)=> <TechStackCard key={index} Icon={item.Icon} title={item.title}  />)
                   }
                </div>
            </section>
  )
}

export default memo(TechStack);
