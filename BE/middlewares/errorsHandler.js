function errorsHandler(err, _, res, next) {
    res.status(500).json({
        message: err.message,
    })
}
module.exports = errorsHandler