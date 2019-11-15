drop table if exists users;
drop table if exists posts;
create table users (
id serial primary key,
username varchar(30),
password varchar(30),
profile_pic text
);

create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users(id)
);
 
insert into users(username, password, profile_pic)
values ('Codus1127', 'Russ2018!', 'https://robohash.org/cody'),
('Username', 'Password', 'https://robohash.org/username');

select * from users;

insert into posts(title, img, content, author_id)
values ('I got a puppy!', 'https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg', 'So excited to show everyone the newest member of our family, meet Waldo!', 1),
('Im a Troll!', 'https://media.wired.com/photos/59331aa6aef9a462de985569/master/pass/copyright-troll.jpg', 'TROLL, TROLL, TROLLY TROLLING, TROLLLL!', 2);

select * from posts;