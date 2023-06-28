<!--
 * @Author: zhangchao
 * @Date: 2023-02-17 11:16:49
 * @LastEditors: zhangchao
 * @LastEditTime: 2023-06-28 21:22:30
 * @Description: file content
-->
<template>
    <div>
        <NavBar />
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        NavBar: () => import('../components/Navbar.vue'),
    },
})
</script>
