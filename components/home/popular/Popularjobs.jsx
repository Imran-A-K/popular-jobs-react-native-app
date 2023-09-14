import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? <ActivityIndicator /> : null}
      </View>
    </View>
  );
};

export default Popularjobs;
