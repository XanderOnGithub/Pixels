<script>
    import { loginWithGoogle } from "$lib/auth";
    import PixelGrid from "../components/pixelGrid.svelte";
</script>

<button on:click={loginWithGoogle}>Login with Google</button>

<PixelGrid />
