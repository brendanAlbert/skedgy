const config = require("../config.json");
const mongoose = require("mongoose");

const dbURI = `mongodb+srv://student:student@cluster0.kkaj2.mongodb.net/note-tuts?retryWrites=true&w=majority`;

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log(`connected to db`))
	.catch((err) => console.log(err));

// const connectionOptions = {
// 	useCreateIndex: true,
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false,
// };
// mongoose.connect(
// 	process.env.MONGODB_URI || config.connectionString,
// 	connectionOptions
// );
// mongoose.Promise = global.Promise;

// module.exports = {
// 	User: require("../users/user.model"),
// };
