from model.motionModel import RecordModel

class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self, cursor):
        return self.model.getAll(cursor)
    
    def getById(self, cursor, id):
        return self.model.getById(cursor, id)
    
    def create(self, cursor, brand, location, candidate):
        return self.model.create(cursor, brand, location, candidate)

    def update(self, cursor, id, brand, location, candidate):
        return self.model.update(cursor, id, brand, location, candidate) > 0

    def delete(self, cursor, id):
        return self.model.delete(cursor, id) > 0
