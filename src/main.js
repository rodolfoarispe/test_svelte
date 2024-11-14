import { mount } from 'svelte'
import './app.css'
import Home from './views/Home.svelte'

const app = mount(Home, {
  target: document.getElementById('app'),
})

export default app
