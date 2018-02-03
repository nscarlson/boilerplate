const projects = [
    '49'
]

const re = new RegExp(`(${projects.join('|')})`)

module.exports = {
    projects,
    re,
}
