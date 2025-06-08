<template>
    <button
        v-show="visible"
        class="fixed bottom-4 right-4 btn btn-danger btn-icon"
        @click="goToTop"
    >
        <i class="ri-arrow-up-line"></i>
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const visible = ref(false);

const toggle = () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        visible.value = true;
    } else {
        visible.value = false;
    }
};

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

onMounted(() => {
    window.addEventListener('scroll', toggle);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', toggle);
});
</script>
