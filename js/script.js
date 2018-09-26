//点击显示消失切换效果
var headerbtn = document.querySelector(".header-btn");
var headercontent = document.querySelector(".header-content");
var sum = 0;
headercontent.style.display="none";
if(headerbtn!=null){
    headerbtn.addEventListener("click",function(){
        if (sum++%2 == 0) {
            headercontent.style.display="block";
        }else{
            headercontent.style.display="none";
        }
    })
}
//点击显示消失切换效果

//数据传输
new Vue({
    el:"#header",
    data:{
        lists:""
    },
    mounted:function(){
        this.$http.get('json/data.json').then(function(res){
            console.log(res.body);
            this.lists=res.body;
        },function(){
            console.log('请求失败处理');
        })
    },
    methods:{
        thisclick:function(i,o){
            this.lists[i][o].bool = !this.lists[i][o].bool;
        }
    }
})
//数据传输