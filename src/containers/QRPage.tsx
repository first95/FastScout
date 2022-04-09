import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import QRCode from "easyqrcodejs";
import {useEffect, useRef} from "react";
import styled from "styled-components";

interface IProps {
    qrString: string;
    setFormVisible: any;
    resetState: any;
}

export default function QRPage(props: IProps) {
    const qrRef = useRef<any>();

    useEffect(() => {
        let options = {
            correctLevel: QRCode.CorrectLevel.L,
            quietZone: 15,
            quietZoneColor: '#FFFFFF',
            width: 200,
            height: 200,
            text: props.qrString
        }
        new QRCode(qrRef.current, options);
        qrRef.current.children[0].style.borderRadius = "25px"
    }, [props])

    return (
        <View style={styles.qrCode}>
            <h2>Match QR Code</h2>
            <div ref={qrRef}/>

            <ButtonBox>
                <ButtonContainer>
                    <Button onPress={() => props.setFormVisible(true)}>Back</Button>
                </ButtonContainer>

                <ButtonContainer>
                    <Button onPress={() => {props.resetState(); props.setFormVisible(true)}}>Restart</Button>
                </ButtonContainer>
            </ButtonBox>

            <MatchString onClick={(event: any) => {
                event.target.firstChild.data = props.qrString
            }}>View QR String</MatchString>
        </View>
    )
}

const styles = StyleSheet.create({
    qrCode: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

const ButtonContainer = styled.div`
  &:hover {
    background-color: lightblue;
    border-radius: 15px;
    transition: all 0.25s;
  }
  
  transition: all 0.25s;
`;

const ButtonBox = styled.div`
  display: flex;

  // DEBUG STYLES //
  //border: red solid 2px;
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
