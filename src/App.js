import './App.css';
import AuthUser from './components/AuthUser';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import BlogDetail from './components/BlogDetail';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AdminAuth from './Admin/AdminAuth';
import CreateBlog from './Admin/CreateBlog';
import Path from './Admin/Path';
import ControlBlogs from './Admin/ControlBlogs';
import UpdateBlog from './Admin/UpdateBlog';
import PageNotFound from './components/PageNotFound';

function App() {

  let AuthUsers = localStorage.getItem("AuthenticatedUser");

  // make it false userAuthentication after 30 min to protect the users account
  // setTimeout(() => {
  //   window.localStorage.clear("AuthenticatedUser");
  // }, 20000);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AuthUser />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/Register' element={<AuthUser />} />
        {/* <Route path='/HomePage' element={ AuthUsers ? <HomePage /> :  <AuthUser /> } /> */}
        <Route path='/HomePage' element={ <HomePage />} />
        {/* <Route path='/BlogDetail' element={ AuthUsers ? <BlogDetail /> :  <AuthUser />} /> */}
        <Route path='/BlogDetail' element={ <BlogDetail /> } />

        {/* admin route */}
        <Route path='/BlogAdmin' element={<AdminAuth />} />
        <Route path='/Path' element={<Path />} />
        <Route path='/CreateBlog' element={<CreateBlog />} />
        <Route path='/DeleteandUpdateBlogs' element={<ControlBlogs />} />
        <Route path='/UpdateBlog' element={ <UpdateBlog />} />
        <Route path='*' element={ <PageNotFound />} />
      </Routes>
    </Router>
    </>  
  );
}

export default App;
