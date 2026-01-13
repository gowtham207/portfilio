import React, { useCallback } from 'react'
import { MdEmail, MdCall, MdLocationOn, } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { apiCall } from '../helper/apiCall';
import Loader from '../components/Loader';
import Popup from '../components/Popup';
import { MdOutlineSend } from "react-icons/md";

const Contact: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [popup, setPopup] = React.useState<{ isOpen: boolean; isError: boolean }>({ isOpen: false, isError: false });
    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        try {
            setLoading(true);
            const formData = new FormData(form);
            const data = {
                name: formData.get("name")?.toString() || '',
                email: formData.get("email")?.toString() || '',
                subject: formData.get("subject")?.toString() || '',
                message: formData.get("message")?.toString() || '',
            };
            await apiCall(data);
            setPopup({ isOpen: true, isError: false });
            form.reset();
        } catch (err) {
            console.error(err);
            setPopup({ isOpen: true, isError: true });
        } finally {
            setLoading(false);
        }
    };

    const onClosePopup = useCallback(() => {
        setPopup({ isOpen: false, isError: false });
    }, []);

    return (
        <main className="grow flex justify-center py-10 lg:py-20 px-4 lg:px-40">
            {loading && (
                <div className='flex bg-white/90 items-center justify-center fixed top-0 left-0 w-full h-full z-50'>
                    <Loader />
                </div>
            )}
            {
                popup.isOpen && <Popup onclick={onClosePopup} isError={popup.isError} />
            }

            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* <!-- Left Column: Heading & Contact Info --> */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <p
                                className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                                Let's Build Something Together
                            </p>
                            <p className="text-slate-500 dark:text-[#9da1b9] text-lg font-normal leading-relaxed max-w-[500px]">
                                I'm currently available for freelance work or full-time opportunities. As a full-stack
                                developer, I can help you build scalable and modern applications.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full max-w-125">
                            <div
                                className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-5 transition-transform hover:-translate-y-1 duration-300">
                                <div
                                    className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                                    <MdEmail size={25} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Email</h2>
                                    <a className="text-slate-500 dark:text-[#9da1b9] text-sm font-normal hover:text-primary dark:hover:text-primary transition-colors"
                                        href="mailto:gowthamkannan207@gmail.com">gowthamkannan207@gmail.com</a>
                                </div>
                            </div>
                            <div
                                className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-5 transition-transform hover:-translate-y-1 duration-300">
                                <div
                                    className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                                    <MdCall size={25} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Phone</h2>
                                    <a className="text-slate-500 dark:text-[#9da1b9] text-sm font-normal hover:text-primary dark:hover:text-primary transition-colors"
                                        href="tel:+918939373123">+91 8939373123</a>
                                </div>
                            </div>
                            <div
                                className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-[#3b3f54] bg-white dark:bg-[#1c1d27] p-5 transition-transform hover:-translate-y-1 duration-300">
                                <div
                                    className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
                                    <MdLocationOn size={25} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Location
                                    </h2>
                                    <p className="text-slate-500 dark:text-[#9da1b9] text-sm font-normal">Chennai, India</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Social Links --> */}
                        <div className="flex gap-4 mt-2">
                            <a className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-card-border text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                                href={'https://github.com/GOWTHAM207'.toLowerCase()} target="_blank" >
                                <FaGithub />
                            </a>
                            <a className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-card-border text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                                href="https://www.linkedin.com/in/gowtham-kannan-80a23b206" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-card-border text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all"
                                href="mailto:gowthamkannan207@gmail.com">
                                <BiLogoGmail />

                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div
                            className="rounded-2xl border border-slate-200 dark:border-[#282b39] bg-white dark:bg-[#16171f] p-6 lg:p-10 shadow-lg dark:shadow-none">
                            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-6">Send a Message</h3>
                            <form className="flex flex-col gap-6" onSubmit={formSubmit}>
                                <label className="flex flex-col flex-1">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                        Name</p>
                                    <input
                                        name='name'
                                        className="form-input flex w-full min-w-0 p-3 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b3f54] bg-slate-50 dark:bg-[#1c1d27] focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-[#9da1b9] px-4 text-base font-normal leading-normal transition-all"
                                        placeholder="John Doe" type="text" />
                                </label>

                                <label className="flex flex-col flex-1">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                        Email</p>
                                    <input
                                        className="form-input flex w-full min-w-0  p-3  flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b3f54] bg-slate-50 dark:bg-[#1c1d27] focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-[#9da1b9] px-4 text-base font-normal leading-normal transition-all" name='email'
                                        placeholder="john@example.com" type="email" />
                                </label>
                                <label className="flex flex-col w-full">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                        Subject</p>
                                    <input
                                        name='subject'
                                        className="form-input flex p-3  w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b3f54] bg-slate-50 dark:bg-[#1c1d27] focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-[#9da1b9] px-4 text-base font-normal leading-normal transition-all"
                                        placeholder="Project Inquiry" type="text" />
                                </label>
                                <label className="flex flex-col w-full">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                        Message</p>
                                    <textarea
                                        name='message'
                                        className="form-textarea flex w-full min-w-0 flex-1 resize-none rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3b3f54] bg-slate-50 dark:bg-[#1c1d27] focus:border-primary placeholder:text-slate-400 dark:placeholder:text-[#9da1b9] p-4 text-base font-normal leading-normal transition-all"
                                        placeholder="Hello, I'd like to discuss a potential project..." rows={5}></textarea>
                                </label>
                                {/* <!-- Submit Button --> */}
                                <button
                                    className="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/20"
                                    type="submit">
                                    <span className="mr-2">Send Message</span>
                                    <MdOutlineSend size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact