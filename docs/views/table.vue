<template>
  <div>
    <div class="sidebar">
      <menu></menu>
    </div>
    <div class="content">
      <button @click="getData">
        获取数据
      </button>
      每页显示：
      <select v-model="table.page.perPage">
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      <hs-table
        table-class="table table-bordered table-hover"
        :colums="table.colums"
        :rows="table.rows"
        :page.sync="table.page"
        :item-actions="table.itemActions"

      ></hs-table>
    </div>
  </div>
</template>
<script>
  let tableProp = {
    colums: [
      {
        title: '标题',
        field: 'name',
        visible: true
      },
      {
        title: '年龄',
        field: 'age',
        visible: true
      },
      {
        title: '操作',
        field: 'option',
        visible: true,
        type: 'action'
      }
    ],
    rows: [],
    itemActions: [
      {
        name: 'exit',
        class: 'btn btn-a',
        label: '编辑'
      },
      {
        name: 'delete',
        class: 'btn btn-a',
        label: '删除'
      }
    ],
    page: {
      total: null,
      current: 2,
      perPage: 20
    }
  }
  export default {
    data() {
      return {
        table: tableProp
      }
    },
    methods: {
      getData() {
        for (var i = 10 - 1; i >= 0; i--) {
          this.table.rows.push({
            name: this.table.rows.length + '个人',
            age: '1',
          })
        }
        this.table.page.total = 100
      }
    },
    events: {
      'table:action'(action, data) {
        switch (action) {
          case 'exit':
            alert('当前动作时：编辑，\n 数据：' + JSON.stringify(data));
            break;
          case 'delete':
            alert('当前动作时：删除，\n 数据：' + JSON.stringify(data));
            break;
        }
      },
      'table:pageChange'(page) {
        alert(`当前页码：${page}`)
      }
    }
  }
</script>