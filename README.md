# Minimalistic way to do web UIs

Not super small or anything:

```
Hash: 8044ed1a59d93707f876
Version: webpack 1.13.3
Time: 1097ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  65.5 kB       0  [emitted]  main
bundle.js.map  80.7 kB       0  [emitted]  main
    + 45 hidden modules
```

But very simple:

```js
import vdom from 'virtual-dom'
import main from 'main-loop'

import landing from './templates/landing.jade';

const initialState = {
  times: 0,
  updateSomething: function (x) {
    console.log('click', x)
  }
}

const render = landing

const loop = main(
  initialState,
  render,
  vdom
)

document.body.appendChild(loop.target)
```

And from your template, you can call `updateSomething` or
refer to state such as `times`.

```jade
// ./templates/landing.jade
doctype html
html
  body
    h1 it's minimalistic
    h4 very very
    button.pure-button.primary(onclick=updateSomething) Click
    p clicked this many times:
      span= times
```

To update the state, call `loop.update`
