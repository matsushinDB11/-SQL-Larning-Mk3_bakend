module.exports = {
    info: {
        // API informations (required)
        openapi: '3.0.0',
        title: 'SQL-Learning-MK3 test', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'Testing for SQL-Learning-MK3_backend', // Description (optional)
    },
    tags: [
        {
            name: 'User',
            description: 'ユーザー関連'
        },
        {
            name: 'Auth',
            description: '認証'
        }
    ]
    ,
    // host: `localhost:${PORT}`, // Host (optional)
    // basePath: '/', // Base path (optional)
    apis: ['./dist/index.js']
};
