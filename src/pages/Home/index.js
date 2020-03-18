import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Lista,
    ContainerProduct,
    ImageProduct,
    Name,
    Price,
    ButtonContainer,
    AddProduct,
    ProductAmount,
    Amount,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        // const response = await api.get('/cep/13070770');
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddToCart = product => {
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    };

    handleAddProduct = ({ item }) => {
        return (
            <ContainerProduct key={item.id}>
                <ImageProduct source={{ uri: item.image }} />
                <Name>{item.title}</Name>
                <Price>{item.priceFormatted}</Price>
                <ButtonContainer onPress={() => this.handleAddToCart(item)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <Amount>0</Amount>
                    </ProductAmount>
                    <AddProduct>Adicionar</AddProduct>
                </ButtonContainer>
            </ContainerProduct>
        );
    };

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

export default connect()(Home);
