const Sequelize = require('sequelize');
const path='mysql://root@localhost:3306/unives';
const unives= new Sequelize(path);
try {
    //UTILIZO EL METODO .authenticate DE LA INSTANCIA UNIVES
unives.authenticate()
.then(res=>console.log('CONEXION EXITOSA CON UNIVES'))
.catch(err=>console.error('FALLO DE CONEXION CON UNIVES'));

} catch (error) {
    console.log(error);
}
const fecha=async ()=>{
    try {
        let fecha = await unives.query('SELECT NOW()');
        console.log(fecha);    
    } catch (error) {
        console.log(error);
    }
  
}
fecha();