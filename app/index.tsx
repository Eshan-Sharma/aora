import { type PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Link } from "expo-router";
/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-black pl-3 md:pl-0 lg:pl-0">
          DollarPe.
        </Text>
        <StatusBar style="auto" />
        <Link href={"./home"}>Go to home</Link>
      </View>
    </>
  );
}
