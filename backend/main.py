from flask import Flask, request
from connections import *

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def test():
   sortPara = request.args.get('sort')
   print(sortPara)
   cur.execute('''SELECT * FROM events ORDER BY '''+ sortPara)
   temp=cur.fetchmany(10)
#    print(temp)
   return temp

@app.route('/search', methods=['GET'])
def search():
   para = request.args.get('para')
   start = request.args.get('start')
   end = request.args.get('end')
   print(start,end)
   cur.execute("SELECT * FROM test WHERE {}>='{}' AND {}<='{}'".format(para, start, para, end))
   # print(cur)
   temp=cur.fetchall()
   return temp

@app.route('/getEvents', methods=['GET'])
def getEvents():
   sortPara = request.args.get('sort')
   cur.execute("SELECT * FROM events ORDER BY " + sortPara)
   temp=cur.fetchmany(10)
   return temp

if __name__ == '__main__':
   app.run()
   cur.close()
   conn.close()