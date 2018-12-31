<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="发表评论(最多120字)" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
    </div>
</template>

<script>

  export default{
    data(){
      return {}
    },
    created(){

    },
    methods: {},
  }
</script>

<style lang="scss" scoped>
    .comment {
        h3{
            margin-top: 34px;
        }
        hr {
            margin: 0;
        }
        textarea{
            margin-bottom:10px;
        }
    }
</style>