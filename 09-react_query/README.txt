* Create React Project (VITE)
  - Create app
    $ npm create vite@latest my-react-app -- --template react
    $ cd my-react-app
    $ code .      // Open VSCode
    $ npm install
    $ npm run dev
    $ npm install && npm run dev
  - NOTE: In the latest version of React Query (V5), the 'isLoading' property has been replaced with 'isPending'.

* Thunder Client (VSCode)
  - Create Env
    + Create a new Global Environment
      > Variable Name: URL
      > Value: http://localhost:5000/api/tasks
      Click 'Save'
  - Create Collections
    > Collection Name: Tasks App
    NOTE: Create new 'Request' within the collection
      + GET
        - Click 'New Request'
          > GET: http://localhost:5000/api/tasks
          Click 'Send'
      +  POST
        - Click 'New Request'
          > POST: http://localhost:5000/api/tasks
          > POST: {{URL}}
            > Body -> JSON:
              {
                "title": "another task"
              }
            Click 'Send'
      + UPDATE
        - Click 'New Request'
          > PATCH: {{URL}}/LeK0eVt7qeY7S63I1S3wX
            > Body -> JSON:
              {
                "isDone": true
              }
            Click 'Send'
      + DELETE
        - Click 'New Request'
          > DELTE: {{URL}}/WQA3SraMp8YOyhxp_BrfH
          Click 'Send'

* Server
  - Copy and paste the 'server' directory
  - Start and run the app
    $ npm install
    $ npm start
