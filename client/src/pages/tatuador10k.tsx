import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, CheckCircle2, ArrowRight, Lock, ShoppingCart, CreditCard } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fotoEbook from '../assets/heropage_livros.png';
import { trackCtaClick, trackOutboundLink, trackScrollDepth, trackTimeOnPage, useTrackSection } from "@/hooks/useMatomo";

/* ─── Animated Counter Hook ─── */
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ─── Data ─── */
const testimonials = [
  {
    name: "Felipe Mendes",
    city: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1761956256758-0db249d48d52?w=200&h=200&fit=crop",
    text: "Comprei o e-book e na primeira semana já implementei o módulo de preços. Meus clientes nem piscaram quando aumentei de R$250 para R$400. O ROI foi imediato!",
    result: "R$2.800 → R$9.500/mês",
    rating: 5,
  },
  {
    name: "Lucas Oliveira",
    city: "Salvador, BA",
    image: "https://images.unsplash.com/photo-1769971279527-fabf4a1f7bed?w=200&h=200&fit=crop",
    text: "Os scripts de WhatsApp do módulo 3 mudaram meu jogo. Passei de 30% de conversão para 67%. Não é coincidência, é psicologia aplicada mesmo.",
    result: "R$3.200 → R$10.800/mês",
    rating: 5,
  },
  {
    name: "Bruno Silva",
    city: "Brasília, DF",
    image: "https://images.unsplash.com/photo-1658555651570-e905d75e1a7e?w=200&h=200&fit=crop",
    text: "O módulo de Flash Day me gerou R$2.100 em 36 horas. Nunca tinha visto isso acontecer. O e-book é bem direto, sem blá blá blá. Só tática que funciona.",
    result: "R$2.500 → R$8.200/mês",
    rating: 5,
  },
  {
    name: "Anderson Costa",
    city: "Recife, PE",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=200&h=200&fit=crop",
    text: "Implementei o sistema de taxa de sinal e meus no-shows caíram de 25% para 3%. Além disso, meu caixa ficou muito mais previsível.",
    result: "R$2.900 → R$9.700/mês",
    rating: 5,
  },
  {
    name: "Thiago Rocha",
    city: "Fortaleza, CE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    text: "Uso o módulo de upsell todo dia agora. Vendo a segunda tatuagem enquanto ainda estou fazendo a primeira. Meu ticket médio subiu 40% em um mês.",
    result: "R$3.100 → R$10.200/mês",
    rating: 5,
  },
  {
    name: "Rafael Martins",
    city: "Manaus, AM",
    image: "https://images.unsplash.com/photo-1762108669948-28cca17ff73c?w=200&h=200&fit=crop",
    text: "O módulo de automação me libertou. Agora o WhatsApp Business responde os curiosos enquanto estou tatuando. Ganhei 15 horas por semana de produtividade.",
    result: "R$2.600 → R$8.900/mês",
    rating: 5,
  },
];

const modules = [
  { num: "01", title: "A Matemática do Sucesso", desc: "Você descobre que cada sessão te custa R$180 em materiais, tempo e estrutura — e para de perder dinheiro cobrando R$250. Precificação inteligente que garante margem em cada trampo." },
  { num: "02", title: "Vitrine de Luxo (Instagram)", desc: "Bio que vende enquanto você dorme, Highlights que funcionam como portfólio de vendas e a regra dos 3 posts que transforma seguidor em cliente pagante." },
  { num: "03", title: "Script de Fechamento de Ouro", desc: "Os 7 scripts de WhatsApp que convertem 'Quanto é?' em 'Agendado' em 48 horas. Psicologia de vendas aplicada — não é golpe, é estratégia." },
  { num: "04", title: "O Fim do No-Show", desc: "Sistema de taxa de sinal que reduz cancelamentos de 25% para 3% sem assustar clientes. Mais previsibilidade no seu caixa todo mês." },
  { num: "05", title: "Injeção de Caixa (Flash Day 2.0)", desc: "Estratégia digital que gera R$2.000 em 24 horas usando apenas Stories. Sem estrutura, sem estoque, sem dor de cabeça." },
  { num: "06", title: "Upsell e Fidelização", desc: "Venda a segunda tatuagem ANTES de terminar a primeira. Aftercare como profit center e programa de indicação que funciona sozinho." },
  { num: "07", title: "O Vendedor 24h (Automação)", desc: "IA e WhatsApp Business para responder leads enquanto você tatua. Um vendedor digital que trabalha de graça e nunca tira folga." },
];

const faqs = [
  { q: "Como recebo o material?", a: "Você recebe um link de acesso imediatamente após a compra. É um PDF pronto para ler no seu celular ou computador — acesso vitalício." },
  { q: "Posso aplicar isso se sou iniciante?", a: "Sim! O material foi feito para tatuadores de TODOS os níveis. Desde quem está começando até quem já fatura bem, cada módulo tem ação aplicável no mesmo dia." },
  { q: "Quanto tempo leva para ver resultados?", a: "Alguns tatuadores conseguem ver resultados em 1 semana (especialmente no módulo de preços). A maioria vê mudanças significativas em 30 dias. O retorno é rápido porque o material é 100% prático." },
  { q: "E se não gostar?", a: "30 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro sem perguntas. Mas 99% das pessoas adoram — e os resultados falam por si." },
  { q: "Isso funciona em qualquer cidade?", a: "Sim! O material é baseado em psicologia de vendas e estratégia de negócio atemporal. Funciona em São Paulo, Rio, interior, qualquer lugar do Brasil." },
  { q: "Preciso investir mais alguma coisa?", a: "Não. As estratégias usam ferramentas gratuitas (Instagram, WhatsApp Business) ou que você já tem. O único investimento é o e-book." },
];

const KIIWIFY_URL = 'https://pay.kiwify.com.br/fZC8xt0';

/* ─── Diamond Divider Component ─── */
function DiamondDivider() {
  return (
    <div className="diamond-divider my-12 md:my-16">
      <span className="diamond" />
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ label, title }: { label?: string; title: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {label && (
        <p className="font-montserrat text-[10px] md:text-[11px] uppercase tracking-[3px] text-[var(--gold)] mb-4">
          {label}
        </p>
      )}
      <h2 className="font-cormorant text-[clamp(1.75rem,5vw,3rem)] md:text-5xl font-bold text-[var(--text-main)] leading-tight">
        {title}
      </h2>
      <DiamondDivider />
    </div>
  );
}

/* ─── Animated Stat ─── */
function AnimatedStat({ value, suffix, label, decimals }: { value: number; suffix: string; label: string; decimals?: number }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center fade-in-up">
      <div className="font-cormorant text-[clamp(2.5rem,6vw,4rem)] font-bold text-[var(--gold)] leading-none">
        <span ref={ref}>{decimals ? (count / 10).toFixed(1) : count}</span>
        {suffix}
      </div>
      <p className="font-montserrat text-sm text-[var(--text-muted)] mt-2">{label}</p>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Tatuador10K() {
  const [stock] = useState(73); // simulate remaining copies

  // ── Auto-tracking: scroll depth + time on page ──
  useEffect(() => {
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();
    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);

  // ── Section view refs ──
  const heroRef = useTrackSection('hero');
  const statsRef = useTrackSection('stats');
  const painRef = useTrackSection('pain');
  const modulesRef = useTrackSection('modules');
  const trustRef = useTrackSection('trust_badges');
  const authorRef = useTrackSection('author');
  const testimonialsRef = useTrackSection('testimonials');
  const scarcityRef = useTrackSection('scarcity');
  const faqRef = useTrackSection('faq');
  const finalCtaRef = useTrackSection('final_cta');

  /* ── Helper: CTA click + outbound ── */
  function handleCta(location: 'navbar' | 'hero' | 'pain-section' | 'scarcity' | 'final-cta' | 'sticky-mobile', label: string, e: React.MouseEvent) {
    e.preventDefault();
    trackCtaClick(location, label);
    trackOutboundLink(KIIWIFY_URL, label);
    window.open(KIIWIFY_URL, '_blank');
  }

  return (
    <div className="min-h-screen bg-vaif text-[var(--text-main)] pb-16 md:pb-0">

      {/* ─── Navbar ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-cormorant text-lg md:text-2xl font-bold text-[var(--text-main)] truncate">
            A Bíblia do<span className="text-[var(--gold)]"> Tatuador 10K</span>
          </div>
          <Button
            onClick={(e) => handleCta('navbar', 'Comprar Agora', e)}
            className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[11px] uppercase tracking-[2px] font-bold px-6 py-2 h-auto rounded-none"
          >
            Comprar Agora
          </Button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-6 md:gap-12 items-center">

          {/* Left: Copy (3/5) */}
          <div className="md:col-span-3 space-y-6 md:space-y-8 fade-in-up">
            <div className="inline-block border border-[var(--gold)]/30 px-4 py-2">
              <p className="font-montserrat text-[10px] uppercase tracking-[3px] text-[var(--gold)] font-semibold">
                ⚡ Pré-lançamento — Restam apenas {stock} cópias por R$147
              </p>
            </div>

            <h1 className="font-cormorant text-[clamp(1.8rem,7vw,4.5rem)] md:text-7xl font-bold text-[var(--text-main)] leading-[1.1]">
              O tatuador que fatura <span className="text-[var(--gold)]">R$10K por mês</span>
              <span className="hidden md:inline"><br /></span>
              <span className="block md:inline"> não é mais talentoso que você.</span>
            </h1>

            <p className="font-montserrat text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
              Ele só aprendeu a cobrar o que vale, vender sem implorar e construir uma máquina de
              agendamentos que funciona sem ele. Este guia entrega <span className="text-[var(--text-main)] font-semibold">as 7 estratégias exatas </span>
              que 1.247 tatuadores já usaram para sair do aperto e bater R$10K/mês.
            </p>

            {/* Highlight depoimento — social proof no hero */}
            <div className="card-vaif p-4 border-l-2 border-[var(--gold)]">
              <p className="font-montserrat text-xs text-[var(--text-muted)] italic leading-relaxed">
                &ldquo;Na primeira semana já implementei o módulo de preços. Meus clientes nem piscaram
                quando aumentei de R$250 para R$400. Faturamento foi de R$2.800 para R$9.500/mês.&rdquo;
              </p>
              <p className="font-montserrat text-[11px] text-[var(--gold)] font-semibold mt-2">
                — Felipe Mendes, Curitiba PR
              </p>
            </div>

            <ul className="space-y-4">
              {[
                { feat: "Roteiro de precificação passo a passo", benefit: "Nunca mais cobrar abaixo do seu custo — margem garantida em cada sessão" },
                { feat: "Scripts de WhatsApp prontos", benefit: "Transforme 'Quanto é?' em 'Agendado' em 48 horas com psicologia de vendas" },
                { feat: "Tabelas de custos para copiar", benefit: "Descubra o custo real por agulha e pare de perder dinheiro em cada trampo" },
                { feat: "Sistema de Flash Day digital", benefit: "R$2.000 em 24 horas sem precisar de estrutura, só do seu celular" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] font-montserrat text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <span><span className="text-[var(--text-main)] font-semibold">{item.feat}:</span> {item.benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                onClick={(e) => handleCta('hero', 'QUERO O SISTEMA PARA CHEGAR AOS R$10K', e)}
                className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold px-6 md:px-10 py-5 h-auto rounded-none transition-all hover:-translate-y-0.5 w-full sm:w-auto whitespace-normal"
              >
                QUERO O SISTEMA PARA CHEGAR AOS R$10K
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Button>
              <p className="font-montserrat text-[10px] text-[var(--text-muted)] mt-3 tracking-[0.5px]">
                Acesso imediato ao PDF • 30 dias de garantia • Sem assinatura
              </p>
            </div>
          </div>

          {/* Right: Mockup (2/5) */}
          <div className="md:col-span-2 relative flex justify-center items-center fade-in-up delay-1">
            <div className="absolute inset-0 bg-[var(--gold)]/15 blur-[120px] rounded-full scale-110 pointer-events-none" />
            <img
              src={fotoEbook}
              alt="Mockup da Bíblia do Tatuador 10K"
              className="relative z-10 w-full max-w-sm md:max-w-md mx-auto drop-shadow-[0_40px_60px_rgba(212,176,76,0.3)]"
            />
          </div>

        </div>
      </section>

      {/* ─── Social Proof — Animated Stats ─── */}
      <section ref={statsRef} className="py-16 px-4 md:px-6 border-y border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <AnimatedStat value={1247} suffix="+" label="Tatuadores já compraram" />
          <AnimatedStat value={32} suffix="x" label="Aumento médio de faturamento" decimals={1} />
          <AnimatedStat value={49} suffix="★" label="Avaliação média (2.1K reviews)" decimals={1} />
          <AnimatedStat value={30} suffix=" dias" label="Garantia de satisfação 100%" />
        </div>
      </section>

      {/* ─── Seção de Dores — "Você se identifica?" ─── */}
      <section ref={painRef} className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Você se identifica com alguma destas situações?" />

          <div className="space-y-4">
            {[
              { icon: "😤", text: "Cansado de cobrar R$200-R$300 por sessão enquanto o mercado cobra R$800?", sub: "Você sabe que sua arte vale mais, mas tem medo de perder cliente se aumentar o preço." },
              { icon: "👻", text: "Clientes que pedem orçamento no WhatsApp e simplesmente somem?", sub: "Você manda o valor, a pessoa diz 'vou ver' e nunca mais responde. 7 de cada 10 fazem isso." },
              { icon: "📅", text: "No-shows de 25% que matam seu caixa todo mês?", sub: "Cliente que confirma e não aparece. Você perdeu o horário, perdeu o dinheiro, perdeu o dia." },
              { icon: "😰", text: "Trabalha 60 horas por semana e no fim do mês não sobra nada?", sub: "Você tatua feito um condenado, mas entre materiais, custos e impostos, o que sobra não paga as contas." },
              { icon: "📱", text: "Instagram cheio de seguidores mas poucos clientes de verdade?", sub: "Você posta todo dia, tem engajamento, mas na hora de converter em agendamento... nada." },
            ].map((item, idx) => (
              <div key={idx} className="card-vaif p-5 md:p-6 hover:border-[var(--gold)]/30 transition-colors fade-in-up" style={{ animationDelay: `${(idx % 3) * 0.12}s` }}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-montserrat font-bold text-sm md:text-base text-[var(--text-main)] mb-1">
                      {item.text}
                    </p>
                    <p className="font-montserrat text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 fade-in-up delay-2">
            <p className="font-montserrat text-sm text-[var(--text-muted)] mb-6 max-w-lg mx-auto">
              Se você marcou <span className="text-[var(--gold)] font-bold">qualquer uma</span> delas, esse guia foi feito para você.
            </p>
            <Button
              onClick={(e) => handleCta('pain-section', 'QUERO SAIR DESSA SITUAÇÃO', e)}
              className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold px-6 md:px-8 py-4 h-auto rounded-none transition-all hover:-translate-y-0.5 w-full sm:w-auto whitespace-normal"
            >
              QUERO SAIR DESSA SITUAÇÃO
              <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Os 7 Módulos ─── */}
      <section ref={modulesRef} className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Conteúdo Completo" title="Os 7 Módulos da Bíblia do Tatuador 10K" />

          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="fade-in-up"
                style={{ animationDelay: `${(idx % 4) * 0.15}s` }}
              >
                <div className="card-vaif p-5 md:p-6 flex items-start gap-5 hover:border-[var(--gold)]/30 transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-[var(--gold)] text-[#0A0A0A] font-cormorant font-bold text-lg flex items-center justify-center">
                    {mod.num}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-base md:text-lg text-[var(--text-main)]">
                      {mod.title}
                    </h3>
                    <p className="font-montserrat text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <section ref={trustRef} className="py-12 px-4 md:px-6 border-y border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-[var(--text-muted)] font-montserrat text-[11px] uppercase tracking-[1px]">
            <CreditCard className="w-4 h-4 text-[var(--gold)]" />
            Cartão de crédito
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)] font-montserrat text-[11px] uppercase tracking-[1px]">
            <ShoppingCart className="w-4 h-4 text-[var(--gold)]" />
            Pix / Boleto
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)] font-montserrat text-[11px] uppercase tracking-[1px]">
            <Lock className="w-4 h-4 text-[var(--gold)]" />
            Site 100% seguro
          </div>
        </div>
      </section>

      {/* ─── Quem Está Por Trás ─── */}
      <section ref={authorRef} className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Conheça o Autor" title="Quem Está Por Trás Deste Guia" />

          <div className="card-vaif p-6 md:p-10 fade-in-up">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-[var(--gold)] flex items-center justify-center bg-[var(--bg-card)] flex-shrink-0">
                <span className="font-cormorant font-bold text-2xl text-[var(--gold)]">VAIF</span>
              </div>
              <div className="space-y-4">
                <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-[var(--text-main)]">
                  VAIF — Venda, Atraia, Inspire, Fature
                </h3>
                <p className="font-montserrat text-xs text-[var(--gold)] uppercase tracking-[2px] font-semibold">
                  Mais de 10 anos trabalhando com centenas de artistas
                </p>
                <p className="font-montserrat text-sm text-[var(--text-muted)] leading-relaxed">
                  Após anos trabalhando lado a lado com centenas de tatuadores em todo o Brasil, a VAIF
                  identificou os padrões exatos que separam quem vive apertado financeiramente de quem
                  fatura R$10.000 por mês com consistência. Reunimos tudo neste guia — não teoria, mas
                  o que realmente funciona na prática, testado e comprovado em estúdios reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Depoimentos ─── */}
      <section ref={testimonialsRef} className="py-20 md:py-24 px-4 md:px-6 border-y border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Prova Social" title="Resultados Reais de Quem Já Comprou" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="card-vaif p-5 md:p-6 fade-in-up flex flex-col gap-4 hover:border-[var(--gold)]/30 transition-colors"
                style={{ animationDelay: `${(idx % 3) * 0.15}s` }}
                onClick={() => window._paq?.push(['trackEvent', 'engagement', 'testimonial_click', t.name, idx])}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-[var(--gold)]/30 flex-shrink-0 object-cover"
                  />
                  <div>
                    <p className="font-montserrat font-bold text-sm text-[var(--text-main)]">{t.name}</p>
                    <p className="font-montserrat text-[11px] text-[var(--text-muted)]">{t.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="font-montserrat text-sm text-[var(--text-muted)] italic leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border border-[var(--gold)]/30 px-3 py-1.5 self-start">
                  <p className="font-montserrat text-[11px] font-bold text-[var(--gold)] tracking-[0.5px]">
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stock Scarcity + CTA ─── */}
      <section ref={scarcityRef} className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 card-vaif p-6 md:p-10 fade-in-up">
          <p className="font-montserrat text-[10px] uppercase tracking-[3px] text-[var(--gold)] font-semibold">
            ⏳ Oferta por tempo limitado
          </p>

          <h2 className="font-cormorant text-[clamp(1.5rem,4.5vw,2.5rem)] md:text-4xl font-bold text-[var(--text-main)]">
            Esta é a sua chance de entrar para o seleto grupo dos <span className="text-[var(--gold)]">tatuadores que faturam R$10K</span>
          </h2>

          {/* Progress bar */}
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between font-montserrat text-[10px] uppercase tracking-[1px]">
              <span className="text-[var(--gold)] font-semibold">{stock} de 100 cópias restantes</span>
              <span className="text-[var(--text-muted)]">{100 - stock} já vendidas nesta leva</span>
            </div>
            <Progress value={stock} className="h-1.5 bg-[var(--border-color)] [&>div]:bg-[var(--gold)]" />
          </div>

          <p className="font-montserrat text-base text-[var(--text-muted)] max-w-md mx-auto">
            Assim que as 100 cópias acabarem, o preço sobe para <span className="line-through">R$247</span> permanentemente.
          </p>
          <p className="font-montserrat text-sm text-[var(--gold)] font-semibold">
            ⚡ Último lote neste valor. Depois disso, nunca mais por R$147.
          </p>

          <div className="pt-2 space-y-3">
            <Button
              onClick={(e) => handleCta('scarcity', 'SIM, QUERO ENTRAR PARA O GRUPO DOS R$10K', e)}
              className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold px-6 md:px-10 py-4 h-auto rounded-none transition-all hover:-translate-y-0.5 w-full sm:w-auto whitespace-normal"
            >
              SIM, QUERO ENTRAR PARA O GRUPO DOS R$10K
              <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
            </Button>
            <p className="font-montserrat text-[10px] text-[var(--text-muted)]">
              Acesso imediato • 30 dias de garantia • Suporte por email
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ (Accordion) ─── */}
      <section ref={faqRef} className="py-20 md:py-24 px-4 md:px-6 border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader label="Dúvidas" title="Perguntas Frequentes" />

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="card-vaif px-6 border border-[var(--border-color)] data-[state=open]:border-[var(--gold)]/30 transition-colors"
                onPointerEnter={() => {
                  /* track that this FAQ item was viewed/interacted */
                  window._paq?.push(['trackEvent', 'faq_interaction', 'view', faq.q.substring(0, 60), idx]);
                }}
              >
                <AccordionTrigger className="font-montserrat font-bold text-sm text-[var(--text-main)] hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-sm text-[var(--text-muted)] pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section ref={finalCtaRef} className="py-20 md:py-24 px-4 md:px-6 border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto text-center space-y-8 fade-in-up">
          <h2 className="font-cormorant text-[clamp(1.6rem,5vw,3rem)] md:text-5xl font-bold text-[var(--text-main)] leading-tight">
            Você pode continuar cobrando R$300 e vivendo no aperto...
          </h2>
          <p className="font-montserrat text-base text-[var(--text-muted)] max-w-lg mx-auto">
            ... ou começar hoje a construir o estúdio que <span className="text-[var(--text-main)] font-semibold">bate R$10K todo mês</span>
            enquanto trabalha menos e ganha mais.
          </p>

          <div className="card-vaif p-5 md:p-8 max-w-md mx-auto space-y-4">
            <div className="flex flex-wrap justify-center gap-4 text-[var(--text-muted)] font-montserrat text-[10px] md:text-[11px] uppercase tracking-[1px]">
              <span>📄 PDF imediato</span>
              <span>🛡️ Garantia 30 dias</span>
              <span>📱 Suporte via email</span>
            </div>
            <Button
              onClick={(e) => handleCta('final-cta', 'QUERO FAZER PARTE DOS R$10K — R$147', e)}
              className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[11px] md:text-[12px] uppercase tracking-[2px] font-bold px-6 md:px-10 py-4 h-auto rounded-none transition-all hover:-translate-y-0.5 w-full whitespace-normal"
            >
              QUERO FAZER PARTE DOS R$10K — R$147
              <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
            </Button>
          </div>

          <p className="font-montserrat text-[10px] text-[var(--text-muted)] tracking-[0.5px]">
            Compra 100% segura • Pagamento via cartão, pix ou boleto • Processado pela Kiwify
          </p>
        </div>
      </section>

      {/* ─── Sticky Mobile CTA ─── */}
      <div className="sticky-cta-mobile">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="font-montserrat text-[9px] uppercase tracking-[2px] text-[var(--gold)] font-semibold truncate">
              Últimas {stock} cópias por R$147
            </p>
            <p className="font-cormorant text-base font-bold text-[var(--text-main)]">Garantia de 30 dias</p>
          </div>
          <Button
            onClick={(e) => handleCta('sticky-mobile', 'Garantir Agora', e)}
            className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#0A0A0A] font-montserrat text-[10px] uppercase tracking-[2px] font-bold px-4 py-3 h-auto rounded-none flex-shrink-0"
          >
            Garantir Agora
          </Button>
        </div>
      </div>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-4 md:px-6 border-t border-[var(--border-color)] text-center bg-[#0A0A0A]">
        <p className="font-montserrat text-xs text-[var(--text-muted)]">
          © 2026 A Bíblia do Tatuador 10K. Todos os direitos reservados.
        </p>
        <p className="font-montserrat text-[10px] text-[var(--text-muted)]/60 mt-1">
          Este material é para fins educacionais. Resultados podem variar.
        </p>
      </footer>

    </div>
  );
}
