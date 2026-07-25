import { Colors, Spacing } from "@/src/theme";
import React, { forwardRef, ReactNode, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = TextInputProps & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hasError?: boolean;
};

const Input = forwardRef<TextInput, Props>(
  (
    {
      leftIcon,
      rightIcon,
      hasError,
      onFocus,
      onBlur,
      style,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    return (
      <View
        style={[
          styles.container,
          focused && styles.focused,
          hasError && styles.error,
        ]}
      >
        {leftIcon}

        <TextInput
          ref={ref}
          {...props}
          style={[styles.input, style]}
          placeholderTextColor="#6B7280"
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
        />

        {rightIcon}
      </View>
    );
  }
);

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#2A3142",
    backgroundColor: "#171C2A",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.md,
  },

  focused: {
    borderColor: Colors.primary,
  },

  error: {
    borderColor: "#EF4444",
  },

  input: {
    flex: 1,
    color: Colors.white,
    fontSize: 17,
    marginHorizontal: 10,
  },
});