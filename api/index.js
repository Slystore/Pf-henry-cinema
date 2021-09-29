const server = require('./src/app')

 async function  main (){
      await server.listen(3001,()=>{
        console.log('%s listening at 3001')
    })
}
main() 