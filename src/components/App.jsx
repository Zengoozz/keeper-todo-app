// import contacts from "../contacts";
// import ContactCard from "./ContactCard";
// import React, { useState } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import NotesList from "./NotesList";


function App() {
    let [logged, toggleBoolean] = useState(true);
    

    function toggleLogged() {
        toggleBoolean(!logged);
    }

    return (
        <div className="app">
            <Heading isLogged={logged} switchFn={toggleLogged} />
            <div>
                <NotesList isLogged={logged} />
            </div>
            <Footer />
        </div>
    );
}

export default App;




/* <div className="cards-container">
    {contacts.map(contact =>
    (<ContactCard
        key={contact.id}
        name={contact.name}
        image={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
    />))}
</div> */