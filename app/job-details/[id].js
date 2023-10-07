import { Text, View, RefreshControl, ScrollView, ActivityIndicator } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

const JobDetails = () => {
    return (
        <ScrollView>
            <Text>
                job details
            </Text>
            
            <RefreshControl refreshing={true} onRefresh={onRefresh}/>
        </ScrollView>
    )
}

export default JobDetails;