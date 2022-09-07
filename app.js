var app = require("express")();
var os = require("os");

app.use("/", async (req, res) => {
	console.log(`I am sendind a res ${os.hostname()}`);
	res.json({ message: "ok it works", hostname: os.hostname() });
});
var PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
