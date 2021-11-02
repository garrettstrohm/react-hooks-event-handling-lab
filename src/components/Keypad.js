import React from "react"

function Keypad(){
    const enteringPassword = () => console.log('Entering password...')
    
    return(
        <input onChange={enteringPassword} type="password" />
    );
}

export default Keypad;
