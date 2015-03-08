**BaseStore** is a tool for reducing Store boilerplate within a Flux application.

Most Flux or Store libraries reduce boilerplate at the cost of you learning a new API - **BaseStore** simply implements the boilerplate for you.

## Installation

`npm install base-store --save`

## Usage

BaseStore only implements the 3 boilerplate methods required to create a basic store.

```
emitChange: function() {
  this.emit('change');
},

addChangeListener: function(callback) {
  this.on('change', callback);
},

removeChangeListener: function(callback) {
  this.removeListener('change', callback);
}
```

## Example

Typically creating a Store looks like this:

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
Using `BaseStore` reduces this to application specific code:

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