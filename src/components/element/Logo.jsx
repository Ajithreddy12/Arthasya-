import React from 'react';

const Logo = ({ className = "", showText = true }) => {
    return (
        <div className={`flex items-center gap-4 group ${className}`}>
            {/* Logo Icon - Pixel-perfect recreation of the 'bW' brand mark */}
            <div className="relative flex items-center justify-center">
                <svg
                    width="56"
                    height="56"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:scale-105"
                >
                    {/* The long-stemmed 'b' circling around */}
                    <path
                        d="M28 0V72C28 87.464 40.536 100 56 100C71.464 100 84 87.464 84 72C84 56.536 71.464 44 56 44C40.536 44 28 56.536 28 72"
                        stroke="white"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-[#ec4899] transition-colors duration-300"
                    />
                    {/* Sharp internal 'W' */}
                    <path
                        d="M40 68L48 88L56 74L64 88L72 68"
                        stroke="white"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-[#ec4899] transition-colors duration-300"
                    />
                </svg>
            </div>

            {showText && (
                <div className="flex items-center">
                    <div className="flex items-center text-white group-hover:text-[#ec4899] transition-colors duration-300 uppercase">
                        <span className="font-extrabold text-[32px] tracking-tighter">Binge</span>
                        <div className="flex items-center relative h-full">
                            {/* Handcrafted signature 'W' Typography */}
                            <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-[1px] transform -translate-y-[2px]">
                                <path
                                    d="M2 4L11 26L18 12L25 26L34 4"
                                    stroke="currentColor"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                {/* The geometric peak accent above W */}
                                <path
                                    d="M15 11L18 6L21 11"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="font-extrabold text-[32px] tracking-tighter -ml-[3px]">atch</span>
                        </div>
                    </div>

                    {/* Precise layout for vertical 'DIGITAL' descriptor */}
                    <div className="flex items-center gap-3.5 ml-4 h-9">
                        <div className="w-[1px] h-full bg-white/20 self-stretch"></div>
                        <span className="text-gray-500 text-[10px] [writing-mode:vertical-lr] font-bold tracking-[0.5em] uppercase leading-none transform translate-y-[1px]">
                            DIGITAL
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logo;
