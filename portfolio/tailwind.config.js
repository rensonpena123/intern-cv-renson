export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1418",
        foreground: "#f0f2f5",
        card: "#141a1f",
        primary: {
          DEFAULT: "#20b2a6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2830",
          foreground: "#20b2a6",
        },
        muted: {
          DEFAULT: "#252e37",
          foreground: "#7a8491",
        },
        border: "#242b32",
        highlight: "#f5a623",
        surface: "#1a2329",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'slow-drift': 'slow-drift 20s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'slow-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, -30px)' },
          '50%': { transform: 'translate(-15px, -20px)' },
          '75%': { transform: 'translate(30px, 10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}