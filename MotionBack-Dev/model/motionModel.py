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

    def create(self, cursor, conn, brand, location, candidate):
        cursor.execute(
            "INSERT INTO records (brand, location, candidate) VALUES (%s, %s, %s)",
            (brand, location, candidate)
        )
        conn.commit()  # Usa la conexión aquí
        return cursor.lastrowid

    def update(self, cursor, conn, id, brand, location, candidate):
        cursor.execute(
            "UPDATE records SET brand = %s, location = %s, candidate = %s WHERE id = %s",
            (brand, location, candidate, id)
        )
        conn.commit()  # Usa la conexión aquí
        return cursor.rowcount

    def delete(self, cursor, conn, id):
        cursor.execute("DELETE FROM records WHERE id = %s", (id,))
        conn.commit()  # Usa la conexión aquí
        return cursor.rowcount
