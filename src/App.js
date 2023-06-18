import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';


import { AddPass } from './Components/AddPass';
import React, {useState} from 'react';

function App() {
  

  const addPass = (website, title, desc)=>{
    console.log("Adding this task...",website,title, desc)
    let sno;
    
    const myList = {
      sno: sno,
      website: website,
      title: title,
      desc: desc,
    }
    
  }


  return (
    <>
    <Header title="Password Manager" searchBar="true" />
    <AddPass addPass={addPass}/>
   
    
    </>
  );
}

export default App;
