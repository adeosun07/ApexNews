import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNews } from "../../contexts/NewsContext";
import Loading from "../../components/Loading";
import NewsCard from "../../components/NewsCard";
import styles from "../../stylesheets/indexStyles";

export default function Home() {
  const { news, loading, error, searchNews, loadMore, hasMore } = useNews();
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [sources, setSources] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");

  const handleSearch = () => {
    const params = {};
    if (keyword) params.q = keyword;
    if (country) params.country = country;
    if (sources) params.sources = sources;
    params.sortBy = sortBy;
    searchNews(params);
  };

  const renderNewsItem = ({ item }) => <NewsCard article={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>ApexNews</Text>
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search keywords..."
            placeholderTextColor="#ccc"
            value={keyword}
            onChangeText={setKeyword}
          />
          <TextInput
            style={styles.input}
            placeholder="Country (e.g., us)"
            placeholderTextColor="#ccc"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            style={styles.input}
            placeholder="Sources (e.g., bbc-news)"
            placeholderTextColor="#ccc"
            value={sources}
            onChangeText={setSources}
          />
          <Picker
            selectedValue={sortBy}
            onValueChange={setSortBy}
            style={styles.picker}
          >
            <Picker.Item label="Latest" value="publishedAt" />
            <Picker.Item label="Popularity" value="popularity" />
          </Picker>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* News Section */}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <FlatList
          data={news}
          keyExtractor={(item, index) => item.url || index.toString()}
          renderItem={renderNewsItem}
          style={styles.newsList}
          scrollEnabled={false}
        />
        {hasMore && (
          <TouchableOpacity style={styles.seeMoreButton} onPress={loadMore}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      {loading && <Loading />}
    </SafeAreaView>
  );
}
