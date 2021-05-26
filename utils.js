
const randomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}
module.exports = {randomItem}