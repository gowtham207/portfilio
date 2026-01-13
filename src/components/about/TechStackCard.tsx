import React, { memo } from 'react'
import type { AboutTypeProps } from '../../types/aboutType'

const TechStackCard: React.FC<AboutTypeProps> = ({
  title,
  Icon,
}) => {
  return (
    <div className="group flex hover:scale-120 flex-col items-center justify-center gap-3 rounded-xl border border-border-dark bg-gray-100 dark:bg-card-dark p-4 hover:border-primary dark:hover:border-primary/50 transition-colors">
      <Icon  size={25} />
      <h3 className="text-black dark:text-white text-base font-bold">{title}</h3>
    </div>
  )
}

export default memo(TechStackCard)
