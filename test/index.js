import test from 'ava'
import 'babel-register'
import { createStore, applyMiddleware } from 'redux'

import leopardMiddleware from '../src'

const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      executed: false,
    }
  }
  if (action.type === 'TEST') {
    return Object.assign({}, state, {
      executed: true,
    })
  }
  return state
}

test('export middleware', t => {
  t.truthy(leopardMiddleware)
})

test('middleware will be executed when actions have priority', t => {
  const store = createStore(reducer, applyMiddleware(leopardMiddleware))
  store.dispatch({
    type: 'TEST',
    meta: {
      priority: 1,
    },
  })
  t.false(store.getState().executed)
})

test('middleware will not be executed when actions do not have priority', t => {
  const store = createStore(reducer, applyMiddleware(leopardMiddleware))
  store.dispatch({
    type: 'TEST'
  })
  t.true(store.getState().executed)
})