const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
            updateCart(id){
                this.cart.push(id);
            },
            removeCart(){
                this.cart.splice(-1)
            }
            
    } 
    ,
    computed:{
                carts(){
                    return this.cart.length
            }
        }
})