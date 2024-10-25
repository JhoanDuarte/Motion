from model.motionModel import RecordModel

class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self, cursor):
        return self.model.getAll(cursor)
    
    def getById(self, cursor, id):
        return self.model.getById(cursor, id)
    
    def create(self, cursor, record: RecordCreate):
    return self.model.create(cursor, record.brand, record.location, record.candidate)

    def update(self, id, brand, location, candidate):
        return self.model.update(cursor, id, brand, location, candidate) > 0

    def delete(self, id):
        return self.model.delete(cursor, id) > 0
