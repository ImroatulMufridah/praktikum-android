import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#003366",
        tabBarInactiveTintColor: "#666",
        headerStyle: {
          backgroundColor: "#003366",
          height:0, 
        },
        headerTintColor: "#003366",
        tabBarStyle: {
          backgroundColor: "#fff", 
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mutasi"
        options={{
          title: "Mutasi",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="qris"
        options={{
          title: "Qris",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="qrcode"
              color="#fff"
              size={30}
              style={{
                backgroundColor: "#3E8EED",
                padding: 12,
                borderRadius: 50,
                marginTop: -20,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="aktivitas"
        options={{
          title: "Aktivitas",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "mail" : "mail-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="akun"
        options={{
          title: "Akun",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
