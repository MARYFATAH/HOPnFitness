import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="start-page"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    />
  );
}
