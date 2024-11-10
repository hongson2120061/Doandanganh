import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from './pages/home/Home';
import { LoginPage } from './pages/login/Login';
import { NotFoundPage } from './pages/notFound/NotFound';
import { LayoutDefault } from './layout/LayoutDefault';
import { SignUpPage } from './pages/signup/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element ={<LayoutDefault/>}>
              <Route path ="/" element={<HomePage/>} />
              <Route path = "/signup" element={<SignUpPage/>} />
              <Route path ="/login" element ={<LoginPage/>} />
              <Route path ="*"  element ={<NotFoundPage/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
