const MovementSystem = (entities, { input }) => {
  if (!input || !input.keyboard) return entities

  const player = entities.player
  if (!player) return entities

  const speed = 5
  let moved = false
  let newDirection = player.direction || "down"

  // WASD or Arrow keys
  if (input.keyboard.isKeyDown("KeyW") || input.keyboard.isKeyDown("ArrowUp")) {
    player.y = Math.max(50, player.y - speed)
    newDirection = "up"
    moved = true
  }
  if (input.keyboard.isKeyDown("KeyS") || input.keyboard.isKeyDown("ArrowDown")) {
    player.y = Math.min(window.innerHeight - 100, player.y + speed)
    newDirection = "down"
    moved = true
  }
  if (input.keyboard.isKeyDown("KeyA") || input.keyboard.isKeyDown("ArrowLeft")) {
    player.x = Math.max(20, player.x - speed)
    newDirection = "left"
    moved = true
  }
  if (input.keyboard.isKeyDown("KeyD") || input.keyboard.isKeyDown("ArrowRight")) {
    player.x = Math.min(window.innerWidth - 60, player.x + speed)
    newDirection = "right"
    moved = true
  }

  if (moved) {
    player.direction = newDirection
  }

  return entities
}

export default MovementSystem
