import { StyleSheet, View, Text } from "react-native";

export default function CaretakerShare() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
