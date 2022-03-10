<script lang="ts">
    import Button, { Label, Icon } from "@smui/button";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import CardList from "../components/CardList.svelte";

    let deckInput = "";
    let deckNum = "";

    $: if (isNaN(deckInput)) {
        deckInput = deckNum;
    } else {
        deckNum = deckInput;
    }
</script>

<div>
    <Textfield variant="outlined" bind:value={deckInput} label="덱 매수">
        <HelperText persistent slot="helper">Helper Text</HelperText>
    </Textfield>

    <pre class="status">덱 매수: {deckNum}</pre>
</div>
<CardList />
