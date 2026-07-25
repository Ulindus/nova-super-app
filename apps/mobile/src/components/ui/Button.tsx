import { Colors, Radius, Spacing } from "@/src/theme";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  onPress,
  icon,
  variant = "primary",
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        variant === "secondary" && styles.secondary,
      ]}
    >
      {icon && <View style={styles.icon}>{icon}</View>}

      <Text
        style={[
          styles.text,
          variant === "secondary" && styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  secondary: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  text: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 16,
  },

  secondaryText: {
    color: Colors.white,
  },

  icon: {
    marginRight: 10,
  },
});