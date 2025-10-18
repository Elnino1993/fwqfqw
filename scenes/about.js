import Cursor from "../entities/Cursor"
import Label from "../entities/Label"
import Button from "../entities/Button"

export const entities = async () => {
  return {
    cursor: {
      x: 0,
      y: 0,
      width: 30,
      height: 30,
      renderer: <Cursor />,
    },
    title: {
      text: "About Re Protocol",
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
    description1: {
      text: "Re connects risk to capital",
      align: "center",
      fontSize: "1.1em",
      width: 600,
      height: 40,
      y: 180,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    description2: {
      text: "Decentralized reinsurance protocol",
      align: "center",
      fontSize: "0.9em",
      width: 600,
      height: 35,
      y: 230,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    description3: {
      text: "Earn yield from insurance premiums",
      align: "center",
      fontSize: "0.9em",
      width: 600,
      height: 35,
      y: 275,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    description4: {
      text: "Built on transparent smart contracts",
      align: "center",
      fontSize: "0.9em",
      width: 600,
      height: 35,
      y: 320,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    backButton: {
      text: "Back",
      fontSize: "1em",
      width: 150,
      height: 45,
      y: 400,
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
