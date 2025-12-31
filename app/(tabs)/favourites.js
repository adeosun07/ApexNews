import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../stylesheets/favouritesStyles";
import { useNews } from "../../contexts/NewsContext";
import NewsCard from "../../components/NewsCard";

export default function Favourites() {
  const { favorites } = useNews();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>
          No favourites yet. Tap the heart icon on news articles to add them
          here!
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => <NewsCard article={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
