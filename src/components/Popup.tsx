import React, { memo } from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiCloseCircleFill } from "react-icons/ri";

type Props = {
    onclick?: () => void;
    isError: boolean;
    text: string
    title: string;
}


const Popup: React.FC<Props> = ({ onclick, isError, text, title }) => {
    return (
        <>
            <div>
                <div
                    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full  before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
                    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                        <div className="mt-8 text-center">
                            {isError ? (
                                <RiCloseCircleFill size={60} className="mx-auto text-red-500" />
                            ) : (
                                <IoCheckmarkCircleOutline size={60} className="mx-auto text-green-500" />
                            )}
                            <div className="mt-6">
                                <h3 className="text-xl text-slate-900 font-semibold">{title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mt-3">{text}
                                </p>
                            </div>
                        </div>

                        <button id="closeButton" type="button" onClick={onclick}
                            className="mt-8 px-5 py-2.5 cursor-pointer w-full rounded-lg text-white text-sm font-medium border-none outline-none bg-gray-800 hover:bg-gray-700">Got
                            it</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Popup);
