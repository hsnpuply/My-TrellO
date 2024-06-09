/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],  theme: {
   
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {
      colors:{
        primary:'#0b50af',
        list_container:'#101204',
        list_text:'#adb9c6',
        add_to_card_bg:'#282f27'
      },
    },
  },
  plugins: [],
}

