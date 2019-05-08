update blogs
set post_text = $2
where post_id = $1;
select * from blogs;