import React, { Component } from 'react';
import { Text } from 'react-native';
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
} from './styles';

import colors from '../../styles/colors';

export default class Cart extends Component {
    state = {};

    render() {
        return (
            <Container>
                <Product>
                    <ProductHeader>
                        <ProductImage
                            source={{
                                uri:
                                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                            }}
                        />
                        <Details>
                            <ProductTitle>
                                Tênis de Caminhada Leve Confortável
                            </ProductTitle>
                            <ProductPrice>R$179,90</ProductPrice>
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
                            <ProductAmount value={String(1)} />
                            <ProductControlButton>
                                <Icon
                                    name="add-circle-outline"
                                    size={20}
                                    color={colors.primary}
                                />
                            </ProductControlButton>
                        </ProductControls>
                        <ProductSubtotal>R$179,90</ProductSubtotal>
                    </ProductFooter>
                </Product>
                <Footer>
                    <TotalText>Total</TotalText>
                    <TotalPrice>R$179,90</TotalPrice>
                    <Order>
                        <OrderText>Finalizar Pedido</OrderText>
                    </Order>
                </Footer>
            </Container>
        );
    }
}
