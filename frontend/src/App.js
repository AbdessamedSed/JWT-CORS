import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
        
          <Header />
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path='/' Component={HomePage}></Route>
            </Route>
            <Route element={<LoginPage />} path='/login' />
          </Routes>
        
    </div>
  );
}

export default App;
