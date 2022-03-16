<script>
    import IconButton from "@smui/icon-button";
    import Button, { Label } from "@smui/button";
    import { fade } from "svelte/transition";
    import Checkbox from "../components/CardCheckBox.svelte";

    export let cardName;
    export let onToggle;
    export let increaseFunc;
    export let decreaseFunc;
    export let cardCount;
    export let checked = false;

    let alertVisible = false;

    function toggleCard() {
        const isAvailable = onToggle();

        if (!isAvailable) {
            alertVisible = true;
            setTimeout(() => (alertVisible = false), 1000);
        }
    }
</script>

<div class="wrapper">
    <p style="text-align: center; width: 100%; height:min-content; overflow: hidden; text-overflow: ellipsis;">{cardName}</p>
    <!-- <pre style="text-align: center; height:min-content; margin 1px 0;">(투입: {maxCardCount}장)</pre> -->
    <Button on:click={toggleCard} style="height:fit-content; padding:0;" variant="raised">
        <Checkbox bind:checked />
        <img style="width: 100%;" src="/images/anime_card2-min.jpg" alt="유희왕 카드" />
    </Button>
    <div style="display:flex; align-items: center;">
        <IconButton class="material-icons" on:click={increaseFunc}>add</IconButton>
        <p>{cardCount}</p>
        <IconButton class="material-icons" on:click={decreaseFunc}>remove</IconButton>
    </div>

    {#if alertVisible}
        <div transition:fade style="background-color: rgba(0, 0, 0, 0.85); color:white; width: 100%; position:absolute; top:50%; text-align:center; transform: translate(0%, -50%);">
            5장을 초과할 수 없습니다
        </div>
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: 100px;
        width: 7vw;
        height: 100%;
        margin: 20px 5px;
        position: relative;
    }
</style>
