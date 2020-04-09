import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from 'react-native';
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

function Home({ amount, addToCartRequest }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }
        loadProducts();
    }, []);

    function handleAddToCart(id) {
        addToCartRequest(id);
    }

    function handleAddProduct({ item }) {
        return (
            <ContainerProduct key={item.id}>
                <ImageProduct source={{ uri: item.image }} />
                <Name>{item.title}</Name>
                <Price>{item.priceFormatted}</Price>
                <ButtonContainer onPress={() => handleAddToCart(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <Amount>{amount[item.id] || 0}</Amount>
                    </ProductAmount>
                    <AddProduct>Adicionar</AddProduct>
                </ButtonContainer>
            </ContainerProduct>
        );
    }

    return (
        <Lista
            data={products}
            horizontal
            keyExtractor={product => String(product.id)}
            renderItem={handleAddProduct}
        />
    );
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
