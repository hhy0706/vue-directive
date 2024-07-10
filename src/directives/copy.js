

export default {
      mounted(el,{value}) {
      
        el.handler = () => {
            console.log('mounted22222',value)
            if(!value){
                console.log("无复制内容")
                return;
            }
             navigator.clipboard.writeText(value).then(res =>{

                
                    console.log(res,'复制成功');
               
             });
            // const textarea = document.createElement("textarea");
            // textarea.readOnly = 'readonly';
            // textarea.style.position = 'absolute';
            // textarea.style.left = '-9999px';
            // textarea.value = el.$value;

            // document.body.appendChild(textarea);
            // textarea.select();
            // const result = document.execCommand('Copy');
           
            // document.body.removeChild(textarea);
        
        }
        el.addEventListener('click',el.handler)
    },
    beforeUnmount(el) {
        el.removeEventListener('click',el.handler)
    },
}