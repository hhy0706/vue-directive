<script setup>
import { computed, ref, onMounted } from 'vue';
const props = defineProps({
    listData: {
        type: Array,
        default: () => []
    },
    itemSize: {
        type: Number,
        default: 200
    }
});
const emits = defineEmits(['addList'])
const screenHeight = ref(0);
const startOffset = ref(0);
const start = ref(0);
const end = ref(0);
const list = ref();
const items = ref();
const listHeight = computed(() => {
    return props.listData.length * props.itemSize
})
const visibleCount = computed(() => {
    return Math.ceil(screenHeight.value / props.itemSize);
})
const getTransform = computed(() => {
    return `translate3d(0,${startOffset.value}px,0)`;
})
// const visibleData = ref([]);
// const visibleData = computed(() => {
//     return props.listData.slice(start.value, Math.min(end.value, props.listData.length))
// })
const visibleData = computed(() => {
    return props.listData.slice(start.value,Math.min(end.value, props.listData.length))
})
const scrollEvent = () => {
    const scrollTop = list.value.scrollTop;
   
    start.value = Math.floor(scrollTop / props.itemSize);
    end.value = start.value + visibleCount.value;
    // if(end.value >= listData.length - 1){
    //     emits('addList')
    // }
    // visibleData.value =  props.listData.slice(start.value, Math.min(end.value, props.listData.length))
    startOffset.value = scrollTop - (scrollTop % props.itemSize);
    console.log(222222222, scrollTop,scrollTop % props.itemSize,startOffset.value)
}
onMounted(() => {
    screenHeight.value = document.documentElement.clientHeight;
    start.value = 0;
    end.value = start.value + visibleCount.value;
    // visibleData.value =  props.listData.slice(start.value, Math.min(end.value, props.listData.length))
})
</script>

<template>
    <div ref="list" :style="{height:screenHeight + 'px'}" class="infinite-list-container" @scroll="scrollEvent($event)">
        <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }">
            <div class="infinite-list" :style="{ transform: getTransform }">
            <div ref="items" class="infinite-list-item" v-for="item in visibleData" :key="item.id"
                :style="{ height: itemSize + 'px', lineHeight: itemSize + 'px' }">{{ item.value }}</div>
        </div>
        </div>
       
    </div>

</template>

<style lang="css" scoped>
.infinite-list-container {
    width: 500px;
    
    position: relative;
    /* height: 400px; */
    overflow: auto;

}



.infinite-list-item {
    box-sizing: border-box;
    border: 10px solid red;
}
</style>