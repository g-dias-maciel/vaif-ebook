import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap, TrendingUp, Shield, BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Felipe Mendes",
      city: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "Comprei o e-book e na primeira semana já implementei o módulo de preços. Meus clientes nem piscaram quando aumentei de R$250 para R$400. O ROI foi imediato!",
      result: "R$2.800 → R$9.500/mês",
      rating: 5
    },
    {
      name: "Lucas Oliveira",
      city: "Salvador, BA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "Os scripts de WhatsApp do módulo 3 mudaram meu jogo. Passei de 30% de conversão para 67%. Não é coincidência, é psicologia aplicada mesmo. Recomendo demais!",
      result: "R$3.200 → R$10.800/mês",
      rating: 5
    },
    {
      name: "Bruno Silva",
      city: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      text: "O módulo de Flash Day me gerou R$2.100 em 36 horas. Nunca tinha visto isso acontecer. O e-book é bem direto, sem blá blá blá. Só tática que funciona.",
      result: "R$2.500 → R$8.200/mês",
      rating: 5
    },
    {
      name: "Anderson Costa",
      city: "Recife, PE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "Implementei o sistema de taxa de sinal e meus no-shows caíram de 25% para 3%. Além disso, meu caixa ficou muito mais previsível. Vale cada centavo investido.",
      result: "R$2.900 → R$9.700/mês",
      rating: 5
    },
    {
      name: "Thiago Rocha",
      city: "Fortaleza, CE",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "Uso o módulo de upsell todo dia agora. Vendo a segunda tatuagem enquanto ainda estou fazendo a primeira. Meu ticket médio subiu 40% em um mês.",
      result: "R$3.100 → R$10.200/mês",
      rating: 5
    },
    {
      name: "Rafael Martins",
      city: "Manaus, AM",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      text: "O módulo de automação me libertou. Agora o WhatsApp Business responde os curiosos enquanto estou tatuando. Ganhei 15 horas por semana de produtividade.",
      result: "R$2.600 → R$8.900/mês",
      rating: 5
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Módulo 1: A Matemática do Sucesso",
      description: "Descubra seu custo real por agulha e nunca mais cobre menos de R$300 por sessão."
    },
    {
      icon: Zap,
      title: "Módulo 2: Vitrine de Luxo (Instagram)",
      description: "Transforme seu Instagram em uma máquina de vendas com a regra dos 3 posts."
    },
    {
      icon: BookOpen,
      title: "Módulo 3: Script de Fechamento de Ouro",
      description: "Os scripts de WhatsApp que convertem 'Quanto é?' em 'Agendado' em 48 horas."
    },
    {
      icon: Shield,
      title: "Módulo 4: O Fim do No-Show",
      description: "Sistema de taxa de sinal que reduz cancelamentos e aumenta sua confiabilidade."
    },
    {
      icon: TrendingUp,
      title: "Módulo 5: Injeção de Caixa (Flash Day 2.0)",
      description: "Gere R$2.000 em 24 horas com sua estratégia de Flash Day digital."
    },
    {
      icon: Zap,
      title: "Módulo 6: Upsell e Fidelização",
      description: "Venda a segunda tatuagem ANTES de terminar a primeira. Aftercare como profit center."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md z-50 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-amber-500">O Tatuador</span> <span className="text-amber-300">10K</span>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold">
            Comprar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section - Premium Image */}
      <section className="pt-24 pb-0 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 py-12">
              <div className="space-y-4">
                <div className="inline-block bg-amber-600/20 border border-amber-600/50 rounded-full px-4 py-2 text-sm font-semibold text-amber-300">
                  ⚡ Limitado: Apenas 100 cópias por R$100
                </div>
                <h1 className="text-6xl md:text-7xl font-black leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Domine o Mercado. Faturamento <span className="text-amber-500">R$10K</span> Mensal.
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>
                  O guia prático que tatuadores brasileiros estão usando para triplicar seu faturamento sem aumentar o número de clientes. Pronto para aplicar. Sem teoria vazia.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <Check className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span>7 módulos prontos para implementar hoje</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <Check className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span>Scripts de vendas que FUNCIONAM no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <Check className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span>Tabelas de preços e custos para copiar</span>
                </div>
                <div className="flex items-center gap-3 text-lg text-gray-200">
                  <Check className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span>Estratégia de Flash Day que gera R$2K em 24h</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-black text-lg h-16 rounded-lg shadow-2xl hover:shadow-amber-600/50 flex items-center gap-2">
                  QUERO MINHA CÓPIA AGORA
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">Acesso imediato ao PDF. Sem assinatura. Sem surpresas.</p>
            </div>

            {/* Right - Hero Image */}
            <div className="relative h-full">
              <img 
                src="/home/ubuntu/upload/Gemini_Generated_Image_fi7hsbfi7hsbfi7h.png"
                alt="Tatuador profissional com o e-book"
                className="w-full h-auto rounded-xl shadow-2xl border-2 border-amber-600/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Quick Stats */}
      <section className="py-16 px-4 bg-slate-900/50 border-y border-amber-600/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500">1,247+</div>
            <p className="text-gray-300 mt-2">Tatuadores já compraram</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-400">3.2x</div>
            <p className="text-gray-300 mt-2">Aumento médio de faturamento</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-500">4.9★</div>
            <p className="text-gray-300 mt-2">Avaliação média (2.1K reviews)</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-amber-400">30 dias</div>
            <p className="text-gray-300 mt-2">Garantia de satisfação 100%</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-amber-500">O Que Você Vai Aprender</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-amber-600/30 p-8 hover:border-amber-600/60 transition-all hover:shadow-lg hover:shadow-amber-600/20">
                  <Icon className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{feature.title}</h3>
                  <p className="text-gray-300" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/20 to-slate-950 border-y border-amber-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-amber-500">Resultados Reais do E-book</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>Tatuadores que já implementaram e triplicaram seu faturamento</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-amber-600/30 p-8 cursor-pointer hover:border-amber-600/60 transition-all hover:shadow-lg hover:shadow-amber-600/20"
                onClick={() => setSelectedTestimonial(idx)}
              >
                <div className="space-y-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-2 border-amber-500 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.city}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic" style={{ fontFamily: "'Sora', sans-serif" }}>{testimonial.text}</p>
                  <div className="inline-block bg-amber-600/20 border border-amber-600/50 rounded-lg px-4 py-2 text-sm font-semibold text-amber-300">
                    {testimonial.result}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-amber-500">Os 7 Módulos</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "1", title: "A Matemática do Sucesso", desc: "Custo por agulha, fixed costs e precificação inteligente" },
              { num: "2", title: "Vitrine de Luxo (Instagram)", desc: "Bio otimizada, Highlights estratégicos e a regra dos 3 posts" },
              { num: "3", title: "Script de Fechamento de Ouro", desc: "Psicologia de vendas no WhatsApp: de 'Quanto é?' a 'Agendado'" },
              { num: "4", title: "O Fim do No-Show", desc: "Sistema de taxa de sinal sem assustar clientes" },
              { num: "5", title: "Injeção de Caixa (Flash Day 2.0)", desc: "Gere R$2.000 em 24 horas com Stories" },
              { num: "6", title: "Upsell e Fidelização", desc: "Venda a segunda tatuagem antes de terminar a primeira" },
              { num: "7", title: "O Vendedor 24h (Automação)", desc: "AI tools e WhatsApp Business para responder enquanto tatua" }
            ].map((module, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-amber-600/30 p-6 hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-600/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 flex items-center justify-center font-bold text-lg flex-shrink-0 text-slate-950">
                    {module.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{module.title}</h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>{module.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600/10 to-amber-500/10 border-y border-amber-600/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>⚠️ <span className="text-amber-500">Oferta Limitada</span></h2>
          <p className="text-xl text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Apenas <span className="font-black text-amber-400">100 cópias</span> disponíveis por <span className="font-black text-amber-500">R$100</span>
          </p>
          <p className="text-gray-300" style={{ fontFamily: "'Sora', sans-serif" }}>
            Depois disso, o preço sobe para <span className="line-through">R$297</span>. Não é brincadeira.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-black text-lg h-16 rounded-lg shadow-2xl hover:shadow-amber-600/50 flex items-center gap-2 mx-auto">
              GARANTIR MINHA CÓPIA AGORA
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-amber-500">Perguntas Frequentes</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Como recebo o material?", a: "Você recebe um link de download imediatamente após a compra. É um PDF pronto para ler no seu celular ou computador." },
              { q: "Posso aplicar isso se sou iniciante?", a: "Sim! O material foi feito para tatuadores de TODOS os níveis. Desde quem está começando até quem já fatura bem, tem conteúdo aplicável." },
              { q: "Quanto tempo leva para ver resultados?", a: "Alguns tatuadores veem resultados em 1 semana (especialmente no módulo de preços). A maioria vê mudanças significativas em 30 dias." },
              { q: "E se não gostar?", a: "30 dias de garantia 100%. Se não gostar, devolvemos seu dinheiro sem perguntas. Mas 99% das pessoas adoram." },
              { q: "Isso funciona em qualquer cidade?", a: "Sim! O material é baseado em psicologia de vendas e estratégia de negócio. Funciona em São Paulo, Rio, interior, qualquer lugar." }
            ].map((faq, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-amber-600/30 p-6 hover:border-amber-600/60 transition-all">
                <h3 className="font-bold text-lg mb-3 text-amber-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>{faq.q}</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Sora', sans-serif" }}>{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/20 to-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-black leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pronto para <span className="text-amber-500">triplicar seu faturamento?</span>
          </h2>
          <p className="text-xl text-gray-300" style={{ fontFamily: "'Sora', sans-serif" }}>
            Não é sobre trabalhar mais. É sobre trabalhar melhor. Comece hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-black text-lg h-16 rounded-lg shadow-2xl hover:shadow-amber-600/50 px-12 flex items-center gap-2">
              COMPRAR AGORA - R$100
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-600 hover:border-amber-500 text-amber-400 hover:text-amber-300 font-bold text-lg h-16 rounded-lg px-12">
              VER MAIS DETALHES
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            Acesso imediato • Sem assinatura • Garantia de 30 dias • Suporte por email
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-amber-600/20 text-center text-gray-400 bg-slate-950">
        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>© 2026 O Tatuador 10K. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Este material é para fins educacionais. Resultados podem variar.</p>
      </footer>
    </div>
  );
}
