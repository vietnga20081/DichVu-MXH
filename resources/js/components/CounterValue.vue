<template>
    <span>{{ formatted }}</span>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    target: {
        type: Number,
        required: true,
    },
});

const value = ref(0);
const speed = 250;

const updateCount = () => {
    const inc = Math.max(props.target / speed, 1);
    if (value.value < props.target) {
        value.value = Math.min(value.value + inc, props.target);
        requestAnimationFrame(updateCount);
    }
};

const formatted = computed(() => {
    return value.value.toLocaleString();
});

onMounted(() => {
    updateCount();
});
</script>
