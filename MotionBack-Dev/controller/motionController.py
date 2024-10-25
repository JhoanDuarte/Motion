class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self, conn):
        return self.model.getAll(conn)
    
    def getById(self, conn, id):
        return self.model.getById(conn, id)
    
    def create(self, conn, brand, location, candidate):
        return self.model.create(conn, brand, location, candidate)

    def update(self, conn, id, brand, location, candidate):
        return self.model.update(conn, id, brand, location, candidate) > 0

    def delete(self, conn, id):
        return self.model.delete(conn, id) > 0
