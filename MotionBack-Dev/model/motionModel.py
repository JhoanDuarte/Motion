from config.db import conn, cursor

class RecordModel:
    def __init__(self, conn):
        self.conn = conn
        self.cursor = cursor

     def getAll(self, conn):
        self.cursor.execute("SELECT * FROM records")
        return self.cursor.fetchall()

    def getById(self, id, conn):
        self.cursor.execute("SELECT * FROM records WHERE id = %s", (id,))
        return self.cursor.fetchone()

    def create(self, brand, location, candidate, conn):
        self.cursor.execute("INSERT INTO records (brand, location, candidate) VALUES (%s, %s, %s)", (brand, location, candidate))
        self.conn.commit()
        return self.cursor.lastrowid

    def update(self, id, brand, location, candidate, conn):
        self.cursor.execute("UPDATE records SET brand = %s, location = %s, candidate = %s WHERE id = %s", (brand, location, candidate, id))
        self.conn.commit()
        return self.cursor.rowcount

    def delete(self, id, conn):
        self.cursor.execute("DELETE FROM records WHERE id = %s", (id,))
        self.conn.commit()
        return self.cursor.rowcount
