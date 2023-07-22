"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8178],{8514:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>L,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var n=o(7462),t=(o(7294),o(3905));const i=o.p+"assets/images/knowledge_generation-197796038929771b12d9636d5328f69a.webp",s=o.p+"assets/images/gen_k_p1-d66e2a37226275a4e6cbd4e8ec46feca.webp",l=o.p+"assets/images/recitation-671b162f9b90e2dabfa1c00a2b5e3e66.webp";var r=o(9145);const d={sidebar_position:7},c="\ud83d\udfe1 Generated Knowledge",m={unversionedId:"intermediate/generated_knowledge",id:"intermediate/generated_knowledge",title:"\ud83d\udfe1 Generated Knowledge",description:"La idea detr\xe1s del enfoque de conocimiento generado(@liu2021generated) es pedir al %%LLM|LLM%% que genere informaci\xf3n potencialmente \xfatil sobre una pregunta o tema dado antes de generar una respuesta final.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intermediate/generated_knowledge.md",sourceDirName:"intermediate",slug:"/intermediate/generated_knowledge",permalink:"/es/docs/intermediate/generated_knowledge",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/generated_knowledge.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Autoconsistencia",permalink:"/es/docs/intermediate/self_consistency"},next:{title:"\ud83d\udfe1 Least to Most Prompting",permalink:"/es/docs/intermediate/least_to_most"}},p={},u=[{value:"Enfoque de un solo prompt.",id:"enfoque-de-un-solo-prompt",level:2},{value:"Enfoque de doble prompt",id:"enfoque-de-doble-prompt",level:2},{value:"Otro caso de uso",id:"otro-caso-de-uso",level:2},{value:"Una discusi\xf3n m\xe1s t\xe9cnica",id:"una-discusi\xf3n-m\xe1s-t\xe9cnica",level:2},{value:"Generaci\xf3n de conocimiento",id:"generaci\xf3n-de-conocimiento",level:3},{value:"Integraci\xf3n de conocimiento",id:"integraci\xf3n-de-conocimiento",level:2},{value:"Modelos de lenguaje de Recitation-Augmented",id:"modelos-de-lenguaje-de-recitation-augmented",level:2},{value:"Notas",id:"notas",level:2}],g=(b="LazyLoadImage",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});var b;const h={toc:u},k="wrapper";function L(e){let{components:a,...o}=e;return(0,t.kt)(k,(0,n.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-generated-knowledge"},"\ud83d\udfe1 Generated Knowledge"),(0,t.kt)("p",null,"La idea detr\xe1s del enfoque de conocimiento generado",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," es pedir al ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_13_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_2_13_1690063696623",clickable:!0,mdxType:"Tooltip"})," que genere informaci\xf3n potencialmente \xfatil sobre una pregunta o tema dado antes de generar una respuesta final."),(0,t.kt)("p",null,"Por ejemplo, supongamos que desea escribir un peque\xf1o art\xedculo sobre alg\xfan animal, como ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kermode_bear"},"osos espirituales"),". Antes de pedirle al ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_22_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_2_22_1690063696623",clickable:!0,mdxType:"Tooltip"})," que escriba el art\xedculo, puede pedirle que genere algunos datos sobre los osos espirituales. Esto ayudar\xe1 al LLM a escribir un art\xedculo m\xe1s informativo. Hay dos formas sencillas de hacer esto."),(0,t.kt)("h2",{id:"enfoque-de-un-solo-prompt"},"Enfoque de un solo prompt."),(0,t.kt)("p",null,"El primer enfoque consiste en pedirle al LLM que genere conocimiento y luego escriba la publicaci\xf3n, todo con un solo prompt."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Genera 4 hechos sobre el oso Kermode, luego usa estos hechos para escribir una breve publicaci\xf3n de blog con la informaci\xf3n:\n\n// highlight-start\nEl oso Kermode, tambi\xe9n conocido como oso esp\xedritu, es una rara subespecie del oso negro americano que se encuentra en las regiones costeras de Columbia Brit\xe1nica, Canad\xe1.\n\n1. El oso Kermode es una subespecie \xfanica del oso negro americano, con aproximadamente el 10% de la poblaci\xf3n que tiene pelaje blanco.\n\n2. El oso Kermode es un s\xedmbolo de los pueblos de las Primeras Naciones de Columbia Brit\xe1nica y es visto como un animal espiritual.\n\n3. El oso Kermode es una parte importante del ecosistema, ayudando a dispersar las semillas y mantener el equilibrio del bosque.\n\n4. El oso Kermode es una especie protegida y su poblaci\xf3n es monitoreada de cerca por el gobierno provincial.\n\nEl oso Kermode es un animal \xfanico y especial que se encuentra en las regiones costeras de Columbia Brit\xe1nica, Canad\xe1. Aproximadamente el 10% de la poblaci\xf3n de esta subespecie del oso negro americano tiene pelaje blanco, lo que los convierte en una vista rara. El oso Kermode es un s\xedmbolo de los pueblos de las Primeras Naciones de Columbia Brit\xe1nica y es visto como un animal espiritual. Es una parte importante del ecosistema, ayudando a dispersar las semillas y mantener el equilibrio del bosque. El oso Kermode es una especie protegida y su poblaci\xf3n es monitoreada de cerca por el gobierno provincial. Es un animal hermoso y majestuoso, y es importante que hagamos nuestra parte para proteger y conservar esta especie.\n// highlight-end\n")),(0,t.kt)("h2",{id:"enfoque-de-doble-prompt"},"Enfoque de doble prompt"),(0,t.kt)("p",null,"En este enfoque, primero pedimos al ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_36_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_0_36_1690063696623",clickable:!0,mdxType:"Tooltip"})," que genere hechos sobre el oso:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Genera 10 hechos sobre el oso Kermode:\n// highlight-start\n1. El oso Kermode, tambi\xe9n conocido como Spirit Bear, es una rara subespecie del oso negro americano que se encuentra en Columbia Brit\xe1nica, Canad\xe1.\n\n2. El oso Kermode tiene un pelaje \xfanico de color blanco o crema, lo cual se debe a un gen recesivo.\n\n3. El oso Kermode es un s\xedmbolo de esperanza y renovaci\xf3n para las Primeras Naciones de Columbia Brit\xe1nica.\n\n4. El oso Kermode es una especie protegida y se encuentra en la lista de especies de preocupaci\xf3n especial del Comit\xe9 sobre el Estatus de la Vida Silvestre en Peligro de Extinci\xf3n en Canad\xe1.\n// highlight-end\n")),(0,t.kt)("p",null,"Luego, utilizamos los hechos generados para escribir el post, con una segunda solicitud:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\n1. El oso Kermode, tambi\xe9n conocido como el Oso Esp\xedritu, es una rara subespecie del oso negro americano que se encuentra en la Columbia Brit\xe1nica, Canad\xe1.\n\n2. El oso Kermode tiene un pelaje \xfanico de color blanco o crema, que se debe a un gen recesivo.\n\n3. El oso Kermode es un s\xedmbolo de esperanza y renovaci\xf3n para los pueblos de las Primeras Naciones de la Columbia Brit\xe1nica.\n\n4. El oso Kermode es una especie protegida y est\xe1 clasificado como una especie de especial preocupaci\xf3n por el Comit\xe9 sobre el Estado de la Vida Silvestre en Peligro de Canad\xe1.\n\nUsa los hechos anteriores para escribir una entrada de blog de un p\xe1rrafo sobre el oso Kermode:\n\n// highlight-start\n\nEl oso Kermode, tambi\xe9n conocido como el Oso Esp\xedritu, es una rara subespecie del oso negro americano que se encuentra en la Columbia Brit\xe1nica, Canad\xe1. Este oso \xfanico tiene un pelaje blanco o crema, causado por un gen recesivo, y es un s\xedmbolo de esperanza y renovaci\xf3n para los pueblos de las Primeras Naciones de la Columbia Brit\xe1nica. El oso Kermode es una especie protegida y est\xe1 clasificado como una especie de especial preocupaci\xf3n por el Comit\xe9 sobre el Estado de la Vida Silvestre en Peligro de Canad\xe1, lo que lo convierte en una parte importante de la biodiversidad de la regi\xf3n.\n\n// highlight-end\n")),(0,t.kt)("p",null,"Recomiendo este segundo enfoque, ya que puede producir contenidos m\xe1s largos de forma m\xe1s fiable."),(0,t.kt)("h2",{id:"otro-caso-de-uso"},"Otro caso de uso"),(0,t.kt)("p",null,"El enfoque del conocimiento generado se introdujo en realidad para una tarea completamente distinta, la de responder a preguntas dif\xedciles. Consideremos la siguiente pregunta, a la que GPT-3 responde incorrectamente:"),(0,t.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("br",null),(0,t.kt)("p",null,"Si primero le preguntamos al ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_29_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_0_29_1690063696623",clickable:!0,mdxType:"Tooltip"})," que genere informaci\xf3n sobre Congo y Sud\xe1frica, podemos luego utilizar esa informaci\xf3n para responder la pregunta correctamente. En teor\xeda, esto es similar a la t\xe9cnica de ",(0,t.kt)("a",{parentName:"p",id:"prompting de CoT_3_173_1690063696623","data-tooltip-html":"La idea principal de CoT es que al mostrarle al LLM algunos ejemplos de few-shot donde se explica el proceso de razonamiento en los ejemplos, el LLM tambi\xe9n mostrar\xe1 el proceso de razonamiento al responder a la solicitud.","data-tooltip-place":"top"},"CoT"),(0,t.kt)(r.u,{anchorId:"prompting de CoT_3_173_1690063696623",clickable:!0,mdxType:"Tooltip"}),", ya que efectivamente estamos obteniendo del LLM un razonamiento intermedio en forma de hechos relacionados."),(0,t.kt)("p",null,"Comencemos con el primer paso, ",(0,t.kt)("em",{parentName:"p"},"generaci\xf3n de conocimiento"),". Podemos pedirle al ",(0,t.kt)("a",{parentName:"p",id:"LLM_2_21_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_2_21_1690063696623",clickable:!0,mdxType:"Tooltip"})," que genere informaci\xf3n sobre Congo y Sud\xe1frica:"),(0,t.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJHZW5lcmEgYWxndW5vcyBoZWNob3Mgc29icmUgbG9zIHRhbWHDsW9zIGRlIFN1ZMOhZnJpY2EgeSBDb25nbzoiLCJvdXRwdXQiOiJTdWTDoWZyaWNhIGVzIGVsIHBhw61zIG7Dum1lcm8gMjUgbcOhcyBncmFuZGUgZGVsIG11bmRvLCBjb24gdW4gw6FyZWEgZGUgMS4yMjEuMDM3IGtpbMOzbWV0cm9zIGN1YWRyYWRvcyAoNDcxLjQ0NSBtaWxsYXMgY3VhZHJhZGFzKS4gQ29uZ28sIHBvciBvdHJvIGxhZG8sIGVzIGVsIHBhw61zIG7Dum1lcm8gMTEgbcOhcyBncmFuZGUgZGVsIG11bmRvLCBjb24gdW4gw6FyZWEgZGUgMi4zNDQuODU4IGtpbMOzbWV0cm9zIGN1YWRyYWRvcyAoOTA1LjU2NyBtaWxsYXMgY3VhZHJhZGFzKS4gU3Vkw6FmcmljYSBlcyBjYXNpIGxhIG1pdGFkIGRlbCB0YW1hw7FvIGRlIENvbmdvLCBjb24gdW5hIHBvYmxhY2nDs24gZGUgNTcsNyBtaWxsb25lcyBlbiBjb21wYXJhY2nDs24gY29uIGxhIHBvYmxhY2nDs24gZGUgQ29uZ28gZGUgODQsMyBtaWxsb25lcy4gU3Vkw6FmcmljYSBlcyBlbCBwYcOtcyBtw6FzIHBvYmxhZG8gZGUgbGEgcmVnacOzbiwgbWllbnRyYXMgcXVlIENvbmdvIGVzIGVsIHNlZ3VuZG8gbcOhcyBwb2JsYWRvLiIsIm1heFRva2VucyI6MjU2LCJib3hSb3dzIjo2LCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D",style:{width:"100%",height:"300px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("p",null,"A continuaci\xf3n, usemos ese conocimiento para responder correctamente la pregunta. \xa1Este es el paso de ",(0,t.kt)("em",{parentName:"p"},"integraci\xf3n de conocimiento"),"!"),(0,t.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJTdWTDoWZyaWNhIGVzIGVsIHBhw61zIG7Dum1lcm8gMjUgbcOhcyBncmFuZGUgZGVsIG11bmRvLCBjb24gdW4gw6FyZWEgZGUgMS4yMjEuMDM3IGtpbMOzbWV0cm9zIGN1YWRyYWRvcyAoNDcxLjQ0NSBtaWxsYXMgY3VhZHJhZGFzKS4gQ29uZ28sIHBvciBvdHJvIGxhZG8sIGVzIGVsIHBhw61zIG7Dum1lcm8gMTEgbcOhcyBncmFuZGUgZGVsIG11bmRvLCBjb24gdW4gw6FyZWEgZGUgMi4zNDQuODU4IGtpbMOzbWV0cm9zIGN1YWRyYWRvcyAoOTA1LjU2NyBtaWxsYXMgY3VhZHJhZGFzKS4gU3Vkw6FmcmljYSBlcyBjYXNpIGxhIG1pdGFkIGRlbCB0YW1hw7FvIGRlIENvbmdvLCBjb24gdW5hIHBvYmxhY2nDs24gZGUgNTcsNyBtaWxsb25lcyBlbiBjb21wYXJhY2nDs24gY29uIGxhIHBvYmxhY2nDs24gZGUgQ29uZ28gZGUgODQsMyBtaWxsb25lcy4gU3Vkw6FmcmljYSBlcyBlbCBwYcOtcyBtw6FzIHBvYmxhZG8gZGUgbGEgcmVnacOzbiwgbWllbnRyYXMgcXVlIENvbmdvIGVzIGVsIHNlZ3VuZG8gbcOhcyBwb2JsYWRvLlxuXG7Cv1F1w6kgcGHDrXMgZXMgbcOhcyBncmFuZGUsIENvbmdvIG8gU3Vkw6FmcmljYT8iLCJvdXRwdXQiOiJDb25nbyBlcyBtw6FzIGdyYW5kZSBxdWUgU3Vkw6FmcmljYS4iLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6MTUsInRlbXBlcmF0dXJlIjowLCJ0b3BQIjowfQ%3D%3D",style:{width:"100%",height:"750px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("h2",{id:"una-discusi\xf3n-m\xe1s-t\xe9cnica"},"Una discusi\xf3n m\xe1s t\xe9cnica"),(0,t.kt)("p",null,"Aunque el caso de uso anterior era similar a la forma en que se introdujo originalmente el conocimiento generado, no es exactamente igual. El siguiente contenido abarca el contexto m\xe1s t\xe9cnico en el que se introdujo el enfoque. Sigue el patr\xf3n de dos pasos intermedios (generaci\xf3n de conocimiento e integraci\xf3n de conocimiento) que vimos anteriormente."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:i,style:{width:"750px"}})),(0,t.kt)("div",{style:{textAlign:"center"}},"Generated Knowledge (Liu et al.)"),(0,t.kt)("h3",{id:"generaci\xf3n-de-conocimiento"},"Generaci\xf3n de conocimiento"),(0,t.kt)("p",null,"En el paso de generaci\xf3n de conocimiento, se pide al ",(0,t.kt)("a",{parentName:"p",id:"LLM_0_53_1690063696623","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,t.kt)(r.u,{anchorId:"LLM_0_53_1690063696623",clickable:!0,mdxType:"Tooltip"})," que genere un conjunto de hechos\nsobre la ",(0,t.kt)("strong",{parentName:"p"},"pregunta"),". Al LLM se le pide que responda como se muestra a continuaci\xf3n.\nSe generan M terminaciones diferentes utilizando esta misma pregunta (similar al enfoque de autoconsistencia)."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(g,{src:s,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,t.kt)("div",{style:{textAlign:"center"}},"Generated Knowledge Example (Liu et al.)"),(0,t.kt)("h2",{id:"integraci\xf3n-de-conocimiento"},"Integraci\xf3n de conocimiento"),(0,t.kt)("p",null,'A continuaci\xf3n, generamos preguntas "con conocimientos ampliados" y hacemos una solicitud al modelo LLM con ellas para obtener respuestas finales. La forma m\xe1s sencilla de entender esto es mediante un ejemplo.'),(0,t.kt)("p",null,"Supongamos que intentamos responder la ",(0,t.kt)("strong",{parentName:"p"},"pregunta"),' "La mayor\xeda de los canguros tienen extremidades <mask',">",'". Supongamos que en la etapa de generaci\xf3n de conocimientos hemos generado 2 conocimientos (M = 2):'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Conocimiento 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"Los canguros son marsupiales que viven en Australia"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Conocimiento 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"Los canguros son marsupiales que tienen 5 extremidades"),"."))),(0,t.kt)("p",null,"Ahora, concatenamos cada conocimiento con la pregunta para generar preguntas con conocimientos ampliados:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pregunta con Conocimiento Ampliado 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"La mayor\xeda de los canguros tienen <mask\\> extremidades. Los canguros son marsupiales que viven en Australia"),".")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Pregunta con Conocimiento Ampliado 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"La mayor\xeda de los canguros tienen <mask\\> extremidades. Los canguros son marsupiales que tienen 5 extremidades"),"."))),(0,t.kt)("p",null,"Luego, solicitamos al LLM que responda estas preguntas con conocimientos ampliados y obtenemos las propuestas de respuesta final:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Respuesta 1: ",(0,t.kt)("inlineCode",{parentName:"p"},"4"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Respuesta 2: ",(0,t.kt)("inlineCode",{parentName:"p"},"5")))),(0,t.kt)("p",null,"Seleccionamos la respuesta con la probabilidad m\xe1s alta como la respuesta final. La probabilidad m\xe1s alta podr\xeda ser la probabilidad softmax del token de respuesta o la probabilidad logar\xedtmica del token (o tokens) de respuesta."),(0,t.kt)("h2",{id:"modelos-de-lenguaje-de-recitation-augmented"},"Modelos de lenguaje de Recitation-Augmented"),(0,t.kt)("p",null,"El enfoque de recitaci\xf3n aumentada",(0,t.kt)("sup",{parentName:"p",id:"fnref-2"},(0,t.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," es similar al conocimiento generado (b\xe1sicamente el mismo). Sin embargo, es mucho menos complejo que la implementaci\xf3n formal del conocimiento generado."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(g,{src:l,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"La idea aqu\xed es hacer una prompt de pocos ejemplos al LLM para generar informaci\xf3n ",(0,t.kt)("em",{parentName:"p"},"y")," responder en ",(0,t.kt)("em",{parentName:"p"},"un mismo")," paso. El hecho de que el modelo recite/genere conocimiento y responda la pregunta en el mismo paso es la principal diferencia del enfoque de conocimiento generado."),(0,t.kt)("p",null,"Para reiterar, este enfoque induce al modelo con m\xfaltiples ejemplos de (pregunta, recitaci\xf3n, respuesta), y luego hace la pregunta. Los autores se\xf1alan que este enfoque se puede combinar con autoconsistencia o m\xfaltiples caminos de finalizaci\xf3n."),(0,t.kt)("h2",{id:"notas"},"Notas"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"El conocimiento generado muestra mejoras en varios conjuntos de datos de sentido com\xfan.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"El conocimiento correspondiente a la respuesta seleccionada se llama el conocimiento seleccionado.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"En la pr\xe1ctica, se podr\xeda tomar la respuesta m\xe1s frecuentemente encontrada como la final."))),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Liu, J., Liu, A., Lu, X., Welleck, S., West, P., Bras, R. L., Choi, Y., & Hajishirzi, H. (2021). Generated Knowledge Prompting for Commonsense Reasoning.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,t.kt)("li",{parentName:"ol",id:"fn-2"},"Sun, Z., Wang, X., Tay, Y., Yang, Y., & Zhou, D. (2022). Recitation-Augmented Language Models.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}L.isMDXComponent=!0}}]);