import mysql.connector
from mysql.connector import Error
import pandas as pd

def create_server_connection(host_name, user_name, user_password):
	connection = None
	try:
		connection = mysql.connector.connect(
			host = host_name,
			user = user_name,
			pw = user_password
		)
		print("Connected to Database")
	except Error as err
		print("Error: '{err}'")
	
	return connection

def create_database(connection, query):
	cursor = connection.cursor()
	try:
		cursor.execute(query)
		print("Database Created")
	except Error as err:
		print("Error: '{err}'")
