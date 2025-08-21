import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "login",
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

// FIXME: this is temporary
const isLoggedIn = false;
const isPatient = false;

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="login" options={{ headerShown: true }} />
          <Stack.Screen
            name="select-user-type"
            options={{ headerShown: true }}
          />
          <Stack.Screen name="create-account" options={{ headerShown: true }} />
          <Stack.Screen name="terms-of-use" options={{ headerShown: true }} />
          <Stack.Screen name="verify-email" options={{ headerShown: true }} />
          <Stack.Screen name="verify-number" options={{ headerShown: true }} />
          <Stack.Screen
            name="recover-account"
            options={{ headerShown: true }}
          />
          <Stack.Screen name="recover-code" options={{ headerShown: true }} />
          <Stack.Screen name="reset-password" options={{ headerShown: true }} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Protected guard={isPatient}>
            <Stack.Screen name="patient" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={!isPatient}>
            <Stack.Screen name="caretaker" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}
