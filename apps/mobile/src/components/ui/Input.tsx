import { Colors, Radius, Spacing } from "@/src/theme";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

export default function Input(props: Props) {
  return (
    <TextInput
      placeholderTextColor="#94A3B8"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.surface,
    color: Colors.white,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    fontSize: 16,
    marginBottom: Spacing.md,
  },
});