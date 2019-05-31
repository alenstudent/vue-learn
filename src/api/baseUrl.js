let baseUrl = '/api'

switch (process.env.NODE_ENV) {
    case 'dev':
        baseUrl = 'http://xx'
        break;
    case 'pre':
        baseUrl = 'http://xxx'
        break;
    case 'production':
        baseUrl = 'http://xxx'
        break;
}

export default baseUrl