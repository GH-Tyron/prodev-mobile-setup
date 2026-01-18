import {
  BACKGROUNDIMAGE,
  HEROLOGO,
} from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { router } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          resizeMode="cover"
          style={styles.backgroundImageContainer}
        >
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite</Text>
            <Text style={styles.titleText}>place here</Text>

            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>
                The best prices for over 2
              </Text>
              <Text style={styles.titleSubText}>
                million properties worldwide
              </Text>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => router.push("/join")}
              >
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => router.push("/sigin")}
              >
                <Text style={styles.buttonSecondaryText}>Sign in</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonGroupSubText}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
