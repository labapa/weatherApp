import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Weather({ temp, title}) {
    weather = {
        Thunderstorm: {
            icon: 'weather-lightning-rainy',
            backcolor: ['#e9d362', '#333333'],
        },
        Drizzle: {
            icon: 'weather-hail',
            backcolor: ['#005AA7', '#FFFDE4'],
        },
        Rain: {
            icon: 'weather-pouring',
            backcolor: ['#3a7bd5', '#3a6073'],
        },
        Snow: {
            icon: 'weather- snowy',
            backcolor: ['#FFEFBA', '#FFFFFF'],
        },
        Mist: {
            icon: 'weather-fog',
            backcolor: ['#1c92d2', '#f2fcfe'],
        },
        Clear: {
            icon: 'weather-sunny',
            backcolor: ['#CAC531', '#F3F9A7'],
        },
        Clouds: {
            icon: 'weather-cloudy',
            backcolor: ['#bdc3c7', '#2c3e50'],
        },
    }
    return (
        <LinearGradient
        colors={this.weather[title].backcolor}
            style={styles.weatherback}> 
                <View style={styles.iconarea}>
                    <Text style={styles.iconcustom}>
                <MaterialCommunityIcons name={this.weather[title].icon} size={200} />
                    </Text>
                </View>
                <View style={styles.textarea}>
                    <Text style={styles.textcustom}>
                        {title}
                    </Text>
            <Text style={styles.textcustom}>
                {temp}℃
            </Text>
                </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    weatherback:{
        flex:1,
        alignItems:"center", 
        justifyContent:"center", 
    },
    weatherroom:{
        flex:2,
        justifyContent:"center", //세로 가운데 정렬
        alignItems:"center", //가로 가운데 정렬
    },
    textroom:{
        flex: 1,
        alignItems: "flex-end", //가로위치를 flex가 끝나는 시점에 위치시킴 ≒ 오른쪽정렬
        paddingRight:70, //padding은 box은 내부들어오는 방향인데 Right이므로
//박스의 오른쪽부분을 안으로 70만큼 들여라라는 의미 입니다
    },
    textcustom:{
        fontSize:50, //말그래도 fontSize를 나타내는 부분입니당
        color: 'white', //글자 색을 흰색으로 바꿔주는 부분
    },
    icon:{
        color: 'white', //큰 것은 아니지만 우리가 가져온 Icon의 색깔을 변경해줍니다.
    },
});
