<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import Card from "../components/CardButton.svelte";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";
    import AutoAdjust from "@smui/top-app-bar/src/AutoAdjust.svelte";

    let clicked = 0;

    export let cards = [];
    let numOfCombinations;

    function removeCard(index) {
        const tempCards = Object.values(cards);
        tempCards.splice(index, 1);
        cards = tempCards;
    }
</script>

{#if cards.length > 0}
    <Paper style="margin: 20px;">
        <Title>조합 1</Title>
        <Content>
            <div class="card-container">
                {#each cards as card, i}
                    <Card cardName={card.name} maxCardCount={card.count} onClick={() => removeCard(i)} />
                {/each}
            </div>
        </Content>
    </Paper>
{/if}

<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
</style>
