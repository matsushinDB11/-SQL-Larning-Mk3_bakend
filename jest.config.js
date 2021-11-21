/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testMatch: ["src/**/*.test.ts"],
};
