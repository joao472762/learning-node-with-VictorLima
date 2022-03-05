const Sequelize = require('sequelize')
const sequelize = new Sequelize('testclass17','root','root',{
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('banco de dados conectado com sucesso')
}).catch(erro=>{
    (`falha ao se conectar ${erro}`)
})