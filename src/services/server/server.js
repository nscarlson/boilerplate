import express from 'express';

import { APP_PORT } from 'services/constants';

const app = express();

app.use('/public', express.static('public'));

app.use((req, res) => {
    res.status(200).send('SUCCESS');
});

const init = () => app.listen(APP_PORT, () => {
    console.log('Listening on port', APP_PORT);
});

export { init };
export default app;
