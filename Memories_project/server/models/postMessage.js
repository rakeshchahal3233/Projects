import mongoose from "mongoose";

const postSchema = mongoose.Schema({
 
    fname: {
        type: String,
        required: true,
      },
      lname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },

      fileToUpload:{
        type:String,
        
      },

      message:{
        type:String,
        required: true,
      }
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;