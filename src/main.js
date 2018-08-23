// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#origin_app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
//
// new Vue({
//   el: '#test_for',
//   data: {
//     foodList: [
//       {
//         name: '姜',
//         price: 1,
//         discount: 0.8
//       },
//       {
//         name: '葱',
//         price: 2,
//         discount: 0.9
//       },
//       {
//         name: '蒜',
//         price: 3,
//       }
//     ]
//   }
// })
// new Vue({
//   el: '#test_bind',
//   data: {
//     url: 'http://www.baidu.com',
//     v_img: 'https://www.baidu.com/img/bd_logo1.png',
//     v_class: 'btn btn-default',
//     isActive: true
//   }
// })
// new Vue({
//   el: '#test_on',
//   methods: {
//     onClick: function () {
//       console.log('onClicked')
//     },
//     onKeyup: function () {
//       console.log('onKeyup')
//     },
//     onKeydown: function () {
//       console.log('onKeydown')
//     },
//     onSubmit: function () {
//       console.log('onSubmit')
//     },
//     onEnter: function () {
//       console.log('onEnter')
//     },
//     onLeave: function () {
//       console.log('onLeave')
//     },
//     keyEnter: function () {
//       console.log('keyEnter')
//     }
//   }
// })
// new Vue({
//   el: '#test_modle',
//   data: {
//     // modleName: 'test',
//     // modleNum: 0
//     sex: '-->female',
//     fruits: [],
//     meat: []
//   }
// })
// new Vue({
//   el: '#test_if',
//   data: {
//     role: 'admin'
//   }
// })
// new Vue({
//   el: '#test_computed',
//   data: {
//     math: 100,
//     physics: 90,
//     english: 80
//   },
//   computed: {
//     sum: function () {
//       return parseFloat(this.math) + parseFloat(this.physics) + parseFloat(this.english)
//     },
//     average: function () {
//       return Math.round(this.sum / 3)
//     }
//   }
// })
// Vue.component('alert', {
//   template: '<button @click="on_click">-->v_component</button>',
//   methods: {
//     on_click: function () {
//       alert('-->alert')
//     }
//   }
// })
// var alertComponent = {
//   template: '<button @click="on_click">-->v_component</button>',
//   methods: {
//     on_click: function () {
//       alert('-->alert')
//     }
//   }
// }
// new Vue({
//   el: '#v_component',
//   components: {
//     alert: alertComponent
//   }
// })
// var likeComponent = {
//   template: '#test_template',
//   methods: {
//     on_click: function () {
//       if (!this.liked) {
//         this.likeCount++
//         this.liked = !this.liked
//       }
//     }
//   },
//   data: function () {
//     return {
//       likeCount: 10,
//       liked: false
//     }
//   }
// }
// new Vue({
//   el: '#v_component',
//   components: {
//     like: likeComponent
//   }
// })
// Vue.component('alert', {
//   template: `
//   <buttom @click="on_click()">-></buttom>
//   `,
//   props: ['msg'],
//   methods: {
//     on_click: function () {
//       alert(this.msg)
//     }
//   }
// })
// Vue.component('user', {
//   template: `
//   <a :href="'/user/' + username">go->{{ username }}</a>
//   `,
//   props: ['username'],
//   methods: {}
// })
// Vue.component('balance', {
//   template: `
//   <div>
//     <show @show-balance="show_balance"></show>
//     <div v-if="show">
//       ->0.09
//     </div>
//   </div>
//   `,
//   methods: {
//     show_balance: function (data) {
//       this.show = true
//       console.log('data', data)
//     }
//   },
//   data: function () {
//     return {
//       show: false
//     }
//   }
// })
// Vue.component('show', {
//   template: `
//   <button @click="on_click">->show balance</button>
//   `,
//   methods: {
//     on_click: function () {
//       this.$emit('show-balance', { a: 1, b: 2 })
//     }
//   }
// })
// var Event = new Vue()
//
// Vue.component('sender', {
//   template: `
//   <div>
//   -> send: <input @keyup="on_change" type="text" v-model="message">
//   </div>
//   `,
//   data: function () {
//     return {
//       message: ''
//     }
//   },
//   methods: {
//     on_change: function () {
//       Event.$emit('send-some-msg', this.message)
//     }
//   }
// })
// Vue.component('receiver', {
//   template: `
//     <div>
//   -> receive: {{ message }}
//   </div>
//   `,
//   data: function () {
//     return {
//       message: ''
//     }
//   },
//   mounted: function () {
//     var me = this
//     Event.$on('send-some-msg', function (message) {
//       me.message = message
//     })
//   }
// })
// new Vue({
//   el: '#test_component'
// })
// Vue.filter('meter', function (val) {
//   val = val || 0
//   return (val / 1000).toFixed(2) + 'm'
// })
// Vue.filter('currency', function (val, unit) {
//   val = val || 0
//   unit = unit || '元'
//   return val + unit
// })
// new Vue({
//   el: '#test_filter',
//   data: function () {
//     return {
//       length: 0,
//       price: 10
//     }
//   }
// })
Vue.directive('pin', function (el, bingding) {
  var pinned = bingding.value
  if (pinned) {
    el.style.position = 'fixed'
    el.style.top = '50%'
    el.style.left = '50%'
  } else {
    el.style.position = 'static'
  }
})
new Vue({
  el: '#test_directive',
  data: {
    card1: {
      pinned: false
    },
    card2: {
      pinned: false
    }
  }
})
