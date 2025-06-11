import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function StartPage() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("StartPage mounted");

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false, // Disabled native driver for iOS compatibility
    }).start();

    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
          Welcome to <Text style={styles.highlight}>HOPn Fitness</Text>
        </Animated.Text>

        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
          Loading your personalized experience...
        </Animated.Text>

        <ActivityIndicator
          size="large"
          color="#FFFFFF"
          style={{ marginBottom: 30 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3BAA8D",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  highlight: {
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 30,
    textAlign: "center",
  },
});
