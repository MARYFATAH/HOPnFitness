import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3BAA8D",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sports-booking"
        options={{
          title: "Book Sports",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="checkin-history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wellness-content"
        options={{
          title: "Wellness",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="yoga" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
