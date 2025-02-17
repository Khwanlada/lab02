app.component('product-display',{
    
    props:{
        premium:{
            type: Boolean,
            required: true
        },
    },
    
    template:
    /*html*/
    `<div class="product-container">
        <div class="product-image" :disabled='!inStock':class="{disabledImage: !inStock}">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ displayOnSale }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">In Stock</p>
            <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <p>Product detail: {{detail}}</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant (index)" class="color-circle" :style="{backgroundColor: variant.color}"></div>
            <button class=" button " :disabled='!inStock':class="{disabledButton: !inStock}" @click="addToCart">Add to Cart</button>
            <button class=" button " :disabled='!inStock':class="{disabledButton: !inStock}" @click="removeCart">Remove from Cart</button>
        </div>
    </div>
        <review-form></review-form>
</div>`
    ,
data() {
    return {
        product: 'Shoes',
        brand: 'SE 331',
        //image: './assets/images/socks_green.jpg',
        inStock: true,
        inventory: 100,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity:0 }
        ],
        selectedVariant:0,
        cart: 0,
        premium: true
    }
},
methods: {
    removeCart(){
        this.$emit('remove-cart')
    },
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateImage(variantImage) {
        this.image = variantImage
    },
    updateVariant(index){
        this.selectedVariant = index;
    }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 30
        },
        displayOnSale(){
            if(this.inStock == true){
               return this.brand + ' ' +this.product+ ' '+ 'is on sale'; 
            }
        },
}
})
