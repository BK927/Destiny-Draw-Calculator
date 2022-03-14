<script lang="ts">
    import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
    import Menu, { MenuComponentDev } from "@smui/menu";
    import List, { Item, Separator, Text } from "@smui/list";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import Combination from "../components/CardCombinations.svelte";
    import IconButton from "@smui/icon-button";
    import { cards } from "../utilities/cardsStorage.js";

    let deckNum: number = 40;
    let cardNum: number = 1;
    let numOfCombinations = 1;
    let nameOfCard: string = "";
    let menu: MenuComponentDev;
    let cardArr;

    cards.subscribe((value) => {
        cardArr = value;
    });

    $: if (cardArr.length <= 0) {
        numOfCombinations = 1;
    }

    function addCard() {
        if (!!nameOfCard) {
            cards.set(cardArr.concat({ name: nameOfCard, count: cardNum }));
        }
    }
</script>

<div class="wrapper">
    <div>
        <Textfield variant="outlined" bind:value={deckNum} type="number" label="덱 매수" style="width: 100%;" suffix="장" input$pattern="\[0-9]" required>
            <HelperText slot="helper">40 ~ 60장이어야 합니다.</HelperText>
        </Textfield>
    </div>
    <Textfield variant="outlined" bind:value={nameOfCard} label="추가할 카드 이름" on:keypress={(event) => (event.key === "Enter" ? addCard() : null)} />

    <Group variant="raised">
        <Button on:click={addCard} style="height: 56px;" variant="raised">
            <Label>카드 추가</Label>
        </Button>
        <div use:GroupItem>
            <Button on:click={() => menu.setOpen(true)} variant="raised" style="height: 56px; padding: 0; min-width: 30px;">
                <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
            </Button>
            <Menu bind:this={menu} anchorCorner="TOP_LEFT">
                <List>
                    <Item on:SMUI:action={() => (cardNum = 1)}>
                        <Text>1장</Text>
                    </Item>
                    <Item on:SMUI:action={() => (cardNum = 2)}>
                        <Text>2장</Text>
                    </Item>
                    <Item on:SMUI:action={() => (cardNum = 3)}>
                        <Text>3장</Text>
                    </Item>
                </List>
            </Menu>
        </div>
    </Group>
</div>
{#each Array(numOfCombinations) as _, i}
    <Combination index={i + 1} />
{/each}
<div class="wrapper">
    <IconButton class="material-icons" style="font-size: 2.5rem; width:auto;" on:click={() => numOfCombinations++}>add_circle_outline</IconButton>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        margin: 8rem;
        width: auto;
    }
    .wrapper > :global(*) {
        margin: 7px;
    }
    @media (max-width: 599px) {
        .wrapper {
            flex-wrap: wrap;
            margin: 5%;
        }
        .wrapper > :global(*) {
            width: 100%;
        }
    }
</style>
