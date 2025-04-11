/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "instagram-gradient": "linear-gradient(45deg, #fccc63, #feda75, #fbad50, #F56040, #E1306C, #C13584, #d62976, #962fbf, #405DE6)",
      "bgcolor":" linear-gradient(90deg, rgba(152,0,241,1) 19%, rgba(113,118,233,1) 66%);",
      
      },
      card:{
        "card":"h-32 w-full border-4 border-indigo-600"
      }
      
    },
  },
  plugins: [],
}

