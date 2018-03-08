const Tram = require('tram-one')
const html = Tram.html()

const codeStyle = `
  margin: 0;
  font-size: 1em;
  font-family: 'Source Code Pro', monospace;
`

module.exports = (attrs, children) => html`
  <span style=${codeStyle}>
    ${children}
  </span>
`
