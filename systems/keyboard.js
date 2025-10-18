class KeyboardInput {
  constructor() {
    this.keys = {}

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        this.keys[e.code] = true
      })

      window.addEventListener("keyup", (e) => {
        this.keys[e.code] = false
      })
    }
  }

  isKeyDown(keyCode) {
    return !!this.keys[keyCode]
  }
}

const keyboardInput = new KeyboardInput()

const KeyboardSystem = (entities, { input }) => {
  if (!input) {
    return entities
  }

  input.keyboard = keyboardInput

  return entities
}

export default KeyboardSystem
