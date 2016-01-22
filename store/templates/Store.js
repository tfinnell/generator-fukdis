import AppDispatcher from '../core/Dispatcher';
import { EventEmitter } from 'events';
import <%- `${storeName}Constants from '../constants/${storeName}Constants';` %>
import assign from 'object-assign';
import <%- `${storeName}StoreUtilities from './${storeName}StoreUtilities';` %>

const CHANGE_EVENT = 'change';

const <%= storeName %>Store = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register(action => {
  switch (action.actionType) {
    default:
      return true;
  }

  return true;
});

export default <%= storeName %>Store;
