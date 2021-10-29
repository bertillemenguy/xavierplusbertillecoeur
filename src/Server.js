const express = require('express')
const app = express()
const mariadb = require('mariadb')

var path = require("path");

const cors = require('cors');
app.use(cors({origin:'*'}));

app.get('/',(req,res) => {
    
  res.send("ça fonctionne");
  //res.sendFile(path.join(__dirname+'/index.html'))
})


// Middleware
app.use(express.json())

app.get("/depart",(req,res) => {

mariadb . createConnection ({ 
    host :  'obiwan2.univ-brest.fr' ,
    user :  'zmenguybe' ,
    password :  'qavhc8qf',
    database:'zil3-zmenguybe'
}) 

    . then ( conn  =>  { 
       conn . query ( "select * FROM FORMATION") 
         . then ( rows  =>  { 
           console . log ( rows ); 
           res.json(rows); 
           conn . end (); 
         }) 
         . catch (err  =>  {  
           console.log(err); 
         }); 
    }) 
    . catch ( err  =>  { 
        console.log(err); 
    });

})

    app.post("/UFR",(req,res) => {
     
      mariadb . createConnection ({ 
        host :  'obiwan2.univ-brest.fr' ,
        user :  'zmenguybe' ,
        password :  'qavhc8qf',
        database:'zil3-zmenguybe'
    })
      . then ( conn  =>  { 
        conn . query ( "insert into UFR (idUFR, nomUFR, nomUFR_court) VALUES ( 4, 'Essai', 'es')")
          . then ( rows  =>  { 
            console . log ( rows );
            res.send(rows);   
            conn . end (); 
          }) 
          . catch (err  =>  {  
            console.log(err); 
          }); 
      }) 
      . catch ( err  =>  { 
         console.log(err); 
      });
      
    })


app.listen("7179", () => {
    console.log("Serveur à l'écoute")
})