<script lang="ts">
    import Paper, { Title, Content } from "@smui/paper";
    import Card from "../components/CardButton.svelte";
    import Button, { Label } from "@smui/button";
    import IconButton, { Icon } from "@smui/icon-button";

    let clicked = 0;

    export let cards = [];
</script>

{#each cards as card, i}
    <Paper>
        <Title>조합 {i + 1}</Title>
        <Content>
            <div class="card-container">
                <Card cardName={card.name} maxCardCount={card.count} />
            </div>
        </Content>
    </Paper>
{/each}

<style>
</style>
