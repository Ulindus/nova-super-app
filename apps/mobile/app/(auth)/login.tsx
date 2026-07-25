import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import Logo from "@/src/components/ui/Logo";
import AuthLayout from "@/src/layouts/AuthLayout";
import { Colors, Spacing } from "@/src/theme";
import { router } from "expo-router";
import { Apple, Globe } from "lucide-react-native";

import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : undefined}
  >
    <ScrollView
      contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
  <Logo />

  <Text style={styles.welcome}>
    Welcome Back
  </Text>

  <Text style={styles.subtitle}>
    Sign in to continue
  </Text>

  <View style={styles.form}>
          <Text style={styles.label}>
  Email
</Text>
          <Input
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
           <Text style={styles.label}>
  Password
</Text>

<View style={styles.passwordContainer}>
  <Input
    placeholder="Password"
    secureTextEntry={!showPassword}
  />

  <Pressable
    style={styles.eyeButton}
    onPress={() => setShowPassword(!showPassword)}
  >
    <Text style={styles.eyeText}>
      {showPassword ? "🙈" : "👁️"}
    </Text>
  </Pressable>
</View>
         <Text style={styles.forgot}>
  Forgot Password?
</Text>

          <Button title="Login" />
          <View style={styles.divider}>
  <View style={styles.line} />
  <Text style={styles.or}>OR</Text>
  <View style={styles.line} />
</View>

<Button
  title="Continue with Google"
  variant="secondary"
  icon={<Globe size={20} color="white" />}
/>

<View style={{ height: 12 }} />

<Button
  title="Continue with Apple"
  variant="secondary"
  icon={<Apple size={20} color="white" />}
/>
        </View>

        <Text style={styles.footer}>
  Don't have an account?{" "}
  <Text
    style={styles.link}
    onPress={() => router.push("/(auth)/register")}
  >
    Register
  </Text>
</Text>
            </View>
    </ScrollView>
  </KeyboardAvoidingView>
</AuthLayout>
  );
}

const styles = StyleSheet.create({
  scroll: {
  flexGrow: 1,
},
  container: {
  flex: 1,
  justifyContent: "center",
  paddingTop: 30,
  paddingBottom: 30,
},

  form: {
    marginTop: Spacing.xxl,
    gap: Spacing.md,
  },
  label: {
  color: Colors.white,
  fontSize: 15,
  fontWeight: "600",
  marginBottom: 8,
},
forgot: {
  color: Colors.primary,
  textAlign: "right",
  marginBottom: 20,
  fontWeight: "600",
},
  welcome: {
  color: Colors.white,
  fontSize: 28,
  fontWeight: "700",
  textAlign: "center",
  marginTop: 24,
},

subtitle: {
  color: "#94A3B8",
  fontSize: 16,
  textAlign: "center",
  marginTop: 8,
  marginBottom: 32,
},

  footer: {
    marginTop: Spacing.xl,
    color: Colors.white,
    textAlign: "center",
  },
  passwordContainer: {
  position: "relative",
},

eyeButton: {
  position: "absolute",
  right: 18,
  top: 18,
},

eyeText: {
  fontSize: 18,
},
link: {
  color: Colors.primary,
  fontWeight: "700",
},
divider: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 24,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: Colors.border,
},

or: {
  color: "#94A3B8",
  marginHorizontal: 15,
},
}); 