import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hi, Layla 👋</Text>
        <View style={styles.planCard}>
          <Text style={styles.planText}>Gold Tier – Expires: Sep 25, 2025</Text>
        </View>

        <Image
          source={require("../../assets/images/imageHome.jpg")}
          style={styles.image}
        />

        <Text style={styles.checkinText}>
          Last check-in: 2 days ago at{" "}
          <Text style={{ fontWeight: "600" }}>FitBox Gym</Text>
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.goldButton]}
          onPress={() => router.push("/sports-booking")}
        >
          <Text style={styles.buttonText}>Book a Session</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.grayButton]}
          onPress={() => router.push("/checkin-history")}
        >
          <Text style={styles.buttonText}>Check-In History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3BAA8D",
    paddingVertical: 40,
  },
  container: {
    width: "90%",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    elevation: 4,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 16,
    textAlign: "center",
  },
  planCard: {
    backgroundColor: "#D4AF37",
    padding: 18,
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  planText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  checkinText: {
    color: "#333333",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
    marginVertical: 8,
    elevation: 3,
  },
  goldButton: {
    backgroundColor: "#D4AF37",
  },
  grayButton: {
    backgroundColor: "#333333",
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
