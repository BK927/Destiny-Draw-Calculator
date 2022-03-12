<script>
    import IconButton from "@smui/icon-button";
    import Button, { Label } from "@smui/button";

    export let cardName;
    export let maxCardCount;
    export let onClick;

    let cardCount = 0;
</script>

<div class="wrapper">
    <p style="text-align: center; width: 100%; height:min-content; overflow: hidden; text-overflow: ellipsis; margin: 0;">{cardName}</p>
    <pre style="text-align: center; height:min-content; margin 1px 0;">(투입: {maxCardCount}장)</pre>
    <Button on:click={onClick} style="height:fit-content; padding:0;" variant="raised">
        <img style="width: 100%;" src="/src/assets/images/anime_card2.jpg" alt="유희왕 카드" />
    </Button>
    <div style="display:flex; align-items: center;">
        <IconButton class="material-icons" on:click={() => (cardCount < maxCardCount ? cardCount++ : null)}>add</IconButton>
        <p>{cardCount}</p>
        <IconButton class="material-icons" on:click={() => (cardCount > 0 ? cardCount-- : null)}>remove</IconButton>
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
