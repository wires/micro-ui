import vdom from 'virtual-dom'
import main from 'main-loop'

import landing from './templates/landing.jade';

const render = landing

const initialState = {
  times: 0
}

function update_something (x, s) {
  console.log('clicked', x, s)
  return {
    times: s.times + 1,
    eventData: {
      screenx: x.screenY,
      screeny: x.screenY,
      button: x.button,
      shift: x.shiftKey
    }
  }
}

const loop = main(
  Object.assign({}, initialState, {
    updateSomething: function (x) {
      const s = loop.state
      const s_ = update_something(x, s)
      loop.update(Object.assign({}, s, s_))
    }
  }),
  render,
  vdom
)

document.body.appendChild(loop.target)
