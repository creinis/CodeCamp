#bin/bash

#! create new project with Vite using tailwind framework
npm create vite@latest ./ -- --template react

npm install -D tailwindcss postcss autoprefixer

#! initialize
npx tailwindcss init -p
