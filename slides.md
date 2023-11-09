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
  persist: false
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

# My Background

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
hideInToc: false
---

# Why WebRTC?


- 📜 **No TLS Certificate** - no need to have a domain name
- 💻 **Browser** - browser-to-browser compatible

<br>
<br>

More about [WebRTC](https://webrtc.org/)

---
transition: slide-up
---

# Why _Browser_ Rust?

- 1️⃣ **Single Language Stack** - code reuse, no context switching
- ⚒️ **Strongly typed** - easier to manage expanding code base
- ⚙️  **Wasm native** - Rust is the most capable language for Wasm
- 📈 **Growing front-end list** - [Leptos](https://www.leptos.dev/), [Yew](https://yew.rs/), [Dioxus](https://dioxuslabs.com/), [Sycamore](https://sycamore-rs.netlify.app/), [Egui](https://github.com/emilk/egui)


<br>
<br>

<!--
Here is another comment.
-->

---
level: 1
---

# Tale of 3 WebAssemblys

|     |     |     |
| --- | --- | --- |
| 1. | `wasm-bindgen` | builtin `web-sys` access (rust-libp2p-webrtc, webtransport) |
| 2. | `wasm interface types` | runs sandboxed anywhere, wasi/manual IO |
| 3. | `wick` | enables async streams in/out of wasm |

<br><br>

## Since not all `libp2p` is I/O, we can ALSO use #2, #3!

---
level: 1
---


## Build once, run in any libp2p examples:

- 🎥 **Video over Gossipsub** - ffmpeg
- 🔏 **ZK Proofs** - build once, prove anywhere
- 👜 **Wallets** - libp2p connected/backed up wallets

---
level: 1
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/navigation.html)

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Code

Use code snippets and get the highlighting directly![^1]

```ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

<arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->


---
class: px-20
---

# Themes

Slidev comes with powerful theming support. Themes can provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="-t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

Read more about [How to use a theme](https://sli.dev/themes/use.html) and
check out the [Awesome Themes Gallery](https://sli.dev/themes/gallery.html).

---
preload: false
---

# Animations

Animations are powered by [@vueuse/motion](https://motion.vueuse.org/).

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div>

---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block
$$ {1|3|all}
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)

---

# Diagrams

You can create diagrams / graphs from textual descriptions, directly in your Markdown.

<div class="grid grid-cols-4 gap-5 pt-4 -mb-6">

```mermaid {scale: 0.5, alt: 'A simple sequence diagram'}
sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction
```

```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectivness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

```plantuml {scale: 0.7}
@startuml

package "Some Group" {
  HTTP - [First Component]
  [Another Component]
}

node "Other Groups" {
  FTP - [Second Component]
  [First Component] --> FTP
}

cloud {
  [Example 1]
}


database "MySql" {
  folder "This is my folder" {
    [Folder 3]
  }
  frame "Foo" {
    [Frame 4]
  }
}


[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]

@enduml
```

</div>

[Learn More](https://sli.dev/guide/syntax.html#diagrams)

---
src: ./pages/multiple-entries.md
hide: false
---

---
layout: center
class: text-center
---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
