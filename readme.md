Todo: Fill in readme!

Instead of this:

```
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var data = [];

var DataStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getAll: function() {
    return data;
  }
});
```

Do this:

```
var BaseStore = require('base-store');
var assign = require('object-assign');

var data = [];

var DataStore = assign({}, new BaseStore(), {

  getAll: function() {
    return data;
  }
});
```