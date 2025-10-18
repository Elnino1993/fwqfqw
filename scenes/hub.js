import Cursor from "../entities/Cursor"
import Label from "../entities/Label"
import Button from "../entities/Button"
import Player from "../entities/Player"

export const entities = async () => {
  return {
    cursor: {
      x: 0,
      y: 0,
      width: 30,
      height: 30,
      renderer: <Cursor />,
    },
    player: {
      x: window.innerWidth / 2 - 20,
      y: window.innerHeight / 2,
      width: 40,
      height: 60,
      direction: "down",
      renderer: <Player />,
    },
    title: {
      text: "Protocol Hub",
      align: "center",
      fontSize: "2.5em",
      width: 600,
      height: 100,
      y: 60,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    instructions: {
      text: "Use WASD or Arrow Keys to move",
      align: "center",
      fontSize: "0.8em",
      width: 400,
      height: 30,
      y: 140,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    vaultButton: {
      text: "Insurance Vaults",
      fontSize: "1.2em",
      width: 280,
      height: 50,
      y: 200,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/vault" })
      },
      renderer: <Button />,
    },
    yieldButton: {
      text: "Yield Dashboard",
      fontSize: "1.2em",
      width: 280,
      height: 50,
      y: 270,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/yield" })
      },
      renderer: <Button />,
    },
    riskButton: {
      text: "Risk Management",
      fontSize: "1.2em",
      width: 280,
      height: 50,
      y: 340,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/risk" })
      },
      renderer: <Button />,
    },
    backButton: {
      text: "Exit",
      fontSize: "1em",
      width: 150,
      height: 45,
      y: 430,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/" })
      },
      renderer: <Button />,
    },
  }
}
