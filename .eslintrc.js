module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "tsconfigRootDir": "/",
        "project": ["./tsconfig.eslint.json"]
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
