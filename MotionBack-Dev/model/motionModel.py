from config.db import conn, cursor

class RecordModel:
    def __init__(self):
        pass  

    def getAll(self, cursor):
        cursor.execute("SELECT * FROM records")
        return cursor.fetchall()

    def getById(self, cursor, id):
        cursor.execute("SELECT * FROM records WHERE id = %s", (id,))
        return cursor.fetchone()

    def create(self, cursor, brand, location, candidate):
        cursor.execute("INSERT INTO records (brand, location, candidate) VALUES (%s, %s, %s)", (brand, location, candidate))
        cursor.connection.commit() 
        return cursor.lastrowid

    def update(self, id, brand, location, candidate):
        cursor.execute("UPDATE records SET brand = %s, location = %s, candidate = %s WHERE id = %s", (brand, location, candidate, id))
        cursor.connection.commit()  
        return cursor.rowcount

    def delete(self, id):
        cursor.execute("DELETE FROM records WHERE id = %s", (id,))
        cursor.connection.commit() 
        return cursor.rowcount
