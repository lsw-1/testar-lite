import * as React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo";

interface Props {
  test: string;
}

const Test: React.FC<Props> = (_props: Props): JSX.Element => {
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      start={[0.1, 1]}
      end={[1, 0.5]}
      colors={["#feffaa", "#33aaff"]}
    >
      <Text>hej</Text>
    </LinearGradient>
  );
};

export default Test;
