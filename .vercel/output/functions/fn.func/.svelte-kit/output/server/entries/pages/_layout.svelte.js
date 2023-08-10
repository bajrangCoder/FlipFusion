import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1jgyqdu_START -->${$$result.title = `<title>FlipFusion Game</title>`, ""}<meta name="description" content="A fun and challenging matching card game"><meta name="keywords" content="matching game, card game, memory game, emoji game, svelte game, online game"><meta name="author" content="Raunak Raj"><meta property="og:title" content="FlipFusion"><meta property="og:description" content="A fun and challenging matching card game"><meta property="og:url" content="https://github.com/bajrangCoder/FlipFusion"><meta property="og:type" content="website"><!-- HEAD_svelte-1jgyqdu_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
