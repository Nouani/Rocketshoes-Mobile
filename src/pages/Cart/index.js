import React from 'react';
import { connect } from 'react-redux';
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

import colors from '../../styles/colors';

function Cart({ cart }) {
    return (
        <Container>
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
                        <ProductDelete>
                            <Icon
                                name="delete-forever"
                                size={24}
                                color={colors.primary}
                            />
                        </ProductDelete>
                    </ProductHeader>
                    <ProductFooter>
                        <ProductControls>
                            <ProductControlButton>
                                <Icon
                                    name="remove-circle-outline"
                                    size={20}
                                    color={colors.primary}
                                />
                            </ProductControlButton>
                            <ProductAmount value={String(product.amount)} />
                            <ProductControlButton>
                                <Icon
                                    name="add-circle-outline"
                                    size={20}
                                    color={colors.primary}
                                />
                            </ProductControlButton>
                        </ProductControls>
                        <ProductSubtotal>R$ 179,90</ProductSubtotal>
                    </ProductFooter>
                </Product>
            ))}
            <Footer>
                <TotalText>TOTAL</TotalText>
                <TotalPrice>R$ 179,90</TotalPrice>
                <Order>
                    <OrderText>FINALIZAR PEDIDO</OrderText>
                </Order>
            </Footer>
            {/* <EmptyContainer>
                    <Icon name="remove-shopping-cart" size={64} color="#eee" />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </EmptyContainer> */}
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
