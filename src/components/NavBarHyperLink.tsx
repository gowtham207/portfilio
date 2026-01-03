import React, { memo } from 'react'
import type { navBarHyperLinkType } from '../types/navBarType';
import { Link } from 'react-router';

interface props extends navBarHyperLinkType {
    onClick?: () => void,
}

const NavBarHyperLink: React.FC<props> = ({
    name, href, onClick = () => { }
}) => {



    return (
        <Link className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" onClick={onClick} to={href}>
            {name}
        </Link>
    );
};

export default memo(NavBarHyperLink);
