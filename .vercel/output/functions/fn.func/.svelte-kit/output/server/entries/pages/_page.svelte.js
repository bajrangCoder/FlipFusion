import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const emoji = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "🥲",
  "🥹",
  "☺️",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🥸",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "🤯",
  "😳",
  "🥵",
  "🥶",
  "😱",
  "😨",
  "😰",
  "😥",
  "😓",
  "🫣",
  "🤗",
  "🫡",
  "🤔",
  "🤭",
  "🤫",
  "🤥",
  "😶",
  "😐",
  "😑",
  "😬",
  "🫨",
  "🫠",
  "🙄",
  "😯",
  "😧",
  "😮",
  "😲",
  "🥱",
  "😴",
  "🤤",
  "😪",
  "😵",
  "🫥",
  "🤐",
  "🥴",
  "🤢",
  "🤮",
  "🤧",
  "😷",
  "🤒",
  "🤕",
  "🤑",
  "🤠",
  "😈",
  "👿",
  "👹",
  "👺",
  "🤡",
  "💩",
  "👻",
  "💀",
  "☠️",
  "👽",
  "👾",
  "🤖",
  "🎃",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾"
];
const foodEmoji = [
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🍍",
  "🥭",
  "🍅",
  "🍆",
  "🥑",
  "🥦",
  "🥒",
  "🌶️",
  "🌽",
  "🥕",
  "🧄",
  "🧅",
  "🥔",
  "🍠",
  "🥐",
  "🥯",
  "🍞",
  "🥖",
  "🥨",
  "🧀",
  "🍖",
  "🍗",
  "🥩",
  "🥓",
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🥪",
  "🍱",
  "🍲",
  "🍛",
  "🍜",
  "🍝",
  "🍠",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🥮",
  "🍡",
  "🥟",
  "🥠",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🧁",
  "🥧",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯"
];
const symbolEmoji = [
  "❤️",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "💔",
  "❣️",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️",
  "✝️",
  "☪️",
  "🕉️",
  "☸️",
  "✡️",
  "🔯",
  "🕎",
  "☯️",
  "☦️",
  "🛐",
  "⛎",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "🆔",
  "⚛️",
  "🉑",
  "☢️",
  "☣️",
  "📴",
  "📳",
  "🈶",
  "🈚",
  "🈸",
  "🈺",
  "🈷️",
  "✴️",
  "🆚",
  "💮",
  "🉐",
  "㊙️",
  "㊗️",
  "🈴",
  "🈵",
  "🈹",
  "🈲",
  "🅰️",
  "🅱️",
  "🆎",
  "🆑",
  "🅾️",
  "🆘",
  "❌",
  "⭕",
  "🛑",
  "⛔",
  "📛",
  "🚫",
  "💯",
  "💢",
  "♨️",
  "🚷",
  "🚯",
  "🚳",
  "🚱",
  "🔞",
  "📵",
  "🚭",
  "❗",
  "❕",
  "❓",
  "❔",
  "‼️",
  "⁉️",
  "🔅",
  "🔆",
  "⚠️",
  "🚸",
  "🔱",
  "⚜️",
  "🔰",
  "♻️",
  "✅",
  "🈯",
  "💹",
  "❇️",
  "✳️",
  "❎",
  "🌐",
  "💠",
  "Ⓜ️",
  "🌀",
  "💤",
  "🏧",
  "🚾",
  "♿",
  "🅿️",
  "🈳",
  "🈂️",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "🚻",
  "🚹",
  "🚺",
  "🚼",
  "🚮",
  "🎦",
  "📶",
  "🈁",
  "🔣",
  "ℹ️",
  "🔤",
  "🔡",
  "🔠",
  "🆖",
  "🆗",
  "🆙",
  "🆒",
  "🆕",
  "🆓",
  "0️⃣",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
  "🔢",
  "#️⃣",
  "*️⃣",
  "▶️",
  "⏸️",
  "⏯️",
  "⏹️",
  "⏺️",
  "⏭️",
  "⏮️",
  "⏩",
  "⏪",
  "⏫",
  "⏬",
  "◀️",
  "🔼",
  "🔽",
  "➡️",
  "⬅️",
  "⬆️",
  "⬇️",
  "🔄",
  "⤴️",
  "⤵️",
  "#️⃣",
  "🔀",
  "🔁",
  "🔂",
  "🔄",
  "🔃",
  "🎵",
  "🎶",
  "➕",
  "➖",
  "➗",
  "✖️",
  "♾️",
  "💲",
  "💱",
  "™️",
  "©️",
  "®️",
  "➰",
  "➿",
  "🔚",
  "🔙",
  "🔛",
  "🔝",
  "🔜",
  "✔️",
  "☑️",
  "🔘",
  "⚪",
  "⚫",
  "🔴",
  "🔵",
  "🔷",
  "🔳",
  "🔲"
];
const animalEmoji = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦢",
  "🦉",
  "🦚",
  "🦜",
  "🦔",
  "🐺",
  "🦝",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🦟",
  "🦗",
  "🕷️",
  "🦂",
  "🦠",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🐙",
  "🦑",
  "🦐",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🦭",
  "🐊",
  "🐆",
  "🐅",
  "🐃",
  "🐂",
  "🐄",
  "🐪",
  "🐫",
  "🐘",
  "🦏",
  "🦍",
  "🦧",
  "🐎",
  "🐖",
  "🐐",
  "🐏",
  "🐑",
  "🐕",
  "🐩",
  "🦮",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🐓",
  "🦃",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🦆",
  "🐦",
  "🦉",
  "🦤",
  "🪶",
  "🦇",
  "🦔",
  "🐗",
  "🐽",
  "🐖",
  "🦏",
  "🐄",
  "🐘",
  "🦍",
  "🦧",
  "🦥",
  "🐨",
  "🦘",
  "🐫",
  "🐪",
  "🐃",
  "🐂",
  "🐮",
  "🐃",
  "🐄",
  "🐏",
  "🐐",
  "🐑",
  "🦙",
  "🦌",
  "🦌",
  "🐕",
  "🐩",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🐓",
  "🦃",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🦆",
  "🐦",
  "🦉",
  "🦤",
  "🪶",
  "🦇",
  "🐁",
  "🐁",
  "🦔",
  "🦔",
  "🐗",
  "🐽",
  "🐖",
  "🦏",
  "🐄",
  "🐘",
  "🦍",
  "🦧",
  "🦥",
  "🐨",
  "🦘",
  "🐫",
  "🐪",
  "🐃",
  "🐂",
  "🐮",
  "🐃",
  "🐄",
  "🐏",
  "🐐",
  "🐑",
  "🦙",
  "🦌",
  "🦌",
  "🐕",
  "🐩",
  "🐕‍🦺"
];
const techImg = [
  "https://img.icons8.com/fluency/48/duolingo-logo.png",
  "https://img.icons8.com/dusk/64/huawei-logo.png",
  "https://img.icons8.com/color/48/bluestacks.png",
  "https://img.icons8.com/fluency/48/apple-app-store.png",
  "https://img.icons8.com/fluency/48/brave-web-browser.png",
  "https://img.icons8.com/fluency/48/chrome.png",
  "https://img.icons8.com/fluency/48/ms-edge-new.png",
  "https://img.icons8.com/fluency/48/opera.png",
  "https://img.icons8.com/fluency/48/virtualbox--v1.png",
  "https://img.icons8.com/fluency/48/among-us.png",
  "https://img.icons8.com/fluency/48/epic-games.png",
  "https://img.icons8.com/fluency/48/gta-5.png",
  "https://img.icons8.com/fluency/48/garena.png",
  "https://img.icons8.com/fluency/48/minecraft-logo.png",
  "https://img.icons8.com/fluency/48/valorant.png",
  "https://img.icons8.com/fluency/48/world-of-tanks.png",
  "https://img.icons8.com/fluency/48/blender-3d.png",
  "https://img.icons8.com/fluency/48/canva.png",
  "https://img.icons8.com/fluency/48/gimp.png",
  "https://img.icons8.com/fluency/48/inshot.png",
  "https://img.icons8.com/fluency/48/discord.png",
  "https://img.icons8.com/fluency/48/telegram-app.png",
  "https://img.icons8.com/fluency/48/whatsapp.png",
  "https://img.icons8.com/fluency/48/visual-studio-code-2019.png",
  "https://img.icons8.com/fluency/48/google-logo.png",
  "https://img.icons8.com/fluency/48/android-studio--v3.png",
  "https://img.icons8.com/fluency/48/instagram-new.png",
  "https://img.icons8.com/fluency/48/twitterx.png",
  "https://img.icons8.com/fluency/48/spotify.png",
  "https://img.icons8.com/fluency/48/youtube-play.png"
];
const programmingImg = [
  "https://img.icons8.com/fluency/48/c-sharp-logo.png",
  "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
  "https://img.icons8.com/fluency/48/typescript--v2.png",
  "https://img.icons8.com/fluency/48/swift.png",
  "https://img.icons8.com/fluency/48/markdown.png",
  "https://img.icons8.com/fluency/48/c-programming.png",
  "https://img.icons8.com/fluency/48/ruby-programming-language.png",
  "https://img.icons8.com/fluency/48/bash.png",
  "https://img.icons8.com/fluency/48/python.png",
  "https://img.icons8.com/fluency/48/css3.png",
  "https://img.icons8.com/fluency/48/angularjs.png",
  "https://img.icons8.com/fluency/48/javascript.png",
  "https://img.icons8.com/fluency/48/node-js.png",
  "https://img.icons8.com/fluency/48/tailwind_css.png",
  "https://img.icons8.com/fluency/48/html-5.png",
  "https://img.icons8.com/fluency/48/php.png",
  "https://img.icons8.com/fluency/48/github.png",
  "https://img.icons8.com/fluency/48/flutter.png",
  "https://img.icons8.com/fluency/48/r-project.png",
  "https://img.icons8.com/fluency/48/java-coffee-cup-logo.png",
  "https://img.icons8.com/fluency/48/atom-editor.png",
  "https://img.icons8.com/fluency/48/nextjs.png"
];
const StartScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPlay } = $$props;
  if ($$props.onPlay === void 0 && $$bindings.onPlay && onPlay !== void 0)
    $$bindings.onPlay(onPlay);
  return `<h1 data-svelte-h="svelte-1r4ermv">FlipFusion game</h1> <button data-svelte-h="svelte-wxouu9">Play</button>`;
});
const PauseScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onResume } = $$props;
  let { onExit } = $$props;
  if ($$props.onResume === void 0 && $$bindings.onResume && onResume !== void 0)
    $$bindings.onResume(onResume);
  if ($$props.onExit === void 0 && $$bindings.onExit && onExit !== void 0)
    $$bindings.onExit(onExit);
  return `<h1 data-svelte-h="svelte-8ugaie">Game paused</h1> <button data-svelte-h="svelte-1peq7a1">Resume</button> <button data-svelte-h="svelte-11zjxph">Exit</button>`;
});
const LostScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onRestart } = $$props;
  let { onBack } = $$props;
  if ($$props.onRestart === void 0 && $$bindings.onRestart && onRestart !== void 0)
    $$bindings.onRestart(onRestart);
  if ($$props.onBack === void 0 && $$bindings.onBack && onBack !== void 0)
    $$bindings.onBack(onBack);
  return `<div><h1 data-svelte-h="svelte-9zsli8">You lost! 💩</h1> <button data-svelte-h="svelte-1lb4upg">Play again</button> <button style="margin-top: 1.4rem;" data-svelte-h="svelte-ujemmr">Back</button> </div>`;
});
const WonScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPlay } = $$props;
  let { onBack } = $$props;
  if ($$props.onPlay === void 0 && $$bindings.onPlay && onPlay !== void 0)
    $$bindings.onPlay(onPlay);
  if ($$props.onBack === void 0 && $$bindings.onBack && onBack !== void 0)
    $$bindings.onBack(onBack);
  return `<div><h1 data-svelte-h="svelte-16cta5p">You won! 🎉</h1> <button data-svelte-h="svelte-l4ejx9">Play again</button> <button style="margin-top: 1.4rem;" data-svelte-h="svelte-ujemmr">Back</button> </div>`;
});
const SettingsMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".settings-menu.svelte-vjlnyc{position:absolute;top:2.2rem;right:1.5rem;background-color:var(--bg-2);box-shadow:0 2px 6px rgba(0, 0, 0, 0.1);padding:1rem;z-index:2;border-radius:10px;width:100%;min-width:55vw;transform-origin:top right;transition:transform 0.3s ease-in-out;transform:scale(0);opacity:0}.open.svelte-vjlnyc{transform:scale(1);opacity:1}hr.svelte-vjlnyc{border:none;border-bottom:1px solid hsl(220, 27.2%, 30.4%);margin-bottom:0.6rem}table.svelte-vjlnyc{width:100%}th.svelte-vjlnyc{text-align:left;padding:0.5rem 0;font-size:1.2rem}td.svelte-vjlnyc{padding:0.5rem 0}select.svelte-vjlnyc{width:100%;padding:0.25rem;color:inherit;background:none;border-radius:8px;border:none;text-transform:uppercase;cursor:pointer;font-weight:900;outline:none;border:1px solid hsl(220, 27.2%, 30.4%);transition:border 0.3s ease;&:hover {\n			border: 1px solid var(--border);\n		}}p.svelte-vjlnyc{text-align:center;font-weight:100;font-size:0.8rem;color:var(--pulse)}",
  map: null
};
const SettingsMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { levels } = $$props;
  let { currentLevel } = $$props;
  let { onChangeLevel } = $$props;
  let { cardModes } = $$props;
  let { currentCardMode } = $$props;
  let { onChangeCardMode } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.levels === void 0 && $$bindings.levels && levels !== void 0)
    $$bindings.levels(levels);
  if ($$props.currentLevel === void 0 && $$bindings.currentLevel && currentLevel !== void 0)
    $$bindings.currentLevel(currentLevel);
  if ($$props.onChangeLevel === void 0 && $$bindings.onChangeLevel && onChangeLevel !== void 0)
    $$bindings.onChangeLevel(onChangeLevel);
  if ($$props.cardModes === void 0 && $$bindings.cardModes && cardModes !== void 0)
    $$bindings.cardModes(cardModes);
  if ($$props.currentCardMode === void 0 && $$bindings.currentCardMode && currentCardMode !== void 0)
    $$bindings.currentCardMode(currentCardMode);
  if ($$props.onChangeCardMode === void 0 && $$bindings.onChangeCardMode && onChangeCardMode !== void 0)
    $$bindings.onChangeCardMode(onChangeCardMode);
  $$result.css.add(css$1);
  return `<div class="${["settings-menu svelte-vjlnyc", open ? "open" : ""].join(" ").trim()}"><h3 data-svelte-h="svelte-1qq2p5h">Settings</h3> <hr class="svelte-vjlnyc"> <table class="svelte-vjlnyc"><tr><th class="svelte-vjlnyc" data-svelte-h="svelte-1fs0e04">Level</th> <td class="svelte-vjlnyc"><select class="svelte-vjlnyc">${each(levels, (level) => {
    return `<option${add_attribute("value", level.label, 0)} ${level.label === currentLevel.label ? "selected" : ""}>${escape(level.label)}</option>`;
  })}</select></td></tr> <tr><th class="svelte-vjlnyc" data-svelte-h="svelte-1p86ump">Card Mode</th> <td class="svelte-vjlnyc"><select class="svelte-vjlnyc">${each(cardModes, (mode) => {
    return `<option${add_attribute("value", mode.label, 0)} ${mode.label === currentCardMode.label ? "selected" : ""}>${escape(mode.label)}</option>`;
  })}</select></td></tr></table> <hr class="svelte-vjlnyc"> <p class="svelte-vjlnyc" data-svelte-h="svelte-1xd1c18">Developed by Raunak Raj</p> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".cards.svelte-168eug8{display:grid;gap:0.4rem;@media (max-width: 768px) {\n			grid-template-columns: repeat(auto-fill, minmax(calc(50% - 0.4rem), 1fr));\n			grid-template-rows: auto;\n		}}.card.svelte-168eug8{height:14vw;width:14vw;background-color:var(--bg-2);transition:transform 0.3s ease-out;transform-style:preserve-3d;display:flex;justify-content:center;align-items:center;font-size:4rem;@media (max-width: 768px) {\n			font-size: 2rem; /* Adjust the font size for mobile */\n		};&.selected {\n			border: 0.3vw solid var(--border); /* Adjust border thickness */\n		};&.flip {\n			transform: rotateY(180deg);\n			pointer-events: none;\n		};& .back {\n			position: absolute;\n			inset: 0;\n			display: grid;\n			place-content: center;\n			backface-visibility: hidden;\n			transform: rotateY(180deg);\n		};& .match {\n			transition: opacity 0.3s ease-out;\n			opacity: 0.4;\n			overflow: hidden; /* Prevent text from going outside */\n		}}.timer.svelte-168eug8{transition:color 0.3s ease}.pulse.svelte-168eug8{color:var(--pulse);animation:svelte-168eug8-pulse 1s infinite ease;transform-origin:center}@keyframes svelte-168eug8-pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}.settings-container.svelte-168eug8{position:absolute;top:1rem;right:1rem}.settings-button.svelte-168eug8{font-size:1rem;padding:0.5rem 1rem;background-color:var(--bg-2);color:white;border:none;cursor:pointer;transition:background-color 0.3s ease}.settings-button.svelte-168eug8:hover{background-color:var(--border)}",
  map: null
};
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const difficultyLevels = [
    { label: "Very Easy", size: 8, time: 120 },
    { label: "Easy", size: 16, time: 90 },
    { label: "Medium", size: 20, time: 60 },
    { label: "Hard", size: 27, time: 45 },
    { label: "Insane", size: 33, time: 40 }
  ];
  const cardMode = [
    { label: "Emoji", value: emoji },
    { label: "Food", value: foodEmoji },
    { label: "Symbol", value: symbolEmoji },
    { label: "Animal", value: animalEmoji },
    { label: "Tech", value: techImg },
    { label: "Coding", value: programmingImg }
  ];
  let selectedLevel = difficultyLevels[1];
  let selectedCardMode = cardMode[0];
  let state = "start";
  let size = selectedLevel.size;
  let grid = createGrid();
  let maxMatches = grid.length / 2;
  let selected = [];
  let matches = [];
  let timerId = null;
  let time = selectedLevel.time;
  let rows = Math.ceil(selectedLevel.size / 5);
  let columns = Math.ceil(selectedLevel.size / rows);
  function changeDifficulty(level) {
    selectedLevel = level;
    resetGame();
  }
  function changeCardMode(mode) {
    selectedCardMode = mode;
    resetGame();
  }
  function createGrid() {
    let cards = /* @__PURE__ */ new Set();
    let maxSize = size / 2;
    while (cards.size < maxSize) {
      const randomIndex = Math.floor(Math.random() * selectedCardMode.value.length);
      cards.add(selectedCardMode.value[randomIndex]);
    }
    return shuffle([...cards, ...cards]);
  }
  function startGameTimer() {
    function countdown() {
      state !== "paused" && (time -= 1);
    }
    timerId = setInterval(countdown, 1e3);
  }
  function matchCards() {
    const [first, second] = selected;
    if (grid[first] === grid[second]) {
      matches = matches.concat(grid[first]);
    }
    setTimeout(() => selected = [], 300);
  }
  function resetGame() {
    timerId && clearInterval(timerId);
    grid = createGrid();
    maxMatches = grid.length / 2;
    selected = [];
    matches = [];
    timerId = null;
    time = selectedLevel.time;
  }
  function gameWon() {
    state = "won";
    resetGame();
  }
  function gameLost() {
    state = "lost";
    resetGame();
  }
  let settingsOpen = false;
  $$result.css.add(css);
  {
    {
      size = selectedLevel.size;
      time = selectedLevel.time;
      maxMatches = grid.length / 2;
      rows = Math.ceil(size / 5);
      columns = Math.ceil(size / rows);
      grid = createGrid();
    }
  }
  {
    if (state === "playing") {
      !timerId && startGameTimer();
    }
  }
  selected.length === 2 && matchCards();
  maxMatches === matches.length && gameWon();
  time === 0 && gameLost();
  return `<div class="settings-container svelte-168eug8"><button class="settings-button svelte-168eug8" data-svelte-h="svelte-tauc3p">Settings</button> ${validate_component(SettingsMenu, "SettingsMenu").$$render(
    $$result,
    {
      open: settingsOpen,
      levels: difficultyLevels,
      currentLevel: selectedLevel,
      onChangeLevel: changeDifficulty,
      cardModes: cardMode,
      currentCardMode: selectedCardMode,
      onChangeCardMode: changeCardMode
    },
    {},
    {}
  )}</div> ${state === "start" ? `${validate_component(StartScreen, "StartScreen").$$render($$result, { onPlay: () => state = "playing" }, {}, {})}` : `${state === "paused" ? `${validate_component(PauseScreen, "PauseScreen").$$render(
    $$result,
    {
      onResume: () => state = "playing",
      onExit: () => state = "start"
    },
    {},
    {}
  )}` : `${state === "playing" ? `<h1 class="${["timer svelte-168eug8", time <= 10 ? "pulse" : ""].join(" ").trim()}">${escape(time)}</h1> <div class="cards svelte-168eug8" style="${"grid-template-columns: repeat(" + escape(columns, true) + ", 1fr); grid-template-rows: repeat(" + escape(rows, true) + ", 1fr);"}">${each(grid, (card, cardIndex) => {
    let isSelected = selected.includes(cardIndex), isSelectedOrMatch = selected.includes(cardIndex) || matches.includes(card), match = matches.includes(card);
    return `   <button class="${[
      "card svelte-168eug8",
      (isSelected ? "selected" : "") + " " + (isSelectedOrMatch ? "flip" : "")
    ].join(" ").trim()}" ${isSelectedOrMatch ? "disabled" : ""}><div class="${["back", match ? "match" : ""].join(" ").trim()}">${selectedCardMode.label === "Tech" || selectedCardMode.label === "Coding" ? `<img${add_attribute("src", card, 0)} alt="loading">` : `${escape(card)}`}</div> </button>`;
  })}</div> <button style="margin-top: 1.4rem;" data-svelte-h="svelte-1s286b7">Pause</button>` : `${state === "lost" ? `${validate_component(LostScreen, "LostScreen").$$render(
    $$result,
    {
      onRestart: () => state = "playing",
      onBack: () => state = "start"
    },
    {},
    {}
  )}` : `${state === "won" ? `${validate_component(WonScreen, "WonScreen").$$render(
    $$result,
    {
      onPlay: () => state = "playing",
      onBack: () => state = "start"
    },
    {},
    {}
  )}` : ``}`}`}`}`}`;
});
export {
  Page as default
};
