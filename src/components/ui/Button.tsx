import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
    size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none rounded-full active:scale-95";

    const variants = {
        primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30",
        secondary: "bg-secondary-900 text-white hover:bg-secondary-800 shadow-lg shadow-secondary-900/20",
        outline: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50",
        ghost: "text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900",
        white: "bg-white text-primary-600 hover:bg-gray-100 shadow-lg shadow-black/10",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
