{
  this.props.user.username === "username" ? (
    <button
      style={{ float: "right", background: "white" }}
      onClick={() => this.props.updateB(blog.post_id)}
    >
      {editMode === false ? "Edit Post" : "Save Post"}
    </button>
  ) : null;
}
