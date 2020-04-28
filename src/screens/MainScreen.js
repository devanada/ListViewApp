import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListView from '../components/ListView';
import Slider from '../components/Slider';

const MainScreen = () => {
    return <>
        <View style={styles.padding}/>
        <Slider/>
        <ListView/>
    </>
};

const styles = StyleSheet.create({
    padding: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#6D6D6D'
    }
});

export default MainScreen;