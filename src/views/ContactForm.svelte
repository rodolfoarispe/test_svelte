<script>
  import "../assets/global.css";
  import { baseUrl } from "../config";

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const handleChange = () => { 
      dispatch('NuevoContacto');
  }

  export let contact = {}; // Initial contact data, if editing
  export let isEditing = false;

  let name = contact.name || "";
  let email = contact.email || "";

  async function handleSubmit() {
    const url = `${baseUrl}/api/contacts`;

    const data = {
      name,
      email,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);

      // Check for successful response
      if (!response.ok) {
        throw new Error(
          `Error creating/updating contact: ${response.statusText}`
        );
      }

      // Handle success (e.g., clear form, show notification)
      console.log("Contact created/updated successfully!");
      handleChange();
      name = "";
      email = "";
    } catch (error) {
      console.error("Error:", error);
      // Handle errors (e.g., show an error message)
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="flex flex-col space-y-2">
  <label for="name" class="text-gray-700 font-medium">Name:</label>
  <input
    id="name"
    type="text"
    bind:value={name}
    class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
  />

  <label for="email" class="text-gray-700 font-medium">Email:</label>
  <input
    id="email"
    type="email"
    bind:value={email}
    class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:ring-1"
  />

  <button
    type="submit"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {isEditing ? "Update" : "Create"}
  </button>
</form>
