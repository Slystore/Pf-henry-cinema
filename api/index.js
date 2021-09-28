const server = require('./src/app');
const {conn} = require('../api/src/db')

 async function  main (){
      await server.listen(3001,()=>{
        console.log('%s listening at 3001')
    })
}
main()
