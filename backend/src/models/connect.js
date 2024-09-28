import { Sequelize } from "sequelize";

const sequelize = new Sequelize('BTSQLB1', 'root', '1234', {
    host: 'localhost',
    dialect: "mysql"
  });
//  test ket noi
try{
 await sequelize.authenticate();
 console.log("ket noi thanh c");
}catch(e){
    console.log(e);
}
export default sequelize
