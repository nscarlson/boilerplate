// Any code added here will run before each jest suite is run

require('isomorphic-fetch')

global.requestAnimationFrame = (callback) => setTimeout(callback, 0)

const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })
