import{_ as m,R as h,r as i,o as p,c as _,a as e,b as s,w as n,d as u,j as f,F as k}from"./index-a7786c65.js";const{VITE_APP_URL:V}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"drmeme",BASE_URL:"/vite-deploy-week6/",MODE:"production",DEV:!1,PROD:!0},$={components:{RouterView:h},methods:{logout(){document.cookie=`drmemeToken=; expires=${new Date};`,this.$router.push("/login")},checkAdmin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)drmemeToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t=`${V}/v2/api/user/check`;this.$http.post(t).then(o=>{o.data.success||this.$router.push("/login")}).catch(o=>{alert(o.response.data.message)})}},mounted(){this.checkAdmin()}},w=u("hr",null,null,-1);function A(a,t,o,P,R,c){const r=i("router-link"),d=i("RouterView");return p(),_(k,null,[e(" 這是---後台---頁面 "),s(r,{to:"/admin/products"},{default:n(()=>[e("後台產品列表")]),_:1}),e(" | "),s(r,{to:"/admin/orders"},{default:n(()=>[e("後台訂單列表")]),_:1}),e(" | "),s(r,{to:"/"},{default:n(()=>[e("回前台首頁")]),_:1}),e(" | "),u("a",{href:"#",onClick:t[0]||(t[0]=f((...l)=>c.logout&&c.logout(...l),["prevent"]))},"登出"),w,s(d)],64)}const x=m($,[["render",A]]);export{x as default};
