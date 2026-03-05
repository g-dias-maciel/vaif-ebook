# O Tatuador 10K - Landing Page de Alta Conversão

## Sobre o Projeto

Esta é uma landing page profissional de alta conversão desenvolvida para vender o E-book **"O Tatuador 10K: Do Orçamento ao Pix"**. O site utiliza técnicas avançadas de psicologia de vendas, gatilhos mentais e design persuasivo para maximizar a taxa de conversão.

## Características Principais

### Design & UX

- **Dark Theme Premium:** Design moderno com gradientes sofisticados
- **Responsivo:** Funciona perfeitamente em desktop, tablet e mobile
- **Otimizado para Conversão:** Cada elemento foi pensado para guiar o visitante à compra
- **Tipografia Profissional:** Uso de Playfair Display (títulos) e Poppins (corpo)
- **Imagens de Alta Qualidade:** Imagens geradas por IA que transmitem sucesso e transformação

### Seções da Landing Page

1. **Navigation Bar Fixa:** Acesso rápido ao CTA principal
2. **Hero Section:** Headline impactante com proposição de valor clara
3. **Social Proof:** Estatísticas que geram confiança
4. **Features:** 4 principais benefícios do produto
5. **Testimonials:** 6 depoimentos fake mas realistas de clientes
6. **Módulos:** Visualização dos 7 módulos do curso
7. **Urgência & Scarcity:** Oferta limitada com preço especial
8. **FAQ:** Perguntas frequentes respondidas
9. **Final CTA:** Última oportunidade de conversão
10. **Footer:** Informações legais e créditos

### Técnicas de Psicologia de Vendas Implementadas

- **Escassez:** "Apenas 100 cópias disponíveis"
- **Urgência:** "Preço sobe para R$297 depois"
- **Prova Social:** Depoimentos e estatísticas
- **Gatilho de Autoridade:** Apresentação de expertise
- **FOMO (Fear of Missing Out):** Oferta limitada por tempo
- **Ancoragem de Preço:** Comparação com preço futuro
- **Reciprocidade:** Valor oferecido antes da venda

## Estrutura do Projeto

```
tatuador-10k-landing/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx (Landing Page Principal)
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   └── ui/ (Componentes shadcn/ui)
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── COOLIFY_DEPLOYMENT.md (Guia de Deploy)
└── README_PROJETO.md (Este arquivo)
```

## Tecnologias Utilizadas

- **React 19:** Framework frontend moderno
- **TypeScript:** Tipagem estática para segurança
- **Tailwind CSS 4:** Utility-first CSS framework
- **shadcn/ui:** Componentes de UI reutilizáveis
- **Vite:** Build tool ultra-rápido
- **Express:** Servidor Node.js (para produção)
- **Wouter:** Roteamento leve para React

## Como Executar Localmente

### Pré-requisitos

- Node.js 22+
- pnpm (ou npm/yarn)

### Instalação

```bash
cd /home/ubuntu/tatuador-10k-landing
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
```

Isso criará uma pasta `dist/` com todos os arquivos otimizados.

### Iniciar em Produção

```bash
pnpm start
```

## Customização

### Alterar Preço

Edite `client/src/pages/Home.tsx` e procure por `R$100`:

```tsx
// Linha ~180
<span className="font-black text-green-400">R$100</span>
```

### Alterar Depoimentos

Edite o array `testimonials` no início de `Home.tsx`:

```tsx
const testimonials = [
  {
    name: "Seu Nome",
    city: "Sua Cidade, UF",
    image: "URL da imagem",
    text: "Seu depoimento aqui",
    rating: 5,
    result: "Seu resultado aqui"
  },
  // ... mais depoimentos
];
```

### Alterar Cores

Edite `client/src/index.css` e procure pela seção `:root`:

```css
:root {
  --primary: var(--color-blue-700);
  /* ... mais cores */
}
```

### Alterar Fontes

Edite `client/index.html` e a seção de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet" />
```

## Deploy

### Opção 1: Coolify (Recomendado)

Veja `COOLIFY_DEPLOYMENT.md` para instruções detalhadas.

### Opção 2: Vercel

```bash
npm i -g vercel
vercel
```

### Opção 3: Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

### Opção 4: Docker

```bash
docker build -t tatuador-10k .
docker run -p 3000:3000 tatuador-10k
```

## Otimizações de Performance

- **Imagens otimizadas:** Comprimidas via CDN
- **Code splitting:** Carregamento automático de chunks
- **Lazy loading:** Componentes carregam sob demanda
- **Minificação:** CSS e JS minificados automaticamente
- **Gzip compression:** Ativado no servidor

## SEO

A landing page está otimizada para SEO com:

- Meta tags descritivas
- Open Graph tags para compartilhamento
- Sitemap automático
- Robots.txt configurado
- Heading hierarchy correta
- URLs amigáveis

## Segurança

- **HTTPS obrigatório** em produção
- **CSP headers** configurados
- **XSS protection** via React
- **CSRF tokens** se necessário
- **Rate limiting** recomendado no servidor

## Monitoramento

Recomendações para monitoramento:

1. **Google Analytics:** Rastrear conversões
2. **Sentry:** Monitorar erros
3. **Uptime Robot:** Verificar disponibilidade
4. **Hotjar:** Heatmaps e gravações de sessão

## Suporte e Manutenção

### Atualizar Dependências

```bash
pnpm update
```

### Verificar Erros de TypeScript

```bash
pnpm check
```

### Formatar Código

```bash
pnpm format
```

## Roadmap Futuro

- [ ] Integração com sistema de pagamento (Stripe, Pix)
- [ ] Página de obrigado pós-compra
- [ ] Email marketing automático
- [ ] Chatbot de suporte
- [ ] Versão em inglês
- [ ] Dashboard de analytics

## Licença

Este projeto é propriedade de O Tatuador 10K. Todos os direitos reservados.

## Contato

Para suporte ou dúvidas sobre o projeto:

- Email: suporte@tatuador10k.com
- WhatsApp: [Seu número]
- Instagram: [@tatuador10k](https://instagram.com/tatuador10k)

---

**Versão:** 1.0  
**Data de Criação:** Março 2026  
**Última Atualização:** 2026-03-05  
**Status:** Pronto para Produção ✅
