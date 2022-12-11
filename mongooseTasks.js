var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Milana = mongoose.model('Milana', { name: String })

var songs = new Milana({ name: 'Умка' })
songs.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Ведь я такая Умка Умка Умка)))')
    }
})
