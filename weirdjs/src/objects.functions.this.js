'use strict';

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'Updated c object';
       // console.log(self);

        var setname = (newname) => {
            self.name = newname;
        }
        setname('Updated again! The c object!');
    }
}

module.exports = {c};