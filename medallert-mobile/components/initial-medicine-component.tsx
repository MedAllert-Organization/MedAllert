import { Text, View, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

type MedicineProps = {
  name: string;
  taken: number;
  total: number;
  time: string;
};

export default function InitialMedicineComponent({ name, taken, total, time }: MedicineProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[styles.row]}>
      <Text style={{ color: theme.text }}>◉ {name}</Text>
      <Text style={{ color: theme.text }}>{taken}/{total}</Text>
      <Text style={{ color: theme.text }}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
