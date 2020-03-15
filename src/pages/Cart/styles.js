import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    background: #fff;
    margin: 10px 18px;
    border-radius: 8px;
    padding: 15px 10px;
`;

export const Product = styled.View`
    border: 1px solid red;
    flex-direction: column;
`;

export const ProductHeader = styled.View`
    border: 1px solid red;
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    width: 30px;
    height: 30px;
`;

export const Details = styled.View``;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductFooter = styled.View`
    border: 1px solid red;
    flex-direction: row;
`;

export const ProductControls = styled.View`
    border: 1px solid red;
    flex-direction: row;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
    readonly: true,
})``;

export const ProductSubtotal = styled.Text``;

export const Footer = styled.View`
    border: 1px solid red;
    flex-direction: column;
`;

export const TotalText = styled.Text``;

export const TotalPrice = styled.Text``;

export const Order = styled.TouchableOpacity``;

export const OrderText = styled.Text``;
