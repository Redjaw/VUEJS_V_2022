import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Album } from './components/Album'

export const useStore = defineStore('store', () => {
    const selectedAlbum = ref<Album>(null)

    const selectedIndex = ref(-1)

    return { selectedAlbum, selectedIndex }
})