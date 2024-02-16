/** @type {import('tailwindcss').Config} */

const fontSize = {};
for (let i = -2; i < 11; i++) {
  fontSize[`fluid-${i}`] = `var(--step-${i})`;
}
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,cmjs,mjs}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/Users/dr3/development/issue-tracker/public/assets/images/bug-tracker-full.jpg')",
      },
      fontSize,
    },
  },
  plugins: [],
};
