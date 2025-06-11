import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const wellnessData = [
  {
    id: "1",
    title: "Meditation",
    thumbnail: "https://i.imgur.com/1X9XqEc.jpg",
  },
  { id: "2", title: "Yoga", thumbnail: "https://i.imgur.com/QHJZ2Be.jpg" },
  { id: "3", title: "Sleep", thumbnail: "https://i.imgur.com/oFZqGNg.jpg" },
  {
    id: "4",
    title: "Mindfulness",
    thumbnail: "https://i.imgur.com/KYZ0X5a.jpg",
  },
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const cardMargin = 12;
const cardWidth = (screenWidth - cardMargin * (numColumns + 1)) / numColumns;

export default function Wellness() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Wellness Content</Text>
        <View style={styles.grid}>
          {wellnessData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => alert(`Start ${item.title} session`)}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.thumbnail}
              />
              <View style={styles.overlay}>
                <Text style={styles.playIcon}>▶️</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => alert(`Start ${item.title} session`)}
              >
                <Text style={styles.startButtonText}>Start Session</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3BAA8D",
    minHeight: "100%",
    paddingBottom: 20,
    paddingTop: 20,
    borderradius: 12,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "90%",

    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    marginBottom: cardMargin,
    width: "80%",
    overflow: "hidden",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  thumbnail: {
    width: "100%",
    height: cardWidth * 0.6,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  playIcon: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginVertical: 8,
  },
  startButton: {
    backgroundColor: "#3BAA8D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
  },
  startButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
