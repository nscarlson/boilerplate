#!/usr/bin/env node

const commander = require('commander')

const { name, version } = require('../../package.json')

console.log(name, version)

commander.version(version)
    .command('coverage', 'open code coverage report')
    .command('test', 'run test suite')
    .parse(process.argv)
