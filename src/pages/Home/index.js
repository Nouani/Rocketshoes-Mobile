import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

import * as CartActions from '../../store/modules/cart/actions';

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

    handleAddToCart = id => {
        const { addToCartRequest } = this.props;
        addToCartRequest(id);
    };

    handleAddProduct = ({ item }) => {
        const { amount } = this.props;
        return (
            <ContainerProduct key={item.id}>
                <ImageProduct source={{ uri: item.image }} />
                <Name>{item.title}</Name>
                <Price>{item.priceFormatted}</Price>
                <ButtonContainer onPress={() => this.handleAddToCart(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <Amount>{amount[item.id] || 0}</Amount>
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

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
