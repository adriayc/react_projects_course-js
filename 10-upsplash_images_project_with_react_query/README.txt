UNSPLASH IMAGES PROJECT (WITH REACT QUERY)

* Create React Project (VITE)
  - Create app
    $ npm create vite@latest my-react-app -- --template react
    $ cd my-react-app
    $ code .      // Open VSCode
    $ npm install
    $ npm run dev
    $ npm install && npm run dev

* Unsplash
  Beautiful, free images and photos that you can download and use for an project. Better than any royalty or stock photos.
  - Info (URL: https://unsplash.com/)
  - Register as a developer (URL: https://unsplash.com/developers)
  - Obtain URL
    + Create 'New Application'
      * API Use and Guidelines
        > Select all conditions
        Click 'Accept terms'
      * Application information
        > Application name: Search Image
        > Description: Search images in react
        Click 'Create application'
  - Public authentication (URL: https://unsplash.com/documentation#public-authentication)
    > PATH_URL: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    > ACCESS_KEY: YOUR_ACCESS_KEY
  - Thunder Client
    + Search Images
      > GET: https://api.unsplash.com/search/photos?client_id={{YOUR_ACCESS_KEY}}&query=cat
