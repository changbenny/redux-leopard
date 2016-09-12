# Redux Leopard

Leopard middleware for Redux.

```sh
npm install --save redux-leopard
```

## What Is Leopard?

## How To Use?

Dispatch action with priority property in meta property like this:

```javascript
{
  type: 'TEST'
  meta: {
    priority: 1 // This will be used as Leopard job priority
  }
}
```

This middleware will use Leopard to schedule actions with priority defined.

## License

MIT

