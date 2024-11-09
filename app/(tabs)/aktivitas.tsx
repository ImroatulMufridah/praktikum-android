import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={gaya.container}>
      <Text style={gaya.teks}>Halaman Aktivitas</Text>
    </View>
  );
}

const gaya = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teks: {
    color: '#fff',
  },
});