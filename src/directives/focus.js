export default {
    created() {
      console.log(111122)
    },
    mounted(el,binding) {
      console.log(1111,el,binding)
        el.focus();
    },
  }