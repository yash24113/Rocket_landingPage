module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)",
          text2: "var(--header-text-2)"
        },
        button: {
          background1: "var(--button-bg-1)"
        },
        footer: {
          background1: "var(--footer-bg-1)",
          text1: "var(--footer-text-1)",
          text2: "var(--footer-text-2)"
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};