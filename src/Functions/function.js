export async function ProductsApi(dispatch) {
    const api = await fetch("https://fakestoreapi.com/products");
    const response = await api.json();
    dispatch({
      type: "product",
      payload: response,
    });
    
  }

  export function setCategory( productCategory,product, dispatch){

        if(productCategory === "all"){
          dispatch({
            type: "category",
            payload:product
          })
        }
        
        else if(productCategory === "men's clothing"){
          dispatch({
            type: "category",
            payload: product.filter((ele)=>{
              return ele.category === productCategory
            })
          })
        }
        else if(productCategory === "women's clothing"){
          dispatch({
            type: "category",
            payload: product.filter((ele)=>{
              return ele.category === productCategory
            })
          })
        }
        else if(productCategory === "jewelery"){
          dispatch({
            type: "category",
            payload: product.filter((ele)=>{
              return ele.category === productCategory
            })
          })
        }
        else if(productCategory === "electronics"){
          dispatch({
            type: "category",
            payload: product.filter((ele)=>{
              return ele.category === productCategory
            })
          })
        }
  }

  export function searchFn(input,product,dispatch){
      dispatch({
        type:"category",
        payload: product.filter((ele)=>{
          return (ele.category.toLowerCase().includes(input.toLowerCase()))
        })
      })
  }

  export function addToCart(ele,dispatch){
      dispatch({
        type : "addToCart",
        payload: ele
      })
  }

  export function deleteCart(id,cartItem, dispatch){
      const deleteCartItem = cartItem.filter((ele)=>{
        return ele.id !== id
      })
      dispatch({
        type : "deleteCartItem",
        payload: deleteCartItem
      })
  }