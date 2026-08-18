import React from 'react'

function Anabolum() {
  const techStack = [
    'Kullanılan teknolojiler'
  ]

  const focusAreas = [
    { title: 'Siber Güvenlik', desc: 'Ağ güvenliği, web zafiyetleri ve güvenli mimari modelleri.' },
    { title: 'Web Geliştirme', desc: 'Modern, ölçeklenebilir ve dinamik arayüz uygulamaları.' },
    { title: 'Makine Öğrenimi', desc: 'Veri analitiği ve yapay zeka tabanlı tespit mekanizmaları.' }
  ]

  return (
    <main className="anabolum-m">
      <div className="profile-header">
        <span className="badge">Başlık</span>
        <h1>İsim Soyisim</h1>
        <p className="subtitle">Bilgiler</p>
      </div>

      <section className="bio-section">
        <p>
           <strong> </strong> 
        </p>
      </section>

      <section className="focus-section">
        <h3>Odak Alanlarım</h3>
        <div className="focus-grid">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="focus-card">
              <h4>{area.title}</h4>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tech-section">
        <h3>Kullandığım Teknolojiler & Araçlar</h3>
        <div className="tech-tags">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Anabolum