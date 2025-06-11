import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SportsBooking() {
  const [selectedSport, setSelectedSport] = useState("Football");
  const [selectedLocation, setSelectedLocation] = useState("Schleusenufer 4");
  const [selectedCoach, setSelectedCoach] = useState("Coach Carsten");
  const [ageRange, setAgeRange] = useState(25);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selected) => {
    setSelectedDate(selected || selectedDate);
    setShowDatePicker(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Main Title */}

        <View style={styles.container}>
          <Text style={styles.heading}>Book Your Sports Session</Text>
          <Image
            source={require("../../assets/images/sportPage.jpg")}
            style={styles.image}
          />

          {/* Sport Selection */}
          <Text style={styles.heading}>Select Sport</Text>
          <Picker
            selectedValue={selectedSport}
            onValueChange={setSelectedSport}
            style={styles.dropdown}
          >
            {["Football", "Swimming", "Yoga", "Tennis", "Basketball"].map(
              (sport) => (
                <Picker.Item key={sport} label={sport} value={sport} />
              )
            )}
          </Picker>

          {/* Location Selection */}
          <Text style={styles.heading}>Select Location</Text>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={setSelectedLocation}
            style={styles.dropdown}
          >
            {[
              "Schleusenufer 4, 10997 Berlin - Dopamine Studio",
              "Revaler Straße 99, 10245 Berlin - Club Athleten",
              "Schildhornstraße 1, 12163 Berlin - Holmes Place Rooftop",
              "BeachMitte - Europe's Largest Urban Beach Volleyball Complex",
              "Sportpark Poststadion - Fritz-Schloss-Park",
            ].map((location) => (
              <Picker.Item key={location} label={location} value={location} />
            ))}
          </Picker>

          {/* Coach Selection */}
          <Text style={styles.heading}>Select Coach</Text>
          <Picker
            selectedValue={selectedCoach}
            onValueChange={setSelectedCoach}
            style={styles.dropdown}
          >
            {[
              "Coach Carsten",
              "Coach Hannah",
              "Coach Stefan Frädrich",
              "Coach Babette Bruhn",
              "Coach Marcus Feil",
            ].map((coach) => (
              <Picker.Item key={coach} label={coach} value={coach} />
            ))}
          </Picker>

          {/* Age Selection (Improved for iPhone) */}
          <Text style={styles.heading}>Select Age Group</Text>
          <View style={styles.ageSelection}>
            <Picker
              selectedValue={ageRange}
              onValueChange={setAgeRange}
              style={styles.dropdown}
              mode="dropdown"
            >
              {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
                <Picker.Item key={age} label={`${age} years`} value={age} />
              ))}
            </Picker>
          </View>

          {/* Date Selection */}
          <Text style={styles.heading}>Select Date</Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.datePickerText}>
              {selectedDate.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onChangeDate}
              minimumDate={new Date()}
            />
          )}

          {/* Booking Button */}
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() =>
              Alert.alert(
                "Booking Successful ✅",
                `You have booked:\n\n🏅 Sport: ${selectedSport}\n📍 Location: ${selectedLocation}\n🧑‍🏫 Coach: ${selectedCoach}\n🎂 Age: ${ageRange}\n📅 Date: ${selectedDate.toDateString()}`,
                [{ text: "OK", style: "default" }]
              )
            }
          >
            <Text style={styles.bookButtonText}>📆 Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3BAA8D",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    elevation: 6,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 12,
  },
  dropdown: {
    width: "100%",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 16,
    color: "#2C3E50",
  },
  ageSelection: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 16,
  },
  datePickerButton: {
    width: "100%",
    padding: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  datePickerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2C3E50",
  },
  bookButton: {
    width: "100%",
    backgroundColor: "#D4AF37",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
  },
});
