module.exports = {
  postBlog: (req, res) => {
    const db = req.app.get("db");
    const { author, cat, content, title } = req.body;
    console.log(req.session, "session check");
    const { username } = req.session.user;
    console.log(username, "id session check");

    db.add_blog([author, cat, content, title])
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
  }
};
