CONTENTFUL CMS PROJECT

* Create React Project (VITE)
  - Create app
    $ npm create vite@latest my-react-app -- --template react
    $ cd my-react-app
    $ code .      // Open VSCode
    $ npm install
    $ npm run dev
    $ npm install && npm run dev

* Contentful (URL: https://www.contentful.com/)
  - Create y login
  - Create content type (Content model -> Click 'Design your content model' -> Click 'Create a content type')
    Create new content type
      > Name: projects
    Click 'Create'
  - Add field (Content model -> Click 'project_name' -> Click '+ Add field')
      Add new field
      > Text
        New Short text Field
          > Name: title
          > Short text, exact search
          Click 'Add and configure'
        Name and field ID
          Click 'Confirm'
      > Text
        New Short text Field
          > Name: url
          > Short text, exact search
          Click 'Add and configure'
        Name and field ID
          Click 'Confirm'
      > Media
        Add field
          > Name: image
          > Select type: One file
          Click 'Add and configure'
        Name and field ID
          Validation
            > Require field
          Click 'Confirm'
      Click 'Save'
  - Add entry (Content -> Click '+ Add entry' -> Click 'Create & edit an entry')
    > title: {{title_text}}
    > url: {{url_text}}
    > image: (Click '+ Add new media' -> Open file selector or Drag and drop a file to upload...)
    Click 'Publish'
    NOTE: Add more entries...
  - Contentful API Docs
    + Add API key (Settings -> API keys -> Click '+ Add API key')
      > Space ID: {{SPACE_ID}}
      > Content Delivery API (Access token): {{API_KEY}}
    + API Docs (Docs)
      > Contentful and JavaScript tutorial
      > Content Delivery API

* Deploy Contentful (Netfly)
  - Create and push repo to GitHub
    + Create repo
      > Repository name: temp-contenful-app
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
            > Key: VITE_API_KEY       Value: {{YOUR_API_KEY}}
            > Key: VITE_SPACE_ID      Value: {{YOUR_SPACE_ID}}
        Click 'Deploy site'
    +  Deploys
      - Deploy log
      - Click 'Trigger deploy' -> 'Clear cache and deploy site' (Re-deploy)
    + Site overview -> Click 'URL_NETLIFY'
  - Webhooks
    + Netlify
      > Site overview -> Site settings -> General | Build & deploy -> Build hooks | Click 'Add build hook'
        > Build hook name: Contentful CMS
        > branch to build: main
        Click 'Save'
      NOTE: Copy Contentful CMS URL: https://api.netlify.com/build_hooks/xxxx
    + Contentful
      > Settings -> Webhooks -> Click '+ Add Webhook'
        > Name: Netlify Hook
        > URL:
          POST - {{CONTENTFUL_CMS_HOOK_URL}}
        > Trigger for all events
        Click 'Save'
    NOTE: Update entry in 'Contentful' and a rebuild is automatically executed in 'Netlify'
