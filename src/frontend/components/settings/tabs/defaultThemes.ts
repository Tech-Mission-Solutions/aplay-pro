import type { Themes } from "../../../../types/Settings"

export const defaultThemes: { [key: string]: Themes } = {
    default: {
        name: "default",
        default: true,
        font: {
            family: "",
            size: "1em"
        },
        colors: {
            primary: "#001E17",
            "primary-lighter": "#363636",
            "primary-darker": "#121212",
            "primary-darkest": "#000000",
            text: "#FFFFFF",
            textInvert: "#131313",
            "secondary-text": "#f0f0ff",
            secondary: "#54EB77",
            "secondary-opacity": "#54EB77",
            hover: "rgb(255 255 255 / 0.15)",
            focus: "rgb(255 255 255 / 0.2)",
        },
    },
    sea: {
        name: "Sea",
        font: {
            family: "Georgia",
            size: "1em"
        },
        colors: {
            primary: "#D5DFF1",
            "primary-lighter": "#BFCBE3",
            "primary-darker": "#E0E5FF",
            "primary-darkest": "#ECF4FE",
            text: "#424861",
            textInvert: "#f0f0ff",
            "secondary-text": "#424861",
            secondary: "#007DB3",
            "secondary-opacity": "rgb(0 125 179 / 0.5)",
            hover: "rgb(0 0 0 / 0.05)",
            focus: "rgb(0 0 0 / 0.1)"
        }
    },
    aqua: {
        name: "Aqua",
        font: {
            family: "sans-serif",
            size: "1em"
        },
        colors: {
            primary: "#202020",
            "primary-lighter": "#303030",
            "primary-darker": "#101010",
            "primary-darkest": "#000000",
            text: "#cccccc",
            textInvert: "#131313",
            "secondary-text": "#eeeeee",
            secondary: "#00ffbe",
            "secondary-opacity": "rgb(0 255 190 / 0.5)",
            hover: "rgb(255 255 255 / 0.2)",
            focus: "rgb(255 255 255 / 0.3)"
        }
    },
    charcoal: {
        name: "Charcoal",
        font: {
            family: "",
            size: "1em"
        },
        colors: {
            primary: "#292929",
            "primary-lighter": "#303030",
            "primary-darker": "#1e1e1e",
            "primary-darkest": "#121212",
            text: "#d0d0d0",
            textInvert: "#131313",
            "secondary-text": "#808080",
            secondary: "#8f8f8f",
            "secondary-opacity": "rgb(143 143 143 / 0.5)",
            hover: "rgb(208 208 208 / 0.05)",
            focus: "rgb(208 208 208 / 0.1)"
        }
    },
    papyrus: {
        name: "Papyrus",
        font: {
            family: "Papyrus",
            size: "0.9em"
        },
        colors: {
            primary: "#EAC6A4",
            "primary-lighter": "#D6B59A",
            "primary-darker": "#FFD1B3",
            "primary-darkest": "#D7B99D",
            text: "#000242",
            textInvert: "#000242",
            "secondary-text": "#000242",
            secondary: "#000361",
            "secondary-opacity": "rgb(0 3 97 / 0.5)",
            hover: "rgb(234 198 164 / 0.2)",
            focus: "rgb(234 198 164 / 0.3)"
        }
    },
    terminal: {
        name: "Terminal",
        font: {
            family: "monospace",
            size: "1em"
        },
        colors: {
            primary: "#202020",
            "primary-lighter": "#303030",
            "primary-darker": "#101010",
            "primary-darkest": "#000000",
            text: "#cccccc",
            textInvert: "#131313",
            "secondary-text": "#F1F1F1",
            secondary: "#00FF00",
            "secondary-opacity": "rgb(58 210 255 / 0.5)",
            hover: "rgb(255 255 255 / 0.2)",
            focus: "rgb(255 255 255 / 0.3)"
        }
    }
}
