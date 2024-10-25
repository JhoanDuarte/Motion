import mysql.connector
from dotenv import load_dotenv
import os

# Cargar variables de entorno
load_dotenv()

# Obtener las variables de entorno
db_user = os.getenv('DB_USER')
db_pass = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')
db_name = os.getenv('DB_NAME')

# Función para conectar a la base de datos
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            user=db_user,
            password=db_pass,
            host=db_host,
            port=db_port,
            database=db_name,
        )
        print('Conexión a la base de datos exitosa:', conn)
        return conn
    except mysql.connector.Error as err:
        print(f"Error al conectar a la base de datos: {err}")
        return None

# Crear la conexión y el cursor
conn = get_db_connection()
if conn:
    cursor = conn.cursor(dictionary=True)
else:
    cursor = None  # Manejar el caso en que la conexión falla

# Recuerda cerrar la conexión y el cursor cuando termines de usarlos
# Ejemplo:
# if cursor:
#     cursor.close()
# if conn:
#     conn.close()
