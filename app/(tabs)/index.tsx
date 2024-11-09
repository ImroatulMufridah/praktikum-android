import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native"
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons"

const features = [
  {
    id: 1,
    name: "Transfer",
    icon: (
      <Ionicons name="arrow-forward-circle-outline" size={30} color="#fff" />
    ),
  },
  {
    id: 2,
    name: "BRIVA",
    icon: <FontAwesome name="credit-card" size={30} color="#fff" />,
  },
  {
    id: 3,
    name: "E-Wallet",
    icon: <Entypo name="wallet" size={30} color="#fff" />,
  },
  {
    id: 4,
    name: "Pulsa/Data",
    icon: <MaterialIcons name="signal-cellular-alt" size={30} color="#fff" />,
  },
]

const additionalFeatures = [
  {
    id: 1,
    name: "Top Up",
    icon: <FontAwesome name="plus" size={25} color="#000" />,
  },
  {
    id: 2,
    name: "Tagihan",
    icon: <FontAwesome name="file-text-o" size={25} color="#000" />,
  },
  {
    id: 3,
    name: "Setor & Tarik Tunai",
    icon: <FontAwesome name="bank" size={25} color="#000" />,
  },
  {
    id: 4,
    name: "Lifestyle",
    icon: <FontAwesome name="tag" size={25} color="#000" />,
  },
  {
    id: 5,
    name: "Kartu Kredit",
    icon: <FontAwesome name="credit-card" size={25} color="#000" />,
  },
  {
    id: 6,
    name: "Debit Virtual",
    icon: <MaterialIcons name="public" size={25} color="#000" />,
  },
  {
    id: 7,
    name: "Catatan Keuangan",
    icon: <Entypo name="text-document" size={25} color="#000" />,
  },
  {
    id: 8,
    name: "Investasi",
    icon: <FontAwesome name="briefcase" size={25} color="#000" />,
  },
  {
    id: 9,
    name: "Internet & Cable TV",
    icon: <FontAwesome name="tv" size={25} color="#000" />,
  },
  {
    id: 10,
    name: "BPJS",
    icon: <FontAwesome name="hospital-o" size={25} color="#000" />,
  },
  {
    id: 11,
    name: "Asuransi",
    icon: <FontAwesome name="shield" size={25} color="#000" />,
  },
  {
    id: 12,
    name: "Pinjaman",
    icon: <FontAwesome name="university" size={25} color="#000" />,
  },
]

export default function App() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const toggleShowAllFeatures = () => {
    setShowAllFeatures(!showAllFeatures)
  }

  // Data catatan keuangan
  const data = {
    income: "Rp 10.000.000",
    expense: "Rp 6.000.000",
    difference: "Rp 4.000.000",
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Logo_baru_BRImo.svg/1024px-Logo_baru_BRImo.svg.png",
          }}
          style={styles.briLogo}
        />
        <Text style={styles.greeting}>Hai, Imro’atul</Text>
        <View style={styles.notificationContainer}>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
          <Ionicons
            name="help-circle-outline"
            size={28}
            color="#fff"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>

      {/* Saldo dan Fitur Utama */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Rekening Utama</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceValue}>Rp. 500.000.000</Text>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showText1}>Tampilkan</Text>
            <Ionicons name="eye-outline" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.viewAllText}>Semua Rekeningmu</Text>
        </TouchableOpacity>

        <View style={styles.mainFeatures}>
          {features.map((feature) => (
            <TouchableOpacity key={feature.id} style={styles.featureButton}>
              <View style={styles.iconBox}>
                {feature.icon}
                <Text style={styles.iconText}>{feature.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Pencarian Fitur */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Cari Fitur" style={styles.searchInput} />
      </View>

      {/* Kotak Fitur Tambahan */}
      <View style={styles.additionalFeaturesContainer}>
        <FlatList
          data={
            showAllFeatures
              ? additionalFeatures
              : additionalFeatures.slice(0, 4)
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.additionalFeatureButton}>
              <View style={styles.iconBoxLight}>
                {item.icon}
                <Text style={styles.additionalFeatureText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          columnWrapperStyle={styles.featureGrid}
        />
        <TouchableOpacity
          onPress={toggleShowAllFeatures}
          style={styles.moreButton}
        >
          <Text style={styles.moreButtonText}>
            {showAllFeatures ? "Sembunyikan" : "Lainnya"}
          </Text>
          <Ionicons
            name={
              showAllFeatures ? "chevron-up-outline" : "chevron-down-outline"
            }
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Catatan Keuangan */}
      <View style={styles.financeSummaryContainer}>
        <View style={styles.financeHeader}>
          <Text style={styles.financeTitle}>Catatan Keuangan</Text>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showText}>Tampilkan</Text>
            <Ionicons name="eye-outline" size={18} color="#007aff" />
          </TouchableOpacity>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryItem}>
            <Ionicons
              name="arrow-down-circle-outline"
              size={24}
              color="green"
            />
            <Text style={styles.summaryLabel}>Pemasukan</Text>
            <Text style={styles.summaryValue}>{data.income}</Text>
          </View>

          <View style={styles.summaryItem}>
            <Ionicons name="arrow-up-circle-outline" size={24} color="red" />
            <Text style={styles.summaryLabel}>Pengeluaran</Text>
            <Text style={styles.summaryValue}>{data.expense}</Text>
          </View>

          <View style={styles.summaryItem}>
            <Ionicons name="remove-circle-outline" size={24} color="#999" />
            <Text style={styles.summaryLabel}>Selisih</Text>
            <Text style={styles.summaryValue}>{data.difference}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.detailText}>Lihat Detail</Text>
          <Ionicons name="arrow-forward" size={18} color="#007aff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#00519d",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  briLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    marginLeft: 1,
  },
  notificationContainer: {
    flexDirection: "row",
  },
  balanceContainer: {
    backgroundColor: "#A6CEE3",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  balanceLabel: {
    color: "#000",
    fontSize: 16,
    marginBottom: 5,
  },
  balanceValue: {
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAllText: {
    color: "#007aff",
    fontSize: 14,
    marginBottom: 10,
  },
  mainFeatures: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  featureButton: {
    alignItems: "center",
  },
  iconBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#003366",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B0BEC5",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 80,
    height: 80,
  },
  iconText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  additionalFeaturesContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  additionalFeatureButton: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  iconBoxLight: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 70,
    aspectRatio: 1,
    padding: 10,
    backgroundColor: "#A6CEE3",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B0BEC5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  additionalFeatureText: {
    color: "#000",
    fontSize: 10,
    textAlign: "center",
  },
  featureGrid: {
    justifyContent: "space-between",
  },
  moreButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  moreButtonText: {
    fontSize: 16,
    color: "#007aff",
    marginRight: 10,
  },
  financeSummaryContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  financeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  financeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  showButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  showText: {
    color: "#007aff",
    marginRight: 5,
  },
  showText1: {
    color: "#000",
    marginRight: 5,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#666",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007aff",
    paddingVertical: 10,
    borderRadius: 5,
  },
  detailText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 5,
  },
})
