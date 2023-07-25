
// QUERYPARAMS =>meusite.com/users?name=tamires&age=27   //é filtro
/*app.get('/users',(request,response)=>{
     // const name =request.query.name
     //const age = request.query.age
   const{name,age} = request.query

    return response.json({name, age})
 })*/

 //ROUTE PARAMS =>/USERS/2 //buscar, deleta autualiza algo especifico

/*app.get('/users/:id',(request,response)=>{
 
  const {id} =request.params

 return response.json({id})
})

app.listen(port, ()=>{

   console.log(`server started on ${port}`)
} )*/



//REQUEST bODY=("name":tamires "age":27)

/*app.get('/users', (request, response) => {

   const { name, age } = request.body

   return response.json({ name, age })

})


app.listen(port, () => {

   console.log(`server started on ${port}`)
})*/


const uuid =require('uuid')
//console.log(generatedUuid);
