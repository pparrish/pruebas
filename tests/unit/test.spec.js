import {mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Test from '@/views/Test.vue'
import store from '@/store.js'

const localVue = createLocalVue()

localVue.use(Vuex)


describe('test-utils.vue', () => {



  it('I ned a variable foo', () => {
    const msg = 'hi'
    const wrapper = mount(Test, {store})
    expect(wrapper.vm.foo).toMatch(msg)
  })
})
