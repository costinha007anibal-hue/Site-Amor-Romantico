# Site Romântico — Para Ti ❤️

Um site simples, bonito e interativo sobre o amor, feito para enviares a alguém especial.

## O que tem

- Estilo **romântico e delicado** (rosa suave, tipografia elegante)
- **Corações a flutuar** continuamente em fundo
- **Carta de amor** que aparece ao clicar no coração grande
- **6 cartões interativos** — clica para virar e ler a mensagem
- Botão de **chuva de corações**
- Totalmente responsivo (telemóvel e computador)

## Como personalizar (muito fácil)

Abre o ficheiro `index.html` num editor de texto e altera:

1. **Título e subtítulo** (secção `.hero`)
   - `Para Ti` → nome da pessoa ou frase que quiseres
   - `Com todo o meu amor` → a tua frase

2. **Carta principal** (secção `#main-message`)
   - Muda o texto da carta completa

3. **Mensagens dos cartões**
   - Cada cartão tem um atributo `data-message="..."`
   - Altera o texto dentro das aspas

4. **Rodapé**
   - Frase final e nota

Opcional no `script.js`:
- Número de corações flutuantes
- Intensidade da chuva

## Como abrir / enviar

1. Abre o `index.html` no browser (duplo clique)
2. Ou coloca a pasta num serviço gratuito (Netlify Drop, GitHub Pages, etc.) e envia o link

## Estrutura

```
site-amor-romantico/
├── index.html   ← textos e estrutura
├── style.css    ← visual e animações
├── script.js    ← interatividade
└── README.md
```

Feito com carinho.
