# DML Serviços Elétricos — Landing Page

Landing page estática (Next.js + TypeScript + Tailwind CSS v4 + GSAP) construída para
converter visitantes em pedidos de orçamento pelo WhatsApp. Sem backend, sem CMS —
todo conteúdo editável vive em `config/` e `data/`.

## Rodando o projeto

Requer Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros comandos:

```bash
npm run build     # build de produção (também roda o type-check do TypeScript)
npm run start     # serve o build de produção localmente
npm run lint      # ESLint
```

O projeto builda sem erros de TypeScript e sem warnings de lint (verificado antes da
entrega).

## Publicar na Vercel

1. Suba o repositório para o GitHub/GitLab.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new) — nenhuma configuração
   extra é necessária, o preset Next.js é detectado automaticamente.
3. Depois do primeiro deploy, atualize `config/site.ts` → `url` para o domínio real e
   redeploy.

Publicar via Vercel (em vez de um servidor próprio com Nginx/Docker, como na tentativa
anterior) elimina praticamente toda a superfície de erro de hospedagem que costuma
causar problemas específicos de Safari/iOS (certificado TLS, headers, compressão) —
o certificado e os headers ficam a cargo da própria Vercel.

## O que ainda precisa ser preenchido

Todos os dados de contato ficam centralizados em **`config/site.ts`**. Antes de publicar,
revise:

| Campo | Status |
|---|---|
| `phoneDisplay` / `whatsappNumber` | ✅ Preenchido com o número real informado no projeto de design ((41) 99961-8109) |
| `city` / `state` / `serviceArea` | ✅ Preenchido (Fazenda Rio Grande - PR) |
| `instagram` | ✅ Preenchido (`@dmlservicoseletricos`, encontrado no material da DML) — confirme se é o handle correto |
| `email` | ⚠️ Placeholder (`contato@dmlservicoseletricos.com.br`) — **substitua pelo e-mail real ou remova o campo do footer** |
| `url` | ⚠️ Placeholder (`https://www.dmlservicoseletricos.com.br`) — **defina o domínio real**; usado em metadata, sitemap e dados estruturados |
| `hours` | Assumido como "Plantão 24 horas, todos os dias" com base no posicionamento do projeto original — confirme |

Outros pontos pendentes:

- **Depoimentos**: a seção de depoimentos não foi incluída porque não há avaliações
  reais disponíveis ainda (nenhum texto placeholder/fictício foi criado, conforme
  solicitado). Quando houver depoimentos reais, é só criar um `data/testimonials.ts` e
  um componente `Testimonials.tsx` seguindo o padrão dos demais.
- **Política de privacidade / Termos de uso**: as páginas existem
  (`app/politica-de-privacidade`, `app/termos-de-uso`) mas contêm apenas um aviso de
  espaço reservado — o conteúdo jurídico definitivo precisa ser escrito por um
  responsável legal.

## Onde substituir fotos e logo

- **Logo**: `public/images/logo/dml-logo.png` (usada no header e no footer, dentro de
  um "chip" branco para preservar a margem de segurança e o contraste). O arquivo
  original enviado (`1 LOGO ORIGINAL - COM FUNDO 2.pdf`) foi preservado em
  `brand-assets/dml-logo-original.pdf` e não foi redesenhado.
- **Fotos**: `public/images/portfolio/*` (galeria de projetos) e
  `public/images/about/*` (seção "Sobre"). Todas as 12 fotos do portfólio e a foto da
  seção "Sobre" são fotos reais de serviços da DML (fornecidas pelo cliente) — não há
  nenhuma imagem de banco de imagens ou placeholder. Para trocar/adicionar fotos, edite
  `data/portfolio.ts`.
- As fotos originais enviadas (29 arquivos) ficam em `_source-photos/` na raiz do
  projeto — não fazem parte do build (pasta ignorada no git), servem apenas de acervo
  para trocar alguma foto da galeria depois.

## Decisões de escopo

- O conteúdo e a estrutura da página seguem fielmente o template aprovado no Claude
  Design (`templates/landing-page/LandingPage.dc.html`, importado via o arquivo
  `DML Design System-handoff.zip` que já estava no Desktop — o acesso direto ao MCP de
  design retornou 403, então o handoff local foi usado como fonte). Esse template tem
  um recorte de seções mais enxuto (Hero, Sobre, Categorias, Serviços, Como funciona,
  Projetos, Dúvidas + área de atendimento, Contato, Footer) do que o briefing genérico
  colado na conversa (que pedia 8 cards de serviço, seção de alerta, diferenciais,
  depoimentos etc.). Priorizei implementar fielmente o arquivo `.dc.html` — que reflete
  dados reais já validados (telefone, WhatsApp, cidade, bairros atendidos) — em vez do
  briefing genérico. Se você quiser as seções extras do briefing (Diferenciais, Sinais
  de alerta, grade de 8 serviços), me avise que eu adiciono.
- **Animação**: GSAP + ScrollTrigger (não Framer Motion) para toda a página, conforme
  pedido explícito na conversa — evita ter duas bibliotecas de animação concorrentes no
  bundle. Todas as animações respeitam `prefers-reduced-motion`.
- **Header**: sempre claro com blur (não transparente-para-escuro no scroll) — replica
  o header do template aprovado e evita listeners de scroll que costumam causar jank em
  Safari iOS.

## Notas de compatibilidade com iPhone/Safari

O projeto anterior (pasta `SITE DML ELETRICISTA`) não abria em iPhones. Não foi
possível confirmar a causa exata (provavelmente hospedagem própria via
Nginx/Docker/`.htaccess`), mas esta implementação foi construída evitando de propósito
as causas mais comuns desse tipo de problema:

- Altura de viewport usa `dvh` com fallback para `vh` (`--vh-full` em `globals.css`),
  em vez de `100vh` fixo — evita que a barra de endereço do Safari corte conteúdo.
- Nenhum `background-attachment: fixed` (bug clássico de parallax no iOS Safari).
- Nenhuma animação/JS toca `window`/`document` durante o SSR — tudo em componentes
  `"use client"` com `useEffect`, com checagem de ambiente.
- Ícones são componentes React (`lucide-react`), não um script externo que injeta
  ícones em runtime via `data-lucide` (o site anterior dependia de um script CDN da
  Lucide carregando a tempo).
- `viewport-fit=cover` + `env(safe-area-inset-*)` no header, footer e botão flutuante
  do WhatsApp, para respeitar o notch/home indicator.
- Testado com Playwright emulando iPhone 13 (390×844): sem erros de console, sem
  overflow horizontal, menu mobile e botão flutuante funcionando.

Ainda assim, recomendo testar num iPhone físico (ou BrowserStack) antes do lançamento
final — não há substituto para o hardware real.

## Estrutura

```
app/            rotas (App Router), layout, SEO, sitemap, robots
components/     componentes de UI (a maioria Server Components; interatividade
                isolada em componentes "use client" pontuais)
config/site.ts  todos os dados de contato/empresa — edite só aqui
data/           conteúdo de cada seção (serviços, portfólio, FAQ, etc.)
lib/            helpers (GSAP, analytics, class-merge)
public/images/  logo e fotos reais
brand-assets/   arquivo original da logo (PDF), preservado sem alterações
_source-photos/ fotos originais enviadas pelo cliente (não versionadas)
```
