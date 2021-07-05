import './App.css';
import Header from './fixed_container/Header';
import LeftNav from './fixed_container/LeftNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyHighlightPage from './pages/MyHighlightPage';
import DetailPage from './pages/DetailPage';
import Morepage from './pages/Morepage';
import MyHighlightDetailPage from './pages/MyHighlightDetailPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LeftNav />
        <Switch>
          <Route path={['/', '/home']} exact component={HomePage} />
          <Route path="/home/pages/:id" component={DetailPage} />
          <Route path="/myhighlight" exact component={MyHighlightPage} />
          <Route path="/myhighlight/:id" component={MyHighlightDetailPage} />
          <Route path="/more" component={Morepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
