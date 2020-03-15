import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Lista = styled.FlatList`
    padding: 10px 15px;
`;

export const ContainerProduct = styled.View`
    padding: 8px;
    margin-right: 16px;
    width: 180px;
    height: 300px;
    background: #fff;
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
    background: ${colors.primary};
    border-radius: 4px;
    margin-top: auto;
`;

export const ProductAmount = styled.View`
    padding: 10px;
    background: ${darken(0.03, colors.primary)};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex-direction: row;
    align-items: center;
`;

export const Amount = styled.Text`
    color: #fff;
    margin: 0 4px 0 10px;
`;

export const AddProduct = styled.Text`
    flex: 1;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;
