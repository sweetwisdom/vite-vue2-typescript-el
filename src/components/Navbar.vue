<!--
 * @Author: zhangchao
 * @Date: 2023-02-17 11:16:49
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-28 21:15:33
 * @Description: file content
-->
<!--
 * @Author: zhangchao
 * @Date: 2022-05-12 11:47:37
 * @LastEditors: zhangchao
 * @LastEditTime: 2022-05-12 14:20:15
 * @Description: file content
-->
<template>
    <header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0"> home </el-menu-item>
            <el-menu-item index="1"> about </el-menu-item>
            <el-menu-item index="2"> news </el-menu-item>
        </el-menu>
        <el-card>
            <h2>2021</h2>
        </el-card>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables';
export default defineComponent({
    setup() {
        const route = useRouter()
        const activeIndex = ref('0')

        const handleSelect = (key: string) => {
            const routes = ['/', '/about', '/news/1']
            activeIndex.value = key
            const idx = Number(key)
            const path = routes[idx]
            route.push(path)
        }
        return { activeIndex, handleSelect }
    },
})
</script>
