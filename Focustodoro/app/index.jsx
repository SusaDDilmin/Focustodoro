import { Text , View , Dimensions } from "react-native";
import LottieView from 'lottie-react-native';


export default function Index() {

  const { width } = Dimensions.get('window');

  return (
    <View className="flex-1 bg-white justify-center items-center" >
        <View className="" >
          <LottieView style={{ width: 200, height: 200}} source={require('../assets/images/TomatoLoading.json')} autoPlay loop speed={0.5} />
        </View>
        
        <LottieView style={{ width: 400, height: 200 }} source={require('../assets/images/LoadingDots.json')} autoPlay loop speed={0.5} />
    </View>
  );
}
