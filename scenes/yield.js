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
      text: "Yield Dashboard",
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
    currentAPY: {
      text: "Current APY: 12.5%",
      align: "center",
      fontSize: "1.5em",
      width: 500,
      height: 50,
      y: 180,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    totalDeposits: {
      text: "Total Deposits: $1,234,567",
      align: "center",
      fontSize: "1.1em",
      width: 500,
      height: 40,
      y: 250,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    earnedYield: {
      text: "Earned Yield: $12,345",
      align: "center",
      fontSize: "1.1em",
      width: 500,
      height: 40,
      y: 300,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    claimButton: {
      text: "Claim Rewards",
      fontSize: "1.2em",
      width: 250,
      height: 50,
      y: 370,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        console.log("[v0] Claim rewards clicked")
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
