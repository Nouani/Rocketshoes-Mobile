import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    background: #fff;
    margin: 10px 18px;
    border-radius: 6px;
    padding: 15px 10px;
`;

export const Product = styled.View`
    flex-direction: column;
`;

export const ProductHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ProductImage = styled.Image`
    width: 70px;
    height: 70px;
`;

export const Details = styled.View`
    width: 200px;
    flex-direction: column;
`;

export const ProductTitle = styled.Text`
    font-size: 15px;
`;

export const ProductPrice = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductFooter = styled.View`
    flex-direction: row;
    padding: 5px 8px;
    background: #ebebeb;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
`;

export const ProductControls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 30px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
    readonly: true,
})`
    background: #fff;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

export const Footer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

export const TotalText = styled.Text`
    color: #ababab;
    font-weight: bold;
    font-size: 13px;
`;

export const TotalPrice = styled.Text`
    font-weight: bold;
    font-size: 23px;
`;

export const Order = styled.TouchableOpacity`
    width: 100%;
    background: #7159c1;
    border-radius: 3px;
    margin-top: 20px;
`;

export const OrderText = styled.Text`
    padding: 8px 0;
    align-self: center;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`;
