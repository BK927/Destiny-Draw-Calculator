<script lang="ts">
    import Button from "@smui/button";
    import TopAppBar, { Row, Section, Title, AutoAdjust, TopAppBarComponentDev } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import { Label, Icon } from "@smui/common";
    import { Svg } from "@smui/common/elements";
    import { mdiMenu, mdiLightbulbOn, mdiLightbulb } from "@mdi/js";

    let topAppBar: TopAppBarComponentDev;

    const lightTheme = false;
    // let lightTheme = typeof window === "undefined" || window.matchMedia("(prefers-color-scheme: light)").matches;
    // function switchTheme() {
    //     lightTheme = !lightTheme;
    //     let themeLink = document.head.querySelector<HTMLLinkElement>("#theme");
    //     if (!themeLink) {
    //         themeLink = document.createElement("link");
    //         themeLink.rel = "stylesheet";
    //         themeLink.id = "theme";
    //     }
    //     themeLink.href = `/smui${lightTheme ? "" : "-dark"}.css`;
    //     document.head.querySelector<HTMLLinkElement>('link[href="/smui-dark.css"]')?.insertAdjacentElement("afterend", themeLink);
    // }
</script>

<TopAppBar class="transparent-bar" bind:this={topAppBar} variant="standard">
    <Row>
        <Section>
            <IconButton class="material-icons">
                <Icon component={Svg} viewBox="0 0 24 24">
                    <path fill={lightTheme ? "#424242" : "#FFF"} d={mdiMenu} />
                </Icon>
            </IconButton>
        </Section>
        <!-- <Section align="end" toolbar>
            <IconButton aria-label="light-switch" on:click={switchTheme} toggle>
                <Icon component={Svg} viewBox="0 0 24 24" on>
                    <path fill={lightTheme ? "#424242" : "#FFF"} d={mdiLightbulb} />
                </Icon>
                <Icon component={Svg} viewBox="0 0 24 24">
                    <path fill={lightTheme ? "#424242" : "#FFF"} d={mdiLightbulbOn} />
                </Icon>
            </IconButton>
        </Section> -->
    </Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
    <slot />
</AutoAdjust>

<style>
    :global(html, body) {
        width: 100%;
        max-width: 100%;
    }
    :global(.transparent-bar) {
        background-color: transparent;
    }
</style>
