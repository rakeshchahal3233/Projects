import * as api from '../api/index.js'

//Now we have to create action

export const getPosts = () =>async (dispatch)=> {

  try{
       const { data } = await api.fetchPosts();

       console.log("client/src/action/posts/get",data);

       dispatch({ type: 'FETCH_ALL', payload: data });

  }catch(error){
        console.log(error);
  }
};

export const createPost = (post)=> async (dispatch)=>{

    try {

      const { data } = await api.createPost(post)

      dispatch({ type:'CREATE',payload:data});

       console.log("client/src/action/posts/post",data);
      
    } catch (error) {
       console.log(error);
    }
};

// export default createPost;