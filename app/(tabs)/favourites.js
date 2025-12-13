import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../stylesheets/favouritesStyles";

export default function Favourites() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Favourites Screen</Text>
    </SafeAreaView>
  );
}
