module.exports = {
  postBlog: (req, res) => {
    const db = req.app.get("db");
    console.log("REQ.BODY:", req.body);
    const { title, content, cat } = req.body;
    console.log("title:", title, "content:", content, "cat:", cat);
    const { username } = req.session.user;
    // console.log(username, "id session check");
    console.log(username, title, content, cat);

    db.add_blog([username, title, content, cat])
      .then(post => {
        res.status(200).send(post);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getAllBlogs: (req, res) => {
    const db = req.app.get("db");
    db.get_blogs().then(blogs => {
      res.status(200).send(blogs);
    });
  },

  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;

    db.delete_blog(post_id).then(blogs => {
      res.status(200).send(blogs);
    });
  },

  updatePost: (req, res) => {
    const db = req.app.get("db");

    const { post_id, post_text } = req.params;
    console.log(req.params);

    db.update_blog([post_id, post_text]).then(blog => {
      res.status(200).send(blog);
    });
  }
};
