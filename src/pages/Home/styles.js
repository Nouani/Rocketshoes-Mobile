import styled from 'styled-components/native';

export const Lista = styled.FlatList`
    margin: 10px 15px;
`;

export const ContainerProduct = styled.View`
    padding: 8px;
    margin-right: 16px;
    width: 180px;
    height: 300px;
    background: #FFF;
    border-radius: 8px;
`;

export const ImageProduct = styled.Image`
    width: 160px;
    height: 160px;
    align-self: center;
`;

export const Name = styled.Text`
    font-size: 12px;
`;

export const Price = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    border-radius: 2px;
    height: 35px;
    margin-top: auto;
`;

export const AddProduct = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin-left: 10px;
`;
export const ProductAmount = styled.Text`
    margin: 0 5px;
    align-items: center;
`;
export const Amount = styled.Text`
    color: #FFF;
`;

