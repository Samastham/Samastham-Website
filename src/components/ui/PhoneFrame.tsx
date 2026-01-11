import React from 'react';

interface PhoneFrameProps {
    src: string;
    alt: string;
    className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, className = '' }) => {
    return (
        <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[260px] shadow-xl flex flex-col justify-center items-center overflow-hidden ${className}`}>
            {/* Notch / Dynamic Island */}
            <div className="absolute top-0 h-[24px] w-[100px] bg-black z-20 rounded-b-[1rem] left-1/2 -translate-x-1/2"></div>

            {/* Screen Content */}
            <div className="h-[calc(100%-10px)] w-[calc(100%-10px)] bg-white rounded-[2rem] overflow-hidden relative">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>

            {/* Side buttons (decorative) */}
            <div className="absolute top-[80px] -right-[12px] h-[40px] w-[4px] bg-gray-800 rounded-r-md"></div>
            <div className="absolute top-[140px] -right-[12px] h-[60px] w-[4px] bg-gray-800 rounded-r-md"></div>
            <div className="absolute top-[80px] -left-[12px] h-[30px] w-[4px] bg-gray-800 rounded-l-md"></div>
        </div>
    );
};

export default PhoneFrame;
