const mysql=require('mysql2');
const conection=mysql.createConnection(
	{host:process.env.DB_HOST,
	 user:process.env.DB_USER,
	 password:process.env.DB_PASSWORD,
	 database:process.env.DB_NAME
	});



conection.connect((err)=>{const handleError=err?console.log(err):console.log(`conectado ao banco de dados ${process.env.DB_NAME}`)});


module.exports=conection