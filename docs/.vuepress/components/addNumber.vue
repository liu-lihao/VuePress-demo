<template>
  <div class="container">
      addNumber
      <div class="box"></div>
      <button @click="handleClick">{{num}}</button>
  </div>
</template>

<script>
export default {
    name: 'addNumber',
    data() {
        return {
            num: 0
        }
    },
    methods: {
        handleClick() {
            this.num += 1;
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    color: rgb(202, 160, 23);
    .box {
        width: 100px;
        height: 100px;
        background-color: rgb(44, 195, 170);
    }
}
</style>