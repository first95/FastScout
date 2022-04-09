import {View} from "react-native";
import {Button} from "react-native-paper";
import QRCode from "easyqrcodejs";


export default function QRPage(props) {
    let options = {text: qrCode}
    new QRCode(qrRef.current, options);

    return (
        <div style={{visibility: "hidden", maxHeight: 0}}>
            <View style={styles.qrCode}>
                <h2>Match QR Code</h2>
                <div ref={qrRef}/>

                <ButtonBox>
                    <Button>Back</Button>
                    <Button>Restart</Button>
                </ButtonBox>

                <MatchString onClick={(event: any) => {
                    event.target.firstChild.data = qrString
                }}>View QR String</MatchString>
            </View>
        </div>
    )
}
