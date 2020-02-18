import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, ContainerBasket, ItemCount } from './styles';

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <ContainerBasket>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>1</ItemCount>
                </ContainerBasket>
            </Container>
        </Wrapper>
    );
}
