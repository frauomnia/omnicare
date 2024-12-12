import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: "#eab308",          
          secondary: "#eab308",         
          accent: "#eab308",   
          neutral: "#eab308",
          "base-100": "#fff",       
          info: "#eab308",
          success: "#16a34a",
          warning: "#ea580c",
          error: "#dc2626",
          body: {
            "background-color": "#fff",
          }
          },
        },
      ],
    },
  plugins: [require("daisyui")],
} satisfies Config;
