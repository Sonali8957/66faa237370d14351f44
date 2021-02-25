import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './CountryListScrStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

class CountryListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: this.props.route.params.countryList
        }
    }

    onPressCountryDetails = (item) => {
        this.props.navigation.navigate('CountryInformation', { countryDetail: item })
    }

    countryCell = (item, index) => {
        return (
            <Animatable.View useNativeDriver animation="zoomInDown" duraton="1500">
                <TouchableOpacity onPress={() => this.onPressCountryDetails(item)} style={styles.countryListCell}>
                    <View style={styles.leftView}>
                        <Text style={styles.fieldValue}>Name: {item.name}</Text>
                        <Text style={styles.fieldValue}>Capital: {item.capital}</Text>
                        <Text style={styles.fieldValue}>Population: {item.population}</Text>
                        <Text style={styles.fieldValue}>Lating: {item.latlng}</Text>
                    </View>
                    <SvgUri
                        width="15%"
                        height="35%"
                        uri={item.flag}
                    />
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    countryList = () => {
        return (
            <View style={styles.countryListContainer}>
                <FlatList
                    data={this.state.countryList}
                    renderItem={({ item, index }) => this.countryCell(item, index)}
                    keyExtractor={(item) => item.id}
                    extraData={this.state}
                />
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <ImageBackground
                    source={require('../../assets/images/earthimage.jpg')}
                    style={styles.listBgImage}>
                    <View style={styles.container}>
                        {this.countryList()}
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
};

export default CountryListScreen;

