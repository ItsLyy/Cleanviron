const information = {
  render() {
    return `
    <section id="information">
        <article class="information__about">
          <div class="about__container">
            <div class="about__description">
              <img src="public/Cleanviro.svg" alt="BrandLogo" class="logo-brand" />
              <p>
                Clerinvo merupakan sebuah Website Blog bertujuan mengajak KITA SEMUA
                untuk menjaga kebersihan lingkungan mau dari daratan, perairan,
                maupun udara.
              </p>
            </div>
            <div>
              <img src="public/background/InformationBanner.png" alt="Banner Orang Melihat Sampah" class="about__banner">
            </div>
          </div>
        </article>
        <article class="information__environment">
          <div class="environment__box-area">
            <div class="environment__box-item">
              <i class="fa-solid fa-question"></i>
              <h2>WHAT</h2>
              <h3>Apa yang harus dilakukan?</h3>
              <p>Pengurangan penggunaan plastik, daur ulang, penanaman pohon, menjaga kebersihan pantai dan sungai, serta mengurangi emisi kendaraan.</p>
            </div>
            <div class="environment__box-item">
              <i class="fa-solid fa-user-group"></i>
              <h2>WHO</h2>
              <h3>Siapa yang perlu dijangkau?</h3>
              <p>Seluruh masyarakat Indonesia termasuk individu, komunitas, pelajar, pekerja, pengusaha, dan pemerintah.</p>
            </div>
            <div class="environment__box-item">
              <i class="fa-solid fa-timeline"></i>
              <h2>WHEN</h2>
              <h3>Kapan ini dimulai?</h3>
              <p>Dimulai segera dan berkelanjutan sepanjang tahun.</p>
            </div>
            <div class="environment__box-item">
              <i class="fa-solid fa-location-crosshairs"></i>
              <h2>WHERE</h2>
              <h3>Di mana kegiatan ini difokuskan?</h3>
              <p>Darat: Perkotaan dan pedesaan dengan fokus pada area publik seperti taman, jalan raya, dan sekolah.
                Perairan: Pantai, sungai, danau, dan laut dengan konsentrasi di daerah yang terkena dampak pencemaran berat.
                Udara: Kota-kota besar yang memiliki tingkat polusi udara tinggi, seperti Jakarta, Surabaya, dan Bandung.</p>
            </div>
            <div class="environment__box-item">
              <i class="fa-solid fa-street-view"></i>
              <h2>WHY</h2>
              <h3>Mengapa penting bagi lingkungan?</h3>
              <p>Menjaga keanekaragaman hayati, mencegah bencana alam seperti banjir akibat sampah, dan menjaga keseimbangan ekosistem.</p>
            </div>
            <div class="environment__box-item">
              <i class="fa-solid fa-dumpster"></i>
              <h2>HOW</h2>
              <h3>Bagaimana meningkatkan kesadaran?</h3>
              <p>Melalui media sosial, program edukasi di sekolah, seminar, dan workshop tentang pentingnya menjaga kebersihan lingkungan dan Website Blog kami sebagai penyedia informasi terkini tentang kebersihan lingkungan. </p>
            </div>
          </div>
        </article>
      </section>
    `
  },

  afterRender() {
    const navItems = document.querySelectorAll('.nav__menu__item');
    navItems.forEach((item) => {
      item.classList.remove('onPage');
    });
    navItems[1].classList.add('onPage');
  }
}

export default information;
