import { ADD_CART, CHANGE_NUM_BY_KEY, DECREASE_NUM, INCREASE_NUM } from "../type";

const initialState = {
    listProduct: JSON.parse(localStorage.getItem("cart")) || []
}

export const cartReducer = (state = initialState, action) => {
    let { listProduct } = state
    switch (action.type) {
        case ADD_CART:
            let checkCart = listProduct.find((e) =>
                e.id == action.payload.i
            )
            if (checkCart) {
                let index = listProduct.findIndex((it) =>
                    it.id == action.payload.id
                )
                listProduct[index].num += 1;
            } else {
                listProduct.push({ ...action.payload, num: 1 })
            }
            console.log(`checkCart`, checkCart)
            localStorage.setItem('cart', JSON.stringify(listProduct));
            return {
                ...state,
                listProduct
            }
        case INCREASE_NUM:
            let index = listProduct.findIndex((it) =>
                it.id == action.payload.id
            )
            listProduct[index].num += 1
            localStorage.setItem('cart', JSON.stringify(listProduct));
            return {
                ...state,
                listProduct
            }
        case DECREASE_NUM:
            let indexx = listProduct.findIndex((it) =>
                it.id == action.payload.id
            );

            if (listProduct[indexx].num > 1) {
                listProduct[indexx].num -= 1
            } else {
                listProduct.splice(indexx, 1)
            }
            localStorage.setItem('cart', JSON.stringify(listProduct))
            return {
                ...state,
                listProduct
            }
        case CHANGE_NUM_BY_KEY:
            console.log(`action.payload`, action.payload)
            let indexxx = listProduct.findIndex(it => it.id == action.payload.data.id)
            listProduct[indexxx].num = parseInt(action.payload.num)
            localStorage.setItem('cart', JSON.stringify(listProduct))
            return {
                ...state,
                listProduct
            }
    }
    return state

}