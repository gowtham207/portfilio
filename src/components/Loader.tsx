import React, { memo } from 'react'
import '../loader.css'

const Loader: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <div className="container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default memo(Loader)