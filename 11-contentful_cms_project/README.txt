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
