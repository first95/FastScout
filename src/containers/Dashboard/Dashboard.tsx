import {StyleSheet, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import QRCode from 'easyqrcodejs';
import {IAutonState, IEndgameState, IPostmatchState, IPreMatchState, ITeleopState} from "./types";
import styled from "styled-components";
import {Button} from "react-native-paper";
import Prematch from "../ScoutFlow/Prematch";
import Autonomous from "../ScoutFlow/Autonomous";
import Teleop from "../ScoutFlow/Teleop";
import Endgame from "../ScoutFlow/Endgame";
import Postmatch from "../ScoutFlow/Postmatch";

let initPreMatchState: IPreMatchState = {
    event: "",
    matchLevel: "qualifiers",
    matchNumber: "",
    robotPosition: "red1",
    scoutName: "",
    teamNumber: ""
}

let initAutonState: IAutonState = {
    cargoScored: "notObserved",
    targetGoal: "notObserved",
    taxi: false
}

let initTeleopState: ITeleopState = {
    cargoIntake: "notObserved",
    shootingSpot: "notObserved",
    shotAccuracy: "notObserved",
    shotsTaken: "notObserved",
    targetGoal: "notObserved"
}

let initEndgameState: IEndgameState = {
    attemptedClimb: "notObserved",
    cargoIntake: "notObserved",
    climbTime: "notObserved",
    shootingSpot: "notObserved",
    shotAccuracy: "notObserved",
    successfulClimb: "notObserved",
    targetGoal: "notObserved"
}

let initPostmatchState: IPostmatchState = {
    defenseSkill: "notObserved",
    defenseTolerance: "notObserved",
    driverSkill: "notObserved",
    comment: ""
}

export default function Dashboard() {
    const [preMatchState, setPreMatchState] = useState<IPreMatchState>(initPreMatchState);
    const [autonState, setAutonState] = useState<IAutonState>(initAutonState);
    const [teleopState, setTeleopState] = useState<ITeleopState>(initTeleopState);
    const [endgameState, setEndgameState] = useState<IEndgameState>(initEndgameState);
    const [postmatchState, setPostmatchState] = useState<IPostmatchState>(initPostmatchState);
    const [formVisible, setFormVisible] = useState(true);
    const [qrString, setQrString] = useState("ujelkjdha3kjfh3wkjahfkjdshfkj3hwkdhfkjah");
    const qrRef = useRef<any>();

    const submitForm = (event: any) => {
        event.preventDefault();
        console.log("== DEBUG == States: ", preMatchState, autonState, teleopState, endgameState, postmatchState);

        let qrCode = "";
        // format state to string
        for (let key in preMatchState) { // @ts-ignore
            qrCode += preMatchState[key] + " ";
        }
        // for (let key in autonState) { // @ts-ignore
        //     qrCode += autonState[key] + " ";
        // }
        // for (let key in teleopState) { // @ts-ignore
        //     qrCode += teleopState[key] + " ";
        // }
        // for (let key in endgameState) { // @ts-ignore
        //     qrCode += endgameState[key] + " ";
        // }
        // for (let key in postmatchState) { // @ts-ignore
        //     qrCode += postmatchState[key] + " ";
        // }

        console.log("== DEBUG == QR Code string: ", qrCode);
        setQrString(qrCode);

        setFormVisible(false);
    }

    useEffect(() => {
        let options = {text: "TEST123"}
        new QRCode(qrRef.current, options);
        console.log(qrRef.current.children[0].style.borderRadius = "15px")
    })

    return (
        <>
            <form onSubmit={(event) => submitForm(event)}>
                {formVisible && (
                    <View style={styles.container}>
                        <Prematch state={preMatchState} setState={setPreMatchState}/>
                        <Autonomous state={autonState} setState={setAutonState}/>
                        <Teleop state={teleopState} setState={setTeleopState}/>
                        <Endgame state={endgameState} setState={setEndgameState}/>
                        <Postmatch state={postmatchState} setState={setPostmatchState}/>
                        <button type={"submit"}>Create QR Code</button>
                    </View>
                )}
            </form>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue"
    },
    qrCode: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

const ButtonBox = styled.div`
  display: flex;
`;

const MatchString = styled.p`
  opacity: 0.25;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: all 0.25s;
  }
`;
