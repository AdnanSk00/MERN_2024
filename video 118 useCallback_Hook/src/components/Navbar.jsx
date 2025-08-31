import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered");
  return (
    <div>
        I am a {adjective} Navbar
        <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)


// memo() - memo will re render this Navbar only when prop will change in <Navbar/> from App.jsx
//          prevents from re rendering <Navbar/> again and again when count state change
//          But it is not working when we pass function() in Navbar prop. So will use useCallback() hook 
