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

## ⚠️ Passo que falta: a foto da fachada

Salve a foto da fachada da loja como:

```
public/images/fachada.jpg
```

Ela aparece automaticamente na seção **A Loja**. Enquanto o arquivo não existir,
um espaço reservado verde é mostrado no lugar (o site não quebra).

> Dica: use uma imagem de no máximo ~400 KB (JPG, largura de 1200–1600px) para
> não pesar no 4G. Se quiser, o mesmo arquivo já está referenciado como imagem
> de compartilhamento no WhatsApp/Instagram (`og:image` no `index.html`).

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
| Link do "Como chegar" | `loja.mapaLink` |
| Mapa incorporado | `loja.mapaEmbed` (Google Maps → Compartilhar → Incorporar um mapa → copiar o `src`) |
| Textos institucionais | `loja.textoInstitucional` e `loja.slogan` |
| Cards de serviços | lista `servicos` |
| Marcas parceiras | lista `marcas` |
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
├── hooks/useAnimacoes.js     ← curvas de animação + desliga parallax no mobile
├── components/
│   ├── Cabecalho.jsx         menu fixo + menu mobile
│   ├── Hero.jsx              1. abertura com parallax
│   ├── Sobre.jsx             2. a loja + foto da fachada
│   ├── Servicos.jsx          3. os 6 cards de serviços
│   ├── Marcas.jsx            4. faixas de marcas em movimento
│   ├── Avaliacoes.jsx        5. nota 5,0 + depoimentos
│   ├── Localizacao.jsx       6. endereço, horários e mapa
│   ├── Rodape.jsx            7. CTA final + contatos
│   └── ui/                   peças reutilizáveis (botão, logo, ícones…)
└── index.css                 cores, fontes e animações base
```

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
