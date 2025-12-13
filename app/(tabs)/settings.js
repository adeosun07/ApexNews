import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../stylesheets/settingsStyles";

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </SafeAreaView>
  );
}
