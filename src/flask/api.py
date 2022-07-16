from flask import Flask , request;
import sqlconnection


app = Flask(__name__)

@app.route("/data", methods=['POST', 'GET'])
def hello_world():
    try:
        if request.method == 'GET':
            data = sqlconnection.connection()
            
            result = {
                "result": data.count_documents({})                
            }
            
            return  {"result": data.count_documents({})}
    except:
        print("An exception occurred")


if __name__ == '__main__':
    app.debug = True

    app.run()