const home = {
  render() {
    return `
    <section id="home">
        <article id="hero">
          <div class="hero__container">
            <h2>Bersih Lingkunganku, <span>Sehat Hidupku</span></h2>
            <p>
              Menjaga kebersihan lingkungan adalah tanggung jawab bersama yang
              berkontribusi langsung pada kesehatan dan kesejahteraan individu.
              Lingkungan yang bersih membantu mencegah penyakit dan memberikan
              rasa nyaman serta tenang, sehingga mendukung kesehatan fisik dan
              mental. Dengan menjaga kebersihan lingkungan sekitar, baik itu
              rumah, tempat kerja, maupun tempat umum, kita menciptakan kondisi
              hidup yang lebih sehat dan berkualitas, yang pada akhirnya
              meningkatkan kesejahteraan hidup secara keseluruhan.
            </p>
            <a href="#/Home/Detail" class="hero__btn-click-more">Check More</a>
          </div>
        </article>
        <article id="detail">
          <div class="detail__container">
            <h2>Berkenalan dengan Cleanviro</h2>
            <div class="detail__box-area">
              <div class="detail__box-item">
                <div class="detail__logo__container">
                  <i class="fa-solid fa-info"></i>
                </div>
                <div class="detail__information__container">
                  <h3 class="information__title">Information</h3>
                  <p class="information__description">
                    Informasi tentang website Cleanviro dan Pengetahuan umum
                    tentang menjaga kebersihan lingkungan sekitar
                  </p>
                  <a href="#/Information"
                    ><i class="fa-solid fa-arrow-right-to-bracket"></i
                  ></a>
                </div>
              </div>
              <div class="detail__box-item">
                <div class="detail__logo__container">
                  <i class="fa-solid fa-info"></i>
                </div>
                <div class="detail__information__container">
                  <h3 class="information__title">Blog</h3>
                  <p class="information__description">
                    Anda dapat melihat informasi terkini tentang kebersihan
                    lingkungan di Indonesia. Dan tidak hanya tentang laporan
                    kebersihan melainkan ada tips dan trick cara menjaga
                    kebersihan lingkungan sekitar kita
                  </p>
                  <a href="#/Information"
                    ><i class="fa-solid fa-arrow-right-to-bracket"></i
                  ></a>
                </div>
              </div>
              <div class="detail__box-item">
                <div class="detail__logo__container">
                  <i class="fa-solid fa-info"></i>
                </div>
                <div class="detail__information__container">
                  <h3 class="information__title">Contact Us</h3>
                  <p class="information__description">
                    Anda dapat melaporkan situasi lingkungan sekitar anda dan
                    hal tersebut akan disalurkan ke pihak berwenang. Mari
                    bergabung menjaga kebersihan lingkungan sekitar kita agar
                    sehat dan asri selalu
                  </p>
                  <a href="#/Information"
                    ><i class="fa-solid fa-arrow-right-to-bracket"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    `
  },

  afterRender() {
    
  }
}

export default home;
