import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from "../stylesheets/newsCardStyles";

export default function NewsCard({ article }) {
  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.source}>{article.source.name}</Text>
        <Text style={styles.date}>
          {new Date(article.publishedAt).toLocaleDateString()}
        </Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
