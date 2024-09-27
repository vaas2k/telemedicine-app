import Header from "@/components/Reuseable/Header";
import Header2 from "@/components/Reuseable/Header2";
import Navbar from "@/components/Reuseable/Navbar";
import { StyledView } from "@/constants/nativeComps";
import { Slot } from "expo-router";


export default function RootLayout() {
    return (
        <StyledView className="flex-1 flex-col bg-white">
            <Slot screenOptions={{ headerShown: false }} />
            <Navbar />
        </StyledView>
    );
}