// Adicionar item ao carrinho
export const addCart = (product) => {
    return{
        type : 'ADDITEM',
        payload : product
    }
}

// Para remover item do carrinho
export const delCart = (product) => {
    return{
        type : 'DELITEM',
        payload : product
    }
}