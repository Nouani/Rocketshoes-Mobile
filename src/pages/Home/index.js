import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import api from '../../services/api';

export default class Home extends Component {
    async componentDidMount() {
        const response = await api.get('/products');
        console.log(response);
    }

    render() {
        return <Text>HOME</Text>;
    }
}
