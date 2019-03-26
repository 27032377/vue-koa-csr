const History = require('connect-history-api-fallback')

module.exports = options => {
    const middleware = History(options);
    const noop = () => {};
    return async (ctx, next) => {
        middleware(ctx, null, noop);
        await next();
    }
};
