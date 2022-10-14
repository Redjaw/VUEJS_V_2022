import FruitsComponent from '@/components/FruitsComponent.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('FruitsComponent', () => { 
    it('possiamo aggiungere frutti tramite il click', async () => {
        const wrapper = mount(FruitsComponent)
        const addButton = wrapper.find('[data-testing="addButton"]');
        wrapper.vm.fruit = 'banana';
        await addButton.trigger("click");
        expect(wrapper.findAll('[data-testing="basket"]')).toHaveLength(1)
     })
})