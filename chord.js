const Root = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const AllType = ['', 'min', 'aug', 'dim']
const MajorType = ['']
const MinorType = ['min']

const TypeMap = {
  all: AllType,
  minor: MinorType,
  major: MajorType
}

const getTriad = (type) => {
  return Root.reduce((traidArray, current) => {
    return traidArray.concat(TypeMap[type].map(m => current + m))
  }, [])
}


module.exports = {Root, AllType, getTriad, MajorType, MinorType, TypeMap}