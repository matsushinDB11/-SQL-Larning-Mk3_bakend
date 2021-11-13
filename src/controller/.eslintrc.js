// express のreq.bodyがanyのため、暫定この設定でeslintのerrorを回避する

module.exports = {
    "extends": "../../.eslintrc.js",
    "rules": {
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off"
    }
}
