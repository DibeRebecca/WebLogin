module.exports = {
  content: [
    './public/index.html',
    './public/style.css',
    './src/style.css',
  ],
  theme: {
    extend: {
      colors:{
        "bookmark-purple":"#5267DF",
        "bookmark-red":"#FA5959",
        "bookmark-blue":"#1e40af",
        "bookmark-grey":"#9194A2",
        "bookmark-white":"#f7f7f7",
        "bookmark-green":"#bbf7d0",
        "bookmark-yellow":"#fb923c",
        "bookmark-cendre":"#e2e8f0",
        "bookmark-violet":"#806cf2",
        "bookmark-vert":"#dcf2fd",
        
        
        
      }
    },
    fontFamily:{
      Poppins:["Poppins, sans-serif"],
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
