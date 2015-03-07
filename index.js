var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

function BaseStore() {

  return assign({}, EventEmitter.prototype, {
    emitChange: function() {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }
  });
}

module.exports = BaseStore;
