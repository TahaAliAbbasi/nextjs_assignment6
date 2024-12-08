import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        "custom":"30vw",
        "cust":"25vw",
        "custom2":"35vw"
      },
      colors:{
        'custom1':'#F5F5F5',
        'custom2':'#7E7E7E',
        'custom3':'#F5F5F5',
        'custom4':'#E5E5E5',
        'custom5':'#BCBCBC',
      },
      color: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
