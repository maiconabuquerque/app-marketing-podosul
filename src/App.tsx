import React from 'react';
export default function App() {
  return (
    <div style={{minHeight:'100vh',background:'#f5f5dc',padding:'32px',fontFamily:'Inter, sans-serif',color:'#0A1A2F'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>
        <h1 style={{fontSize:'36px',marginBottom:'12px'}}>Podosul Marketing Engine</h1>
        <p style={{fontSize:'18px',marginBottom:'24px'}}>Se você está vendo esta tela, o app está carregando corretamente.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'16px'}}>
          <div style={{background:'#fff',borderRadius:'20px',padding:'20px',boxShadow:'0 10px 30px rgba(10,26,47,.08)'}}>
            <h2 style={{marginTop:0}}>Carrossel</h2>
            <p>Estrutura educativa para posts com valor e conversão.</p>
          </div>
          <div style={{background:'#fff',borderRadius:'20px',padding:'20px',boxShadow:'0 10px 30px rgba(10,26,47,.08)'}}>
            <h2 style={{marginTop:0}}>Reels</h2>
            <p>Roteiros curtos para captar atenção e gerar agendamento.</p>
          </div>
          <div style={{background:'#fff',borderRadius:'20px',padding:'20px',boxShadow:'0 10px 30px rgba(10,26,47,.08)'}}>
            <h2 style={{marginTop:0}}>Posts</h2>
            <p>Conteúdo focado em biomecânica, podologia e autoridade clínica.</p>
          </div>
        </div>
        <div style={{marginTop:'28px',background:'#0A1A2F',color:'#fff',padding:'20px',borderRadius:'20px'}}>
          <strong>Teste de publicação concluído.</strong>
          <p style={{marginBottom:0}}>Esta versão existe para confirmar que o deploy está carregando sem tela branca. Depois disso, eu reconstruo o layout completo em cima desta base estável.</p>
        </div>
      </div>
    </div>
  );
}
