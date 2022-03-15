const CarroServices=require('../services/CarroServices.js');

module.exports={
	buscarTodos:async(req,res)=>{
		let json={err:'',result:[]};

		let carros=await CarroServices.buscarTodos();
		for(i in carros){
			json.result.push({codigo:carros[i].codigo,modelo:carros[i].modelo});
		}
  res.json(json);},

 buscarUm:async(req,res)=>{

 	let json={err:'',result:{}};
    let codigo=req.params.codigo;
 	let carro= await CarroServices.buscarUm(codigo); 
 	
 	if(carro){ json.result=carro}
 	res.json(json);
 },

 adicionarCarro:async(req,res)=>{
 	let json={eror:'',result:{}};

    let modelo=req.body.modelo;
 	let placa=req.body.placa;

 	if(modelo && placa){

     let carroCodigo= await CarroServices.adicionarCarro(modelo,placa); 
 	 json.result={codigo:carroCodigo,placa,modelo};

 	}else{ 
 	json.error='campos incompletos';
    }
    
    res.json(json);
  },

  alterarCarro:async(req,res)=>{
   let json={eror:'',result:{}};

    let modelo=req.body.modelo;
   let placa=req.body.placa;
   let codigo=req.params.codigo

   if(codigo&&modelo && placa){

    await CarroServices.adicionarCarro(codigo,modelo,placa); 
    json.result={codigo,placa,modelo};

   }else{ 
   json.error='campos incompletos';
    }
    
    res.json(json);
  },

   deletarCarro:async(req,res)=>{
      let json={err:"",results:{}};
      let codigo=req.params.codigo;

      await CarroServices.deletarCarro(codigo)
      json.results="carro deletado"
      res.json(json)
   }

}