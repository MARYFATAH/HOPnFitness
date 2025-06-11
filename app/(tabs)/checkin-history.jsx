import { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const allCheckins = [
  { id: "1", date: "2025-06-09", time: "10:00 AM", gym: "FitBox Gym" },
  { id: "2", date: "2025-06-08", time: "5:00 PM", gym: "Downtown Gym" },
  { id: "3", date: "2025-06-07", time: "6:30 PM", gym: "Berlin Fitness Hub" },
  { id: "4", date: "2025-06-06", time: "8:00 AM", gym: "Urban Gym Berlin" },
  {
    id: "5",
    date: "2025-05-30",
    time: "7:00 PM",
    gym: "Elite Training Center",
  },
  { id: "6", date: "2025-05-25", time: "6:00 AM", gym: "Powerhouse Gym" },
];

const filters = ["Today", "Week", "Month"];

export default function CheckinHistory() {
  const [activeFilter, setActiveFilter] = useState("Week");

  const getFilteredCheckins = () => {
    const today = new Date("2025-06-09");
    return allCheckins.filter((checkin) => {
      const checkinDate = new Date(checkin.date);
      const diffDays = (today - checkinDate) / (1000 * 60 * 60 * 24);

      if (activeFilter === "Today") return diffDays === 0;
      if (activeFilter === "Week") return diffDays <= 7;
      if (activeFilter === "Month") return diffDays <= 30;
      return true;
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Check-in History</Text>

        <View style={styles.filters}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilter,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={getFilteredCheckins()}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const [year, month, day] = item.date.split("-");
            return (
              <View style={styles.calendarCard}>
                <View style={styles.dateBox}>
                  <Text style={styles.day}>{day}</Text>
                  <Text style={styles.month}>{month}</Text>
                </View>
                <View style={styles.detailsBox}>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.gym}>{item.gym}</Text>
                </View>
              </View>
            );
          }}
          ListFooterComponent={() => (
            <View style={styles.metricsBox}>
              <Text style={styles.metric}>
                Sessions: {getFilteredCheckins().length}{" "}
                {activeFilter.toLowerCase()}
              </Text>
              <Text style={styles.metric}>
                Total Duration: {getFilteredCheckins().length * 1.5}h
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3BAA8D",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    width: "90%",
    height: "85%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#333333",
    textAlign: "center",
    marginVertical: 20,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#FFFFFF",
    elevation: 2,
  },
  activeFilter: {
    backgroundColor: "#3BAA8D",
    borderColor: "#3BAA8D",
  },
  filterText: {
    color: "#333333",
    fontWeight: "500",
    fontSize: 16,
  },
  activeFilterText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 40,
  },
  calendarCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#3BAA8D",
    marginHorizontal: 10,
    marginVertical: 8,
  },

  dateBox: {
    width: 60,
    height: 60,
    backgroundColor: "#3BAA8D",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  day: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  month: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  detailsBox: {
    flex: 1,
  },
  time: {
    color: "#333333",
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "500",
  },
  gym: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "700",
  },
  metricsBox: {
    marginTop: 24,
    padding: 18,
    backgroundColor: "#333333",
    borderRadius: 12,
    alignItems: "center",
  },
  metric: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
});
