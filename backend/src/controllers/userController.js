import sequelize from "../models/connect.js"
import User from "../models/User.js"

User.init(sequelize);

const getUser = async (req, res) => {
    let data = await User.findAll();
    responseSend(res, data, "Thành công!", 200);
}
export {
    getUser,
}