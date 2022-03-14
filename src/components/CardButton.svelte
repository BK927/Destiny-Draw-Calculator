<script>
    import IconButton from "@smui/icon-button";
    import Button, { Label } from "@smui/button";
    import Checkbox from "../components/CardCheckBox.svelte";

    export let cardName;
    export let onClickFunc;
    export let increaseFunc;
    export let decreaseFunc;
    export let cardCount;

    export let checked = false;
</script>

<div class="wrapper">
    <p style="text-align: center; width: 100%; height:min-content; overflow: hidden; text-overflow: ellipsis;">{cardName}</p>
    <!-- <pre style="text-align: center; height:min-content; margin 1px 0;">(투입: {maxCardCount}장)</pre> -->
    <Button on:click={onClickFunc} style="height:fit-content; padding:0;" variant="raised">
        <Checkbox bind:checked />
        <img style="width: 100%;" src="/images/anime_card2-min.jpg" alt="유희왕 카드" />
    </Button>
    <div style="display:flex; align-items: center;">
        <IconButton class="material-icons" on:click={increaseFunc}>add</IconButton>
        <p>{cardCount}</p>
        <IconButton class="material-icons" on:click={decreaseFunc}>remove</IconButton>
    </div>
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
    }
</style>
