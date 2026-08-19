# Python_fullstack12
git add .
git commit -m "html"
git push
CSS Selectors
Colors & Fonts
Box Model
Flexbox
Grid
Responsive Design
Bootstrap (Introduction)


https://github.com/SriramMurugesan/Python_fullstack12

https://meet.google.com/vfd-wqaa-huy


git add .
git commit -m "eventlistners"
git push

localhost:5500


DNS-Domain Name Server
Api-Application Programming Interface->Stands between frontend and backend
Middleware - stands as security check for request and response
Authorization vs Authentication
authentication tells who are you eg: normal login
authorization tells what you can able to do eg:staff and students
react- web framework for frontend development in javascript
flask,fastapi,django- web framework for backend development in python
orm- object relational mapping, it is a technique that allows you to query and manipulate data from a database.

python3 -m venv env

. env/bin/activate   --github codespace

python -m venv env 
env\Scripts\activate --- windows direct vs code 

     
pip install flask
pip freeze > requirements.txt
pip install -r requirements.txt


. env/bin/activate
(env) billa@EliteBook:~/Sriram_repos/Python_fullstack12 % python3 app.py
python3 app.py

# Python_fullstack12
git add .
git commit -m "html"
git push
CSS Selectors
Colors & Fonts
Box Model
Flexbox
Grid
Responsive Design
Bootstrap (Introduction)


https://github.com/SriramMurugesan/Python_fullstack12

https://meet.google.com/vfd-wqaa-huy


git add .
git commit -m "eventlistners"
git push

localhost:5500


DNS-Domain Name Server
Api-Application Programming Interface->Stands between frontend and backend
Middleware - stands as security check for request and response
Authorization vs Authentication
authentication tells who are you eg: normal login
authorization tells what you can able to do eg:staff and students
react- web framework for frontend development in javascript
flask,fastapi,django- web framework for backend development in python
orm- object relational mapping, it is a technique that allows you to query and manipulate data from a database.

python3 -m venv env

. env/bin/activate   --github codespace

python -m venv env 
env\Scripts\activate --- windows direct vs code 

     
pip install flask
pip freeze > requirements.txt
pip install -r requirements.txt


. env/bin/activate
(env) billa@EliteBook:~/Sriram_repos/Python_fullstack12 % python3 app.py
python3 app.py


lsof -i :5000
kill -9 12345


# status codes
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
503 Service Unavailable


# SQL Basics
dbms-->database management system
rdbms-relational database management system
## constraints
--> Primary key eg:Student_ID
-->Foreign key eg:Department_ID
-->Unique Key eg:Email_ID
-->Not null eg:Name
-->Default value eg:status default 'Pending'
-->Check constraint eg:Age > 18
-->Auto increment eg:ID auto increment

## DDL 
create
truncate
drop

## DML
insert
update
delete

## DCL
grant
revoke

## TCL
commit
rollback
savepoint

## DQL
SELECT

## CRUD
create-->insert
retrieve-->select
update-->update
delete-->delete

## SQL Commands
select * from table_name;
select one_column from table_name;
select one,two_column from table_name;

## filtering
select column_name from table_name where condition;
 eg:select * from customers where country='USA';
## logical operators
and
or
not

## comparison operators
==
!=
>
<
>=
<=

## in,not in,between
select column_name from table_name where column_name in (value1,value2,value3);


## like 
select column_name from table_name where column_name like '%a_'

## distinct
display unique values
select distinct column_name from table_name;

## order by
select column_name from table_name order by column_name asc/desc;

## aggregate functions
avg()-->average
sum()-->sum of values
count()-->count of values
min()-->minimum value
max()-->maximum value

## filtering after aggregrate function
having
select min(column_name) from table_name group by column_name having min(column_name) > 10;

## joins
left join
right join
inner join
full outer join
cross join-cartesian product of two tables

select d.department_name,e.employee_name from employees e inner join departments d on e.department_id = d.department_id;


# SELECT
Display all customers.
Display only first_name and last_name from Customers.
Display first_name, age, and country.

# WHERE
Find customers who are from the USA.
Find customers whose age is 22.
Find customers older than 25.
Find orders where the amount is greater than 500.

# AND / OR
Find customers from the UK whose age is greater than 20.
Find customers who are from USA or UAE.
Find customers whose age is 22 or 28.

# BETWEEN / IN
Find customers whose age is between 22 and 30.
Find customers whose country is USA or UK using IN.
Find orders whose amount is between 300 and 1000.

# LIKE
Find customers whose first name starts with J.
Find customers whose last name contains o.
Find customers whose first name ends with t.

# DISTINCT
Display all unique countries.
Display all unique order items.

# ORDER BY
Display customers sorted by age from youngest to oldest.
Display orders sorted by amount from highest to lowest.

# Aggregate Functions
Find the total number of customers.
Find the average age of customers.
Find the highest order amount.
Find the total amount of all orders.

# GROUP BY
Count the number of customers in each country.
Count how many orders exist for each item.
Find the total order amount for each item.

# JOIN
Display the customer's first name along with the item they ordered.
Display the customer's first name and shipping status.
Display customer name, item, order amount, and shipping status together using JOINs.


# Python_fullstack12
git add .
git commit -m "html"
git push
CSS Selectors
Colors & Fonts
Box Model
Flexbox
Grid
Responsive Design
Bootstrap (Introduction)


https://github.com/SriramMurugesan/Python_fullstack12

https://meet.google.com/vfd-wqaa-huy


git add .
git commit -m "eventlistners"
git push

localhost:5500


DNS-Domain Name Server
Api-Application Programming Interface->Stands between frontend and backend
Middleware - stands as security check for request and response
Authorization vs Authentication
authentication tells who are you eg: normal login
authorization tells what you can able to do eg:staff and students
react- web framework for frontend development in javascript
flask,fastapi,django- web framework for backend development in python
orm- object relational mapping, it is a technique that allows you to query and manipulate data from a database.

python3 -m venv env

. env/bin/activate   --github codespace

python -m venv env 
env\Scripts\activate --- windows direct vs code 

     
pip install flask
pip freeze > requirements.txt
pip install -r requirements.txt


. env/bin/activate
(env) billa@EliteBook:~/Sriram_repos/Python_fullstack12 % python3 app.py
python3 app.py


lsof -i :5000
kill -9 12345





# SQL Basics
dbms-->database management system
rdbms-relational database management system
## constraints
--> Primary key eg:Student_ID
-->Foreign key eg:Department_ID
-->Unique Key eg:Email_ID
-->Not null eg:Name
-->Default value eg:status default 'Pending'
-->Check constraint eg:Age > 18
-->Auto increment eg:ID auto increment

## DDL 
create
truncate
drop

## DML
insert
update
delete

## DCL
grant
revoke

## TCL
commit
rollback
savepoint

## DQL
SELECT

## CRUD
create-->insert
retrieve-->select
update-->update
delete-->delete

## SQL Commands
select * from table_name;
select one_column from table_name;
select one,two_column from table_name;

## filtering
select column_name from table_name where condition;
 eg:select * from customers where country='USA';
## logical operators
and
or
not

## comparison operators
==
!=
>
<
>=
<=

## in,not in,between
select column_name from table_name where column_name in (value1,value2,value3);


## like 
select column_name from table_name where column_name like '%a_'

## distinct
display unique values
select distinct column_name from table_name;

## order by
select column_name from table_name order by column_name asc/desc;

## aggregate functions
avg()-->average
sum()-->sum of values
count()-->count of values
min()-->minimum value
max()-->maximum value

## filtering after aggregrate function
having
select min(column_name) from table_name group by column_name having min(column_name) > 10;

## joins
left join
right join
inner join
full outer join
cross join-cartesian product of two tables

select d.department_name,e.employee_name from employees e inner join departments d on e.department_id = d.department_id;


# SELECT
Display all customers.
Display only first_name and last_name from Customers.
Display first_name, age, and country.

# WHERE
Find customers who are from the USA.
Find customers whose age is 22.
Find customers older than 25.
Find orders where the amount is greater than 500.

# AND / OR
Find customers from the UK whose age is greater than 20.
Find customers who are from USA or UAE.
Find customers whose age is 22 or 28.

# BETWEEN / IN
Find customers whose age is between 22 and 30.
Find customers whose country is USA or UK using IN.
Find orders whose amount is between 300 and 1000.

# LIKE
Find customers whose first name starts with J.
Find customers whose last name contains o.
Find customers whose first name ends with t.

# DISTINCT
Display all unique countries.
Display all unique order items.

# ORDER BY
Display customers sorted by age from youngest to oldest.
Display orders sorted by amount from highest to lowest.

# Aggregate Functions
Find the total number of customers.
Find the average age of customers.
Find the highest order amount.
Find the total amount of all orders.

# GROUP BY
Count the number of customers in each country.
Count how many orders exist for each item.
Find the total order amount for each item.

# JOIN
Display the customer's first name along with the item they ordered.
Display the customer's first name and shipping status.
Display customer name, item, order amount, and shipping status together using JOINs.


# steps for flask full stack development
'''
1.create repo from github
(in local system)
2.git clone <repo_url>
3.".gitignore file will remove unwanted files, mandatory gitignore entries are env,*.pyc,.env"
4.python3 -m venv env
5. . env/bin/activate
6.pip install flask
7.pip freeze > requirements.txt
8.pip install -r requirements.txt

9.create templates(for all html pages) and static(for css,js,images,audio,video,other files etc) folders
10.create routes and render templates in app.py
11.create api endpoints in app.py
12.end points are follows
/login--> login page
/register --> register page
13.while register user details will store in db(which is sqlite3 in future it can be changed to mysql)
14.logout --> logout redirect to login page
15./api/register--> for checking duplicate user_email before registration process and if user_email is not duplicate then it will store user details in db
16./api/login--> for checking user_email and password and if user_email and password are correct then it will return home page parallely manage sessions (means login status of user in db)and if user_email and password are incorrect then it will return error message
17./logout --> for logging out user and removing session

18.python3 app.py
19.after completing git push commands
20.git add .
21.git commit -m "commit message"
22.git push
'''
# imported methods and classes
Flask - core functionality of web framework
render_template - for rendering html pages
request - for handling incoming http requests
session - for managing user sessions
jsonify - return message in json format
redirect - for redirecting to another route
url_for - for creating urls for the routes

# database
sqlite3 - relational database management system
cursor - database cursor 
commit - save the changes in database
close - close the database connection

# rest api methods
rest - representational state transfer
methods:

GET - Used to retrieve data from the server.

POST - Used to send data to the server to create a new resource.

PUT - Used to update an existing resource entirely.

PATCH - Used to partially update an existing resource.

DELETE - Used to delete a resource from the server.

# status codes
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
503 Service Unavailable