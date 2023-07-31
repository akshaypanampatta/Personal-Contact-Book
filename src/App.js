import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const FormSub = (data) => {
    setContacts([...contacts, data]);
  };
  const deleteContact = (id) => {
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    setContacts(newContact)
  };
  const favToggle=(id)=>{
    let updatedContact=contacts.map((singleContact)=>{
        return singleContact.id===id
        ?{...singleContact,fav: ! singleContact.fav}
        :singleContact;
    })
    setContacts(updatedContact);

  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              FormSub={FormSub}
              contacts={contacts}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <Favourite
              contacts={contacts}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
