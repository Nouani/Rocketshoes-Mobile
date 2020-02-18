import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
                        <ItemCount>1</ItemCount>
                    </ContainerBasket>
                </Container>
            </Wrapper>
        </>
    );
}
