import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

type Medicine = {
    name: string;
    taken: number;
    total: number;
    time: string;
};

type Props = {
    medicines: Medicine[];
};

export default function InitialMedicineComponent({ medicines }: Props) {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];

    return (
        <View style={[styles.card, { backgroundColor: theme.background }]}>
            <Text style={[styles.subTitle, { color: theme.text }]}>Today</Text>
            {medicines.map((med, idx) => (
                <View
                    key={idx}
                    style={[
                        styles.row,
                        {
                            borderBottomWidth: idx !== medicines.length - 1 ? StyleSheet.hairlineWidth : 0,
                            borderBottomColor: theme.text,
                            paddingVertical: 10,
                        },
                    ]}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: theme.text, fontWeight: "500" }}>{med.name}</Text>
                        <Text style={{ color: theme.text, fontSize: 15, marginTop: 4 }}>{med.time}</Text>
                    </View>
                    <Text style={{ color: theme.text, fontWeight: "500", marginLeft: 16 }}>
                        {med.taken}/{med.total}
                    </Text>
                </View>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subTitle: { fontSize: 16, marginBottom: 8 },
});
