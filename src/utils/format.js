import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
