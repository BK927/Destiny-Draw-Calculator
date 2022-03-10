<script lang="ts">
    import ImageList, { Item, ImageAspectContainer, Supporting, Label } from "@smui/image-list";
    import Button from "@smui/button";
</script>

<ImageList class="my-image-list-enforce-ratio">
    {#each Array(15) as _unused, i}
        <Item>
            <Button class="card" />
            <Supporting>
                <Label>Image {i + 1}</Label>
            </Supporting>
        </Item>
    {/each}
</ImageList>

<style lang="scss">
    @use "@material/image-list/index" as image-list;

    :global(.card) {
        display: flex;
        min-width: 100px;
        width: 12vw;
        aspect-ratio: 63/88;
        background-image: url("/src/assets/images/anime_card.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        text-align: center;
    }
    :global(.my-image-list-enforce-ratio) {
        @include image-list.standard-columns(5);
        max-width: 680px;
    }

    @media (max-width: 599px) {
        :global(.my-image-list-enforce-ratio) {
            @include image-list.standard-columns(3);
        }
    }
</style>
