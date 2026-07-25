import React, { forwardRef } from "react";
import {
    Control,
    Controller,
    FieldValues,
    Path,
} from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import Input from "@/src/components/ui/Input";

type Props<T extends FieldValues> =
  React.ComponentProps<typeof Input> & {
    control: Control<T>;
    name: Path<T>;
  };

const FormInput = forwardRef<TextInput, Props<any>>(
  ({ control, name, ...inputProps }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <View>
            <Input
              ref={ref}
              {...inputProps}
              value={field.value}
              onChangeText={field.onChange}
              hasError={!!fieldState.error}
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
);

export default FormInput;

const styles = StyleSheet.create({
  error: {
    color: "#EF4444",
    marginTop: 4,
    fontSize: 13,
  },
});