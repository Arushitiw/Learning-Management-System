###setup tailwind
[tail wind official instruction doc](https://tailwindcss.com/docs/installation)
1> install tailwind
npm install -D tailwindcss

2>create tailwind config file 
npx tailwindcss init

3>add file extension to the content property
"./src/**/*.{html,js}"


4>add the tailwind directive at the top of the index.css file
....
@tailwind base;
@tailwind components;
@tailwind utilities;
...

5>adding plugins and dependencies
....
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

....