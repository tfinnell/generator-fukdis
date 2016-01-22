jest.dontMock('<%= `../../constants/${storeName}Constants` %>');
jest.dontMock('<%= `../${storeName}Store` %>');
jest.dontMock('object-assign');
jest.mock('../../core/Dispatcher');

describe('<%= storeName %>Store', () => {
  const <%= storeName %>Constants = require('../../constants/<%= storeName %>Constants');
  let AppDispatcher;
  let <%= storeName %>Store;
  let callback;

  beforeEach(() => {
    AppDispatcher = require('../../core/Dispatcher');
    <%= storeName %>Store = require('../../<%= storeName %>Store');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });
});
