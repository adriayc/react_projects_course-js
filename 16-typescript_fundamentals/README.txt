TYPESCRIPT FUNDAMENTALS

* Create React Project (VITE - URL: https://vite.dev/guide/)
  - Create app
    $ npm create vite@latest typescript-tutorial -- --template vanilla-ts
      > Ok to proceed? (y) y
    $ cd typescript-tutorial
    $ code .                      // Open VSCode
    $ npm install                 // Install dependencies
    $ npm run dev                 // Starter
    $ npm install && npm run dev  // Install dependencies and starter
    $ npm run build               // Build the app (For production)
  - Install dependencies
    + Zod (Schema declaration and validation)
      $ npm install zod
    + BCrypt.js
      $ npm i bcryptjs
      $ npm i --save-dev @types/bcryptjs
