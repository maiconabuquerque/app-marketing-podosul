import React, { useMemo, useState } from 'react';

type Format = 'carrossel' | 'post' | 'reels';
type Topic = 'Baropodometria' | 'Palmilha 3D' | 'Dor no calcanhar' | 'Unha encravada' | 'Pele e calosidades';

type Slide = { title: string; text: string };

type Content = {
  title: string;
  subtitle: string;
  caption: string;
  cta: string;
  contact: string;
  category: string;
  slides: Slide[];
};

const topics: Record<Topic, { category: string; contact: string; hook: string; angle: string; cta: string }> = {
  'Baropodometria': {
    category: 'Biomecânica / Avaliação',
    contact: 'Maicon Albuquerque • (46) 99935-6444',
    hook: 'Seu corpo mostra sinais na pisada.',
    angle: 'A baropodometria ajuda a entender apoio, pressão e compensações.',
    cta: 'Agende sua avaliação biomecânica.'
  },
  'Palmilha 3D': {
    category: 'Palmilhas Personalizadas',
    contact: 'Maicon Albuquerque • (46) 99935-6444',
    hook: 'Palmilha pronta não serve para todo mundo.',
    angle: 'O ideal é uma solução individual, pensada para o seu corpo e sua rotina.',
    cta: 'Solicite sua avaliação.'
  },
  'Dor no calcanhar': {
    category: 'Dores / Sobrecarga',
    contact: 'Maicon Albuquerque • (46) 99935-6444',
    hook: 'Dor no calcanhar não é normal.',
    angle: 'A causa pode estar na sobrecarga, na pisada e nas compensações do corpo.',
    cta: 'Descubra a causa da sua dor.'
  },
  'Unha encravada': {
    category: 'Podologia Clínica',
    contact: 'Neide Pagnoncelli • (46) 98802-5728',
    hook: 'Unha encravada precisa de cuidado certo.',
    angle: 'Quanto antes tratar, menor o risco de dor, inflamação e piora.',
    cta: 'Agende seu atendimento.'
  },
  'Pele e calosidades': {
    category: 'Saúde dos Pés',
    contact: 'Neide Pagnoncelli • (46) 98802-5728',
    hook: 'Calo não é só estética.',
    angle: 'Muitas vezes ele mostra atrito, sobrecarga e uma causa que precisa ser investigada.',
    cta: 'Cuide da saúde dos seus pés.'
  }
};

function buildContent(topic: Topic, format: Format): Content {
  const t = topics[topic];
  if (format === 'carrossel') {
    return {
      title: topic,
      subtitle: t.hook,
      caption: `${t.hook} ${t.angle}`,
      cta: t.cta,
      contact: t.contact,
      category: t.category,
      slides: [
        { title: 'Gancho', text: t.hook },
        { title: 'O problema', text: `${topic} pode afetar conforto, movimento e qualidade de vida.` },
        { title: 'Por que piora', text: 'Sem avaliação adequada, o corpo compensa e o desconforto pode persistir.' },
        { title: 'Como a Podosul ajuda', text: 'Com avaliação individual e conduta personalizada.' },
        { title: 'O objetivo', text: 'Mais conforto, função e liberdade de movimento.' },
        { title: 'CTA', text: t.cta }
      ]
    };
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
        { title: 'Hook', text: t.hook },
        { title: 'Contexto', text: t.angle },
        { title: 'Cena', text: 'Mostre avaliação, atendimento ou detalhe técnico com linguagem simples.' },
        { title: 'Fechamento', text: t.cta }
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
      { title: 'Headline', text: t.hook },
      { title: 'Subheadline', text: t.angle },
      { title: 'CTA', text: t.cta }
    ]
  };
}

const chipStyle = {
  border: '1px solid rgba(10,26,47,0.10)',
  borderRadius: 999,
  padding: '10px 16px',
  background: 'rgba(255,255,255,0.82)',
  cursor: 'pointer',
  fontWeight: 600 as const,
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function App() {
  const [format, setFormat] = useState<Format>('carrossel');
  const [topic, setTopic] = useState<Topic>('Baropodometria');
  const [index, setIndex] = useState(0);

  const content = useMemo(() => buildContent(topic, format), [topic, format]);
  const active = content.slides[index] || content.slides[0];

  const onFormat = (value: Format) => {
    setFormat(value);
    setIndex(0);
  };

  const onTopic = (value: Topic) => {
    setTopic(value);
    setIndex(0);
  };

  const next = () => setIndex((prev) => (prev + 1) % content.slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + content.slides.length) % content.slides.length);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f7f2e8 0%, #eef8fb 100%)', fontFamily: 'Inter, sans-serif', color: '#0A1A2F' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#567' }}>Podosul Marketing Engine</div>
            <h1 style={{ margin: '8px 0 6px', fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 36 }}>Conteúdo premium para posts e carrosséis</h1>
            <p style={{ margin: 0, color: '#4d6175', maxWidth: 720 }}>Agora com interação ativa. Escolha o formato, troque o tema e navegue pelos slides para construir posts com mais valor percebido e conversão.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 20, padding: '14px 18px', minWidth: 250 }}>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#6c7a89' }}>Contato ativo</div>
            <div style={{ fontWeight: 700, marginTop: 6 }}>{content.contact}</div>
            <div style={{ fontSize: 14, color: '#5f6d7b', marginTop: 4 }}>{content.category}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 22 }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#6a7887', marginBottom: 12 }}>Formato</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {(['carrossel', 'post', 'reels'] as Format[]).map((item) => (
                  <button key={item} onClick={() => onFormat(item)} style={{ ...chipStyle, background: format === item ? '#0A1A2F' : 'rgba(255,255,255,0.82)', color: format === item ? '#fff' : '#0A1A2F' }}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#6a7887', marginBottom: 12 }}>Temas</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {(Object.keys(topics) as Topic[]).map((item) => (
                  <button key={item} onClick={() => onTopic(item)} style={{ border: topic === item ? '1px solid #00B7D1' : '1px solid rgba(10,26,47,0.10)', borderRadius: 18, padding: '14px 16px', textAlign: 'left', background: topic === item ? 'rgba(0,229,255,0.10)' : 'rgba(255,255,255,0.72)', cursor: 'pointer', minHeight: 44 }}>
                    <div style={{ fontWeight: 700 }}>{item}</div>
                    <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{topics[item].category}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg,#0A1A2F 0%, #11345d 100%)', color: '#fff', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.15)' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#9fdde7' }}>Legenda sugerida</div>
              <p style={{ margin: '12px 0 0', lineHeight: 1.6 }}>{content.caption}</p>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,.12)' }}>
                <strong>{content.cta}</strong>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 32, padding: 22, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18 }}>
                <div style={{ minHeight: 560, borderRadius: 28, padding: 30, background: 'radial-gradient(circle at top right, rgba(0,229,255,.22), transparent 28%), linear-gradient(180deg,#0A1A2F 0%, #102944 100%)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 999, padding: '8px 12px', background: 'rgba(255,255,255,.10)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                      Post premium
                    </div>
                    <div style={{ marginTop: 16, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#8adff0' }}>{content.category}</div>
                    <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 44, margin: '14px 0 10px', lineHeight: 1.02 }}>{active.title}</h2>
                    <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.86)', maxWidth: 700 }}>{active.text}</p>
                  </div>
                  <div>
                    <div style={{ border: '1px solid rgba(255,255,255,.10)', borderRadius: 22, padding: 18, background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#95e8f4' }}>Mensagem do criativo</div>
                      <p style={{ margin: '10px 0 0', lineHeight: 1.6, color: 'rgba(255,255,255,.88)' }}>{content.caption}</p>
                    </div>
                    <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#9edceb' }}>CTA</div>
                        <div style={{ fontWeight: 700, marginTop: 4 }}>{content.cta}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button onClick={prev} style={{ ...chipStyle, background: 'rgba(255,255,255,.12)', color: '#fff', border: '1px solid rgba(255,255,255,.16)' }}>Anterior</button>
                        <button onClick={next} style={{ ...chipStyle, background: '#D4AF37', color: '#0A1A2F', border: '1px solid rgba(212,175,55,.3)' }}>Próximo</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
                  <div style={{ padding: 18, borderRadius: 24, background: 'rgba(250,250,250,.9)', border: '1px solid rgba(10,26,47,.08)' }}>
                    <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096', marginBottom: 10 }}>Estrutura</div>
                    <div style={{ display: 'grid', gap: 10 }}>
                      {content.slides.map((slideItem, i) => (
                        <button key={slideItem.title + i} onClick={() => setIndex(i)} style={{ border: i === index ? '1px solid #00B7D1' : '1px solid rgba(10,26,47,.08)', borderRadius: 18, padding: '14px 14px', textAlign: 'left', background: i === index ? 'rgba(0,229,255,0.08)' : '#fff', cursor: 'pointer' }}>
                          <div style={{ fontWeight: 700 }}>{i + 1}. {slideItem.title}</div>
                          <div style={{ marginTop: 6, fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{slideItem.text}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: 18, borderRadius: 24, background: 'rgba(250,250,250,.9)', border: '1px solid rgba(10,26,47,.08)' }}>
                    <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096', marginBottom: 10 }}>Resumo premium</div>
                    <div style={{ fontWeight: 800, fontSize: 18 }}>{content.title}</div>
                    <div style={{ marginTop: 8, color: '#4b5c6d', lineHeight: 1.6 }}>{content.subtitle}</div>
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(10,26,47,.08)' }}>
                      <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#718096' }}>Contato</div>
                      <div style={{ fontWeight: 700, marginTop: 6 }}>{content.contact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(10,26,47,.08)', borderRadius: 28, padding: 20, boxShadow: '0 18px 50px rgba(10,26,47,.08)' }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.22em', color: '#6a7887', marginBottom: 10 }}>Melhorias aplicadas nesta versão</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                <div style={{ padding: 16, borderRadius: 18, background: '#fff', border: '1px solid rgba(10,26,47,.08)' }}><strong>Visual premium</strong><div style={{ marginTop: 8, color: '#64748b' }}>Mais contraste, mais sofisticação e melhor hierarquia.</div></div>
                <div style={{ padding: 16, borderRadius: 18, background: '#fff', border: '1px solid rgba(10,26,47,.08)' }}><strong>Interação ativa</strong><div style={{ marginTop: 8, color: '#64748b' }}>Botões de formato, tema e slides funcionando.</div></div>
                <div style={{ padding: 16, borderRadius: 18, background: '#fff', border: '1px solid rgba(10,26,47,.08)' }}><strong>Posts mais premium</strong><div style={{ marginTop: 8, color: '#64748b' }}>Texto mais elegante, foco em autoridade e conversão.</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
