import { Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#070B14",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#7C4DFF",
          fontSize: 42,
          fontWeight: "bold",
        }}
      >
        NOVA
      </Text>

      <Text
        style={{
          color: "#FFFFFF",
          marginTop: 12,
          fontSize: 18,
        }}
      >
        AI Super App
      </Text>
    </View>
  );
}