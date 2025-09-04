import React from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  const isLoggedIn = true;

  return (
    <ThemeProvider value={theme}>
      {isLoggedIn ? <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)/_layout" />
        <Stack.Screen name="login" options={{ headerShown: true }} />
        <Stack.Screen name="select-user-type" options={{ headerShown: true }} />
        <Stack.Screen name="create-account" options={{ headerShown: true }} />
      </Stack> : <Stack>
        <Stack.Screen name="login" options={{ headerShown: true }} />
      </Stack>}
    </ThemeProvider>
  );
}
