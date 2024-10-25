import os
import mysql.connector
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from controller.motionController import RecordController
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Configuración de la base de datos desde las variables de entorno
db_config = {
    'host': os.getenv('DB_HOST'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'database': os.getenv('DB_NAME'),
    'port': int(os.getenv('DB_PORT'))  # Asegúrate de que el puerto sea un entero
}

# Conectar a la base de datos
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password'],
            database=db_config['database'],
            port=db_config['port']
        )
        return conn
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        raise HTTPException(status_code=500, detail="Database connection failed")

# Modelos
class RecordCreate(BaseModel):
    brand: str
    location: str
    candidate: str

class RecordUpdate(BaseModel):
    brand: str
    location: str
    candidate: str

class Record(BaseModel):
    id: int
    brand: str
    location: str
    candidate: str

# Iniciar FastAPI
app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

controller = RecordController()

# Rutas de la API
@app.get("/records", response_model=List[Record])
async def getAll():
    conn = get_db_connection()
    try:
        records = controller.getAll(conn)
        if records:
            return records
        raise HTTPException(status_code=404, detail="No records found")
    finally:
        conn.close()

@app.get("/records/{id}", response_model=Record)
async def getById(id: int):
    conn = get_db_connection()
    try:
        record = controller.getById(conn, id)
        if record:
            return record
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        conn.close()

@app.post("/records", response_model=dict)
async def create(record: RecordCreate):
    conn = get_db_connection()
    try:
        controller.create(conn, record.brand, record.location, record.candidate)
        return {"message": "Registro creado exitosamente"}
    finally:
        conn.close()

@app.put("/records/{id}", response_model=dict)
async def update(id: int, record: RecordUpdate):
    conn = get_db_connection()
    try:
        updated = controller.update(conn, id, record.brand, record.location, record.candidate)
        if updated:
            return {"message": "Registro actualizado exitosamente"}
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        conn.close()

@app.delete("/records/{id}", response_model=dict)
async def delete(id: int):
    conn = get_db_connection()
    try:
        deleted = controller.delete(conn, id)
        if deleted:
            return {"message": "Registro eliminado exitosamente"}
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        conn.close()

# Correr la aplicación
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=db_config['port'])

