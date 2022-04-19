import {Text} from "react-native";

interface IProps {
    text: string;
}

export default function Header(props: IProps) {
    return (
        <Text style={{fontSize: "32px", fontWeight: "bold", textDecoration: "underline"}}>{props.text}</Text>
    )
}
