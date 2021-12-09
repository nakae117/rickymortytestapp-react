module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'indent': ['error', 4],
        '@next/next/no-img-element': 'off'
    }
};