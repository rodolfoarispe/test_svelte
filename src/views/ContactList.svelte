<script>
    import { onMount } from 'svelte';
    import { baseUrl } from '../config';

    import ContactForm from './ContactForm.svelte';
  
    export let contacts = [];
  
    onMount( buscarContactos )

    export async function buscarContactos() {
      console.log('buscando contactos');
      const res = await fetch(`${baseUrl}/api/contacts`);
      contacts = await res.json();
    }

  </script>
  
  <div>
    <h1>Lista de Contactos</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {#each contacts as contact}
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>

  </div>