import{_ as r,o as c,c as a,a as n,d as s,t as u,F as d}from"./index-2e6cf2d4.js";const{VITE_APP_URL:i,VITE_APP_PATH:l}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"drmeme",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){console.log(this.$route.params);const{id:o}=this.$route.params;this.$http.get(`${i}/v2/api/${l}/product/${o}`).then(t=>{console.log(t),this.product=t.data.product})}},mounted(){this.getProduct()}},_=["src"];function h(o,t,m,P,e,g){return c(),a(d,null,[n(" 這是單一產品頁面 "),s("h2",null,u(e.product.title),1),s("img",{src:e.product.imageUrl,class:"img-fluid",alt:""},null,8,_)],64)}const E=r(p,[["render",h]]);export{E as default};
