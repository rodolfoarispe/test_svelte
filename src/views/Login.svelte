<script>
  import { createEventDispatcher } from 'svelte';
  import { baseUrl } from '../config';

  let username = '';
  let password = '';
  const dispatch = createEventDispatcher();

  const login = async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      dispatch('login');
    } else {
      alert('Invalid credentials');
    }
  };
</script>

<div class="max-w-sm mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
  <div class="flex flex-col space-y-2">
    <input
      type="text"
      bind:value={username}
      placeholder="Username"
      class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
    <input
      type="password"
      bind:value={password}
      placeholder="Password"
      class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
    <button
      on:click={login}
      class="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      Login
    </button>
  </div>
</div>
  
 