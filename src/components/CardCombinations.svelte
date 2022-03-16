<script lang="ts">
    import Paper, { Title, Subtitle, Content } from "@smui/paper";
    import Card from "../components/CardButton.svelte";
    import { cards } from "../utilities/cardsStorage.js";
    import binomial from "../utilities/binomial.js";
    import IconButton, { Icon } from "@smui/icon-button";

    export let index: number;
    export let numOfCombinations: number;

    let cardArr = [];

    cards.subscribe((value) => {
        cardArr = value;
    });

    function increaseCopy(i) {
        const tempCards = Object.values(cardArr);
        if (tempCards[i]["count"] < 3) {
            tempCards[i]["count"]++;
            cards.set(tempCards);
        }
    }

    function decreaseCopy(i) {
        const tempCards = Object.values(cardArr);
        if (tempCards[i]["count"] > 1) {
            tempCards[i]["count"]--;
            cards.set(tempCards);
        } else {
            tempCards.splice(i, 1);
            cards.set(tempCards);
        }
    }

    function toggleCard(i) {
        let cardCount = 0;
        cardArr.forEach((item) => {
            if (item["combinationArr"][index]) {
                cardCount++;
            }
        });
        if (cardCount >= 5 && !cardArr[i]["combinationArr"][index]) {
            return false;
        }

        const temp = Object.values(cardArr);
        temp[i]["combinationArr"][index] = !temp[i]["combinationArr"][index];
        cards.set(temp);

        return true;
    }

    function removeCombination() {
        const temp = Object.values(cardArr).map((item) => {
            item["combinationArr"].splice(index, 1);
            return item;
        });
        numOfCombinations--;
        cards.set(temp);
    }

    function countCheckedCards() {
        let count = 0;
        console.log("countCheckedCards");
        cardArr.forEach((item) => {
            if (item["combinationArr"][index]) {
                count = count + item["count"];
            }
        });

        return count;
    }
</script>

{#if cardArr.length > 0}
    <Paper style="margin: 20px; position: relative;">
        <Title>조합 {index + 1}</Title>
        <Subtitle>확률: {countCheckedCards()}</Subtitle>
        <Content>
            <div class="card-container">
                {#each cardArr as card, i}
                    <Card
                        bind:cardCount={cardArr[i]["count"]}
                        bind:checked={cardArr[i]["combinationArr"][index]}
                        onToggle={() => toggleCard(i)}
                        cardName={card.name}
                        increaseFunc={() => increaseCopy(i)}
                        decreaseFunc={() => decreaseCopy(i)}
                    />
                {/each}
            </div>
        </Content>
        <IconButton class="material-icons" style="font-size: 1.5rem; position:absolute; top:10px; right:10px;" on:click={() => removeCombination()}>close</IconButton>
    </Paper>
{/if}

<style>
    .card-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
</style>
