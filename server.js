import express from 'express';


const app = express()
const port = 8000

const secure = (req, res, next) => {
	const token = req.params.token;	
	if (token && token.length > 3) {
		next();
	} else {
		res.status(403).json('Access Forbidden: Invalid Token');
	}
};

app.get('/verify/:token', secure, (req, res) => {
	res.send('Hello World!');
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});