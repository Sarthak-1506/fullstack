import sqlite3

con = sqlite3.connect("student.db")

cur = con.cursor()

cur.execute("create table student(id int, name text)")

cur.execute("insert into student values(1,'Sarthak')")

con.commit()

cur.execute("select * from student")

data = cur.fetchall()

print(data)

con.close()