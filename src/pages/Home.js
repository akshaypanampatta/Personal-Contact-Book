
import Form from "../components/Form";
import Contact from "../components/Contact";

function Home({ FormSub, contacts,deleteContact,favToggle }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-sm-center my-5">
        <Form FormSub={FormSub} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {contacts.map((singleContact) => {
          return (
            <Contact
              key={singleContact.id}
              contact={singleContact}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          );
        })}
        {contacts.length === 0 ? (
          <div className="text-center ">
            <h1>No Contacts to show</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
