import React, { useMemo, useState } from 'react';

type Format = 'carrossel' | 'post' | 'reels';
type Topic = 'Baropodometria' | 'Palmilha 3D' | 'Dor no calcanhar' | 'Unha encravada' | 'Pele e calosidades' | 'Fascite plantar' | 'Pé diabético';

type Slide = { title: string; text: string; focus: string };

type Content = {
  title: string;
  subtitle: string;
  caption: string;
  cta: string;
  contact: string;
  category: string;
  slides: Slide[];
};

const topics: Record<Topic, { category: string; contact: string; hook: string; angle: string; cta: string; focus: string; color: string }> = {
  'Baropodometria': { category: 'Biomecânica / Avaliação', contact: 'Maicon Albuquerque • (46) 99935-6444', hook: 'Seu corpo mostra sinais na pisada.', angle: 'O mapa de pressão revela sobrecargas, compensações e padrões que você não vê no espelho.', cta: 'Agende sua avaliação biomecânica.', focus: 'Pressão plantar', color: '#00E5FF' },
  'Palmilha 3D': { category: 'Palmilhas Personalizadas', contact: 'Maicon Albuquerque • (46) 99935-6444', hook: 'Palmilha pronta não serve para todo mundo.', angle: 'A solução ideal considera sua marcha, sua rotina e a forma como o pé recebe carga.', cta: 'Solicite sua avaliação.', focus: 'Personalização', color: '#D4AF37' },
  'Dor no calcanhar': { category: 'Dores / Sobrecarga', contact: 'Maicon Albuquerque • (46) 99935-6444', hook: 'Dor no calcanhar não é normal.', angle: 'A causa pode estar na biomecânica, na sobrecarga ou em compensações que se acumulam no tempo.', cta: 'Descubra a causa da sua dor.', focus: 'Sobrecarga', color: '#8EE3F5' },
  'Unha encravada': { category: 'Podologia Clínica', contact: 'Neide Pagnoncelli • (46) 98802-5728', hook: 'Unha encravada precisa de cuidado certo.', angle: 'Quando o atendimento é correto, você reduz dor, inflamação e risco de recorrência.', cta: 'Agende seu atendimento.', focus: 'Tratamento', color: '#F5D28C' },
  'Pele e calosidades': { category: 'Saúde dos Pés', contact: 'Neide Pagnoncelli • (46) 98802-5728', hook: 'Calo não é só estética.', angle: 'Ele pode indicar atrito, excesso de pressão e uma distribuição de carga que merece atenção.', cta: 'Cuide da saúde dos seus pés.', focus: 'Sinal de alerta', color: '#E5C87A' },
  'Fascite plantar': { category: 'Dor / Fascite plantar', contact: 'Maicon Albuquerque • (46) 99935-6444', hook: 'A dor do calcanhar pode começar no padrão de carga.', angle: 'A fascite plantar costuma conversar com encurtamentos, impacto repetido e alteração biomecânica.', cta: 'Avalie sua fascite plantar.', focus: 'Fascite', color: '#6EE7FF' },
  'Pé diabético': { category: 'Prevenção / Diabetes', contact: 'Neide Pagnoncelli • (46) 98802-5728', hook: 'No pé diabético, prevenção vale ouro.', angle: 'O cuidado certo ajuda a detectar risco cedo e a preservar função, conforto e segurança.', cta: 'Agende sua prevenção.', focus: 'Prevenção', color: '#FFD27A' }
};

function buildContent(topic: Topic, format: Format): Content {
  const t = topics[topic];
  if (format === 'carrossel') {
    const slides: Slide[] = [
      { title: t.hook, text: t.angle, focus: t.focus },
      { title: 'O que muita gente erra', text: `Nem sempre o problema está exatamente onde dói. Às vezes o corpo está compensando há semanas.`, focus: 'Mito' },
      { title: 'O que a avaliação mostra', text: `Mapas, observação clínica e análise funcional ajudam a entender onde a carga está ficando concentrada.`, focus: 'Leitura clínica' },
      { title: 'Por que isso importa', text: `Quando você trata a causa e não só o sintoma, o resultado tende a ser mais consistente.`, focus: 'Causa' },
      { title: 'Como a Podosul atua', text: `Cada caso pede uma conduta individual, com tecnologia, orientação e acompanhamento.`, focus: 'Conduta' },
      { title: t.cta, text: 'Se a dor, o desconforto ou a sobrecarga já fazem parte da sua rotina, o próximo passo é avaliar.', focus: 'CTA' }
    ];
    return { title: topic, subtitle: t.hook, caption: `${t.hook} ${t.angle}`, cta: t.cta, contact: t.contact, category: t.category, slides };
  }
  if (format === 'reels') {
    return {
      title: `Reels • ${topic}`,
      subtitle: t.hook,
      caption: `${t.hook} ${t.angle}`,
      cta: t.cta,
      contact: t.contact,
      category: t.category,
      slides: [
        { title: 'Hook', text: t.hook, focus: 'Hook' },
        { title: 'Curiosidade', text: t.angle, focus: 'Curiosidade' },
        { title: 'Prova visual', text: 'Mostre exame, detalhe do atendimento ou a tecnologia em ação.', focus: 'Visual' },
        { title: 'Fechamento', text: t.cta, focus: 'Conversão' }
      ]
    };
  }
  return {
    title: `Post • ${topic}`,
    subtitle: t.hook,
    caption: `${t.hook} ${t.angle}`,
    cta: t.cta,
    contact: t.contact,
    category: t.category,
    slides: [
      { title: t.hook, text: t.angle, focus: t.focus },
      { title: 'Por que isso acontece', text: 'A sobrecarga, o atrito ou a biomecânica podem explicar muito mais do que parece.', focus: 'Explicação' },
      { title: t.cta, text: 'Quem entende a causa escolhe o próximo passo com mais segurança.', focus: 'CTA' }
    ]
  };
}

const topicsList: Topic[] = ['Baropodometria', 'Palmilha 3D', 'Dor no calcanhar', 'Unha encravada', 'Pele e calosidades', 'Fascite plantar', 'Pé diabético'];

export default function App() {
  const [format, setFormat] = useState<Format>('carrossel');
  const [topic, setTopic] = useState<Topic>('Baropodometria');
  const [index, setIndex] = useState(0);

  const content = useMemo(() => buildContent(topic, format), [topic, format]);
  const active = content.slides[index] || content.slides[0];

  const onFormat = (value: Format) => { setFormat(value); setIndex(0); };
  const onTopic = (value: Topic) => { setTopic(value); setIndex(0); };
  const next = () => setIndex((prev) => (prev + 1) % content.slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + content.slides.length) % content.slides.length);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f6efe5 0%, #ecfbff 100%)', fontFamily: 'Inter, sans-serif', color: '#0A1A2F' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#607080' }}>Podosul Marketing Engine</div>
            <h1 style={{ margin: '8px 0 6px', fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 38 }}>Posts que educam, despertam curiosidade e convertem</h1>
            <p style={{ margin: 0, color: '#516273', maxWidth: 780, lineHeight: 1.6 }}>O app agora organiza a criação como um especialista em posts: primeiro o gancho, depois a explicação clínica e por fim a conversão. A lateral direita mostra a arte final em formato real de Instagram.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 22, padding: '14px 18px', minWidth: 300, boxShadow: '0 16px 40px rgba(10,26,47,.08)' }}>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#6c7a89' }}>Contato do tema atual</div>
            <div style={{ fontWeight: 800, marginTop: 6 }}>{content.contact}</div>
            <div style={{ fontSize: 14, color: '#5f6d7b', marginTop: 4 }}>{content.category}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '360px minmax(0, 1fr) 430px', gap: 22 }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <Section title="Formato">
              {(['carrossel', 'post', 'reels'] as Format[]).map((item) => (
                <button key={item} onClick={() => onFormat(item)} style={toggleStyle(format === item)}>{item}</button>
              ))}
            </Section>

            <Section title="Temas">
              <div style={{ display: 'grid', gap: 10 }}>
                {topicsList.map((item) => (
                  <button key={item} onClick={() => onTopic(item)} style={topicStyle(topic === item)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 800 }}>{item}</div>
                        <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{topics[item].category}</div>
                      </div>
                      <div style={{ width: 12, height: 12, borderRadius: 999, background: topics[item].color, boxShadow: `0 0 0 4px ${topics[item].color}22` }} />
                    </div>
                  </button>
                ))}
              </div>
            </Section>

            <Section title="Legenda">
              <p style={{ margin: 0, lineHeight: 1.7, color: '#44576a' }}>{content.caption}</p>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(10,26,47,.08)' }}>
                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096' }}>CTA</div>
                <strong style={{ display: 'block', marginTop: 6 }}>{content.cta}</strong>
              </div>
            </Section>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 32, padding: 22, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 18 }}>
                <div style={{ minHeight: 620, borderRadius: 30, padding: 30, background: 'radial-gradient(circle at top right, rgba(0,229,255,.26), transparent 24%), linear-gradient(180deg,#0A1A2F 0%, #0D2842 100%)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, padding: '8px 12px', background: 'rgba(255,255,255,.10)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>Arte final</div>
                    <div style={{ marginTop: 16, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#8adff0' }}>{content.category}</div>
                    <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 48, margin: '14px 0 10px', lineHeight: 1.03 }}>{active.title}</h2>
                    <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.86)', maxWidth: 760 }}>{active.text}</p>
                  </div>
                  <div style={{ display: 'grid', gap: 12 }}>
                    <div style={{ border: '1px solid rgba(255,255,255,.10)', borderRadius: 22, padding: 18, background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#95e8f4' }}>Foco do slide</div>
                      <div style={{ marginTop: 8, fontWeight: 700 }}>{active.focus}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#9edceb' }}>CTA</div>
                        <div style={{ fontWeight: 800, marginTop: 4 }}>{content.cta}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button onClick={prev} style={chipNav}>Anterior</button>
                        <button onClick={next} style={{ ...chipNav, background: '#D4AF37', color: '#0A1A2F' }}>Próximo</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                  <MiniCard title="Gancho" text={content.subtitle} />
                  <MiniCard title="Slide atual" text={active.text} />
                  <MiniCard title="Diretriz" text="O app agora deve educar, gerar curiosidade e guiar o olhar até o CTA." />
                  <MiniCard title="Formato visual" text="Use contraste, pouco texto por slide e hierarquia clara para retenção." />
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#6a7887', marginBottom: 12 }}>Estrutura do carrossel</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {content.slides.map((s, i) => (
                  <button key={s.title + i} onClick={() => setIndex(i)} style={slideButton(i === index)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontWeight: 800 }}>{i + 1}. {s.title}</div>
                        <div style={{ marginTop: 6, fontSize: 13, color: '#64748b', lineHeight: 1.55 }}>{s.text}</div>
                      </div>
                      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7a8796' }}>{s.focus}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <Section title="Preview da arte">
              <div style={{ borderRadius: 26, overflow: 'hidden', background: '#0A1A2F', boxShadow: '0 18px 50px rgba(10,26,47,.18)' }}>
                <div style={{ aspectRatio: '4 / 5', padding: 18, background: 'linear-gradient(180deg, #0A1A2F 0%, #123153 100%)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                      <div style={{ fontWeight: 800, letterSpacing: '0.1em' }}>PODOSUL</div>
                      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9edceb' }}>{content.category}</div>
                    </div>
                    <div style={{ marginTop: 20, borderRadius: 18, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.10)', padding: 16 }}>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8ee3f5' }}>Slide {index + 1} de {content.slides.length}</div>
                      <h3 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 34, lineHeight: 1.06, margin: '10px 0 8px' }}>{active.title}</h3>
                      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.86)' }}>{active.text}</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gap: 10 }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span style={badge}>Autoridade clínica</span>
                      <span style={badge}>Biomecânica</span>
                      <span style={badge}>Liberdade de movimento</span>
                    </div>
                    <div style={{ borderRadius: 18, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.10)', padding: 14 }}>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9edceb' }}>CTA</div>
                      <div style={{ marginTop: 6, fontWeight: 800 }}>{content.cta}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Resumo do criativo">
              <div style={{ display: 'grid', gap: 12 }}>
                <SummaryRow label="Título" value={content.title} />
                <SummaryRow label="Legenda" value={content.caption} />
                <SummaryRow label="Contato" value={content.contact} />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: any) {
  return <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}><div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#6a7887', marginBottom: 12 }}>{title}</div>{children}</div>;
}
function MiniCard({ title, text }: any) { return <div style={{ padding: 16, borderRadius: 20, background: '#fff', border: '1px solid rgba(10,26,47,.08)' }}><div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096' }}>{title}</div><div style={{ marginTop: 8, lineHeight: 1.6, color: '#44576a' }}>{text}</div></div>; }
function SummaryRow({ label, value }: any) { return <div style={{ padding: 16, borderRadius: 18, background: '#fff', border: '1px solid rgba(10,26,47,.08)' }}><div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096' }}>{label}</div><div style={{ marginTop: 6, lineHeight: 1.6, color: '#223244' }}>{value}</div></div>; }
const chipNav = { minHeight: 44, padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,.14)', background: 'rgba(255,255,255,.12)', color: '#fff', fontWeight: 700, cursor: 'pointer' } as React.CSSProperties;
const badge = { padding: '8px 10px', borderRadius: 999, background: 'rgba(255,255,255,.10)', border: '1px solid rgba(255,255,255,.10)', fontSize: 12 } as React.CSSProperties;
function toggleStyle(active: boolean): React.CSSProperties { return { minHeight: 44, padding: '12px 16px', borderRadius: 18, border: active ? '1px solid #00B7D1' : '1px solid rgba(10,26,47,.08)', background: active ? 'rgba(0,229,255,.10)' : '#fff', cursor: 'pointer', fontWeight: 700, textTransform: 'capitalize' }; }
function topicStyle(active: boolean): React.CSSProperties { return { minHeight: 44, padding: '14px 16px', borderRadius: 18, border: active ? '1px solid #00B7D1' : '1px solid rgba(10,26,47,.08)', background: active ? 'rgba(0,229,255,.08)' : '#fff', cursor: 'pointer', textAlign: 'left' }; }
function slideButton(active: boolean): React.CSSProperties { return { minHeight: 44, padding: '14px 14px', borderRadius: 18, border: active ? '1px solid #00B7D1' : '1px solid rgba(10,26,47,.08)', background: active ? 'rgba(0,229,255,.08)' : '#fff', cursor: 'pointer', textAlign: 'left' }; }
