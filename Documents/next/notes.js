// [1]

// react : foundation - structural, navigational mechanism & architecture : next - sits on top of react 
// framework for creating pre-rendered react websites
// via both server-side rendering & static site generation - ssr & ssg 
// server-side rendering : react component are rendered into html pages on the server after page request comes from browser
// static site generation : react component are rendered into html pages at "build" time & can deploy pages & js bundles to the web
// next as opposed to client-side rendering 

// benefits of ssr & ssg :
// pre-rendering improves performance 
// better search engine optimization(seo) - since "response" from server is fully-rendered html page rather than "blank" in regular application 
// projects : basic functionality (routing & fetch) & deploy to the web 
// create next-app : type "npx create-next-app people-directory" 
// every page in next has its own component
// "dev" which runs "next dev" to run local-development-server - type "npm run dev"

// index.js is homepage

// [2-3]
// pages & routes 
// route-name is tied to component-file name 
// creating component : type "sfc" - to create stateless-functional component 
// install "simple react snippets"

// in sub-folder : next create route base on the sub-folder
// creating drop-ins or resuable components in "comp" folder

// [4]
// linking btw pages
// using "Link" component - adds the ability to do client-side navigation in the browser
// meaning different pages loaded via js & not new html-request to server 
// in Navbar.js type "import link form next/link" : <Link href=""><a>Home</a></Link>

// code-spliting concept : only needed js for specific page is being serverd via server - each page has its own js-bundle & served only once when navigating to the page for the first-time
// pre-fetch all necessary codes for when the user click on a link 

// [5-6]
// creating "Layout" component - Layout file 
// nav & footer inside and would wrap everything in app.js & would get access to what nested in the Layout : <Component {...pageProps} />
// "childern" of Layout

// in module.css : selectors shouls be pure-selector meaning class-selectors not element-selectors

// [7]
// creating custome 404-page 
// 404.js dosen't create url but creating a component which is a catch-all

// [8]
// redirecting user(automatic) - 
// using useEffect-hook(react) & useRouter(next/router) 

// [9]
// images & metadata - static assets 
// in next-v10 : image-component to use instead of img-tag
// width & height property - to make it responsive 

// adding custom-title in the "head" in each page 
// in index.js : Head-component - 2nd line is metadata 

// [10]
// fetching data 
// using json-placeholder for dummie-data for "users"
// instead of useFetch-useEffect(react) - in next, should fetch before render using "getStaticProps" which async-function 
// runs at "build" time as app is built & component is rendered - never runs in browser
// inside ninja index.js

// [11-12]
// dynamic-routes 
// which is : ninja/id - inside [id].js meaning [id] it is router-parameter and is changeable
// setting up "details-page" component which is [id].js for each ninja
// next generate "route" & "html-page" for each ninja & assign it specific-route

// specify for next : what details, routes and pages needs to be created at build-time basee on our data
// using "getStaticPath" function - async & inside [id].js 
// return { path: [{}, {}, {params: { id }} ]} - each "object" represent a "route" & in each object there would be "params property" to specify parameters of specific route

// [13]
// fetching single item
// fecthing each individual-user seperately & pass into component as a prop
// using next : to build "static" pages & js=bundle based on our components 
// type "nom run buid"

// [14]
// deploying
// "vercel" to sync deployment with github
// create repo in git & in integerated terminal type "git remote add origin + repo-address" - to link 2 repos
// then "git add ." + "git commit" + "git push -u origin main" & then import repo in vercel