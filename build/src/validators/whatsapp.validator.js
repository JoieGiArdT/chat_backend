'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
class LessonValidator {
  validateMessageObject () {
    return (req, res, next) => {
      try {
        const messageObject = req.body.entry[0].changes[0].value.messages[0]
        if (typeof messageObject !== 'undefined') {
          req.body = req.body.entry[0].changes[0].value
          next()
        } else {
          throw new Error('SIN_MENSAJE')
        }
      } catch (error) {
        res.send('EVENT_RECEIVED')
      }
    }
  }
}
exports.default = LessonValidator
