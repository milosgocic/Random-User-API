const app = Vue.createApp({
   
    data () {
        return {
            firstName: 'Joe',
            lastName: 'Johanson',
            email: 'joe@gmail.com',
            gender: 'male',
            title: 'mr',
            age: '27',
            nat: 'US',
            country: 'United State',
            state: 'Michigan',
            city: 'Billings',
            picture: 'https://randomuser.me/api/portraits/men/7.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.title = results[0].name.title
            this.age = results[0].registered.age
            this.nat = results[0].nat
            this.country = results[0].location.country
            this.state = results[0].location.state
            this.city = results[0].location.city
            this.picture = results[0].picture.large
        }
    }
}) 

app.mount('#app')