<template>
  <div class="add-number-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      num: 1
    };
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.add-number-container{
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
  }
}
</style>