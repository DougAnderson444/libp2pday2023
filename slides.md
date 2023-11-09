---
theme: default 
background: ./rust-libp2p.jpeg
favicon: ./favicon.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Lab Week 2023 - Libp2p Day
  Libp2p ❤️  wasm

  [Slides](https://github.com/DougAnderson444/libp2pday2023)
drawings:
  persist: true
transition: slide-up
title: Lab Week 2023 - Libp2p Day
mdc: true
hideInToc: true
---

<br/>
<br/>
<br/>

<div class="text-6xl drop-shadow-[0_1px_12px_rgba(255,0,0,0.8)]">Libp2p ❤️ wasm</div>

<div class="pt-12">

### @DougAnderson444

    Libp2p Day 

    Lab Week 2023

</div>

<div class="abs-br m-6 flex gap-2">
    <!-- Open link to https://github.com/DougAnderson444/libp2pday2023/edit/master/slides.md -->
  <button  title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">

  <a href="https://github.com/DougAnderson444/libp2pday2023/edit/master/slides.md" target="_blank">
    <carbon:edit />
            </a>
  </button>
  <a href="https://github.com/DougAnderson444/libp2pday2023" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
 *{
    @apply drop-shadow-[0_1px_12px_rgba(255,0,0,0.8)];
}
</style>

---
layout: default
hideInToc: true
---

# Table of contents

<Toc minDepth="1" maxDepth="1"></Toc>

---
---

# Background

### In search of decentralized data pointers

```mermaid {theme: 'base', scale: 1.2}
  gitGraph LR:
    commit id: "Engineering"
    commit id: "Ex-Military"
    commit id: "Address Unknown" type: REVERSE  tag: "Missed Mail"
    branch "dweb"
    checkout "dweb"
    commit id: "Hypercore"
    commit id: "IPFS"
    commit id: "IPNS"
    checkout "dweb"
    commit id: "IPLD/DAG"
    commit id: "libp2p"
    branch "languages"
    commit id: "Rust"
    commit id: "Wasm"
```

* We need to be able to onboard people in the browser!

---
layout: image-right
image: ./webrtc.jpeg
---

# Why WebRTC?


- 📜 **No TLS Certificate** - no need to have a domain name
- 💻 **Browser** - browser-to-browser compatible

<div class="border rounded-xl text-center shadow-lg p-2">

```mermaid {scale: 0.9}
graph
B[Network] ---|WebRTC| Home
Home ---|WebRTC| D[Browser]
Home ---|WebRTC| E[Browser]
```

</div>

<Arrow x1="220" y1="460" x2="270" y2="460" />
<Arrow x1="270" y1="460" x2="220" y2="460" />

More about [WebRTC](https://webrtc.org/)


<!--
When I first experimented with libp2p I discovered that not all Transports are created equal, and if you wanted to deploy outside of localhost, a TLS certificate from a domain was needed. Kind of puts damper on anything run by users at home. However, this was not the case with WebRTC.
-->

---
transition: slide-up
---

# Why _Browser_ Rust?

- 1️⃣ **Single Language Stack** - code reuse, no context switching
- ⚒️ **Strongly typed** - easier to manage expanding code base
- ⚙️  **Wasm native** - Rust is the most capable language for Wasm
- 📈 **Growing front-end list** - [Leptos](https://www.leptos.dev/), [Yew](https://yew.rs/), [Dioxus](https://dioxuslabs.com/), [Sycamore](https://sycamore-rs.netlify.app/), [Egui](https://github.com/emilk/egui)
- 📚 **Crates** - Many cryto libraries available in Rust


|  | ☕  | 🦀 | 
| - | --- | --- |
| Browser Crates Use | JS bindgen | Rust |
| Networking | JS | Rust* |
| Front-end | JS | Rust  |
| Back-end | Rust/Go/JS   | Rust   |

<br>

<!--
Isn't Rust a systems level language?
-->

---
level: 1
---

# Varieties of WebAssembly

|     | Name| IO Bindings    | Usage |
| --- | --- | --- | --- |
| 1. | [`wasm-bindgen`](https://rustwasm.github.io/docs/wasm-bindgen/introduction.html) | builtin: [`web-sys`](https://rustwasm.github.io/wasm-bindgen/examples/dom.html) & [`js-sys`](https://docs.rs/js-sys/latest/js_sys/) | rust-libp2p webrtc, webtransport |
| 2. | [`wasm interface types`](https://github.com/bytecodealliance/wit-bindgen) | WASI & user defined | runs sandboxed sync code "anywhere" |
| 3. | [`wasm-rs`](https://github.com/WasmRS/wasmrs-rust) / [`wick`](https://candle.dev/docs/wick/) | async reactive streams | Streaming (Video over Gossipsub?) |
| 4. | [`ipvm`]()

<br><br>

Since not all `libp2p` is I/O, we can ALSO use #2, #3!

---
level: 1
---

# Why Wasm Components? Code reuse.

<div class="flex flex-row">
<div class="flex-grow">

```mermaid {scale: 1}
graph TD
A[crates] --> B["Wasm Components \n (IPNS, Request/Response, Video over Gossipsub, etc)" ]
B --> C[web]
B --> D[Go]
B --> E[Node]
B --> F[WASI]
B --> Next 
C & D & E & F & Next --> G[libp2p]
```
</div>

<div class="flex-0">
    <Tweet id="1721877770681057737" scale="0.8" />
</div>
</div>

---

# Build once, run in any libp2p examples:

Some \[unimplemented\] ideas:

- 🎥 **Video over Gossipsub** - ffmpeg encoding/decoding
- 🔏 **Proof Systems** - build once, prove from any libp2p node
- 👜 **Wallets** - libp2p connected/backed up wallets

## Imagine being able to pull functionality off the shelf and plug it into your lib2p app!

---
layout: center
class: text-center
---

# Let's Build Networked Composable Web 

[https://github.com/DougAnderson444](https://github.com/DougAnderson444) 

[doug@peerpiper.io](mailto:doug@peerpiper.io) 

𝕏 [@DougAnderson444](https://twitter.com/DougAnderson444/) 

