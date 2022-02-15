Vue.component('child-component', {
    template: '<p>{{ propsdata }}</p>',
    props: ['propsdata']
});

Vue.component('sibling-component', {
    template: '<p>{{ propsdata }}</p>',
    props: ['propsdata']
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue!',
        anotherMessage: 'zzzzzzzztest'
    }
});