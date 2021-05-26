const Koa = require('koa')
const KoaRouter = require('koa-router')
const path = require('path')
const {times} = require('lodash')
const {Triad} = require('./chord')
const {randomItem} = require('./utils')

const app = new Koa()
const router = new KoaRouter()

router.get(`/*`, async (ctx) => {
  const length = ctx.request.query['length'] || 5
  ctx.body = {chordProgression: times(length, () => randomItem(Triad)).join(' ')}
})

app.use(router.allowedMethods()).use(router.routes());

// dev
// app.listen(3000)
module.exports = app
