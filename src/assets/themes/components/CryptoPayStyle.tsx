import OnramperWidget from "@onramper/widget";
import Paper from "@mui/material/Paper";
import lightThemeColors from "../utils/lightThemeColors";
import darkThemeColors from "../utils/darkThemeColors";

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark")
}

let themeMode = localStorage.getItem("theme")

export default function CryptoPayStyle() {
    const wallets = {
        BTC: {address: "btcAddr"},
        BNB: {address: "bnbAddress", memo: "cryptoTag"},
    };

    return (
        <Paper
            sx={{
                width: "440px",
                height: "595px",
                boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "auto",
                color:  themeMode === "light" ? "black" : "white",
                '& div, nav, input, footer': {
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    backgroundColor: themeMode === "light" ? lightThemeColors.grey["200"] : darkThemeColors.grey["700"]
                }
            }}
        >
            <OnramperWidget
                API_KEY={"pk_test_ass3gtLSWQpI11IWUZLJdrfyQhj7bTw_3xwLvhEvH6Q0"}
                defaultAddrs={wallets}
                defaultAmount={50}
                defaultCrypto={"BTC"}
                defaultFiat={"EUR"}
                isAddressEditable={true}
            />
        </Paper>
    );
}