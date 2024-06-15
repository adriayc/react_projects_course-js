# Backroads App

## Working Application - Deployed
- backroads-html - working html/css/javascript project (contains assets)
- final (complete source code) - working react application
  - Navigate to the folder
  - Run 'npm install'
  - Once the dependencies are intalled run 'npm start'

## Create New React App
- Install
```bash
$ npx create-react-app@latest backroads-app
```
- Run dev server
```bash
$ npm start
```

## SRC Folder (boilerplate)
- index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles (typically global)
import './index.css';

// Convention to name it App and setup in a separate file
import App from './App';
// Import report web vitals
import reportWebVitals from './reportWebVitals';

// StrictMode
// StrictMode is a tool for highlighting potential problems in an application. Activates additional checks and warning for its descendants. Runs only in Development, does not impact the production build. RENDERS TWICE!!! Possible to remove.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- Remove in src
  - setupTests.js
  - reportWebVitals.js
  - App.test.js
- Be careful with multiple css files

App.js
```js
function App() {
  return <h1>Backroads App</h1>;
}
```

- Remove
  - Remove logo.svg
  - App.css

## Setup Structure
- public/index.html
  - Change title
  - Copy/past font-awasome link (from html project)
- index.css
  - Copy/paste css (from html project - css/styles.css)
  - Erro in line 209, just comment out for now
```css
@media screen and (min-width: 768px) {
  /* .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('../images/main.jpeg') center/cover no-repeat;
  } */
}
```

- src folder
  - Copy/paste images folder (from html project)
  - Move favicon.ico to public
- App.js
  - Refactor to <React.Fragment>
  - Copy/past all the content within body tags, up to <script> (index.html)
  - Select all "class" instances and refactor to "className" (CTRL + D)
  - Fix the comment bug (remove or comment out)
  - Don't worry about - Using target="_blank" without rel="noreferrer" warning, will fix it later
  - Move README.md from final to current project

## Setup Components
- In src create components folder
- In the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.js
  - Footer.js
- Setup components with default export (snippet - rafce)
- Carefully move the code form App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- Import and render all components in App.js (try auto imports)
- Result is going to be the same, it's just easier to manage the code
- Again, it's just my preference to split up code in such way. You can split it up in any way that makes the most sense to you.

## Navbar
- First let's fix the image (logo)
  - Setup import from images and update source
```js
// Import
import logo from '../images/logo.svg';

// JSX
<img src={logo} className="nav-logo" alt="backroads" />
```

## Smooth Scroll
- html/css feature
```html
<!-- link -->
<a href="#services"> services </a>
<!-- element -->
<section id="services"></section>
```

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

## Page Links
- Refactor repeating code
```js
<li>
  <a href='#home' className='nav-link'>
    home
  </a>
</li>
```

- Figure out which data is repeating hint (href, text)
- In src create data.js and setup a structure
  - (hint - [{property: value}, {property: value}])
- Export/import iterate over the list, return elements and inject data
```js
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
```

```js
import { pageLinks } from '../data';

{pageLinks.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.href} className='nav-link'>
        {link.text}
      </a>
    </li>
  );
})}
```

## Nav Icons (social-links)
- Repeat the same steps (as with page links)
- Add rel='noreferrer'
```js
{socialLinks.map((link) => {
  const { id, href, text } = link;
  return (
    <li key={id}>
      <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
        <i className={icon}></i>
      </a>
    </li>
  );
})}
```

## Hero
- Change title or text (optional)
- Fix the image (path in css)

## About
- Fix the image (0hint - just like with logo in the navbar)

## Section Title
- In components create Title.js
- Get the structure form one of the sections
- Setup two props
- Replace in About, Service, Tours
```js
const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
```

About.js
```js
// Import
import Title form './Title';

// Display
<Title title='about' subTitle='us' />
```

## Services
- Refactor repeating code (hint - just like with page and social links)
  - Setup data, export/import, iterate

data.js
```js
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
  },
  // Rest of the objects
];
```

Services.js
```js
import Title from './Title';
import { services } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
```

## Tours
- Refactor repeating code

## Footer
- Refactor repeating code
- Re-use page and social links
- In the provide current year (hint - {})

## Alternative Approach (optional)
- In components create PageLinks.js
- Import pageLinks
- Retrun the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - The more "moving parts" you will have the harder it's going to be to manage
  - My personal preference, if possible just use data

## Challenge (optinal)
- Create more components (essencially, spit up the code more)
- Fin all map methods and move elements to separate components
- By the end of the video you should have four additional components
  - Tour.js
  - Service.js
  - SocialLink.js
  - PageLink.js

## Continuous Deployment
- Fix warning (About Section)
- Netlify account
- GitHub account
- Basic git commands:
  - Remove existing git repo
    - Mac: rm -rf .git
    - Windows: rmdir -Force -Recurse .git
    - Windows: rd /s /q .git
      Windows commmands were shared by students and I gave not personally tested them.
  - Setup new repo
    - git init create an empty git repository
    - git add adds new or changed files in your working directory to the Git staging area
    - git add . adds entire project apart form files/directories specified in .gitignore
    - git commit -m "first commit" A shortcut command that immediately creates a commit with a passed commit message
    - push to github git remote add origin git@github.com:your-profile/repo-name; git branch -M main; git push -u origin main
