<script lang="ts">
    import ImageList, { Item, ImageAspectContainer, Image, Supporting, Label } from "@smui/image-list";
</script>

<ImageList class="my-ls" withTextProtection>
    {#each Array(15) as _unused, i}
        <Item style="width:200px;display:inline-block; margin: 3px">
            <div>
                <ImageAspectContainer>
                    <Image src="https://place-hold.it/190x238?text=4x5&fontsize=23" alt="Image {i + 1}" />
                </ImageAspectContainer>
                <Supporting>
                    <Label>Image {i + 1}</Label>
                </Supporting>
            </div>
        </Item>
    {/each}
</ImageList>

<style lang="scss">
    @use "sass:math";
    @use "@material/image-list/index" as image-list;

    :global(.my-ls) {
        @include image-list.standard-columns(5);
        @include image-list.aspect(math.div(63, 88));
    }

    @media (max-width: 599px) {
        :global(.my-ls) {
            @include image-list.standard-columns(3);
        }
    }
</style>
