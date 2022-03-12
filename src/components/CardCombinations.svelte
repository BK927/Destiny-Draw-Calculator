<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import Card from "../components/CardButton.svelte";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";

    let clicked = 0;

    export let cards = [];
    let numOfCombinations;
</script>

{#if cards.length > 0}
    <Paper>
        <Title>조합 1</Title>
        <Content>
            <div class="card-container">
                {#each cards as card, i}
                    <Card cardName={card.name} maxCardCount={card.count} />
                {/each}
            </div>
        </Content>
    </Paper>
{/if}

<style>
    .card-container {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
</style>
