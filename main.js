const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% Cotton', '30% Wool', '100% Hemp'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],
            sizes: ['big', 'small', 'just medium']
            
        }
    }
})
