import { Form, Field, ErrorMessage } from 'vee-validate';
import { defineRule } from 'vee-validate';
import { required} from '@vee-validate/rules';

export default {
    install: (app,option) => {
        app.component('Form', Form)
        app.component('Field', Field)
        app.component('ErrorMessage', ErrorMessage)
        
        defineRule('required', required);

        app.directive('davide-test', (el, binding, node) => {
            el.innerHTML = `ciao ${option.ciao}`
        })

        console.log('app',app)
        console.log('option',option)
    }
}