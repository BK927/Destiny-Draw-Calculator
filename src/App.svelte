<script lang="ts">
    <link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />;
    <link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link
  rel="stylesheet"
  href="/smui-dark.css"
  media="screen and (prefers-color-scheme: dark)"
/>
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    let deckInput = "";
    let deckNum = "";

    function inputDeckNum(event) {
        if (isNaN(deckInput)) {
            deckInput = deckNum;
        } else {
            deckNum = deckInput;
        }
        console.log("called");
    }
</script>

<main>
    <div>
        <div>
            <Textfield on:input={inputDeckNum} variant="outlined" bind:value={deckInput} label="Outlined">
                <HelperText persistent slot="helper">Helper Text</HelperText>
            </Textfield>

            <pre class="status">Value: {deckNum}</pre>
        </div>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
        border-radius: 28px 0 0 28px;
        width: 28px;
    }
    * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
        border-radius: 0 28px 28px 0;
    }
    * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
        max-width: calc(100% - 28px * 2);
    }
    * :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating) .mdc-floating-label) {
        left: 16px;
    }
    * :global(.shaped-outlined + .mdc-text-field-helper-line) {
        padding-left: 32px;
        padding-right: 28px;
    }
</style>
