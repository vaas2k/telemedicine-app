import Header from "@/components/Reuseable/Header";
import Header2 from "@/components/Reuseable/Header2";
import Navbar from "@/components/Reuseable/Navbar";
import { StyledView } from "@/constants/nativeComps";
import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";



export default function Layout() {

    return (
        <StyledView className="flex-1 flex-col">
           <Header2 />
            <Slot screenOptions={{ headerShown: false }} />
            <Navbar />
        </StyledView>
    )
}