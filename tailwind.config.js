module.exports = {
  darkMode: 'selector',
  // ...
},
{
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      animation:{
        "parent-spin":"spin 2s linear infinite",
      },
      keyframes:{
        spin:{
          "0%":{ transform: "rotate(0 deg)"},
          "100%":{ transform: "rotate(360 deg)"},
          
        }
      }
    },
  variants: {},
  plugins: [require('@tailwindcss/forms'),],
  }
};
