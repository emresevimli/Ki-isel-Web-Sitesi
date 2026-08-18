import { useState } from 'react'

function Proje() {
  const [filter, setFilter] = useState('Hepsi')

  const projeler = [
    {
      id: 1,
      baslik: 'Portfolyo Web Sitesi',
      kategori: 'Web',
      desc: 'Proje Hakkında bilgi',
      stack: ['kullanılan teknolojiler'],
      github: 'https://github.com',
      demo: '#'
    }
  ]

  const categories = ['Kategoriler']

  const filteredProjects = filter === 'Hepsi' 
    ? projeler 
    : projeler.filter(item => item.kategori === filter)

  return (
    <aside className="projes">
      <div className="proje-header">
        <h3>PROJELER</h3>
        <span className="proje-count">{filteredProjects.length} Proje</span>
      </div>

  
      <div className="proje-toolbar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`toolbar-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

  
      <div className="proje-listesi">
        {filteredProjects.map((item) => (
          <div key={item.id} className="proje-kart">
            <div className="proje-top">
              <h4>{item.baslik}</h4>
              <span className="kategori-tag">{item.kategori}</span>
            </div>
            <p>{item.desc}</p>
            
            <div className="stack-list">
              {item.stack.map((tech, i) => (
                <span key={i} className="stack-item">{tech}</span>
              ))}
            </div>

            <div className="kart-linkler">
              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer" className="goruntu">
                  GitHub ↗
                </a>
              )}
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer" className="goruntu demo-btn">
                  Canlı Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Proje