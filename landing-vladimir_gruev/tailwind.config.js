module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['"Roboto"'],
      poppins: ['"Poppins"'],
      title: ['"Fredoka One"'],
      code: ['"ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace"']
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      fontFamily: ["hover", "focus"],
      fontWeight: ["hover", "focus", "group-hover"],
      scale: ['active', 'group-hover'],
      background: ['active', 'group-hover'],
      shadow: ['active', 'group-hover'],
    },
  },
  plugins: [
  ],
};
