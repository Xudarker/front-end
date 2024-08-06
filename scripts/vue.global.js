const app=Vue.createApp({
    data(){
        return{
            //data is an object
        }
    },
    //data fuctions that return an object
    template:"<h2>hello</h2>",
    methods:{
        //methods are functions
        handleEvent(e){
            console.log(e)
        }
    }
})

app.mount('#app')