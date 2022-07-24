<template>
  <div id="orderlist">
    <h2>订单列表</h2>
    <a-table :columns="columns" 
    :data-source="data"
    :pagination='pagination'>
    </a-table>
  </div>
</template>

<script>
const data = [
  {

  }
]
const colmnus = [

]
export default {
  name: 'OrderList',
  data() {
    return {
      data,
      colmnus
    }
  }
}
</script>

<style>

</style>