/** @type {import('tailwindcss').Config} */

const fontSize = {};
const priorityTheme = {};
const priorityColors = ["#FF6700", "#B33AA3", "#32CD32"];
for (let i = -2; i < 11; i++) {
  fontSize[`fluid-${i}`] = `var(--step-${i})`;
}

for (let i = 0; i < priorityColors.length; i++) {
  priorityTheme[`priority-${i + 1}`] = priorityColors[i];
  // if (i == 3) priorityTheme[`priority-${i}`] = priorityColors[2];
}

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,cmjs,mjs}"],
  theme: {
    extend: {
      colors: { ...priorityTheme },
      backgroundImage: {
        "hero-pattern":
          "url('/Users/dr3/development/issue-tracker/public/assets/images/bug-tracker-full.jpg')",
      },
      fontSize,
    },
  },
  plugins: [],
};
