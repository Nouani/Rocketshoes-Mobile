import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Product,
    ProductHeader,
    ProductImage,
    Details,
    ProductTitle,
    ProductPrice,
    ProductDelete,
    ProductFooter,
    ProductControls,
    ProductControlButton,
    ProductAmount,
    ProductSubtotal,
    Footer,
    TotalText,
    TotalPrice,
    Order,
    OrderText,
    EmptyContainer,
    EmptyText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import { formatPrice } from '../../utils/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return (
        <Container>
            {cart.length > 0 ? (
                <>
                    {cart.map(product => (
                        <Product key={product.id}>
                            <ProductHeader>
                                <ProductImage
                                    source={{
                                        uri: product.image,
                                    }}
                                />
                                <Details>
                                    <ProductTitle>{product.title}</ProductTitle>
                                    <ProductPrice>
                                        {product.priceFormatted}
                                    </ProductPrice>
                                </Details>
                                <ProductDelete
                                    onPress={() => removeFromCart(product.id)}
                                >
                                    <Icon
                                        name="delete-forever"
                                        size={24}
                                        color={colors.primary}
                                    />
                                </ProductDelete>
                            </ProductHeader>
                            <ProductFooter>
                                <ProductControls>
                                    <ProductControlButton
                                        onPress={() => decrement(product)}
                                    >
                                        <Icon
                                            name="remove-circle-outline"
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </ProductControlButton>
                                    <ProductAmount
                                        value={String(product.amount)}
                                    />
                                    <ProductControlButton
                                        onPress={() => increment(product)}
                                    >
                                        <Icon
                                            name="add-circle-outline"
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </ProductControlButton>
                                </ProductControls>
                                <ProductSubtotal>
                                    {product.subtotal}
                                </ProductSubtotal>
                            </ProductFooter>
                        </Product>
                    ))}
                    <Footer>
                        <TotalText>TOTAL</TotalText>
                        <TotalPrice>{total}</TotalPrice>
                        <Order>
                            <OrderText>FINALIZAR PEDIDO</OrderText>
                        </Order>
                    </Footer>
                </>
            ) : (
                <EmptyContainer>
                    <Icon name="remove-shopping-cart" size={64} color="#eee" />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </EmptyContainer>
            )}
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
