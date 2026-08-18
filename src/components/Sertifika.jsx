// import 'degisken ismi' from "pdf yolu";

function Sertifika() {
  const sertifikalar = [
    {
        id:0,
        baslik:"Başlık",
        kurum:"Kurum İsmi",
        pdfUrl:"Pdf Yolu"

    },
    {
      id: 1,
      baslik: "Başlık",
      kurum: "Kurum İsmi",
      pdfUrl: "pdf yolu",
    }
  ];

  return (
    <aside className="sertifika-b">
      <h3>SERTİFİKALAR</h3>
      <div className="sertifika-listesi">
        {sertifikalar.map((item) => (
          <div key={item.id} className="sertifika-kart">
            <h4>{item.baslik}</h4>
            <p>Kurum: {item.kurum}</p>
            <div className="kart-linkler">
              <a
                className="goruntu"
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
              >
                Görüntüle <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sertifika;
