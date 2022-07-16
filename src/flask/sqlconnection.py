from pymongo import MongoClient;

def connection():
    client = MongoClient("mongodb+srv://admin:admin@cluster0.tj2du.mongodb.net/?retryWrites=true&w=majority")

    db = client.get_database('data-programming')
    data = db.data
    return data

