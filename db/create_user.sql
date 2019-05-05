insert into users (username, password, name)
values 
($1, $2, $3)
returning *;