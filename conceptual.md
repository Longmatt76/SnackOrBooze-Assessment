### Conceptual Exercise


Answer the following questions below:


- What is the purpose of the React Router?
 
  React Router is a JS framework that allows for the building of single page applications through client side routing.


- What is a single page application?


  A single page application is a web app that allows data to be updated dynamically without refreshing or reloading the page by using client side routing.


- What are some differences between client side and server side routing?


  With server side routing whenever you click on a link or enter a URL you are making a request to a server which then returns a response that includes html and the html is loaded with a full refresh of the page. With client side routing whenever you click a link or enter a URL javascript running in the browser retrieves the needed data and updates the UI and URL without refreshing the page. Because of this difference client side routing results in a faster, smoother browsing experience because the application only needs to fully load once and after that it will update dynamically without page refreshes whereas with server side routing every request will result in a full refresh.


- What are two ways of handling redirects with React Router? When would you use each?


  You can either render a redirect component and specify a 'to' prop or you can push onto the history object using the useHistory hook. The useHistory method allows the user to back click to the previous page whereas the redirect component does not, therefore you would use the redirect method for when someone goes somewhere they shouldn't because it will just instantly redirect them without a trace. The useHistory approach would be used more in a 'ok you did that, now go here' situation such as submitting a form, they're redirected to another page but could go back if they wanted.


- What are two different ways to handle page-not-found user experiences using React Router?


  You could have a catch all route that redirects elsewhere or you could have the catch all instead render a custom "page not found" element.


- How do you grab URL parameters from within a component using React Router?


  You grab URL parameters within components by using the useParams hook which will have access to any route parameter that's indicated by a colon.


- What is context in React? When would you use it?


  React context is an external api/library that allows you to share props directly from one component to another. The purpose of React context is to eliminate 'prop drilling' which is the process of passing props down through multiple components (that don't even use them) until you reach the component that finally does use them. React context allows you to skip all the middlemen and go directly from the source of the prop to component that needs to use it.    


- Describe some differences between class-based components and function
  components in React.


  Well they have different syntax, class components use javascript classes whereas functional components are just pure javascript functions that return a JSX element. Functional components make use of hooks and class components do not which means they handle state differently. With functional components you can have multiple states via useState whereas class based components just have a single state object. Hooks (like useEffect) also replace the old class based lifecycle methods. All in all functional components today in React are just better, faster and easier to use than their old class based counterparts.  


- What are some of the problems that hooks were designed to solve?


  Some of the biggest problems that hooks address is that they minimize the amount of repetitive code and logic and they also make it much easier to share logic between components.
