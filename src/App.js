import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewChat from './components/NewChat';
import ChatPage from './components/ChatPage';

function App() {

  return (
    <div>
     <Router>
       <container>
         <Switch>
           <Route path='/chat'component={NewChat}></Route>
           <Route path='/chat1'component={ChatPage}></Route>
           {/* <Route path='/chat2'component={practive}></Route> */}
         </Switch>


       </container>


     </Router>
    </div>
  );
}

export default App;
