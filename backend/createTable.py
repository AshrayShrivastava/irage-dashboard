from connections import *

cur.execute('''CREATE TABLE IF NOT EXISTS test (id serial \
    PRIMARY KEY, name varchar(100), price float)''')

conn.commit()

cur.execute(
    '''INSERT INTO test (name, price) VALUES \
    ('Apple', 1.99), ('Orange', 0.99), ('Banana', 0.59),\
    ('Stawberry', 2.99), ('Mango', 1.49);''')
  

cur.execute('''CREATE TABLE IF NOT EXISTS events (id serial PRIMARY KEY,\
    tag1 varchar(100), tag2 varchar(100), tag3 varchar(100),\
    metric1 float, metric2 float)''')

conn.commit()

cur.close()
conn.close()