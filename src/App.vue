<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Infinite from './infinite.vue'
import { onMounted, ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
const list = ref([]);
for (var i = 0; i < 10; i++) {
  list.value.push({
    id: i,
    value: i
  });
}
onMounted(() => {
  console.log(2222, proxy.$translate('greetings.hello'))
})
const addList = () => {
  const len = list.value.length
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push({
        id: i + len,
        value: i + len
      }, 1000);
    }
  })
}
const debounce = (value) => {
  console.log("debounce", value);
}
const show = ref(false);
</script>

<template>
  <div>
    我要新加内容test我要新加内容test我要新加内容test
    <input v-focus />
    git checkout master git checkout master
    <div v-copy="test">复制 {{ $translate('greetings.hello') }}</div>
    git checkout master git checkout master git checkout master git checkout master
    <button @click="show = !show">Toggle</button>
    <Transition  mode="out-in" name="custom-classes" enter-active-class="animate__animated animate__swing"
      leave-active-class="animate__animated animate__flash">
      <p v-if="show"> Hello here is some bouncy text!</p>
    </Transition>
    <!-- <div v-debounce="() => debounce('test111')">
    防抖啊
  </div> -->
    <!-- <div style="width: 800px;height: 800px;" v-waterMarker="{
    text:'苏苏'
  }">
    </div> -->
  </div>

</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translate(100px);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
} */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

#app {
  height: 100%;

}
</style>
