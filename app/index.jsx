import { Colors } from "@/constants/Colors";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
      }}
    >
      <Image source={require('../assets/images/loginbg.jpg')}
        style={{
          height: '100%',
          width: '100%',
        }} />

        
        <TouchableOpacity onPress={() => router.push('/home')} 
          style={{
            marginTop: '-40%',
            backgroundColor:Colors.GRAY,
            paddingHorizontal: 90,
            paddingVertical: 7,
            borderRadius: 15
          }}>
          <View>
            <Text style={{
              color: Colors.PRIMARY,
              fontFamily: 'poppins-medium',
              fontSize: 24
            }}>Explore</Text>
          </View>
        </TouchableOpacity>
       
      </View>
  );
}
