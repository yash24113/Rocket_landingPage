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
        'inter': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'poppins': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'opensans': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'roboto': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'playfair': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'montserrat': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'lato': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'sourcesans': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'ubuntu': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'noto': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'sans': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'serif': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Georgia', 'Times New Roman', 'Times', 'serif']
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900'
      }
    }
  },
  plugins: []
};