import React, { useState } from "react";
import Modal from "./modal";
import './modal.css'

export default function ModelTest() {
    const [showModelPopup,setShowModalPopup]=useState(false)
    function handleTogleModalPopup(){
        setShowModalPopup(!showModelPopup)
    }
    function onClose(){
        setShowModalPopup(false)
    }
  return (
    <div>
      <button onClick={handleTogleModalPopup}>Open Modal Popup</button>
      {
        showModelPopup&&<Modal onClose={onClose} body={<div>Customized body</div>}/>
      }
    </div>
  );
}
