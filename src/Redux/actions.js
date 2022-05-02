// use axios for api call
import axios from "axios";
import { GET_PRODUCT_DATA_FAILURE,GET_PRODUCT_DATA_SUCCESS,GET_PRODUCT_DATA_REQUEST } from "./actionTypes";

export const getProductsDataSuccess=(payload)=>({
    type:GET_PRODUCT_DATA_SUCCESS,
    payload
})

export const getProductsDataRequest=()=>({
    type:GET_PRODUCT_DATA_REQUEST,
    
})

export const getProductsDataFail=()=>({
    type:GET_PRODUCT_DATA_FAILURE,
    
})

const getProductsData=()=>(dispatch)=>{
    dispatch(getProductsDataRequest())
    fetch(`https://movie-fake-server.herokuapp.com/products`)
    .then((res)=>res.json())
    .then((res)=>dispatch(getProductsDataSuccess(res)))
    .catch(()=>dispatch(getProductsDataFail()))
}


const sortProducts = () => ()=>{

};

const filterProducts = () => ()=>{
    
};

export { getProductsData, sortProducts, filterProducts };
