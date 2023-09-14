import React from 'react'
import {  useSelector } from 'react-redux';

function Card() {

const data = useSelector((state)=>state);

  return (
  
    <div class="mx-auto" >
    <div class="card " style={{width: '18rem',margin:'7rem'}}>

  <div>
    {data.map((post) =>(
    <div key={post.id}>
      <img class="card-img-top" src="https://i.pinimg.com/originals/1a/6d/6d/1a6d6de9079f5b7c71707b5cbcf4c0e3.jpg" alt="Card cap" style={{height:'260px'}}/>
      <div class="card-body" >
      <h5 class="card-title">{post.fname} </h5>< h6 class="card-title">{post.lname}</h6>
      <p class="card-text">{post.email}</p>
      <p class="card-text">{post.message}</p>
    </div>
    </div>
   ))}
   </div>
  </div>
  </div>
  )
}
// style={{margin:'50px'}}
export default Card;

// import React from 'react';
// import { useSelector } from 'react-redux';

// function Card() {
//   const posts = useSelector((state) => state.posts);
//   console.log("Hello", posts);

  

//   return (
//     <div className="mx-auto">
//       <div className="card" style={{ width: '18rem', margin: '7rem' }}>
//       <div>
//     <h1>Database Data</h1>
//     {posts.length === 0 ? (
//       <p>Loading...</p>
//     ) : (
//       <ul>
//         {posts.map(item => (
//           <li key={item.id}>{item.fname}</li>
//         ))}
//       </ul>
//     )}
//   </div>
//       </div>
//     </div>
//   );
// }

// export default Card;