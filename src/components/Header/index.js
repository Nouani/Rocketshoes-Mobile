import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Wrapper,
    Container,
    ContainerLogo,
    Logo,
    ContainerBasket,
    ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
