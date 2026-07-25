import { Colors, Typography } from "@/src/theme";
import { StyleSheet, Text, View } from "react-native";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = Typography.h1 }: LogoProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.logo, { fontSize: size }]}>NOVA</Text>
      <Text style={styles.subtitle}>AI Super App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  logo: {
    color: Colors.primary,
    fontWeight: "800",
    letterSpacing: 3,
  },

  subtitle: {
    color: Colors.text,
    marginTop: 8,
    fontSize: 16,
  },
});