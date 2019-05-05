drop table if exists post_comments;
drop table if exists blogs;
drop table if exists users;


CREATE TABLE users(
           
    user_id  SERIAL PRIMARY KEY, 
    username VARCHAR(30) NOT NULL UNIQUE, 
    password VARCHAR(64) NOT NULL,
    name VARCHAR(100) NOT NULL
     
);

create table blogs(
    post_id serial primary key,
    author text references users(username),
    post_title varchar(60) not null,
    post_text text,
    category text
);
 
 
create table post_comments(
    comment_id serial primary key,
    post_id int references blogs(post_id),
    commnet_author text references users(username),
    comment_post text

);

insert into users(username, password, name)
values('a', '$2b$12$f.aN6hvKguUHlrj03IHCQub5QOuJwkXs2QWQiHmT8vocKt25AMbaS', 'a');

INSERT INTO blogs(author, post_title, post_text, category)
VALUES ('a', 'heart', 'bkajfdksjfiewjfidshfdshfjdskfjewiahguhbuaorhbudfhgjhea', 'Heart'),
('a', 'liver', 'bkajfdksjfiewjfidshfdshfjdskfjewiahguhbuaorhbudfhgjhea', 'Liver'),
('a', 'care', 'bkajfdksjfiewjfidshfdshfjdskfjewiahguhbuaorhbudfhgjhea', 'Care Giver');


select * from users;
select * from blogs;
select * from post_comments;




