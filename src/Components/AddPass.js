import React, { useState } from 'react'


export const AddPass = ({addPass}) => {
    const [website, setWebsite] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!website || !title || !desc){
            alert("Website or Title or Description cannot be blank")
        }
        addPass(website,title, desc);
    }
    return (
        <div className='container my-3'>
            <h3>
                Manager 
            </h3>
            <form onSubmit={submit}>
                <div className='mb-3'>
                    <label htmlfor="website" className='form-label'>Website Name</label>
                    <input type="text" value = {website} onChange={(e)=>setWebsite(e.target.value)} className='form-control' id="website"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Username</label>
                    <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Password</label>
                    <input type="password" value = {desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-primary btn-sm" >Add</button>
            </form>
        </div>
    )
}
