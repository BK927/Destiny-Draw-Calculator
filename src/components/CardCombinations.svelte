<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import Card from "../components/CardButton.svelte";
    import { cards } from "../utilities/cardsStorage.js";
    import IconButton, { Icon } from "@smui/icon-button";

    export let index: number;

    let cardArr = [];
    let numOfCombinations: number;

    cards.subscribe((value) => {
        cardArr = value;
    });

    function increaseCopy(index) {
        const tempCards = Object.values(cardArr);
        if (tempCards[index]["count"] < 3) {
            tempCards[index]["count"]++;
            cards.set(tempCards);
        }
    }
    function decreaseCopy(index) {
        const tempCards = Object.values(cardArr);
        if (tempCards[index]["count"] > 1) {
            tempCards[index]["count"]--;
            cards.set(tempCards);
        } else {
            tempCards.splice(index, 1);
            cards.set(tempCards);
        }
    }
</script>

{#if cardArr.length > 0}
    <Paper style="margin: 20px; position: relative;">
        <Title>조합 {index}</Title>
        <Content>
            <div class="card-container">
                {#each cardArr as card, i}
                    <Card bind:cardCount={cardArr[i]["count"]} cardName={card.name} onClickFunc={() => removeCard(i)} increaseFunc={() => increaseCopy(i)} decreaseFunc={() => decreaseCopy(i)} />
                {/each}
            </div>
        </Content>
        <IconButton class="material-icons" style="font-size: 1.5rem; position:absolute; top:10px; right:10px;" on:click={() => numOfCombinations--}>close</IconButton>
    </Paper>
{/if}

<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
</style>
