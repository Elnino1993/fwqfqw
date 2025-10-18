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
      y: window.innerHeight / 2 + 50,
      width: 40,
      height: 60,
      direction: "down",
      renderer: <Player />,
    },
    title: {
      text: "Insurance Vaults",
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
    reUSDe: {
      text: "reUSDe - Insurance Alpha",
      align: "center",
      fontSize: "1.1em",
      width: 500,
      height: 40,
      y: 180,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    reUSDeDesc: {
      text: "Earn yield from insurance premiums",
      align: "center",
      fontSize: "0.8em",
      width: 500,
      height: 30,
      y: 215,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    reUSD: {
      text: "reUSD - Basis-Plus",
      align: "center",
      fontSize: "1.1em",
      width: 500,
      height: 40,
      y: 270,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    reUSDDesc: {
      text: "Stable yield with capital protection",
      align: "center",
      fontSize: "0.8em",
      width: 500,
      height: 30,
      y: 305,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    depositButton: {
      text: "Deposit Assets",
      fontSize: "1.2em",
      width: 250,
      height: 50,
      y: 370,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        // Placeholder for deposit functionality
        console.log("[v0] Deposit clicked")
      },
      renderer: <Button />,
    },
    backButton: {
      text: "Back to Hub",
      fontSize: "1em",
      width: 200,
      height: 45,
      y: 440,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/hub" })
      },
      renderer: <Button />,
    },
  }
}
