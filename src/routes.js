const express=require('express');
const router=express.Router();
const controler= require('./controler/CarroControler.js');

console.log(controler);
router.get("/carros",controler.buscarTodos);
router.get("/carro/:codigo",controler.buscarUm);
router.post("/carro",controler.adicionarCarro);
router.put("/carro/:codigo",controler.alterarCarro);
router.delete("/carro/:codigo",controler.deletarCarro);



module.exports=router;