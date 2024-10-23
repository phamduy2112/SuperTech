import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dattk18', 'root', '', {
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
