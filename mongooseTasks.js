var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.umka = function(){
console.log(this.get("name") + " я просто УМКА УМКА УМКА")
}

var milanas = mongoose.model('milanas', schema)

var LP = new milanas({ name: 'UMKA' })
LP.save(function (err) {
    LP.umka()
})
