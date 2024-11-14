<script>
  import "../assets/global.css";

  import { onMount } from 'svelte';
  import { baseUrl } from '../config';
  
  import ContactForm from './ContactForm.svelte';
  import ContactList from "./ContactList.svelte";
  

  let showForm = false;

  let contactList;
  
  async function actualizarContactos() {
    await contactList.buscarContactos();
  }

</script>


<button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        on:click={() => showForm = !showForm}>
  {showForm ? "Cerrar Formulario" : "Nuevo Contacto"}
</button>

{#if showForm}
  <ContactForm on:NuevoContacto={() => actualizarContactos()}/>
{/if}

<hr>

<ContactList bind:this={contactList}  />
