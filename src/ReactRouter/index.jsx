import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/about'>About</Link>
    //       </li>
    //       <li>
    //         <Link to='/topics'>Topics</Link>
    //       </li>
    //     </ul>

    //     <Switch>
    //       <Route path='/about'>
    //         <About />
    //       </Route>
    //       <Route path='/topics'>
    //         <Users />
    //       </Route>
    //       <Route path='/'>
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Users />
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

function Users() {
  return <h2>Users</h2>;
}
