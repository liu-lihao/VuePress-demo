<template>
  <div class="box-container p-fcc">
    <div class="btn add p-fcc">+</div>
    <input type="text" class="input">
    <div class="btn sub p-fcc">-</div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.p-fcc {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-container{
  .btn {
    width: 50px;
    height: 50px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: #f9fafc;
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
  }
  .add {
    border-radius: 3px 0 0 3px;
    border-right: none;
  }
  .sub {
    border-radius: 0 3px 3px 0;
    border-left: none;
  }
  .input {
    width: 100px;
    height: 50px;
    border: 1px solid #ebebeb;
    transition: .2s;
    outline: none;
    text-align: center;
    padding: 0;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }
  }
}
</style>