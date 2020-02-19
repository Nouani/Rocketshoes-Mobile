import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Lista, ContainerProduct, ImageProduct, Name, Price, ButtonContainer, AddProduct, ProductAmount, Amount } from './styles';

import api from '../../services/api';

export default class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        // const response = await api.get('/cep/13070770');
        const response = await api.get('/products');
        this.setState({ products: response.data });
    }

    handleAddProduct = ({ item }) => {
        return (
            <ContainerProduct>
                <ImageProduct source={{ uri: item.image }} />
                <Name>{item.title}</Name>
                <Price>{item.price}</Price>
                <ButtonContainer>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <Amount>0</Amount>
                    </ProductAmount>
                    <AddProduct>Adicionar</AddProduct>
                </ButtonContainer>
            </ContainerProduct>
        )
    }

    render() {
        const { products } = this.state;
        return (
            <Lista
                data={products}
                horizontal
                keyExtractor={product => String(product.id)}
                renderItem={this.handleAddProduct}
            />
        );
    }
}
