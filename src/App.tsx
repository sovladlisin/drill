import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import AlertContainer from './components/AlertContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [authWindow, setauthWindow] = React.useState(false)
  return <Router>
    <AlertContainer />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />


    </Switch>
    <Footer />
  </Router>
    ;
};

export default App;
