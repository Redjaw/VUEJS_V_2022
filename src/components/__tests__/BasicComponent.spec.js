import { describe, it, expect, nextTick } from 'vitest'
import BasicComponent from '../BasicComponent.vue'
import { mount } from '@vue/test-utils'


describe('BasicComponent', () => {
  it('deve montare il componente basic', () => {
    const wrapper = mount(BasicComponent, { props: { testProp: 'Hello Vitest' } })
      expect(wrapper.find('[data-test="testPropGetter"]').exists()).toBe(true)
  })
    it('devono esserci 3 film di default', async () => {
        const wrapper = mount(BasicComponent, { props: { testProp: 'Hello Vitest' } })
        expect(wrapper.findAll('[data-test="movies"]').length).toBe(4)
    })
    it('i dati passati dalle props devono essere coerenti', async () => {
        const wrapper = mount(BasicComponent, { props: { testProp: 'Hello Vitest' } })
        expect(wrapper.find('[data-test="testPropGetter"]').html()).toContain('Hello Vitest')
  })
})
