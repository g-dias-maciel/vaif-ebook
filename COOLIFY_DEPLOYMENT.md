# Guia de Deploy no Coolify - O Tatuador 10K Landing Page

## Visão Geral

Esta é uma aplicação React estática otimizada para deploy rápido no Coolify. O projeto está pronto para ser publicado sem necessidade de modificações adicionais.

## Pré-requisitos

Você precisará de:

1. Uma conta no Coolify (https://coolify.io)
2. Um servidor ou VPS configurado com Coolify
3. Git instalado (opcional, mas recomendado)

## Método 1: Deploy via Git (Recomendado)

### Passo 1: Preparar o Repositório Git

Se você ainda não tem um repositório Git, crie um:

```bash
cd /home/ubuntu/tatuador-10k-landing
git init
git add .
git commit -m "Initial commit: O Tatuador 10K landing page"
```

Se você já tem um repositório remoto (GitHub, GitLab, etc.), faça push:

```bash
git remote add origin https://seu-repositorio.git
git push -u origin main
```

### Passo 2: Conectar ao Coolify

1. Acesse seu painel do Coolify
2. Clique em **"New Project"**
3. Selecione **"Git Repository"**
4. Cole a URL do seu repositório
5. Selecione a branch (geralmente `main`)

### Passo 3: Configurar o Build

No Coolify, configure os seguintes parâmetros:

| Parâmetro | Valor |
|-----------|-------|
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `pnpm start` |
| **Port** | `3000` |
| **Node Version** | `22` (ou superior) |

### Passo 4: Variáveis de Ambiente (Opcional)

Este projeto não requer variáveis de ambiente especiais. Se desejar adicionar alguma, você pode deixar em branco ou adicionar conforme necessário.

### Passo 5: Deploy

Clique em **"Deploy"** e aguarde a conclusão. O Coolify automaticamente:

1. Clonará o repositório
2. Instalará as dependências
3. Fará o build da aplicação
4. Iniciará o servidor

## Método 2: Deploy via Upload de Arquivo

Se você preferir não usar Git, pode fazer upload direto:

### Passo 1: Preparar o Build Local

No seu computador, execute:

```bash
cd /home/ubuntu/tatuador-10k-landing
pnpm install
pnpm build
```

Isso criará uma pasta `dist/` com todos os arquivos prontos para deploy.

### Passo 2: Compactar os Arquivos

```bash
cd /home/ubuntu/tatuador-10k-landing
zip -r tatuador-10k-landing.zip dist/ package.json pnpm-lock.yaml
```

### Passo 3: Upload no Coolify

1. No painel do Coolify, selecione **"Upload Files"**
2. Faça upload do arquivo `tatuador-10k-landing.zip`
3. Configure os mesmos parâmetros de build mencionados acima
4. Clique em **"Deploy"**

## Método 3: Deploy via Docker (Avançado)

Se seu Coolify suporta Docker, você pode usar o Dockerfile pré-configurado:

### Dockerfile (já incluído no projeto)

O projeto inclui um `Dockerfile` otimizado. Basta fazer upload do repositório completo e o Coolify detectará automaticamente.

## Configurações Importantes do Coolify

### 1. Domínio Personalizado

Para apontar um domínio personalizado:

1. Vá para **"Settings"** do seu projeto no Coolify
2. Clique em **"Domains"**
3. Adicione seu domínio (ex: `tatuador10k.com`)
4. Configure os registros DNS conforme instruído

### 2. SSL/HTTPS

O Coolify geralmente configura SSL automaticamente. Verifique em **"Settings"** > **"SSL"** para confirmar que está ativado.

### 3. Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente no futuro:

1. Vá para **"Settings"** > **"Environment Variables"**
2. Adicione as variáveis necessárias
3. Clique em **"Redeploy"**

## Monitoramento e Logs

### Acessar Logs

1. No painel do projeto, clique em **"Logs"**
2. Você verá logs de build e runtime em tempo real

### Verificar Status

1. Clique em **"Status"** para ver a saúde da aplicação
2. Verifique CPU, memória e uptime

## Troubleshooting

### Erro: "Build failed"

**Solução:** Verifique os logs para identificar o problema. Geralmente é falta de dependências ou erro de sintaxe.

```bash
# Localmente, teste o build:
pnpm install
pnpm build
```

### Erro: "Port already in use"

**Solução:** Mude a porta no Coolify para uma diferente (ex: 3001, 3002).

### Aplicação não carrega

**Solução:** Verifique se o domínio está configurado corretamente e se o SSL está ativado.

## Atualizar a Aplicação

Sempre que você fizer mudanças no código:

### Via Git

```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin main
```

O Coolify detectará automaticamente a mudança e fará o redeploy.

### Via Upload Manual

Repita os passos do Método 2 com os novos arquivos.

## Performance e Otimizações

Este projeto já está otimizado para performance:

- **Minificação automática** via Vite
- **Code splitting** para carregamento mais rápido
- **Compressão de imagens** via CDN
- **Lazy loading** de componentes

## Suporte

Se encontrar problemas:

1. Consulte a documentação do Coolify: https://coolify.io/docs
2. Verifique os logs da aplicação
3. Teste localmente com `pnpm dev`

## Checklist Final

Antes de considerar o deploy completo, verifique:

- [ ] Domínio está apontando corretamente
- [ ] SSL/HTTPS está ativado
- [ ] Aplicação carrega sem erros
- [ ] Todos os links funcionam
- [ ] Imagens estão carregando corretamente
- [ ] Botões de CTA estão funcionando
- [ ] Responsividade em mobile está OK
- [ ] Performance está aceitável (teste com PageSpeed Insights)

## Próximos Passos

Após o deploy bem-sucedido:

1. Configure analytics (Google Analytics, Umami, etc.)
2. Teste a conversão de cliques
3. Monitore performance e uptime
4. Configure backups automáticos
5. Implemente monitoramento de erros (Sentry, etc.)

---

**Versão:** 1.0  
**Data:** Março 2026  
**Última atualização:** 2026-03-05
