<script>
    import { createEventDispatcher } from 'svelte';
  
    let username = '';
    let password = '';
    const dispatch = createEventDispatcher();
  
    const login = async () => {
      const res = await fetch('/api/auth/login', {
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
  
  <div>
    <input type="text" bind:value={username} placeholder="Username" class="input-field" />
    <input type="password" bind:value={password} placeholder="Password" class="input-field" />
    <button on:click={login} class="btn">Login</button>
  </div>
  
 