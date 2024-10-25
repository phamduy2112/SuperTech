import { Sequelize } from "sequelize";
<<<<<<< HEAD
import { Op } from 'sequelize';
const sequelize = new Sequelize('datk18', 'root', '', {
=======

const sequelize = new Sequelize('datnk18', 'root', '123', {
>>>>>>> devDuy
  host: 'localhost',
  dialect: "mysql"
});
try {
  await sequelize.authenticate();
  console.log("Kết Nối Thành Công");
} catch (e) {
  console.log(e);
}
export default sequelize
