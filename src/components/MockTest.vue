<template>
  <div>
    <a-card title="Mock 测试" style="width: 600px">
      <a-row style="margin-bottom: 10px">
        <a-space>
          <a-button
            type="primary"
            @click="table.handleClickMockBtnEvent"
          >
            Mock测试
          </a-button>
        </a-space>
      </a-row>
      <a-row>
        <a-table :data-source="table.data" :columns="table.columns" style="width: 100%"/>
      </a-row>
    </a-card>
  </div>
</template>
<script lang="ts" setup>

import {reactive} from "vue";
import {getBaseData, getBaseData2} from "../api/baseApi";

interface ITable {
  data: Array<any>
  columns: Array<any>
  handleClickMockBtnEvent: () => void
  handleClickRealBtnEvent: () => void
}
const table = reactive<ITable>({
  data: [],
  columns: [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '数据类型',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '值',
      dataIndex: 'value',
      key: 'value'
    }
  ],
  handleClickMockBtnEvent: async () => {
    table.data = []
    const res = await getBaseData2()
    table.data = res.data
  },
  handleClickRealBtnEvent: async () => {
    table.data = []
    const res = await getBaseData()
    table.data = res.data
  }
})
</script>