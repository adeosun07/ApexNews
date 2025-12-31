import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesheets/newsCardStyles";
import { useNews } from "../contexts/NewsContext";

export default function NewsCard({ article }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useNews();

  if (!article) return null;

  const { title, author, source, publishedAt, description, url, urlToImage } =
    article;

  const handlePress = () => {
    if (url) Linking.openURL(url);
  };

  const handleFavoritePress = () => {
    if (isFavorite(url)) {
      removeFromFavorites(url);
    } else {
      addToFavorites(article);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {urlToImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: urlToImage }} style={styles.image} />
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavoritePress}
          >
            <Ionicons
              name={isFavorite(url) ? "heart" : "heart-outline"}
              size={24}
              color={isFavorite(url) ? "#FF6B6B" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.contentWithoutImage}>
          <TouchableOpacity
            style={styles.favoriteButtonNoImage}
            onPress={handleFavoritePress}
          >
            <Ionicons
              name={isFavorite(url) ? "heart" : "heart-outline"}
              size={24}
              color={isFavorite(url) ? "#FF6B6B" : "#fff"}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.source}>
          {author || source?.name || "Unknown source"}
        </Text>

        {publishedAt && (
          <Text style={styles.date}>
            {new Date(publishedAt).toLocaleDateString()}
          </Text>
        )}

        {description && (
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
