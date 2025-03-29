'use strict';

const { json, text } = require("body-parser");

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(async function (req, res){
      const {stock,like} = req.query;
      console.log(typeof(stock));
      console.log(req.query);
      if(typeof(stock)===typeof("dd")){
        //console.log("vanthutten");
        if(like){
          const ress = await fetch(`https://stock-price-checker.freecodecamp.rocks/api/stock-prices?stock=${stock}&like=${like}`);
          const body= await ress.json();
          console.log(body);
          ress != null ? res.status(200).json(body):res.status(400).type(text).send("invalid");
        }else{
          const ress = await fetch(`https://stock-price-checker.freecodecamp.rocks/api/stock-prices?stock=${stock}`);
          const body= await ress.json();
          console.log(body);
          ress != null ? res.status(200).json(body):res.status(400).type(text).send("invalid");
        }
        
        

      }else if (typeof(stock)==="object"){
        if(like){
          const ress = await fetch(`https://stock-price-checker.freecodecamp.rocks/api/stock-prices?stock=${stock[1]}&stock=${stock[0]}&like=true`);
          const body= await ress.json();
          console.log(body);
          ress != null ? res.status(200).json(body):res.status(400).type(text).send("invalid");
        }else{
          const ress = await fetch(`https://stock-price-checker.freecodecamp.rocks/api/stock-prices?stock=${stock[1]}&stock=${stock[0]}`);
          const body= await ress.json();
          console.log(body);
          ress != null ? res.status(200).json(body):res.status(400).type(text).send("invalid");
        }
        
        //const body= await ress.json();
        // console.log(body);
        //ress != null ? res.status(200).json(body):res.status(400).type(text).send("invalid");
      }else{
        res.status(500).type(text).send("internal server error");
      }
      

      
      
    });
    
};
