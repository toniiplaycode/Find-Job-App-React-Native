import { Text, View, RefreshControl, ScrollView, ActivityIndicator } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import useFetch from "../../hook/useFetch";
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../ ../components';
import { COLORS, icons, SIZES } from '../../constants';

const JobDetails = () => {
    const params = useSearchParams();    
    const router = useRouter();
    
    const { data, isLoading, error, reFetch } = useFetch(
        'job-details',
        {
            job_id: params.id
        }
    )

    return (
        <ScrollView>
            <Text>
                {/* job details */}
            </Text>            
        </ScrollView>
    )
}

export default JobDetails;