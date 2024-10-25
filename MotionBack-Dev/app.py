import os
import mysql.connector
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from controller.motionController import RecordController
from dotenv import load_dotenv

load_dotenv()

db_config = {
    'host': os.getenv('DB_HOST'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'database': os.getenv('DB_NAME'),
    'port': int(os.getenv('DB_PORT')) 
}

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

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

controller = RecordController()

@app.get("/records", response_model=List[Record])
async def getAll():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True) 
    try:
        records = controller.getAll(cursor)  
        if records:
            return records
        raise HTTPException(status_code=404, detail="No records found")
    finally:
        cursor.close()  
        conn.close()  

@app.get("/records/{id}", response_model=Record)
async def getById(id: int):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)  
    try:
        record = controller.getById(cursor, id)  
        if record:
            return record
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        cursor.close()  
        conn.close()  

@app.post("/records", response_model=dict)
async def create(record: RecordCreate):
    conn = get_db_connection()
    cursor = conn.cursor() 
    try:
        controller.create(cursor, record.brand, record.location, record.candidate)
        return {"message": "Registro creado exitosamente"}
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Error al crear el registro")
    finally:
        cursor.close()  
        conn.close() 

@app.put("/records/{id}", response_model=dict)
async def update(id: int, record: RecordUpdate):
    conn = get_db_connection()
    cursor = conn.cursor() 
    try:
        updated = controller.update(cursor, id, record.brand, record.location, record.candidate)
        if updated:
            return {"message": "Registro actualizado exitosamente"}
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        cursor.close() 
        conn.close()  

@app.delete("/records/{id}", response_model=dict)
async def delete(id: int):
    conn = get_db_connection()
    cursor = conn.cursor()  
    try:
        deleted = controller.delete(cursor, id)
        if deleted:
            return {"message": "Registro eliminado exitosamente"}
        raise HTTPException(status_code=404, detail="Record not found")
    finally:
        cursor.close()  
        conn.close()  

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

