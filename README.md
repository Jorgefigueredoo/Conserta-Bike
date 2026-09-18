# ConsertaBike Camaragibe — Site Institucional

Landing page em React com efeitos de scrollytelling (parallax, reveal ao rolar,
marquee de marcas). Feita para rodar rápido no celular, que é de onde a maioria
dos clientes vai acessar (link do WhatsApp/Instagram).

---

## Como rodar

```bash
npm install     # só na primeira vez
npm run dev     # abre em http://localhost:5173
```

Para gerar a versão final (a pasta `dist/` é o que vai para o servidor):

```bash
npm run build
npm run preview   # confere o resultado do build
```

---

## 📷 A foto do site

O site usa **uma única foto**: a fachada da loja, já em
`public/images/fachada.jpg`. Todo o resto é tipografia e dado real — nada de
banco de imagens, que é justamente o que faz um site parecer template.

Para trocá-la, substitua o arquivo mantendo o mesmo nome. Se ele sumir, aparece
um espaço reservado e o site não quebra. O manifesto fica em
[src/data/fotos.js](src/data/fotos.js).

> Dica: JPG, 1400–1800px no lado maior, até ~400 KB.

A **logo** não precisa de arquivo: ela foi reconstruída em vetor (SVG) em
[src/components/ui/Logo.jsx](src/components/ui/Logo.jsx) e também serve de
favicon ([public/favicon.svg](public/favicon.svg)) — fica nítida em qualquer
tamanho de tela.

---

## Onde editar cada informação

**Quase tudo fica em um arquivo só:** [src/data/loja.js](src/data/loja.js)

| O que mudar | Onde |
| --- | --- |
| **Horário de funcionamento** | `loja.horario` — `resumo` (frase curta do topo/rodapé) e `dias` (a tabela dia a dia). O horário atual é um **placeholder**: `Seg a Sáb: 08h às 18h` |
| Telefone / WhatsApp | `loja.telefone` e `loja.whatsapp` |
| Instagram | `loja.instagram` |
| Endereço e CEP | `loja.endereco` |
| Link do "Como chegar" | `loja.mapaRotaLink` (rota) e `loja.mapaLink` (perfil) |
| Coordenadas | `loja.coordenadas` — já nas exatas da loja (-7.9454582, -35.0228957) |
| Mapa incorporado | `loja.mapaEmbed` (Google Maps → Compartilhar → Incorporar um mapa → copiar o `src`) |
| Textos institucionais | `loja.textoInstitucional` e `loja.slogan` |
| Cards de serviços | lista `servicos` — `texto`, `itens` (as etiquetas) e `detalhe` |
| **Prazo / preço / garantia** | `detalhe` de cada serviço. Está **vazio de propósito**: só a loja sabe esses números. Enquanto vazio, a faixa simplesmente não aparece no card |
| Marcas parceiras | lista `marcas` — `nome` e `papel` (o que a loja usa de cada uma) |
| Depoimentos | lista `depoimentos` |

**Cores da marca:** [src/index.css](src/index.css), no bloco `@theme`.
`--color-lima-500` é o verde principal (`#8dc71e`) e `--color-tinta` é o preto.
Mudou ali, muda no site inteiro.

**SEO, título da aba e compartilhamento:** [index.html](index.html)
(inclui dados estruturados do Google para loja de bicicletas).

---

## Estrutura

```
src/
├── data/loja.js              ← TODAS as informações da loja
├── data/fotos.js             ← nomes dos arquivos de foto e onde cada um entra
├── hooks/useAnimacoes.js     ← curvas de animação + desliga parallax no mobile
├── components/
│   ├── Cabecalho.jsx         menu fixo + menu mobile
│   ├── Hero.jsx              1. abertura com parallax
│   ├── Sobre.jsx             2. a loja + foto da fachada (rótulo girado)
│   ├── Horarios.jsx          3. ficha da semana + selo "aberto agora"
│   ├── Servicos.jsx          4. trilho horizontal, cards tipográficos
│   ├── Marcas.jsx            5. as 6 marcas e o papel de cada uma
│   ├── Avaliacoes.jsx        6. tela cheia com a nota vazada ao fundo
│   ├── Localizacao.jsx       7. endereço, coordenadas e mapa
│   ├── Rodape.jsx            8. CTA final + contatos
│   └── ui/                   peças reutilizáveis (Foto, Botao, Logo, Icones…)
└── index.css                 cores, fontes, molduras e animações base
```

---

## "Aberto agora"

A seção **Horários** mostra um selo que diz, no relógio de quem está visitando,
se a loja está aberta neste momento ("Aberto agora", "Fecha em 20 min",
"Fechado — abre Sáb, 08h"). Ele é calculado a partir da própria tabela
`loja.horario.dias` — por isso cada dia tem `abre`/`fecha` em número, além do
texto exibido. Mudou o horário na tabela, o selo acompanha.

A lógica está em `situacaoAgora()` no fim de
[src/data/loja.js](src/data/loja.js). **Mantenha a lista começando na segunda e
terminando no domingo** — o cálculo depende dessa ordem.

---

## Detalhes de performance

- As animações usam apenas `transform` e `opacity` (aceleradas por GPU).
- Os efeitos de parallax mais pesados são **desligados automaticamente** em
  telas menores que 768px e para quem ativou "reduzir movimento" no celular
  — ver `useParallaxAtivo` em [src/hooks/useAnimacoes.js](src/hooks/useAnimacoes.js).
- Cada reveal roda **uma única vez** (`once: true`), então rolar para cima e para
  baixo não fica repetindo animação.
- O mapa do Google carrega com `loading="lazy"`.

---

## Publicar

A pasta `dist/` gerada pelo `npm run build` é um site estático — pode subir em
Vercel, Netlify, Hostinger, ou qualquer hospedagem comum. Não precisa de
servidor Node rodando.
# Conserta-Bike
