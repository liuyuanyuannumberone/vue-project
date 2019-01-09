<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='20'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
  import mui from'../../../lib/mui/js/mui.min'
  export default{
    data(){
      return {}
    },
    mounted(){
      mui('.mui-numbox').numbox();     //初始化numberbox
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>

</style>
