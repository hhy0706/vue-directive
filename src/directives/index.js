import focus from "./focus";
import copy from "./copy";
import debounce from "./debounce";
import waterMarker from "./waterMarker"
const directives = {
    focus,
    copy,
    debounce,
    waterMarker
}
export default {
    install(app,options){
        console.log("install11111",options);
        Object.keys(directives).forEach(key => {
            app.directive(key, directives[key]);
        })

    }
}