import express from 'express';

const app = express();

app.use('/public', express.static('public'));

app.use((req, res) => {
    res.status(200).send('SUCCESS');
});

const init = () => app.listen(8888, () => {
    console.log('Listening on port', 8888);
});

export { init };
export default app;
