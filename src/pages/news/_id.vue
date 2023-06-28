
<template>
    <div>
        <ButtonTwo @click.native="back"> go back </ButtonTwo>
        <el-divider />
        dynamic route
    </div>
</template>

<route>
{
  meta: {
    layout: 'headless'
  }
}
</route>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables';
export default defineComponent({
    setup() {
        const route = useRouter()
        const back = () => route.back()
        return { back }
    },
})
</script>
