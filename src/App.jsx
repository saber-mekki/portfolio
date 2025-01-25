import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import BlogBar from "./containers/BlogBar";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";
import Blog from "./components/Blog"; // Import the Blog component
import ReactGA from "react-ga";

const App = () => {
  React.useEffect(() => {
    ReactGA.initialize("UA-207355712-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Navigation />
              <Greetings />
              <Skills />
              <Proficiency />
              <Education />
              <Experience />
              <Projects />
              <GithubProfile />
            </>
          )}
        />
        <Route
          path="/blog"
        
          render={(props) => (
            <>
              <Navigation />
              <BlogBar />
              <Blog /> 
            </>
          )}
        />
             <Route path="/blog" element={<Blog />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
