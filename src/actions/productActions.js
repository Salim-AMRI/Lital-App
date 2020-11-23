import {ADD_PRODUCT, GET_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT} from './types'
import Axios from 'axios';

/* add  Product */

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export function postProduct(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:3000/products`, {
        id: el.id,
        titre: el.titre,
        type: el.type,
        etat: el.etat,
        photo: el.photo,
        description: el.description,
        prix: el.prix,
    })
      .then((res) => dispatch(addProduct(el)))
      .catch((err) => console.log(err));
}

/* get Product */

export const getAllProduct = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export function getProductFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/products").then((res) =>
      dispatch(getAllProduct(res.data))
    );
}

/* delete Product */

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export function deleteProductFromApi(id) {
  return (dispatch) =>
    Axios.delete("http://localhost:3000/products/" + id).then((res) =>
      dispatch(deleteProduct(id))
    );
}

/* edite Product */

export const editeProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export function editeProductFromApi(el) {
  console.log(el);
  return (dispatch) =>
    Axios.patch("http://localhost:3000/products/" + el.id, el).then(
      (res) => dispatch(getProductFromApi()),
      console.log(el)
    );
}


