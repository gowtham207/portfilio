import React, { memo, useCallback } from 'react'
import type { navBarHyperLinkType } from '../types/navBarType';
import { useNavigate } from 'react-router';

interface props extends navBarHyperLinkType {
    onClick?: () => void,
}

const NavBarHyperLink: React.FC<props> = ({
    name, href, onClick = () => { }
}) => {

    const nav = useNavigate()
    const navigation = useCallback(() => {
        onClick()
        nav(href)
    }, [href, nav, onClick])

    return (
        <button className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" onClick={navigation}>
            {name}
        </button>
    );
};

export default memo(NavBarHyperLink);
