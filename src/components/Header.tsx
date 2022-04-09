import {Text} from "react-native";

interface IProps {
    text: string;
}

export default function Header(props: IProps) {
    return (
        <Text style={{fontSize: "32px", fontWeight: "bold"}}>{props.text}</Text>
    )
}
