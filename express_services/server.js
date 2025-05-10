import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

//test server
app.get('/main', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})