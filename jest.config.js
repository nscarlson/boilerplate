const { basename, resolve } = require('path')

const { projects } = require('./internal.config')

const currentProject = basename(process.cwd())

// add global module mappings here
const moduleNameMapper = {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/boilerplate/__mocks__/fileMock.js',
}

// add custom alias for each internal project, so a project can be imported by itself and other projects the same way
for (const project of projects) {
    moduleNameMapper[`^${project}([^\\/]*)\\/(.*)$`] = currentProject === project ? '<rootDir>$1/src/$2' : `<rootDir>/node_modules/${project}$1/src/$2`
}

const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'scripts/**/*.js',
        'src/**/*.js',
        '!**/index.js',
        '!**/migrations/**',
        '!scripts/jest/setup.js'
    ],
    coverageReporters: [
        'json',
        'lcov',
        'text-summary'
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    moduleNameMapper,
    modulePaths: [
        'src'
    ],
    notify: true,
    rootDir: process.cwd(),
    setupTestFrameworkScriptFile: resolve(__dirname, 'scripts/jest/setup.js'),
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    transform: {
        '\\.(gql|graphql)$': 'jest-transform-graphql',
        '.*': 'babel-jest',
    },
    transformIgnorePatterns: [
        `<rootDir>/node_modules/(?!${projects.join('|')})`
    ]
}

module.exports = config
