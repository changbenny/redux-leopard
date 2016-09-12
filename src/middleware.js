import leopard from 'leopard.js'

const middleware = store => next => action => {
  if (!action.meta || !action.meta.priority) {
    next(action)
    return
  }
  const priority = action.meta.priority
  leopard.put(action.meta.priority, function() {
    next(action)
  })
  leopard.start({
    autoStop: true,
  })
}

export default middleware