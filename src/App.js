
import Header from './Components/Header';


import { AddPass } from './Components/AddPass';


function App() {
  

  const addPass = (website, title, desc)=>{
    console.log("Adding this task...",website,title, desc)
    
    
    
    
  }


  return (
    <>
    <Header title="Password Manager"/>
    <AddPass addPass={addPass}/>
   
    
    </>
  );
}

export default App;
