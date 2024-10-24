import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

db_user = os.getenv('DB_USER')
db_pass = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')
db_name = os.getenv('DB_NAME')

conn = mysql.connector.connect(
    user=db_user,
    password=db_pass,
    host=db_host,
    database=db_name,
)

print('connection to db: ', conn)

cursor = conn.cursor(dictionary=True)