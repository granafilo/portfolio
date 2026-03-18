/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],  // O "light --default, dark --prefersdark"
  },
  darkMode: ['class', '[data-theme="dark"]'],
  variants: {  // ← QUI @custom variant
    extend: {
      backgroundColor: ["dark", '[data-theme="dark"]'],  // Abilita dark: per bg
      textColor: ["dark", '[data-theme="dark"]'],        // Abilita dark: per text
      borderColor: ["dark", '[data-theme="dark"]'],
    }
  },
   
}

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  variants: {  // ← QUI @custom variant
    extend: {
      backgroundColor: ["dark", '[data-theme="dark"]'],  // Abilita dark: per bg
      textColor: ["dark", '[data-theme="dark"]'],        // Abilita dark: per text
      borderColor: ["dark", '[data-theme="dark"]'],
    }
  },
}


