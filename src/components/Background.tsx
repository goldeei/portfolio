"use client";

import { motion } from "framer-motion";

export const Background = () => {
    return (
        <motion.div 
            style={{ 
                background: 'var(--gradient-bg)'
            }}
            className="fixed inset-0 -z-10"
        />
    );
};