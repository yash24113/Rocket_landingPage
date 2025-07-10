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
        // Primary fonts
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        
        // Display fonts
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        
        // Secondary fonts
        'lato': ['Lato', 'sans-serif'],
        'sourcesans': ['Source Sans Pro', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        
        // System fallbacks
        'sans': ['Inter', 'Poppins', 'Open Sans', 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'mono': ['Ubuntu Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
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