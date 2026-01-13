import React, { memo } from "react";

type Props = {
  name: string;
  Icon: React.ElementType;
};

const TechComponents: React.FC<Props> = ({ name, Icon }) => {
  return (
    <div className="flex flex-col items-center hover:scale-120 justify-center gap-3 p-6 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-card-border hover:border-primary/50 transition-all group">
      <Icon className="text-3xl text-primary" />
      <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
        {name}
      </span>
    </div>
  );
};

export default memo(TechComponents);
