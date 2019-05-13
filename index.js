import createServer from './src/config/server';

const PORT = 3000;

createServer().then(app => {
    app.listen(PORT, () => {
        console.log(`App listem on port ${PORT}`);
    })
});