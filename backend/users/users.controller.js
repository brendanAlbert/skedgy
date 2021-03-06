const express = require("express");
const router = express.Router();
const userService = require("./user.service");

router.post("/authenticate", authenticate);

module.exports = router;

function authenticate(req, res, next) {
	userService
		.authenticate(req.body)
		.then((user) =>
			user
				? res.json(user)
				: res
						.status(400)
						.json({ message: "username or password is invalid" })
		)
		.catch((err) => next(err));
}
