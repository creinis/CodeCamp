#bin/bash

#! create new project with Vite using tailwind framework
npm create vite@latest ./ -- --template react

npm install -D tailwindcss postcss autoprefixer

#! initialize
npx tailwindcss init -p

#! G-sap animation
npm install gsap @gsap/react

#! Three.js and utility helpers (3D)
npm install three @react-three/drei @react-three/fiber

