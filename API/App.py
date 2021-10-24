############# importar librerias o recursos#####
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

# initializations
app = Flask(__name__) #__name__ es necesario para que Flask sepa  onde encontrar las plantillas de nuestra aplicación o los ficheros estáticos.
CORS(app)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'odonedit_V2'
mysql = MySQL(app)

# settings A partir de ese momento Flask utilizará esta clave para poder cifrar la información de la cookie
app.secret_key = "mysecretkey"


# @app.route('/', methods=['GET'])
# def ruta():
    #     index = open("index.html")
    #     rst = index.read()
        
    #     return rst

# @app.route('/formulario.html', methods=['GET'])
# def formulario():
    #     formulario = open("formulario.html")
    #     rst = formulario.read()
        
    #     return rst

# ruta para consultar todos los registros dinamicamente por tabla
@cross_origin()
@app.route('/getAll/<tablaName>', methods=['GET'])
def getAll(tablaName):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM '+str(tablaName))
    rv = cur.fetchall()
    cur.close()
    payload = [] #lista
    content = {} #diccionario
    
    if (rv):
        if(tablaName == "odontologo" or tablaName == "paciente"):
            for result in rv:
                content = {'CC': result[0], 'Nombre': result[1], 'Apellido': result[2], 'Edad': result[3], 'telefono': result[4], 'direccion': result[5], 'correo': result[6], 'Fecha': result[7], 'Estado': result[8]}
                payload.append(content)
                content = {}
        elif(tablaName == "tratamiento"):
            for result in rv:
                content = {'ID': result[0], 'tipoTratamiento': result[1], 'Descripcion': result[2], 'Precio': result[3], 'IdPaciente': result[4], 'IdOdontologo': result[5], 'Fecha': result[6], 'Estado': result[7], 'ConsultaID': result[8]}
                payload.append(content)
                content = {}
        elif(tablaName == "consulta"):
            for result in rv:
                content = {'ID': result[0], 'fecha': result[1], 'Descripcion': result[2], 'IdPaciente': result[3], 'IdOdontologo': result[4], 'Fecha': result[5], 'Estado': result[6]}
                payload.append(content)
                content = {}
        elif(tablaName == "factura"):
            for result in rv:
                content = {'ID': result[0], 'OdontologoID': result[1], 'PacienteId': result[2], 'Fecha': result[3], 'Estado': result[4], 'ConsultaID': result[5]}
                payload.append(content)
                content = {}

        return jsonify(payload)
    else:
        return jsonify({"Alerta":"No se encontraron registros!"})
        # return mensajeTablaSinRegistros(tablaName)
    


# ruta para consultar todos los registros por parametros (tabla, columna, valor)
@cross_origin()
@app.route('/getAllByPar/<table>/<row>/<var>',methods=['GET'])
def getAllByPar(table,var,row):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM '+str(table)+' WHERE '+str(row)+' like %s', (var, ))
    rv = cur.fetchall()
    cur.close()
    payload = []
    content = {}

    
    if(table == "paciente" or table == "odontologo"):
        for result in rv:
                content = {'id': result[0], 'nombres': result[1], 'apellidos': result[2], 'edad': result[3], 'telefono': result[4], 'direccion': result[5], 'correo': result[6]}
                payload.append(content)
                content = {}
    elif(table == "tratamiento"):
        for result in rv:
            content = {'ID': result[0], 'tipoTratamiento': result[1], 'Descripcion': result[2], 'Precio': result[3], 'IdPaciente': result[4], 'IdOdontologo': result[5]}
            payload.append(content)
            content = {}
    elif(table == "consulta"):
        for result in rv:
            content = {'ID': result[0], 'fecha': result[1], 'Descripcion': result[2], 'IdPaciente': result[3], 'IdOdontologo': result[4]}
            payload.append(content)
            content = {}
    elif(table == "factura"):
        for result in rv:
            content = {'ID': result[0], 'OdontologoID': result[1], 'PacienteId': result[2]}
            payload.append(content)
            content = {}
    return jsonify(payload)
    


# ruta para crear un registro
@cross_origin()
@app.route('/add_registro/<tabla>', methods=['POST'])
def add_registro(tabla):
    if request.method == 'POST':
        if(tabla == "paciente"):
            cc = request.json['paciId']  
            nombre = request.json['paciNombres']        
            apellido = request.json['paciApellido']
            edad = request.json['paciEdad'] 
            telefono = request.json['paciTelefono'] 
            direccion = request.json['paciDireccion']
            correo = request.json['paciCorreo']         
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO "+str(tabla)+" (paciId, paciNombres, paciApellido, paciEdad, paciTelefono, paciDireccion, paciCorreo, fechaHora, estado) VALUES (%s,%s,%s,%s,%s,%s,%s, NOW(), 'ACTIVO')", (cc, nombre, apellido,edad ,telefono,direccion,correo))
            mysql.connection.commit() #Es necesario realizar los cambios, de lo contrario no se realizarán cambios en la tabla
        if(tabla == "odontologo"):
            cc = request.json['odonId']  
            nombre = request.json['odoNombres']        
            apellido = request.json['odoApellido']
            edad = request.json['odoEdad'] 
            telefono = request.json['odoTelefono'] 
            direccion = request.json['odoDireccion']
            correo = request.json['odoCorreo']         
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO "+str(tabla)+" (odonId, odoNombres, odoApellido, odoEdad, odoTelefono, odoDireccion, odoCorreo, fechaHora, estado) VALUES (%s,%s,%s,%s,%s,%s,%s, NOW(), 'ACTIVO')", (cc, nombre,apellido,edad,telefono,direccion,correo))
            mysql.connection.commit() #Es necesario realizar los cambios, de lo contrario no se realizarán cambios en la tabla
        if(tabla == "tratamiento"): 
            tipo = request.json['tipoTrata']        
            desc = request.json['trataDescri']
            pre = request.json['trataPrecio'] 
            pasid = request.json['paciId'] 
            odoid = request.json['odonId']        
            conId = request.json['conId']        
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO "+str(tabla)+" (tipoTrata, trataDescri, trataPrecio, paciId, odonId, fechaHora, estado, conId) VALUES (%s,%s,%s,%s,%s, NOW(), 'ACTIVO',%s)", (tipo, desc,pre,pasid,odoid, conId))
            mysql.connection.commit() #Es necesario realizar los cambios, de lo contrario no se realizarán cambios en la tabla
        if(tabla == "consulta"): 
            fecha = request.json['conFecha']        
            desc = request.json['conDescri']
            odoid = request.json['odonId']        
            pasid = request.json['paciId'] 
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO "+str(tabla)+" (conFecha, conDescri, odonId, paciId, fechaHora, estado) VALUES (%s,%s,%s,%s, NOW(), 'ACTIVO')", (fecha, desc,pasid,odoid))
            mysql.connection.commit() #Es necesario realizar los cambios, de lo contrario no se realizarán cambios en la tabla
        if(tabla == "factura"):
            odoid = request.json['odonId']        
            pasid = request.json['paciId'] 
            conId = request.json['conId']        
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO "+str(tabla)+" (odonId, paciId, fechaHora, estado, conId) VALUES (%s,%s, NOW(), 'ACTIVO',%s)", (odoid,pasid,conId))
            mysql.connection.commit() #Es necesario realizar los cambios, de lo contrario no se realizarán cambios en la tabla
        # return mensajeRegistroExitoso(tabla)
        return jsonify({"Alerta":"Registro existoso!"})
        # return jsonify({"Alerta": mensajeRegistroExitoso(tabla)})



######### ruta para actualizar################
@cross_origin()
@app.route('/update_contact/<tabla>/<dato>', methods=['PUT'])
def update_contact(tabla, dato):
        if(tabla == "paciente"):
            cc = request.json['paciId']  
            nombre = request.json['paciNombres']        
            apellido = request.json['paciApellido']
            edad = request.json['paciEdad'] 
            telefono = request.json['paciTelefono'] 
            direccion = request.json['paciDireccion']
            correo = request.json['paciCorreo']
            cur = mysql.connection.cursor()
            cur.execute("UPDATE "+str(tabla)+" SET paciId = %s, paciNombres = %s, paciApellido = %s, paciEdad = %s,paciTelefono = %s, paciDireccion = %s, paciCorreo = %s, fechaHora = NOW() WHERE paciId = %s", (cc, nombre, apellido, edad,telefono,direccion,correo, str(dato)))
            mysql.connection.commit()
        elif(tabla == "odontologo"):
            cc = request.json['odonId']  
            nombre = request.json['odoNombres']        
            apellido = request.json['odoApellido']
            edad = request.json['odoEdad'] 
            telefono = request.json['odoTelefono'] 
            direccion = request.json['odoDireccion']
            correo = request.json['odoCorreo']
            cur = mysql.connection.cursor()
            cur.execute("UPDATE "+str(tabla)+" SET odonId = %s, odoNombres = %s, odoApellido = %s, odoEdad = %s,odoTelefono =%s, odoDireccion =%s, odoCorreo = %s, fechaHora = NOW() WHERE odonId = %s", (cc, nombre, apellido, edad,telefono,direccion,correo, str(dato)))
            mysql.connection.commit()
        elif(tabla == "tratamiento"):
            tipoTrata = request.json['tipoTrata']        
            trataDescri = request.json['trataDescri']
            trataPrecio = request.json['trataPrecio']
            paciId = request.json['paciId'] 
            odonId = request.json['odonId']
            conId = request.json['conId']
            cur = mysql.connection.cursor()
            cur.execute("UPDATE "+str(tabla)+" SET tipoTrata = %s, trataDescri = %s, trataPrecio = %s, paciId= %s, odonId= %s, conId= %s, fechaHora = NOW() WHERE trataId = %s", (tipoTrata, trataDescri, trataPrecio, paciId, odonId, conId,str(dato)))
            mysql.connection.commit()
        elif(tabla == "consulta"):
            conFecha = request.json['conFecha']
            conDescri = request.json['conDescri']
            odonId = request.json['odonId']
            paciId = request.json['paciId']
            cur = mysql.connection.cursor()
            cur.execute("UPDATE "+str(tabla)+" SET conFecha = %s, conDescri = %s, odonId = %s, paciId = %s, fechaHora = NOW() WHERE conId = %s", (conFecha, conDescri, odonId, paciId, str(dato)))
            mysql.connection.commit()   
        elif(tabla == "factura"): 
            paciId = request.json['paciId']
            odonId = request.json['odonId']
            conId = request.json['conId']
            cur = mysql.connection.cursor()
            cur.execute("UPDATE "+str(tabla)+" SET paciId = %s, odonId = %s, conId = %s, fechaHora = NOW() WHERE facId = %s", (paciId, odonId, conId, str(dato)))
            mysql.connection.commit()
        
        # return mensajeRegistroActualizado(tabla)
        return jsonify({"Alerta":"Registro actualizado!"})

    

@cross_origin()
@app.route('/delate_contact/<tabla>/<id>', methods=['DELETE'])
def delate_contact(tabla,id):
    
    if(tabla == "paciente"):
        columna_id = "paciId"
    elif(tabla == "odontologo"):
        columna_id = "odonId"
    elif(tabla == "factura"):
        columna_id = "facId"
    elif(tabla == "consulta"):
        columna_id = "conId"
    elif(tabla == "tratamiento"):
        columna_id = "trataId"

    cur = mysql.connection.cursor()
    #cur.execute("DELETE FROM "+str(tabla)+" WHERE "+str(columna_id)+" = "+str(id))
    cur.execute("DELETE FROM "+str(tabla)+" WHERE "+str(columna_id)+" IN ("+str(id)+")")
    mysql.connection.commit()

    # return mensajeRegistroEliminado(tabla)
    return jsonify({"Alerta":"Registro eliminado!"})


######### UTILIDADES ########
def mensajeTablaSinRegistros(tablaName):
    return "<br><div style='margin: 3rem 6rem; text-align: center; box-shadow: 0rem 1rem 20px 0px gainsboro;  padding: 3rem; border-radius:  2rem; font-size: 1rem; font-family: system-ui;'><h1 style='color: red; '>NO SE ENCONTRARON REGISTROS EN LA TABLA <strong style='text-transform: uppercase;'><ins>"+tablaName+"</ins></strong>, POR FAVOR VERIFIQUE LA TABLA <strong style='text-transform: uppercase;'><ins>"+tablaName+"</ins></strong></h1><br><br><a style='font-size: 1.5rem; font-family: system-ui;' href='http://127.0.0.1:3000/'>VOLVER A INICIO</a></div>"

def mensajeRegistroExitoso(tablaName):
    return "<br><div style='margin: 3rem 6rem; text-align: center; box-shadow: 0rem 1rem 20px 0px gainsboro;  padding: 3rem; border-radius:  2rem; font-size: 1rem; font-family: system-ui;'><h1 style='color: blue; '>REGISTRO EXITOSO EN LA TABLA <strong style='text-transform: uppercase;'><ins>"+tablaName+"</ins></strong>,</h1><br><br><a style='font-size: 1.5rem; font-family: system-ui;' href='http://127.0.0.1:3000/'>VOLVER A INICIO</a></div>"

def mensajeRegistroActualizado(tablaName):
    return "<br><div style='margin: 3rem 6rem; text-align: center; box-shadow: 0rem 1rem 20px 0px gainsboro;  padding: 3rem; border-radius:  2rem; font-size: 1rem; font-family: system-ui;'><h1 style='color: blue; '>REGISTRO ACTUALIZADO EN LA TABLA <strong style='text-transform: uppercase;'><ins>"+tablaName+"</ins></strong>,</h1><br><br><a style='font-size: 1.5rem; font-family: system-ui;' href='http://127.0.0.1:3000/'>VOLVER A INICIO</a></div>"

def mensajeRegistroEliminado(tablaName):
    return "<br><div style='margin: 3rem 6rem; text-align: center; box-shadow: 0rem 1rem 20px 0px gainsboro;  padding: 3rem; border-radius:  2rem; font-size: 1rem; font-family: system-ui;'><h1 style='color: blue; '>REGISTRO ELIMINADO EN LA TABLA <strong style='text-transform: uppercase;'><ins>"+tablaName+"</ins></strong>,</h1><br><br><a style='font-size: 1.5rem; font-family: system-ui;' href='http://127.0.0.1:3000/'>VOLVER A INICIO</a></div>"

# starting the app
if __name__ == "__main__":
    app.run(port=3000, debug=True)
