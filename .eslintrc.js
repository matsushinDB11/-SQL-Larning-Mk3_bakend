module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": ['./tsconfig.eslint.json']
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        "**/.eslintrc.js",
        "jest.config.js"
    ],
    "rules": {
    }
};
