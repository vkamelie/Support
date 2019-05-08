
select blogs.post_id,
    post_comments.comment_id,
    post_comments.post_id,
    post_comments.commnet_author,
    post_comments.comment_post
from blogs
inner join post_comments
    on blogs.post_id = post_comments.comment_id