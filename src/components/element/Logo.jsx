import React from 'react';
import logoImg from '../../logo/WhatsApp Image 2026-02-14 at 2.40.44 PM.jpeg';

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center group ${className} select-none`}>
            <div className="relative flex items-center justify-center p-0">
                <img
                    src={logoImg}
                    alt="BingeWatch Logo"
                    className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 mix-blend-screen brightness-110"
                />
            </div>
        </div>
    );
};

export default Logo;
