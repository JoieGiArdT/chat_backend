'use strict'
const __createBinding = (this && this.__createBinding) || (Object.create
  ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    let desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function () { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
  }
  : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
  })
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create
  ? function (o, v) {
    Object.defineProperty(o, 'default', { enumerable: true, value: v })
  }
  : function (o, v) {
    o.default = v
  })
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod
  const result = {}
  if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
  __setModuleDefault(result, mod)
  return result
}
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const dotenv = __importStar(require('dotenv'))
const express_1 = __importDefault(require('express'))
const app_1 = __importDefault(require('./src/app'))
dotenv.config()
const app = (0, express_1.default)()
// eslint-disable-next-line no-new
new app_1.default(app)
const port = (process.env.PORT != null) ? parseInt(process.env.PORT, 10) : 80
app
  .listen(port, 'localhost', function () {
    console.info(`Server running on : http://localhost:${port}`)
  })
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Server startup error: address already in use')
    } else {
      console.log(err)
    }
  })
