const hello = ctx => {
    ctx.response.body = 'Hello World!';
};

module.exports = hello;