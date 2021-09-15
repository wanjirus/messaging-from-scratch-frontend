import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatPage from './components/ChatPage';
import UploadFiles from './components/upload-files.component';
import Input from './components/Input';
// import FileInput from './components/FileInput.Jsx';

function App() {
  return (
    <div>
     <Router>
       <container>
         <Switch>
         <Route path='/file'component={UploadFiles}></Route>
           <Route path='/chat1'component={ChatPage}></Route>
           <Route path='/just'component={Input}></Route>
         </Switch>


       </container>


     </Router>
    </div>
  );
}

export default App
