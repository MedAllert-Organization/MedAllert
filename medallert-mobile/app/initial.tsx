import React, { useState } from "react";
import { useColorScheme, ScrollView, Text, View, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import InitialMedicineComponent from "@/components/initial-medicine-component";
import Colors from "@/constants/Colors";

export default function Initial() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];

    const [outOfUsualTimeZone, setOutOfUsualTimeZone] = useState(false);

    const medicines = [
        { name: "Omeprasol", taken: 1, total: 1, time: "09:35" },
        { name: "Paracetamol", taken: 0, total: 1, time: "13:22" },
        { name: "Dipirona", taken: 0, total: 2, time: "13:25" },
        { name: "Complexo B", taken: 1, total: 2, time: "19:22" },
    ];

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#61AEF0", colorScheme === "dark" ? "#1a1a1a" : "#f2f2f2", colorScheme === "dark" ? "#1a1a1a" : "#f2f2f2"]}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1, padding: 15 }}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: theme.text }]}>Summary</Text>
                        <View style={styles.avatar} />
                    </View>

                    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                        {/* Important Section */}
                        <View style={styles.section}>
                            <Text style={[styles.sectionTitle, { color: theme.text }]}>Important</Text>

                            <View style={[styles.card, { backgroundColor: theme.background }]}>
                                <View style={styles.toggleRow}>
                                    <Switch
                                        value={outOfUsualTimeZone}
                                        onValueChange={(value) => setOutOfUsualTimeZone(value)}
                                    />
                                    <Text style={[styles.toggleText, { color: theme.text }]}>
                                        You seem to be away from your usual time zone. Would you like to temporarily change your current time zone?
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Medicine Section */}
                        <Text style={[styles.sectionTitle, { color: theme.text }]}>
                            Medicine
                        </Text>
                        <InitialMedicineComponent medicines={medicines} />

                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    title: { fontSize: 28, fontWeight: "bold" },
    avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#aaa" },
    section: { marginBottom: 24 },
    sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 12 },
    subTitle: { fontSize: 16, marginBottom: 8 },
    card: {
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    row: { flexDirection: "row", alignItems: "flex-start" },
    toggleRow: { flexDirection: "row", alignItems: "flex-start", gap: 12 }, // gap adiciona espaço entre switch e texto
    toggleText: { flex: 1, fontSize: 14, lineHeight: 20 },
    addButton: {
        marginTop: 8,
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 1,
    },
    bottomTabs: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 12,
        borderTopWidth: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    background: {
        flex: 1,
        paddingHorizontal: 16,
    },
});
