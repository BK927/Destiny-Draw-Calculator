<script lang="ts">
    import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
    import Menu, { MenuComponentDev } from "@smui/menu";
    import List, { Item, Separator, Text } from "@smui/list";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import CardList from "../components/CardList.svelte";

    let deckInput: string = "";
    let deckNum: number = 0;
    let cardNum: number = 0;
    let menu: MenuComponentDev;

    $: if (isNaN(deckInput)) {
        deckInput = <string>deckNum;
    } else {
        deckNum = <number>deckInput;
    }
</script>

<div>
    <Textfield variant="outlined" bind:value={deckInput} label="덱 매수">
        <HelperText persistent slot="helper">Helper Text</HelperText>
    </Textfield>
    <Textfield variant="outlined" label="추가할 카드 이름" />

    <Group variant="raised">
        <Button on:click={() => console.log("추가")} variant="raised">
            <Label>Do the thing</Label>
        </Button>
        <div use:GroupItem>
            <Button on:click={() => menu.setOpen(true)} variant="raised" style="padding: 0; min-width: 36px;">
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

    <pre class="status">덱 매수: {deckNum}</pre>
</div>

<CardList bind:numOfCards={deckNum} />
