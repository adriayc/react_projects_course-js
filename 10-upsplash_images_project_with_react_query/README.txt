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

* Deploy Unsplash (Netfly)
  - Create and push repo to GitHub
    + Create repo
      > Repository name: temp-unsplash-images
      > Public
      Click 'Create repository'
    + Push repo
      $ git init
      $ git add .
      $ git commit -m "First commit"
      $ git remote app origin git@github.com:{{user_name}}/{{repo_name}}.git
      $ git branch -M main
      $ git push -u origin main
  - Netlify
    + Create and login
    + Sites -> Click 'Add new site' | 'Import an existing project'
      > Connect to Git provider -> Click 'GitHub'
      > Pick a repository form GitHub -> Search repos: {{repo_name}} -> Click Repo
        > Site settings for {{user_repo}}/{{repo_name}}
        > Click 'Show Advanced'
          > Environment variables -> Click 'New variable'
            > Key: VITE_API_KEY       Value: {{YOUR_ACCESS_KEY}}
        Click 'Deploy site'
    +  Deploys
      - Deploy log
      - Options -> Clear cache and retry with latest branch commit (Re-deploy)
    + Site overview -> Click 'URL_NETLIFY'
