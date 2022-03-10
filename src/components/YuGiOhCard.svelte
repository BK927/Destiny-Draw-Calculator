<script>
    import Button, { Label } from "@smui/button";

    export let name;
    export let copies;
</script>

<div class="card"><span>{name + " × " + copies}</span></div>

<style>
    .card {
        display: flex;
        min-width: 200px;
        width: 12vw;
        aspect-ratio: 63/88;
        background-image: url("/src/assets/images/card.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        text-align: center;
    }
    span {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        margin: auto;
    }
</style>
