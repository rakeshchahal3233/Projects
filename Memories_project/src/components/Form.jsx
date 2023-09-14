import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/posts.js'

function Form() {

    const dispatch = useDispatch();

 const [data,setData] = useState({
    fname:" ",
    lname:" ",
    email:" ",
    fileToUpload:" ",
    message:" ",

 });

 const handelChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    
    setData({...data,[name]:value});
    console.log(data)
    
 }

 const handleSubmit=(e) =>{
    e.preventDefault();
    dispatch(createPost(data));
    console.log("submit",data);

    setData({
    fname:" ",
    lname:" ",
    email:" ",
    fileToUpload:" ",
    message:" ",
    })
    
 } 

  return (
    <div> 
        <div class="container"> 
        <div class="text-center mt-5" style={{marginLeft:'300px'}}>

            <h1>Contact Form</h1>
                
        </div>

    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light " style={{width:'40rem'}}>
            <div class="card-body bg-light">
       
            <div class = "container">
                <form id="contact-form"onSubmit={handleSubmit} >

            <div class="controls">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name">Firstname *</label>
                            <input id="form_name" type="text" name="fname" class="form-control" required="required" placeholder="Please enter your firstname *"  data-error="Firstname is required." value={data.fname} onChange={handelChange}/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Lastname *</label>
                            <input id="form_lastname" type="text" name="lname" class="form-control" required="required" placeholder="Please enter your lastname *"  data-error="Lastname is required." value={data.lname} onChange={handelChange}/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Email *</label>
                            <input id="form_email" type="email" name="email" class="form-control" required="required" placeholder="Please enter your email *"  data-error="Valid email is required." value={data.email} onChange={handelChange}/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            
                            {/* <label for="form_need">Select image to upload:</label>
                          <input type="file" name="fileToUpload" id="fileToUpload" required="required" data-error="Please specify select the image." value={data.fileToUpload} onChange={handelChange}/> */}
                          {/* <input type="submit" value="Upload Image" name="submit"/> */}
                            
                          <div>
                                <FileBase 
                                type = "file"
                                 multiple = {false}
                                onDone= {(base64)=> {setData({...data,fileToUpload:base64})}}
                                />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="form_message">Message *</label>
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4"  data-error="Please, leave us a message." value={data.message} onChange={handelChange}></textarea>
                            </div>

                        </div>

                    <div class="col-md-12">

                  <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Send Message"/>
                        
    
                </div>
          
                </div>

        </div>
         </form>

         
        </div>
            </div>


    </div>

    </div>

</div>
</div>

    </div>
  )
}

export default Form

// (e)=>setData({...data,fname:e.target.value})