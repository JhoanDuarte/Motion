from model.motionModel import RecordModel
from schemas import RecordCreate, RecordUpdate, Record


class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self, cursor):
        return self.model.getAll(cursor)
    
    def getById(self, cursor, id):
        return self.model.getById(cursor, id)
    
    def create(self, cursor, conn, record: RecordCreate):
        return self.model.create(cursor, conn, record.brand, record.location, record.candidate)
    
    def update(self, cursor, conn, id, record: RecordUpdate):
        return self.model.update(cursor, conn, id, record.brand, record.location, record.candidate)
    
    def delete(self, cursor, conn, id):
        return self.model.delete(cursor, conn, id)


