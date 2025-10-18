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
      text: "RE PROTOCOL",
      align: "center",
      fontSize: "3em",
      width: 600,
      height: 100,
      y: 80,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    subtitle: {
      text: "Decentralized Reinsurance",
      align: "center",
      fontSize: "1em",
      width: 600,
      height: 50,
      y: 200,
      layout: {
        horizontal: "center",
      },
      renderer: <Label />,
    },
    enterProtocol: {
      text: "Enter Protocol",
      fontSize: "1.2em",
      width: 250,
      height: 50,
      y: 320,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/hub" })
      },
      renderer: <Button />,
    },
    learnMore: {
      text: "Learn More",
      fontSize: "1em",
      width: 200,
      height: 45,
      y: 390,
      layout: {
        horizontal: "center",
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: "switchScene", target: "/about" })
      },
      renderer: <Button />,
    },
  }
}
