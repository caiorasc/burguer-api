import Koa from 'koa';

export default async function createServer() {
    const app = new Koa();

    app.use(ctx => {
        ctx.body = 'Hello koa';
    });

    return app;
};