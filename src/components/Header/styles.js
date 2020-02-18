import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
    flex: 0;
    background-color: ${colors.dark};
    flex-direction: row;
    margin-bottom: 75px;
`;

export const Container = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    padding: 20px;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 185px;
    height: 24px;
`;

export const ContainerBasket = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ItemCount = styled.Text`
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    min-width: 19px;
    min-height: 19px;
    background: ${colors.primary};
    color: #fff;
    font-size: 12px;
    padding: 2px;
    border-radius: 30px;
    overflow: hidden;
`;
