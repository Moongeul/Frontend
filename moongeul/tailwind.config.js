/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard Variable"', 'sans-serif'],
      },
    },
    colors: {
      black: "#141414",
      deepDarkGray: "#282828",
      darkGray: "#646464",
      lightGray: "#CACACA",
      white: "#FFFFFF",
      backGround: "#ECECEC",
      brandColor: "#FF6E1F",

      // 그 외 추가 컬러
      // ...
    },
    fontSize: {
      //폰트 사이즈
      h1: "22px", // Heading, Head
      h2: "16px", // title1, 2, 4, body1
      h3: "14px", // Title 3, 5, body2, button
      h4: "12px", // caption1
      h5: "10px", // caption2
    },},
  plugins: [],
}
