import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //list of dua
            data: [
                {
                    id: 1,
                    title: "When waking up",
                    desc: "اَلْحَمْدُ لِلَّهِ الَّذي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.",

                    pronuntiation: "Alhamdu lillahil-lathee ahyana baAAda ma amatana wa-ilayhin-nushoor.",

                    translation: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",

                    source: "Al-Bukhari 11:113, Muslim 4:2083",
                    color: "#ffe4e1"


                },
                {
                    id: 2,
                    title: "When wearing new clothes",
                    desc: "لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",

                    pronuntiation: "Allaahumma lakal-hamdu 'Anta kasawtaneehi, 'as'aluka min khayrihi wa khayri maa suni'a lahu, wa 'a'oothu bika min sharrihi wa sharri ma suni'a lahu",

                    translation: "O Allah, praise is to You. You have clothed me. I ask You for its goodness and the goodness of what it has been made for, and I seek Your protection from the evil of it and the evil of what it has been made for.",

                    source: "Abu Dawud: 4020, At-Tirmidhi: 1767",
                    color: "#d4c8e1"
                },
                {
                    id: 3,
                    title: "When leaving home",
                    desc: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",

                    pronuntiation: "Bismillahi tawakkaltu alallahi la hawla wala quwwata illa billah",

                    translation: "In the name of Allah, I trust in Allah; there is no might and no power but in Allah",

                    source: "Abu Dawud 4:325, At-Tirmidhi 5:490",
                    color: "#ffe4e1"
                },
                {
                    id: 4,
                    title: "When beginning a meal",
                    desc: "بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِيْمِ",

                    pronuntiation: "Bismi-llāhi r-raḥmāni r-raḥīm",

                    translation: "In the name of Allah , the Entirely Merciful, the Especially Merciful.",

                    source: "Sunnah of Prophet (SAW)",
                    color: "#d4c8e1"
                },
                {
                    id: 5,
                    title: "Upon entering home",
                    desc: "بِسْـمِ اللّهِ وَلَجْنـَا، وَبِسْـمِ اللّهِ خَـرَجْنـَا، وَعَلَـى رَبِّنـَا تَوَكّلْـنَا.",

                    pronuntiation: "Bismil-lahi walajna, wabismil-lahi kharajna, waAAala rabbina tawakkalna.",

                    translation: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we place our trust.",

                    source: "Abu Dawud 4:325",
                    color: "#ffe4e1"
                },
                {
                    id: 6,
                    title: "Before entering toilet",
                    desc: "(بِسْمِ اللَّهِ). اللَّهُـمَّ إِنِّي أَعُـوذُ بِـكَ مِـنَ الْخُـبْثِ وَالْخَبَائِثِ.",

                    pronuntiation: "(Bismil-lah) allahumma innee aAAoothu bika minal-khubthi wal-khaba-ith",

                    translation: "(In the name of Allah). O Allah, I take refuge with you from all evil and evil-doers.",

                    source: "Al-Bukhari 1:45, Muslim 1:283",
                    color: "#d4c8e1"
                },
                {
                    id: 7,
                    title: "After leaving toilet",
                    desc: "غُفْرَانَكَ.",

                    pronuntiation: "Ghufranak",

                    translation: "I ask You (Allah) for forgiveness..",

                    source: "Zadul-Ma'ad 2:387",
                    color: "#ffe4e1"
                },
                {
                    id: 8,
                    title: "Upon entering home",
                    desc: "بِسْـمِ اللّهِ وَلَجْنـَا، وَبِسْـمِ اللّهِ خَـرَجْنـَا، وَعَلَـى رَبِّنـَا تَوَكّلْـنَا.",

                    pronuntiation: "Bismil-lahi walajna, wabismil-lahi kharajna, waAAala rabbina tawakkalna.",

                    translation: "In the name of Allah we enter and in the name of Allah we leave, and upon our Lord we place our trust.",

                    source: "Abu Dawud 4:325",
                    color: "#d4c8e1"
                },
                {
                    id: 9,
                    title: "Before sleep",
                    desc: "اللَّهُمَّ بِاسْـمِكَ أَمُوتُ وَأَحْيَا",

                    pronuntiation: "Bismikal-lahumma amootu wa-ahya.",

                    translation: "In Your name O Allah, I live and die.",

                    source: "Al-Bukhari 11:113, Muslim 4:2083",
                    color: "#ffe4e1"
                },
                {
                    id: 10,
                    title: "Upon sneezing",
                    desc: "اَلْحَمْدُ لِلَّهِ",

                    pronuntiation: "Alhamdu lillaahi",

                    translation: "All praise is for Allah.",

                    source: "Al-Bukhari 7:125",
                    color: "#d4c8e1"
                }
            ]
        };
    }



    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    keyExtractor = { (item, index) => index.toString() }
                    renderItem={({ item }) => {
                        return (
                            
                            <View style={[{backgroundColor:item.color}]}>
                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    <Text style={styles.desc}>{item.desc}</Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    <Text style={styles.title}>{item.pronuntiation}</Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    <Text style={styles.title}>{item.translation}</Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginLeft: 20 }}>
                                    <Text style={styles.title}>{item.source}</Text>
                                </View>
                            </View>


                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        //paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },

    
    card: {
        width: width,
        height: 150,
        flexDirection: 'row',
        padding: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 15,
        flex: 1,
        color: "#000000",
        fontWeight: 'bold',
        marginLeft: 20
    },

    desc: {
        fontSize : 25,
        flex: 1,
        color : "#000000",
        marginLeft: 20
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: "#FFFFFF",
    },
    icon: {
        height: 20,
        width: 20,
    }
});
