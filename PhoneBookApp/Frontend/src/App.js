import { Route, Routes } from 'react-router-dom';
import './Assets/CSS/App.css'
import LandingPage from './Pages/Others/LandingPage';
import Register from './Pages/Client/Register';
import Home from './Pages/Client/Home';
import SearchPage from './Pages/Client/SearchPage';
import AddContact from './Pages/Client/AddContact';
import EditContact from './Pages/Client/EditContact';
import GroupContact from './Pages/Client/GroupContact';
import FAQ from './Pages/Client/FAQ';
import TermCondition from './Pages/Client/TermCondition';
import ContactList from './Components/ContactList'
import ImportContacts from './Components/ImportContacts'
import Dashboard from './Pages/Admin/Dashboard';
import AdminAuth from './Pages/Admin/Auth/AdminAuth';
import UserAuth from './Pages/Client/Auth/UserAuth';
import Feedbacks from './Pages/Admin/Feedbacks';
import Unauthorized from './Pages/Others/Unauthorized';
import ContactForm from './Pages/Others/ContactForm'
import UserList from './Components/UserList';
import Info from './Pages/Client/Info';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/signin' element={<Register />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/t&c' element={<TermCondition />} />
        
        
        <Route path='/user' element={<UserAuth />}>
          <Route path='home' element={<Home />} >
            <Route index element={<ContactList />} />
            <Route path='search' element={<SearchPage/>} />
            <Route path='addcontact' element={<AddContact/>} />
            <Route path='editcontact' element={<EditContact/>} />
            <Route path='groupcontact' element={<GroupContact/>} />
            <Route path='import-contacts' element={<ImportContacts/>} />
            <Route path='info' element={<Info   />} />
          </Route>
        </Route>

        <Route path='/admin'element={<AdminAuth />}>
          <Route path='home' element={<Dashboard />} >
            <Route index element={<UserList />} />
            <Route path='feedback' element={<Feedbacks/>} />
          </Route>
        </Route>

        <Route path='*' element={<Unauthorized />} />


      </Routes>
    </>
  );
}

export default App;
