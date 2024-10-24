import mysql.connector
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from controller.motionController import RecordController

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
    records = controller.getAll()
    if records:
        return records
    raise HTTPException(status_code=404, detail="No records found")

@app.get("/records/{id}", response_model=Record)
async def getById(id: int):
    record = controller.getById(id)
    if record:
        return record
    raise HTTPException(status_code=404, detail="Record not found")

@app.post("/records", response_model=dict)
async def create(record: RecordCreate):
    controller.create(record.brand, record.location, record.candidate)
    return {"message": "Registro creado exitosamente"}

@app.put("/records/{id}", response_model=dict)
async def update(id: int, record: RecordUpdate):
    updated = controller.update(id, record.brand, record.location, record.candidate)
    if updated:
        return {"message": "Registro actualizado exitosamente"}
    raise HTTPException(status_code=404, detail="Record not found")

@app.delete("/records/{id}", response_model=dict)
async def delete(id: int):
    deleted = controller.delete(id)
    if deleted:
        return {"message": "Registro eliminado exitosamente"}
    raise HTTPException(status_code=404, detail="Record not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=5000)