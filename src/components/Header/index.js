import React from 'react';
import {} from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Wrapper,
    Container,
    ContainerLogo,
    Logo,
    ContainerBasket,
    ItemCount,
} from './styles';

export default function Header({ navigation }) {
    const cartSize = useSelector(state => state.cart.length);
    return (
        <>
            <Wrapper>
                <Container>
                    <ContainerLogo onPress={() => navigation.navigate('Home')}>
                        <Logo />
                    </ContainerLogo>
                    <ContainerBasket
                        onPress={() => navigation.navigate('Cart')}
                    >
                        <Icon name="shopping-basket" color="#FFF" size={24} />
                        <ItemCount>{cartSize}</ItemCount>
                    </ContainerBasket>
                </Container>
            </Wrapper>
        </>
    );
}
