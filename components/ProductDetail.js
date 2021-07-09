app.component('product-details',{
    props:{
        detail:{
            type: String
        }
    },
    template:
    /*html*/
    `<p> {{productDetail}} </p>`
    ,
    computed:{
        productDetail(){
            return this.detail
        },
    }
})
