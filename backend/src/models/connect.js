import { Sequelize } from "sequelize";
import { Op } from 'sequelize';
const sequelize = new Sequelize('datnk18', 'root', '123', {
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
