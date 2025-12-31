import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNews } from "../../contexts/NewsContext";
import Loading from "../../components/Loading";
import NewsCard from "../../components/NewsCard";
import styles from "../../stylesheets/indexStyles";

export default function Home() {
  const {
    news,
    loading,
    error,
    refreshing,
    refreshNews,
    loadMore,
    selectedCategory,
    changeCategory,
  } = useNews();

  const categories = [
    { label: "General", value: "general" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
  ];

  const renderNewsItem = ({ item }) => <NewsCard article={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>ApexNews</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.value}
            style={[
              styles.categoryButton,
              selectedCategory === category.value &&
                styles.categoryButtonActive,
            ]}
            onPress={() => changeCategory(category.value)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.value &&
                  styles.categoryTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={news}
        keyExtractor={(item, index) => item.url || index.toString()}
        renderItem={renderNewsItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshing={refreshing}
        onRefresh={refreshNews}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Loading /> : null}
      />
    </SafeAreaView>
  );
}
