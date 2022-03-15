const database= require('../database.js');


module.exports={
	buscarTodos:()=>{

		return new Promise((aceito,rejeitado)=>{
			database.query("SELECT * FROM carros",(error,result)=>{

				if(error){rejeitado(error); return;}
				aceito(result);
			});
		});
	},

   
   buscarUm:(codigo)=>{
        
        return new Promise((aceito, rejeitado)=>{
           
           database.query("SELECT * FROM carros WHERE codigo=?",[codigo],(error,result)=>{
           	if(error){rejeitado(error); return;}
				aceito(result);
			});

        });

   },

   adicionarCarro:(modelo,placa)=>{

   	return new Promise((aceito, rejeitado)=>{
           
           database.query("INSERT INTO carros (placa,modelo) VALUES(?,?)",[placa,modelo],(error,result)=>{
           	if(error){rejeitado(error); return;}
				aceito(result.insertCodigo);
			});

        });


   },
  

  alterarCarro:(codigo,modelo,placa)=>{

   	return new Promise((aceito, rejeitado)=>{
           
           database.query("UPDATE carros SET placa=? AND  modelo=? WHERE codigo=?",[placa,modelo,codigo],(error,result)=>{
           	if(error){rejeitado(error); return;}
				aceito(result);
			});

        });


   },

  deletarCarro:(codigo)=>{

  	return new Promise((aceito,rejeitado)=>{

  		database.query("DELETE FROM carros WHERE codigo=?",[codigo],(error,result)=>{
  				if(error){rejeitado(error); return;}
				aceito(result);
			});

  	});
  }
};