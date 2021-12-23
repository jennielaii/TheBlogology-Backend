const Blog = require('../models/post');

const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.findAll({ raw: true });
      res.render('index', { blogs });
    } catch (error) {
      console.log(error);
    }
  };

  const newBlogForm = (req, res) => {
    res.render('new');
  };
  
  const addNewBlog = async (req, res) => {
    const { title, image, body } = req.body;
    const newBlog = { title, image, body };
    newBlog.body = req.sanitize(newBlog.body);
    try {
      await Blog.create(newBlog);
      res.redirect('/blogs');
    } catch (error) {
      console.log(error);
      res.redirect('/blogs/new');
    }
  };
  
  const showMoreBlogInfo = async (req, res) => {
    const id = req.params.id;
    try {
      const blog = await Blog.findByPk(id);
      res.render('show', { blog });
    } catch (error) {
      console.log(error);
    }
  };
  
  const editBlogForm = async (req, res) => {
    const id = req.params.id;
    try {
      const blog = await Blog.findByPk(id);
      res.render('edit', { blog });
    } catch (error) {
      res.redirect(`/blogs/${id}/edit`);
    }
  };
  
  const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { title, image, body } = req.body;
    const updatedBlog = { title, image, body };
    updatedBlog.body = req.sanitize(updatedBlog.body);
    try {
      await Blog.update(updatedBlog, { where: { id } });
      res.redirect(`/blogs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
      await Blog.destroy({ where: { id } });
      res.redirect('/blogs');
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