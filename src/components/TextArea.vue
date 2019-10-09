<template>
  <div>
    <div style="font-size:24px;text-align:center;margin:15px;">vue-codemirror实现在线代码编辑</div>
    <div>
      <textarea class="area" v-model="code"></textarea>
    </div>
    <div style="border:1px solid gray;margin:15px 0;min-height:25px">
        {{this.code}}
    </div>
    <div  class="footer">
      <button @click="submit" class="btn">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
       return {
           code:null,
       }
  },
  methods: {
    submit() {
        console.log(this.code)
    }
  },
}
</script>
<style scoped>
.area {
  width: 100%;
  height: 300px;
}
.footer{
  text-align: center;
}
.btn{
  width:60%;
  background: rgb(219, 233, 220);
  margin: 0 auto;
}
</style>