import Body from "./Components/Body";
import Hedear from "./Components/Header";
import Style from './Style/rootStyle.module.css'
import Scope from "./Components/Scope";
import Footer from "./Components/Footer";
import React, {useState} from 'react';
import Modal from "./Components/Modal";

function App() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className={Style.bgcolor}>

        <Hedear/>
        <Body/>
        <Scope/>
        <Footer/>
        <div>
            <button onClick={()=>setIsOpen(true)}>Open Modal</button>
            <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                <label>First Name</label>
                <input type={"text"} name={"first_name"}/>

                <label>Last Name</label>
                <input type={"text"} name={"last_name"}/>

                <label>Email</label>
                <input type={"email"} name={"email"}/>

                <label>Phone Number</label>
                <input type={"number"} name={"phone"}/>

                <label>Country</label>
                <input type={"text"} name={"country"}/>

                <label>Company</label>
                <input type={"text"} name={"company"}/>

                <label>Message</label>
                <textarea name={"msg"}>

                </textarea>
            </Modal>
        </div>
    </div>
  );
}

export default App;
