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
new Vue({
  el: '#test_modle',
  data: {
    // modleName: 'test',
    // modleNum: 0
    sex: '-->female',
    fruits: [],
    meat: []
  }
})
