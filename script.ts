document.addEventListener('DOMContentLoaded', () => {
    // Data film dummy (Tambahan film yang Anda minta)
    const films = [
        {
            id: 1,
            title: 'Vincenzo',
            year: 2021,
            genre: 'Dark Comedy, Crime, Legal Drama',
            synopsis: 'Seorang consigliere Mafia kembali ke Korea Selatan dari Italia untuk mendapatkan kembali emas tersembunyi yang disembunyikannya di bawah gedung yang akan dihancurkan, dan dia tanpa sengaja terlibat dalam perjuangan hukum melawan kartel farmasi jahat.',
            poster: 'https://image.tmdb.org/t/p/w500/mXLm7z7nN2L72mJtC3H7p1o41E9.jpg',
            director: 'Kim Hee-won',
            cast: 'Song Joong-ki, Jeon Yeo-been, Ok Taec-yeon',
            trailerLink: 'https://www.youtube.com/watch?v=F3z-YJ-0sCg'
        },
        {
            id: 2,
            title: 'Alchemy of Souls Part 1',
            year: 2022,
            genre: 'Fantasy, Romance, Historical',
            synopsis: 'Berlatar di negara fiksi Daeho, drama ini mengikuti penyihir muda yang terlarang saat ia bertemu dengan seorang prajurit yang jiwanya terperangkap di dalam tubuhnya.',
            poster: 'https://image.tmdb.org/t/p/w500/l2gGf3K6c2I0p6WdY8nK9Fv7jN0.jpg',
            director: 'Park Joon-hwa',
            cast: 'Lee Jae-wook, Jung So-min, Go Youn-jung',
            trailerLink: 'https://www.youtube.com/watch?v=gT1-jQ1X5XQ'
        },
        {
            id: 3,
            title: 'Alchemy of Souls Part 2: Light and Shadow',
            year: 2022,
            genre: 'Fantasy, Romance, Historical',
            synopsis: 'Tiga tahun setelah peristiwa di bagian pertama, Jang Uk kembali dari ambang kematian dengan kekuatan gelap, sementara seorang wanita misterius muncul yang entah bagaimana mirip dengan Mu-deok.',
            poster: 'https://image.tmdb.org/t/p/w500/f5yH2d1z2d2p5a5r5q5x5v5.jpg', // Placeholder, cari poster asli Part 2
            director: 'Park Joon-hwa',
            cast: 'Lee Jae-wook, Go Youn-jung, Hwang Min-hyun',
            trailerLink: 'https://www.youtube.com/watch?v=3W2X8J2z7M4'
        },
        {
            id: 4,
            title: 'Death\'s Game',
            year: 2023,
            genre: 'Fantasy, Thriller, Drama',
            synopsis: 'Seorang pria yang frustrasi dengan hidupnya memutuskan untuk bunuh diri, tetapi malah dihukum untuk mengalami kematian 12 kali dalam tubuh orang yang berbeda.',
            poster: 'https://image.tmdb.org/t/p/w500/3oN8B342lX3N5F3R4Q4V5B3V3D.jpg', // Placeholder
            director: 'Ha Byung-hoon',
            cast: 'Seo In-guk, Park So-dam',
            trailerLink: 'https://www.youtube.com/watch?v=eMvL3d_2M_Y'
        },
        {
            id: 5,
            title: 'Descendants of the Sun',
            year: 2016,
            genre: 'Romantic Drama, Medical Drama',
            synopsis: 'Kisah cinta antara seorang kapten pasukan khusus dan seorang dokter yang terlibat dalam misi menjaga perdamaian di negara fiksi Uruk.',
            poster: 'https://image.tmdb.org/t/p/w500/z0U7gV8fN5X1bC7tS5v5F5V5F.jpg',
            director: 'Lee Eung-bok, Baek Sang-hoon',
            cast: 'Song Joong-ki, Song Hye-kyo',
            trailerLink: 'https://www.youtube.com/watch?v=f-L4bL0eP0o'
        },
        {
            id: 6,
            title: 'Squid Game',
            year: 2021,
            genre: 'Survival Drama, Thriller',
            synopsis: 'Ratusan pemain yang terlilit hutang menerima undangan aneh untuk bersaing dalam permainan anak-anak. Taruhannya mematikan.',
            poster: 'https://image.tmdb.org/t/p/w500/d7z7fFqjFwD3P9o2xYg6k3Z9Ff8.jpg',
            director: 'Hwang Dong-hyuk',
            cast: 'Lee Jung-jae, Park Hae-soo, Jung Ho-yeon',
            trailerLink: 'https://www.youtube.com/watch?v=oqxAJKx0SEC'
        },
        {
            id: 7,
            title: 'Sweet Home',
            year: 2020,
            genre: 'Horror, Apocalypse, Thriller',
            synopsis: 'Seorang siswa SMA yang kesepian pindah ke apartemen baru setelah tragedi keluarga. Segera, manusia di sekitarnya mulai berubah menjadi monster buas.',
            poster: 'https://image.tmdb.org/t/p/w500/k7P7V2V7c0c0c0c0c0c0c0c0c0.jpg',
            director: 'Lee Eung-bok',
            cast: 'Song Kang, Lee Jin-wook, Lee Si-young',
            trailerLink: 'https://www.youtube.com/watch?v=aG0KqK-uG_Q'
        },
        {
            id: 8,
            title: 'Train to Busan',
            year: 2016,
            genre: 'Action, Horror, Thriller',
            synopsis: 'Saat wabah zombie menyebar ke seluruh negeri, beberapa penumpang yang terperangkap dalam kereta menuju Busan berjuang untuk bertahan hidup.',
            poster: 'https://image.tmdb.org/t/p/w500/x5Yl1tW7Yj4X9f0L3y0b7P3F4D.jpg',
            director: 'Yeon Sang-ho',
            cast: 'Gong Yoo, Jung Yu-mi, Ma Dong-seok',
            trailerLink: 'https://www.youtube.com/watch?v=pyP2V36-D2Y'
        },
        {
            id: 9,
            title: 'Mercy For None', // Film tambahan
            year: 2025, // Tahun perkiraan, karena masih akan datang
            genre: 'Action, Thriller, Crime',
            synopsis: 'Sebuah film aksi-thriller yang menegangkan tentang perjuangan seorang detektif yang melawan sindikat kejahatan tanpa ampun.',
            poster: 'https://via.placeholder.com/500x750/111111/FFFFFF?text=Mercy+For+None', // Placeholder sementara
            director: 'N/A', // Data placeholder
            cast: 'N/A', // Data placeholder
            trailerLink: 'https://www.youtube.com/watch?v=sample-trailer-mercy' // Placeholder trailer
        },
        // Anda bisa menambahkan film lama lainnya di sini jika ingin ada di bagian "Terbaru"
        {
            id: 10,
            title: 'Kingdom',
            year: 2019,
            genre: 'Horror, Historical, Thriller',
            synopsis: 'Saat desas-desus tentang penyakit aneh menyebar, putra mahkota ditugaskan untuk menyelidiki kebenaran di balik pandemi yang misterius dan mengubah orang menjadi zombie.',
            poster: 'https://image.tmdb.org/t/p/w500/vGvP9NfXpY2kRzV0J6Yh4J5V5F.jpg',
            director: 'Kim Seong-hun, Park In-je',
            cast: 'Ju Ji-hoon, Ryu Seung-ryong, Bae Doona',
            trailerLink: 'https://www.youtube.com/watch?v=F3z-YJ-0sCg' // Placeholder
        },
        {
            id: 11,
            title: 'Mr. Sunshine',
            year: 2018,
            genre: 'Historical, Romance, Drama',
            synopsis: 'Seorang anak laki-laki yang lahir sebagai budak di Korea, melakukan perjalanan ke Amerika Serikat setelah insiden Shinmiyangyo (ekspedisi AS ke Korea pada tahun 1871), dan kembali ke Joseon sebagai perwira Korps Marinir AS.',
            poster: 'https://image.tmdb.org/t/p/w500/w1Q7L7q2q3j3g3g3g3g3g3g3g3.jpg',
            director: 'Lee Eung-bok',
            cast: 'Lee Byung-hun, Kim Tae-ri',
            trailerLink: 'https://www.youtube.com/watch?v=sample-trailer-mr-sunshine' // Placeholder
        },
        {
            id: 12,
            title: 'Itaewon Class',
            year: 2020,
            genre: 'Drama, Business',
            synopsis: 'Seorang mantan narapidana dan teman-temannya bekerja keras untuk membuka bar dan mewujudkan impian mereka di Itaewon.',
            poster: 'https://image.tmdb.org/t/p/w500/aH0B1W6g5X9z5L4z4z4z4z.jpg',
            director: 'Kim Sung-yoon',
            cast: 'Park Seo-joon, Kim Da-mi',
            trailerLink: 'https://www.youtube.com/watch?v=sample-trailer-itaewon-class' // Placeholder
        },
    ];

    const popularFilmsContainer = document.getElementById('popular-films-container');
    const latestFilmsContainer = document.getElementById('latest-films-container');

    const filmDetailModal = new bootstrap.Modal(document.getElementById('filmDetailModal'));
    const modalFilmTitle = document.getElementById('filmDetailModalLabel');
    const modalFilmPoster = document.getElementById('modalFilmPoster');
    const modalFilmSynopsis = document.getElementById('modalFilmSynopsis');
    const modalFilmGenre = document.getElementById('modalFilmGenre');
    const modalFilmYear = document.getElementById('modalFilmYear');
    const modalFilmDirector = document.getElementById('modalFilmDirector');
    const modalFilmCast = document.getElementById('modalFilmCast');
    const modalFilmTrailerLink = document.getElementById('modalFilmTrailerLink');

    // Mengupdate Hero Section dengan film pertama dari daftar
    const heroSection = document.querySelector('.hero-section');
    const heroTitle = heroSection.querySelector('h1');
    const heroSynopsis = heroSection.querySelector('p.lead');
    const heroTrailerBtn = heroSection.querySelector('.hero-trailer-btn');
    const heroDetailBtn = heroSection.querySelector('.hero-detail-btn');

    // Mengambil film pertama sebagai film unggulan di Hero Section
    const featuredFilm = films[0];
    if (featuredFilm) {
        heroSection.style.backgroundImage = `url('${featuredFilm.poster}')`;
        heroTitle.textContent = featuredFilm.title;
        heroSynopsis.textContent = featuredFilm.synopsis;

        // Atur event listener untuk tombol di Hero Section
        heroTrailerBtn.onclick = () => window.open(featuredFilm.trailerLink, '_blank');
        heroDetailBtn.onclick = () => showFilmDetail(featuredFilm);
    }


    // Fungsi untuk membuat kartu film
    function createFilmCard(film) {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-3 col-lg-2'; // Bootstrap responsive columns

        col.innerHTML = `
            <div class="film-card" data-id="${film.id}">
                <img src="${film.poster}" class="img-fluid" alt="${film.title} Poster">
                <div class="film-card-body">
                    <h5 class="film-card-title">${film.title}</h5>
                    <p class="film-card-year">${film.year}</p>
                </div>
            </div>
        `;
        return col;
    }

    // Fungsi untuk menampilkan film di carousel
    function renderFilmsToCarousel(filmsToRender, container) {
        container.innerHTML = ''; // Bersihkan konten sebelumnya
        const filmsPerSlide = 6; // Jumlah film per slide di desktop
        let activeAdded = false;

        for (let i = 0; i < filmsToRender.length; i += filmsPerSlide) {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            if (!activeAdded) {
                carouselItem.classList.add('active');
                activeAdded = true;
            }

            const row = document.createElement('div');
            row.className = 'row w-100 mx-0 justify-content-center'; // Untuk Bootstrap grid di dalam carousel item

            const slideFilms = filmsToRender.slice(i, i + filmsPerSlide);
            slideFilms.forEach(film => {
                const filmCol = createFilmCard(film);
                // Hapus kelas col-6 col-md-3 col-lg-2 dan gunakan custom di CSS untuk carousel
                filmCol.classList.remove('col-6', 'col-md-3', 'col-lg-2'); // Hapus default Bootstrap cols
                row.appendChild(filmCol);
            });
            carouselItem.appendChild(row);
            container.appendChild(carouselItem);
        }
    }

    // Fungsi untuk menampilkan film di grid
    function renderFilmsToGrid(filmsToRender, container) {
        container.innerHTML = ''; // Bersihkan konten sebelumnya
        filmsToRender.forEach(film => {
            const filmCard = createFilmCard(film);
            container.appendChild(filmCard);
        });
    }

    // Fungsi untuk menampilkan detail film di modal
    function showFilmDetail(film) {
        modalFilmTitle.textContent = film.title;
        modalFilmPoster.src = film.poster;
        modalFilmSynopsis.textContent = film.synopsis;
        modalFilmGenre.textContent = film.genre;
        modalFilmYear.textContent = film.year;
        modalFilmDirector.textContent = film.director;
        modalFilmCast.textContent = film.cast;
        modalFilmTrailerLink.href = film.trailerLink;

        filmDetailModal.show();
    }

    // Inisialisasi: Tampilkan film saat halaman dimuat
    // Untuk "Populer", kita ambil beberapa film awal (misal 8 film pertama)
    renderFilmsToCarousel(films.slice(0, 8), popularFilmsContainer);

    // Untuk "Terbaru", kita ambil sisa film atau beberapa film spesifik
    // Saya ambil film dari index 8 ke atas untuk "Terbaru"
    renderFilmsToGrid(films.slice(8), latestFilmsContainer);

    // Event listener untuk klik pada kartu film (menggunakan event delegation)
    document.body.addEventListener('click', (event) => {
        const filmCard = event.target.closest('.film-card');
        if (filmCard) {
            const filmId = parseInt(filmCard.dataset.id);
            const selectedFilm = films.find(film => film.id === filmId);
            if (selectedFilm) {
                showFilmDetail(selectedFilm);
            }
        }
    });

    // Menginisialisasi semua carousel secara manual (jika ada lebih dari satu)
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carouselEl => {
        new bootstrap.Carousel(carouselEl, {
            interval: 5000, // Durasi otomatis geser
            pause: 'hover' // Pause saat mouse di atas carousel
        });
    });

});