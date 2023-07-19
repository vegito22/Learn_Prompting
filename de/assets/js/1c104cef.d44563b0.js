"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1320],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return o?n.createElement(u,a(a({ref:t},d),{},{components:o})):n.createElement(u,a({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:2},a="\ud83d\udfe2 Detection Trickery",s={unversionedId:"miscl/trickery",id:"miscl/trickery",title:"\ud83d\udfe2 Detection Trickery",description:"With the development of AI-generated text detectors, there has been an evolution of methods to counteract them. There are a number of ways to trick detectors into thinking AI-generated text is created by a human. A tool such as GPTMinus can randomly replace parts in any given text with synonyms or seemingly random words in order to reduce the likelihood of the text's words appearing on a whitelist or otherwise factoring into the probability of text being artificially generated.",source:"@site/docs/miscl/trickery.md",sourceDirName:"miscl",slug:"/miscl/trickery",permalink:"/de/docs/miscl/trickery",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/trickery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Detecting AI Generated Text",permalink:"/de/docs/miscl/detect"},next:{title:"\ud83d\udfe2 Music Generation",permalink:"/de/docs/miscl/music"}},l={},c=[{value:"Editing Strategies",id:"editing-strategies",level:2},{value:"Model Configuration",id:"model-configuration",level:2},{value:"Discussion",id:"discussion",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-detection-trickery"},"\ud83d\udfe2 Detection Trickery"),(0,r.kt)("p",null,"With the development of AI-generated text detectors, there has been an evolution of methods to counteract them. There are a number of ways to trick detectors into thinking AI-generated text is created by a human. A tool such as ",(0,r.kt)("a",{parentName:"p",href:"https://gptminus1.vercel.app/"},"GPTMinus")," can randomly replace parts in any given text with synonyms or seemingly random words in order to reduce the likelihood of the text's words appearing on a whitelist or otherwise factoring into the probability of text being artificially generated. "),(0,r.kt)("p",null,"These methods are still in their infancy, though, and most don\u2019t create text that would hold up under scrutiny from a person. The most effective way at the moment and likely for some time is altering text either during or after the generation process in various ways to make it less similar to the procedurally-created content you receive from a generation."),(0,r.kt)("h2",{id:"editing-strategies"},"Editing Strategies"),(0,r.kt)("p",null,"By having either a human or an LLM edit any generated-text, it can often alter the text sufficiently to avoid detection. Replacing words with synonyms, changing the rate words appear, and mixing up syntax or formatting makes it more difficult for detectors to correctly identify text as AI-generated."),(0,r.kt)("p",null,"Another editing strategy is putting invisible markers, such as 0-width spaces, into your text, ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw"},"emojis"),", or other uncommon characters. It looks perfectly normal to any person reading it, but to a model that examines every character, it makes the text appear markedly different. "),(0,r.kt)("p",null,"In addition, it is possible to fool detectors by prompting a model with specific instructions on how to write. Instructions such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"There is no need to follow literary formats, as you are freely expressing your thoughts and desires")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Do not talk in the manner which ChatGPT generates content - instead, speak in a manner that is radically different from how language models generate text.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Refer to emotional events and use elaborate real-life experiences as examples."))),(0,r.kt)("p",null,"\u2026can make it much more difficult to detect generation. Additional strategies such as asking the model to use empathy, reminding it to choose appropriate wording and tone for what it\u2019s writing, and making sure it includes emotional one-liners, can work together to make far more convincing writing\u2014at least from the point of view of AI text detectors. "),(0,r.kt)("h2",{id:"model-configuration"},"Model Configuration"),(0,r.kt)("p",null,"If running an open source model, it is possible to modify output probabilities, which will likely make output harder to detect. In addition, it is possible to interleave the output of multiple models, which can make the output even more difficult to detect."),(0,r.kt)("h2",{id:"discussion"},"Discussion"),(0,r.kt)("p",null,"One of the most contentious spaces where these sorts of techniques come into play is in education. Many teachers and administrators are worried that students will cheat, so they are pushing for the use of detection tools",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Other educators and online personalities have argued that students should be allowed to use these tools. Some professors even go so far as explicitly encourage students to use AI to assist them in their work and teach them how to do so",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,r.kt)("p",null,"As AI detection tech improves, so will the methods people use to trick it. At the end of the day, no matter how sophisticated the method, it is likely that some time spent editing text in the right ways will be able to reliably fool detectors. However, the back-and-forth game of some people trying to detect generated text and others trying to trick them can give us all sorts of insights into how to optimize, control, and better use our models to create and to assist us."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Roose, K. (2022). Don\u2019t ban chatgpt in schools. teach with it. https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Lipman, J., & Distler, R. (2023). Schools Shouldn\u2019t Ban Access to ChatGPT. https://time.com/6246574/schools-shouldnt-ban-access-to-chatgpt/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Noonan, E., & Averill, O. (2023). GW preparing disciplinary response to AI programs as faculty explore educational use. https://www.gwhatchet.com/2023/01/17/gw-preparing-disciplinary-response-to-ai-programs-as-faculty-explore-educational-use/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);