from model.motionModel import RecordModel

class RecordController:
    def __init__(self):
        self.model = RecordModel()

    def getAll(self, cursor):
        return self.model.getAll(cursor)
    
    def getById(self, cursor, id):
        return self.model.getById(cursor, id)
    
        @app.post("/records", response_model=dict)
        async def create(record: RecordCreate):
            conn = get_db_connection()
            cursor = conn.cursor()  # Crear un cursor
            try:
                # Asegúrate de capturar el ID devuelto si es necesario
                record_id = controller.create(cursor, record.brand, record.location, record.candidate)
                return {"message": "Registro creado exitosamente", "id": record_id}
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Error al crear el registro: {e}")
            finally:
                cursor.close()  # Cerrar el cursor
                conn.close()  # Cerrar la conexión


    def update(self, cursor, id, brand, location, candidate):
        return self.model.update(cursor, id, brand, location, candidate) > 0

    def delete(self, cursor, id):
        return self.model.delete(cursor, id) > 0
