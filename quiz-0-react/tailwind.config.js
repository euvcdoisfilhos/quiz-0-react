/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'b-yellow': '#FFDE03',
                'b-red': '#FF5252',
                'b-blue': '#1A4CC1',
                'b-black': '#000000',
                'b-white': '#FFFFFF',
            },
            boxShadow: {
                'b-shadow-flat': '4px 4px 0px 0px rgba(0,0,0,1)',
                'b-shadow-pressed': '2px 2px 0px 0px rgba(0,0,0,1)',
            },
            borderWidth: {
                'b-border-thick': '4px',
            }
        },
    },
    plugins: [],
}
