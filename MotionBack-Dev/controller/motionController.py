from model.motionModel import RecordModel

class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self):
        return self.model.getAll()
    
    def getById(self, id):
        return self.model.getById(id)
    
    def create(self, brand, location, candidate):
        return self.model.create(brand, location, candidate)

    def update(self, id, brand, location, candidate):
        return self.model.update(id, brand, location, candidate) > 0

    def delete(self, id):
        return self.model.delete(id) > 0
