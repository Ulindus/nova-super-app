import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Logo from "@/src/components/ui/Logo";
import AuthLayout from "@/src/layouts/AuthLayout";

import { Colors, Spacing } from "@/src/theme";

export default function RegisterScreen() {
  return (
    <AuthLayout>
      <Logo />

      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Join NOVA today
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <Input placeholder="First Name" />

        <Text style={styles.label}>Last Name</Text>
        <Input placeholder="Last Name" />

        <Text style={styles.label}>Email</Text>
        <Input
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <Input
          placeholder="Password"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <Input
          placeholder="Confirm Password"
          secureTextEntry
        />

        <Button title="Create Account" />

        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/(auth)/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 24,
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
    fontSize: 16,
  },

  form: {
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },

  label: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 8,
  },

  footer: {
    color: Colors.white,
    marginTop: 30,
    textAlign: "center",
  },

  link: {
    color: Colors.primary,
    fontWeight: "700",
  },
});