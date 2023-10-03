import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // giải thích code  (https://chat.openai.com/c/3439c677-862d-4679-af2d-1a95ac71e975)

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback( async () => {
        if(fontsLoaded) { // nếu đã tải xong font chữ thì ẩn màn hình Splash đi
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;

    return <Stack onLayout = {onLayoutRootView}/>
}


export default Layout;
 