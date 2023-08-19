import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
      const postMessages = await PostMessage.find();
  
      console.log("server/contoler/posts/get",postMessages);

      res.status(200).json(postMessages);

    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

export const createPost = async (req,res) =>{
    
   const post = req.body;


   try{

   const newPost = new PostMessage(post);
   console.log("server/contoler/posts/posts",newPost);

         await newPost.save();

         res.status(201).json(newPost);

   }catch(error){
   
       res.status(409).json({message:error.message})
   }

} 