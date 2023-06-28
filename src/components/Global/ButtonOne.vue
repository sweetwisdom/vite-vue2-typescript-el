<template>
    <el-button type="primary">
        <slot />
    </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonOne',
    setup() { },
})
</script>
