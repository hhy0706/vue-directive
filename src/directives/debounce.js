export default {
    created() {
    },
    mounted(el,binding) {
       /// 函数要传参的话，需要再包裹一层
        let timer
        el.addEventListener('click', () => {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            binding.value()
          }, 1000)
        })
    },
  }