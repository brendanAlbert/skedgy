const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../_helpers/db");
const User = db.User;

module.exports = {
	authenticate,
};

async function authenticate({ username, password }) {
	const user = await User.findOne({ username });
	if (user && bcrypt.compareSync(password, user.hash)) {
		const token = jwt.sign({ sub: user.id }, config.secret, {
			expiresIn: "1d",
		});
		return {
			...user.toJSON(),
			token,
		};
	}
}
