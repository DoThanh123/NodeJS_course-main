const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://user:daihiep123zx@cluster0.wnymowa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        )
        console.log('Connect Success!')
    } catch (error) {
        console.log('Connect Failure!')
    }
}

module.exports = { connect }
