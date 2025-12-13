import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NewsProvider } from "../contexts/NewsContext";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
    "Poppins-Bold": Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NewsProvider>
      <Slot />
    </NewsProvider>
  );
}
