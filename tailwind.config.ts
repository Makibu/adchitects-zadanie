import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./[id]/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'c-purple': '#DAC2F2',
                'c-black': '#231E1E',
                'c-white': '#F1F0F0',
                'c-gray': '#989898',
                'c-lime': '#5EDC4B'
            },
        },
    },
    plugins: [],
};
export default config;
