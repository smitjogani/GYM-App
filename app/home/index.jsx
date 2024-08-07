import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from "../../constants/Colors";
import ImageSlider from "../../components/ImageSlider";

const home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        // <SafeAreaView className="flex-1 bg-white flex sapace-y-5" edges={['top']}>
        <View
            className="flex-row justify-between items-center mx-5"
            style={{
                backgroundColor: Colors.GRAY,
                height: '100%',
                padding: 15,
                paddingTop: 35,
                display: 'flex',
            }}>
            <View
                style={{
                    backgroundColor: Colors.PRIMARY,
                    display: 'flex',
                    borderRadius: 15,
                    padding: 10,
                    paddingTop: '5%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <Text
                    className="tracking-tighter "
                    style={{
                        fontFamily: 'poppins-bold',
                        fontSize: 36,
                        color: Colors.WHITE
                    }}
                >
                    READY TO
                </Text>
                <Text
                    className="tracking-tighter "
                    style={{
                        fontFamily: 'poppins-bold',
                        fontSize: 36,
                        color: Colors.WHITE,
                        marginLeft: 10
                    }}
                >
                    WORKOUT
                </Text>
            </View>

            {/* image slider */}
            <View>
                
            </View>


        </View>
        // </SafeAreaView>
    )
}

export default home