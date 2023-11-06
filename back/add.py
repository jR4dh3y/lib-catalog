import mysql.connector

# Database connection configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "0410",
    "database": "lib"
}

# Function to add a new book
def add_book(title, author, copies, available_date):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # SQL query to insert a new book into the database
        query = "INSERT INTO books (title, author, copies, available_date) VALUES (%s, %s, %s, %s)"
        values = (title, author, copies, available_date)
        
        cursor.execute(query, values)
        connection.commit()

        print("Book added successfully.")

    except mysql.connector.Error as err:
        print("Database Error:", err)

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

if __name__ == "__main__":
    # Input book details
    title = input("Enter the book title: ")
    author = input("Enter the author's name: ")
    copies = int(input("Enter the number of copies available: "))
    available_date = input("Enter the available date (YYYY-MM-DD): ")

    # Call the add_book function to insert the book into the database
    add_book(title, author, copies, available_date)
