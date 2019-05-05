select users.username,
        blogs.post_id,
        blogs.post_title,
        blogs.post_text,
        blogs.category
from users
inner join blogs
    on users.username = blogs.author;
