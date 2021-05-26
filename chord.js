const Root = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const Modify = ['', 'min', 'aug', 'dim']
const Triad = Root.reduce((traidArray, current) => {
  return traidArray.concat(Modify.map(m => current + m))
}, [])

module.exports = {Root, Modify, Triad}