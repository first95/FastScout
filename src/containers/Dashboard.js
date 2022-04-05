import Prematch from "./ScoutFlow/Prematch";
import Autonomous from "./ScoutFlow/Autonomous";
import Teleop from "./ScoutFlow/Teleop";
import Endgame from "./ScoutFlow/Endgame";
import Postmatch from "./ScoutFlow/Postmatch";
import {StyleSheet, View} from "react-native";
import {useRef, useState} from "react";
import * as QRCode from 'easyqrcodejs';

let initPreMatchState = {
    scouterName: "",
    event: "",
    matchLevel: "",
    matchNumber: "",
    robotPosition: "",
    teamNumber: "",
}

let initAutonState = {
    taxi: "",
    autonCargoScored: "",
    autonTargetGoal: "",
}

export default function Dashboard() {
    const [preMatchState, setPreMatchState] = useState(initPreMatchState);
    const [autonState, setAutonState] = useState(initAutonState);
    const qrRef = useRef();

    const submitForm = (event) => {
        event.preventDefault();
        console.log("PreMatch State: ", preMatchState);

        let qrCode = "";
        for (let key in preMatchState) {
            qrCode += preMatchState[key];
            qrCode += " ";
        }

        console.log("QR Code string: ", qrCode);
        var options = {
            text: qrCode
        }
        new QRCode( qrRef.current, options);
    }

    return (
        <form onSubmit={(event) => submitForm(event)}>
            <View style={styles.container}>
                <Prematch state={preMatchState} setState={setPreMatchState} />
                <Autonomous/>
                <Teleop/>
                <Endgame/>
                <Postmatch/>
                <button type={"submit"}>Create QR Code</button>
            </View>

            <div ref={qrRef}></div>
        </form>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue"
    },
});
