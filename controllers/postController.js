const Blog = require('../models/post');
const models = require('../models') 

const getAllBlogs = async (req, res) => {
    try {
      const blogs = await models.post.findAll();
      res.json({ blogs });
    } catch (error) {
      console.log(error);
    }
  };

  const newBlogForm = (req, res) => {
    res.render('new');
  };
  
  const addNewBlog = async (req, res) => {
    const newBlog = { userid: req.body.userid, title: req.body.title, description: req.body.description }
    try {
      await models.post.create(newBlog);
    } catch (error) {
      console.log(error);
    }
  };
  
  const showMoreBlogInfo = async (req, res) => {
    const id = req.params.id;
    try {
      const blog = await models.post.findByPk(id);
      res.render('show', { blog });
    } catch (error) {
      console.log(error);
    }
  };
  
  const editBlogForm = async (req, res) => {
    const id = req.params.id;
    try {
      const blog = await models.post.findByPk(id);
      res.render('edit', { blog });
    } catch (error) {
      res.redirect(`/blogs/${id}/edit`);
    }
  };
  
  const updateBlog = async (req, res) => {
    const id = req.params.id;
    const updatedBlog = { title: req.body.title, description: req.body.description };
    try {
      await models.post.update(updatedBlog, { where: { id: id  } });
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
      await models.post.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    getAllBlogs,
    newBlogForm,
    addNewBlog,
    showMoreBlogInfo,
    editBlogForm,
    updateBlog,
    deleteBlog,
  };