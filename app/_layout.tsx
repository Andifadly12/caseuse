import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Peta font Anda
const fontMap = {
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"), // Pastikan path ini sesuai
};

const RootLayout = () => {
  // Memuat font menggunakan `useFonts`
  const [fontsLoaded, fontsError] = useFonts(fontMap);

  // Fungsi untuk menyembunyikan splash screen
  const hideSplashScreen = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  // Menjalankan efek untuk menyembunyikan splash screen
  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  // Tampilkan layar kosong jika font belum selesai dimuat dan tidak ada error
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="dark" />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
