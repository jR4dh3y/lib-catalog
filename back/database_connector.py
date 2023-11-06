import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# connection configuration
db_config = {
    "host": "localhost",
    "user": "rootr",
    "password": "0410",
    "database": "lib"
}

# to get books from the database
def get_books():
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)

        query = "SELECT title, author, copies, available_date FROM books"
        cursor.execute(query)
        books = cursor.fetchall()

        return books

    except mysql.connector.Error as err:
        print("Database Error:", err)
        return []

# Route to get book data as JSON
@app.route('/', methods=['GET'])
def get_books_route():
    books_data = get_books()
    return jsonify(books_data)

if __name__ == "__main__":
    app.run()
