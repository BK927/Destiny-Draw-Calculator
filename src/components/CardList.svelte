<script lang="ts">
    import ImageList, { Item, ImageAspectContainer, Supporting, Label } from "@smui/image-list";
    import Button from "@smui/button";
    import CardButton from "./CardButton.svelte";

    export let numOfCards: number;
</script>

<ImageList class="cardlist">
    {#each Array(numOfCards) as _unused, i}
        <Item>
            <CardButton />fr
            <Supporting>
                <Label>Card {i + 1}</Label>
            </Supporting>
        </Item>
    {/each}
</ImageList>

<style lang="scss">
    @use "@material/image-list/index" as image-list;

    :global(.cardlist) {
        @include image-list.standard-columns(5);
        width: 100%;
    }

    @media (max-width: 599px) {
        :global(.cardlist) {
            @include image-list.standard-columns(3);
        }
    }
</style>
