import psycopg2

conn = psycopg2.connect(database="irage", user="postgres",
                        password="postgres", host="localhost", port="5432")


cur = conn.cursor()