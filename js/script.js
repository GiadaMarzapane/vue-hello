const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: 'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
        }
    }
}).mount('#app');