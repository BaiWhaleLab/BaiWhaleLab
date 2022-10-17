<template>
    <el-container
    direction="vertical"
    style="min-height: 100vh"
    :class="{ embed: !grid.lgPlus, wrapper: true }"
    >
        <TopBar :sticky="topBarShouldBeSticky" />
        <el-main class="main">
        <RouterView />
        </el-main>
        <the-footer />
    </el-container>
</template>

<script lang="ts" setup>

import { grid } from "../grid";
import TopBar from "../components/TopBar.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { computed } from "vue";
import { onMounted } from "vue";
</script>