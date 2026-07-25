import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import Input from "@/src/components/ui/Input";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
};

export default function FormInput<T extends FieldValues>({
  control,
  name,
  placeholder,
  secureTextEntry,
  keyboardType = "default",
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <View>
          <Input
            placeholder={placeholder}
            value={field.value}
            onChangeText={field.onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />

          {fieldState.error && (
            <Text style={styles.error}>
              {fieldState.error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#EF4444",
    marginTop: 4,
    fontSize: 13,
  },
});