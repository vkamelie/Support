module.exports = {
  addComment: (req, res) => {
    const db = req.app.get("db");

    const { comment } = req.body;

    db.add_comment([comment])
      .then(post => {
        res.status(200).send(post);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getComments: (req, res) => {
    const db = req.app.get("db");
    db.get_comments().then(comments => {
      res.status(200).send(comments);
    });
  }
};
