const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//define the schema(structure of data)
const blogSchema = new Schema({UserName:String});
//create model based on that schema
const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;
