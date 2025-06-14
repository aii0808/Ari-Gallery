document.addEventListener('DOMContentLoaded', () => {
    // Data film
    const films = [
        {
            id: 1,
            title: 'Vincenzo',
            year: 2021,
            genre: 'Dark Comedy, Crime, Legal Drama',
            synopsis: 'Seorang consigliere Mafia kembali ke Korea Selatan dari Italia untuk mendapatkan kembali emas tersembunyi yang disembunyikannya di bawah gedung yang akan dihancurkan, dan dia tanpa sengaja terlibat dalam perjuangan hukum melawan kartel farmasi jahat.',
            poster: './img/vincenzo.jpg', // TODO: GANTI INI DENGAN './img/vincenzo.WEBP' jika ada
            director: 'Kim Hee-won',
            cast: 'Song Joong-ki, Jeon Yeo-been, Ok Taec-yeon',
            trailerLink: 'https://www.youtube.com/watch?v=R1E8f_B1C4Q' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 2,
            title: 'Alchemy of Souls Part 1',
            year: 2022,
            genre: 'Fantasy, Romance, Historical',
            synopsis: 'Berlatar di negara fiksi Daeho, drama ini mengikuti penyihir muda yang terlarang saat ia bertemu dengan seorang prajurit yang jiwanya terperangkap di dalam tubuhnya.',
            poster: './img/alchemy_s1.webp', // TODO: GANTI INI DENGAN './img/alchemy_of_souls_p1.WEBP' jika ada
            director: 'Park Joon-hwa',
            cast: 'Lee Jae-wook, Jung So-min, Go Youn-jung',
            trailerLink: 'https://www.youtube.com/watch?v=R9j8L-3Eks0' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 3,
            title: 'Alchemy of Souls Part 2: Light and Shadow',
            year: 2022,
            genre: 'Fantasy, Romance, Historical',
            synopsis: 'Tiga tahun setelah peristiwa di bagian pertama, Jang Uk kembali dari ambang kematian dengan kekuatan gelap, sementara seorang wanita misterius muncul yang entah somehow mirip dengan Mu-deok.',
            poster: './img/alchemy_s2.webp', // TODO: GANTI INI DENGAN './img/alchemy_of_souls_p2.WEBP' jika ada
            director: 'Park Joon-hwa',
            cast: 'Lee Jae-wook, Go Youn-jung, Hwang Min-hyun',
            trailerLink: 'https://www.youtube.com/watch?v=F-h-vYVd6lM' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 4,
            title: 'Death\'s Game',
            year: 2023,
            genre: 'Fantasy, Thriller, Drama',
            synopsis: 'Seorang pria yang frustrasi dengan hidupnya memutuskan untuk bunuh diri, tetapi malah dihukum untuk mengalami kematian 12 kali dalam tubuh orang yang berbeda.',
            poster: './img/death_game.webp', // TODO: GANTI INI DENGAN './img/deaths_game.WEBP' jika ada
            director: 'Ha Byung-hoon',
            cast: 'Seo In-guk, Park So-dam',
            trailerLink: 'https://www.youtube.com/watch?v=2nS5k_w4D4w' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 5,
            title: 'Descendants of the Sun',
            year: 2016,
            genre: 'Romantic Drama, Medical Drama',
            synopsis: 'Kisah cinta antara seorang kapten pasukan khusus dan seorang dokter yang terlibat dalam misi menjaga perdamaian di negara fiksi Uruk.',
            poster: './img/dots.jpg', // TODO: GANTI INI DENGAN './img/descendants_of_the_sun.WEBP' jika ada
            director: 'Lee Eung-bok, Baek Sang-hoon',
            cast: 'Song Joong-ki, Song Hye-kyo',
            trailerLink: 'https://www.youtube.com/watch?v=f_B2zM7gVlM' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 6,
            title: 'Squid Game',
            year: 2021,
            genre: 'Survival Drama, Thriller',
            synopsis: 'Ratusan pemain yang terlilit hutang menerima undangan aneh untuk bersaing dalam permainan anak-anak. Taruhannya mematikan.',
            poster: './img/squid.jpg', // TODO: GANTI INI DENGAN './img/squid_game.WEBP' jika ada
            director: 'Hwang Dong-hyuk',
            cast: 'Lee Jung-jae, Park Hae-soo, Jung Ho-yeon',
            trailerLink: 'https://www.youtube.com/watch?v=oqxAJKy0grk' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 7,
            title: 'Sweet Home',
            year: 2020,
            genre: 'Horror, Apocalypse, Thriller',
            synopsis: 'Seorang siswa SMA yang kesepian pindah ke apartemen baru setelah tragedi keluarga. Segera, manusia di sekitarnya mulai berubah menjadi monster buas.',
            poster: './img/sweet_home.WEBP', // Sudah lokal
            director: 'Lee Eung-bok',
            cast: 'Song Kang, Lee Jin-wook, Lee Si-young',
            trailerLink: 'https://www.youtube.com/watch?v=7M_vN9m-yCg' // TODO: GANTI INI DENGAN TRAILER ASLI Sweet Home
        },
        {
            id: 8,
            title: 'Train to Busan',
            year: 2016,
            genre: 'Action, Horror, Thriller',
            synopsis: 'Saat wabah zombie menyebar ke seluruh negeri, beberapa penumpang yang terperangkap dalam kereta menuju Busan berjuang untuk bertahan hidup.',
            poster: './img/train_to_busan.webp', // TODO: GANTI INI DENGAN './img/train_to_busan.WEBP' jika ada
            director: 'Yeon Sang-ho',
            cast: 'Gong Yoo, Jung Yu-mi, Ma Dong-seok',
            trailerLink: 'https://www.youtube.com/watch?v=pyjP_s0c-q8' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 9,
            title: 'Mercy For None',
            year: 2025,
            genre: 'Action, Thriller, Crime',
            synopsis: 'Sebuah film aksi-thriller yang menegangkan tentang perjuangan seorang detektif yang melawan sindikat kejahatan tanpa ampun yang mencengkeram kota. Ia bertekad untuk membawa keadilan, bahkan jika itu berarti mengorbankan segalanya.',
            poster: './img/mercy_for_none.WEBP', // Sudah lokal
            backdrop: './img/mercy_for_none.webp', // TODO: GANTI INI DENGAN BACKDROP ASLI JIKA ADA (atau hapus jika tidak pakai)
            director: 'Kim Jin-min', // TODO: Isi dengan sutradara asli
            cast: 'Lee Jong-suk, Kim Rae-won', // TODO: Isi dengan pemeran asli
            trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // *** INI MASIH RICKROLL! GANTI DENGAN TRAILER ASLI MERCY FOR NONE ***
        },
        {
            id: 10,
            title: 'Kingdom',
            year: 2019,
            genre: 'Horror, Historical, Thriller',
            synopsis: 'Saat desas-desus tentang penyakit aneh menyebar, putra mahkota ditugaskan untuk menyelidiki kebenasan di balik pandemi yang misterius dan mengubah orang menjadi zombie.',
            poster: './img/kingdom.jpg', // TODO: GANTI INI DENGAN './img/kingdom.WEBP' jika ada
            director: 'Kim Seong-hun, Park In-je',
            cast: 'Ju Ji-hoon, Ryu Seung-ryong, Bae Doona',
            trailerLink: 'https://www.youtube.com/watch?v=4l-yByZpaGQ' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 11,
            title: 'Mr. Sunshine',
            year: 2018,
            genre: 'Historical, Romance, Drama',
            synopsis: 'Seorang anak laki-laki yang lahir sebagai budak di Korea, melakukan perjalanan ke Amerika Serikat setelah insiden Shinmiyangyo (ekspedisi AS ke Korea pada tahun 1871), dan kembali ke Joseon sebagai perwira Korps Marinir AS.',
            poster: './img/mr_sunshine.jpg', // TODO: GANTI INI DENGAN './img/mr_sunshine.WEBP' jika ada
            director: 'Lee Eung-bok',
            cast: 'Lee Byung-hun, Kim Tae-ri',
            trailerLink: 'https://www.youtube.com/watch?v=F0Jb1fLqQj4' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 12,
            title: 'Itaewon Class',
            year: 2020,
            genre: 'Drama, Business',
            synopsis: 'Seorang mantan narapidana dan teman-temannya bekerja keras untuk membuka bar dan mewujudkan impian mereka di Itaewon.',
            poster: './img/itewon.jpg', // TODO: GANTI INI DENGAN './img/itaewon_class.WEBP' jika ada
            director: 'Kim Sung-yoon',
            cast: 'Park Seo-joon, Kim Da-mi',
            trailerLink: 'https://www.youtube.com/watch?v=uC0_5rP9lEQ' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        // --- FILM BARU DIMULAI DI SINI ---
        {
            id: 13,
            title: 'A Killer Paradox', // Perbaikan judul
            year: 2024,
            genre: 'Thriller, Crime, Dark Comedy',
            synopsis: 'Seorang mahasiswa biasa secara tidak sengaja membunuh seorang pembunuh berantai, dan kemudian menemukan dirinya dalam permainan kucing-kucingan dengan seorang detektif yang cerdik.',
            poster: './img/a_killer_paradox.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Lee Chang-hee',
            cast: 'Choi Woo-shik, Son Suk-ku',
            trailerLink: 'https://www.youtube.com/watch?v=VlS-FmPqI3Q' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 14,
            title: 'Big Bet', // Mengganti "Kajino" menjadi judul drama "Big Bet" yang lebih dikenal
            year: 2022,
            genre: 'Crime, Drama',
            synopsis: 'Kisah Cha Moo-sik, yang menjadi raja kasino di Filipina, mempertaruhkan segalanya untuk membangun dan mempertahankan kerajaannya.',
            poster: './img/big_bet.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA (Cari poster "Big Bet")
            director: 'Kang Yoon-sung',
            cast: 'Choi Min-sik, Son Suk-ku, Lee Dong-hwi',
            trailerLink: 'https://www.youtube.com/watch?v=X-z8P-o-9kI' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 15,
            title: 'Dear. M', // Judul yang lebih akurat
            year: 2021,
            genre: 'Romance, Youth, Drama',
            synopsis: 'Sebuah drama romantis kampus tentang pencarian "M," seorang individu misterius yang disebutkan dalam postingan anonim di forum komunitas universitas.',
            poster: './img/dearM.jpeg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Park Jin-woo, Seo Joo-wan',
            cast: 'Park Hye-su, Jaehyun (NCT), Roh Jeong-eui',
            trailerLink: 'https://www.youtube.com/watch?v=3R-zV-rW61Q' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 16,
            title: 'Weak Hero Class 1',
            year: 2022,
            genre: 'Action, Youth, School, Drama',
            synopsis: 'Seorang siswa cerdas yang secara fisik lemah menggunakan otaknya untuk melawan penindasan di sekolah, bersekutu dengan beberapa siswa lain yang berbeda dari dirinya.',
            poster: './img/weak_hero.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Yoo Soo-min',
            cast: 'Park Ji-hoon, Choi Hyun-wook, Hong Kyung',
            trailerLink: 'https://www.youtube.com/watch?v=gT8M9i_g80c' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 17,
            title: 'Resident Playbook',
            year: 2024,
            genre: 'Medical, Slice of Life, Drama',
            synopsis: 'Kisah kehidupan sehari-hari dan tantangan yang dihadapi oleh dokter residen dan profesor di Pusat Medis Yulje.',
            poster: './img/resident_playbook.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Shin Won-ho',
            cast: 'Go Youn-jung, Shin Si-ah, Kang Yoo-seok', // Contoh cast, sesuaikan
            trailerLink: 'https://www.youtube.com/watch?v=unknown_trailer' // TODO: GANTI INI DENGAN TRAILER ASLI (mungkin belum rilis)
        },
        {
            id: 18,
            title: 'All of Us Are Dead',
            year: 2022,
            genre: 'Zombie, Horror, Teen, Survival',
            synopsis: 'Sebuah virus zombie menyebar dengan cepat di sekolah, menjebak para siswa. Mereka harus berjuang untuk bertahan hidup atau menjadi bagian dari yang terinfeksi.',
            poster: './img/all_off_us.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Lee Jae-kyoo, Kim Nam-su',
            cast: 'Park Ji-hu, Yoon Chan-young, Cho Yi-hyun, Lomon',
            trailerLink: 'https://www.youtube.com/watch?v=Y_RkYh_9170' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 19,
            title: 'Duty After School',
            year: 2023,
            genre: 'Sci-Fi, Action, Thriller, School',
            synopsis: 'Siswa SMA diwajibkan untuk bergabung dengan militer untuk melawan makhluk asing misterius yang tiba-tiba menyerang bumi.',
            poster: './img/duty_after_school.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Shin Yong-whi',
            cast: 'Shin Hyun-soo, Im Se-mi, Lee Won-jung',
            trailerLink: 'https://www.youtube.com/watch?v=H73JpGkL2x0' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        {
            id: 20,
            title: 'Alive', // atau '#Alive'
            year: 2020,
            genre: 'Zombie, Thriller, Survival',
            synopsis: 'Seorang pria berjuang untuk bertahan hidup sendirian di apartemennya setelah wabah zombie tiba-tiba melanda kota Seoul.',
            poster: './img/alive.jpg', // TODO: GANTI INI DENGAN PATH LOKAL ANDA
            director: 'Cho Il-hyung',
            cast: 'Yoo Ah-in, Park Shin-hye',
            trailerLink: 'https://www.youtube.com/watch?v=F3t21X1C-F8' // TODO: GANTI INI DENGAN TRAILER ASLI
        },
        
        // --- FILM BARU BERAKHIR DI SINI ---
    ];

    // Elemen-elemen DOM yang akan digunakan
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
    const genreDropdownMenu = document.getElementById('genre-dropdown-menu');
    const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
    const searchInput = document.getElementById('searchInput');
    const executeSearchButton = document.getElementById('executeSearchButton');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const homeLink = document.getElementById('homeLink');
    const popularFilmsSection = document.getElementById('popular-films-section');
    const latestFilmsSection = document.getElementById('latest-films-section');
    const resultsTitleElement = document.getElementById('results-title');
    const loadingSpinner = document.getElementById('loading-spinner');
    const sortBySelect = document.getElementById('sortBy');

    // Elemen untuk Login
    const loginLink = document.getElementById('loginLink');
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginMessage = document.getElementById('loginMessage');

    // Untuk halaman About (jika ada elemen login di sana)
    const loginLinkAbout = document.getElementById('loginLinkAbout');
    if (loginLinkAbout) { // Pastikan elemen ada di halaman saat ini
        loginLinkAbout.addEventListener('click', () => {
            loginModal.show();
        });
    }

    // --- Fungsi Bantuan untuk Status Login ---
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    function getLoggedInUsername() {
        return localStorage.getItem('loggedInUsername');
    }

    function setLoginStatus(status, username = '') {
        localStorage.setItem('isLoggedIn', status);
        if (status) {
            localStorage.setItem('loggedInUsername', username);
        } else {
            localStorage.removeItem('loggedInUsername');
        }
        updateLoginLink(); // Perbarui tampilan link login
    }

    function updateLoginLink() {
        if (isLoggedIn()) {
            const username = getLoggedInUsername();
            loginLink.textContent = `Hallo, ${username}! (Logout)`;
            loginLink.removeEventListener('click', showLoginModal); // Hapus listener lama
            loginLink.addEventListener('click', confirmLogout); // Tambah listener logout
        } else {
            loginLink.textContent = 'Login';
            loginLink.removeEventListener('click', confirmLogout); // Hapus listener logout
            loginLink.addEventListener('click', showLoginModal); // Tambah listener login
        }
    }

    function showLoginModal() {
        loginMessage.style.display = 'none'; // Sembunyikan pesan error sebelumnya
        usernameInput.value = ''; // Kosongkan input
        passwordInput.value = ''; // Kosongkan input
        loginModal.show();
    }

    function confirmLogout() {
        if (confirm('Apakah Anda yakin ingin logout?')) {
            setLoginStatus(false);
            alert('Sampai jumpa..');
        }
    }

    // --- LOGIKA LOGIN (Simulasi) ---
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah form submit default

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // TODO: GANTI DENGAN USERNAME DAN PASSWORD YANG ANDA INGINKAN
        const validUsername = 'admin'; 
        const validPassword = 'admin'; 

        if (username === validUsername && password === validPassword) {
            setLoginStatus(true, username);
            loginModal.hide();
            alert(`Selamat datang, ${username}!`);
        } else {
            loginMessage.textContent = 'Username atau password salah. Coba lagi.';
            loginMessage.style.display = 'block';
        }
    });

    // --- END LOGIKA LOGIN ---


    // Mengupdate Hero Section dengan film 'Mercy For None'
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) { // Pastikan hanya berjalan di index.html
        const heroTitle = heroSection.querySelector('h1');
        const heroSynopsis = heroSection.querySelector('p.lead');
        const heroTrailerBtn = heroSection.querySelector('.hero-trailer-btn');
        const heroDetailBtn = heroSection.querySelector('.hero-detail-btn');

        const featuredFilm = films.find(film => film.title === 'Mercy For None'); 

        if (featuredFilm) {
            heroSection.style.backgroundImage = `url('${featuredFilm.backdrop || featuredFilm.poster}')`; 
            heroTitle.textContent = featuredFilm.title;
            heroSynopsis.textContent = featuredFilm.synopsis;

            heroTrailerBtn.onclick = () => window.open(featuredFilm.trailerLink, '_blank');
            heroDetailBtn.onclick = () => showFilmDetail(featuredFilm);
        }
    }


    // Fungsi untuk membuat kartu film
    function createFilmCard(film) {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-3 col-lg-2'; // Bootstrap responsive columns

        col.innerHTML = `
            <div class="film-card" data-id="${film.id}">
                <img src="${film.poster}" loading="lazy" class="img-fluid" alt="${film.title} Poster">
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
        if (!container) return; // Pastikan kontainer ada
        container.innerHTML = ''; // Bersihkan konten sebelumnya
        const filmsPerSlide = 6; 
        let activeAdded = false;

        for (let i = 0; i < filmsToRender.length; i += filmsPerSlide) {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            if (!activeAdded) {
                carouselItem.classList.add('active');
                activeAdded = true;
            }

            const row = document.createElement('div');
            row.className = 'row w-100 mx-0 justify-content-center'; 

            const slideFilms = filmsToRender.slice(i, i + filmsPerSlide);
            slideFilms.forEach(film => {
                const filmCol = createFilmCard(film);
                filmCol.classList.remove('col-6', 'col-md-3', 'col-lg-2'); 
                filmCol.classList.add('col-6', 'col-md-2'); 
                row.appendChild(filmCol);
            });
            carouselItem.appendChild(row);
            container.appendChild(carouselItem);
        }
    }

    // Fungsi untuk menampilkan film di grid
    function renderFilmsToGrid(filmsToRender, container) {
        if (!container) return; // Pastikan kontainer ada
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

    // Fungsi untuk mengurutkan film
    function sortFilms(filmsToSort, sortByValue) {
        if (!sortByValue) return filmsToSort; 

        return [...filmsToSort].sort((a, b) => { 
            if (sortByValue === 'title-asc') {
                return a.title.localeCompare(b.title);
            } else if (sortByValue === 'title-desc') {
                return b.title.localeCompare(a.title);
            } else if (sortByValue === 'year-asc') {
                return a.year - b.year;
            } else if (sortByValue === 'year-desc') {
                return b.year - a.year;
            }
            return 0;
        });
    }

    // Fungsi untuk menampilkan hasil pencarian/genre dan menyembunyikan bagian lainnya
    let currentFilteredFilms = []; 

    function filterAndDisplayResults(filteredFilms, titleText = "Hasil Pencarian & Genre") {
        if (!resultsSection) return; // Pastikan elemen ada di halaman saat ini

        loadingSpinner.style.display = 'block'; 
        resultsContainer.innerHTML = ''; 
        noResultsMessage.style.display = 'none'; 

        setTimeout(() => {
            // Sembunyikan bagian default (hanya jika ada di halaman ini)
            if (popularFilmsSection) popularFilmsSection.style.display = 'none';
            if (latestFilmsSection) latestFilmsSection.style.display = 'none';

            // Tampilkan bagian hasil
            resultsSection.style.display = 'block';
            resultsTitleElement.textContent = titleText;
            
            currentFilteredFilms = filteredFilms; 
            const sortedFilms = sortFilms(currentFilteredFilms, sortBySelect.value); 

            if (sortedFilms.length === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
                renderFilmsToGrid(sortedFilms, resultsContainer);
            }
            loadingSpinner.style.display = 'none'; 
        }, 300); 
    }

    // Fungsi untuk mereset tampilan ke beranda awal
    function resetToHomeView() {
        // Hanya jalankan jika elemen ada (yaitu di index.html)
        if (popularFilmsSection && latestFilmsSection && resultsSection) {
            popularFilmsSection.style.display = 'block';
            latestFilmsSection.style.display = 'block';
            resultsSection.style.display = 'none';
            noResultsMessage.style.display = 'none'; 
            searchInput.value = ''; 
            sortBySelect.value = ''; 
            resultsTitleElement.textContent = "Hasil Pencarian & Genre"; 
        }
    }

    // --- Inisialisasi Tampilan Awal (Hanya untuk index.html) ---
    if (popularFilmsContainer && latestFilmsContainer) {
        const featuredFilm = films.find(film => film.title === 'Mercy For None'); 
        const popularFilms = films.filter(film => film.id !== featuredFilm.id).slice(0, 8); 
        renderFilmsToCarousel(popularFilms, popularFilmsContainer);

        const latestFilms = films.filter(film => 
            film.id !== featuredFilm.id && !popularFilms.some(pFilm => pFilm.id === film.id)
        );
        renderFilmsToGrid(latestFilms, latestFilmsContainer);

        resetToHomeView(); 
    }

    // --- Interaktivitas untuk Genre (Hanya jika genre dropdown ada) ---
    if (genreDropdownMenu) {
        const allGenres = films.flatMap(film => film.genre.split(', ').map(g => g.trim()));
        const uniqueGenres = [...new Set(allGenres)].sort();
        
        uniqueGenres.forEach(genre => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.textContent = genre;
            a.addEventListener('click', (event) => {
                event.preventDefault(); 
                const filteredByGenre = films.filter(film => film.genre.includes(genre));
                filterAndDisplayResults(filteredByGenre, `Genre: ${genre}`); 
                document.getElementById('navbarDropdownGenre').click(); 
            });
            li.appendChild(a);
            genreDropdownMenu.appendChild(li);
        });
    }

    // --- Interaktivitas untuk Pencarian (Hanya jika search input ada) ---
    if (executeSearchButton && searchInput) {
        function performSearch() {
            const query = searchInput.value.toLowerCase().trim();
            searchModal.hide(); 

            if (query === '') {
                resetToHomeView(); 
                return;
            }

            const filteredFilms = films.filter(film => 
                film.title.toLowerCase().includes(query) ||
                film.synopsis.toLowerCase().includes(query) ||
                film.genre.toLowerCase().includes(query) ||
                film.director.toLowerCase().includes(query) ||
                film.cast.toLowerCase().includes(query)
            );
            filterAndDisplayResults(filteredFilms, `Hasil Pencarian untuk: "${query}"`); 
        }

        executeSearchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }

    // --- Event listener untuk Sorting (Hanya jika sortBySelect ada) ---
    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            // Re-render dengan sorting baru, gunakan filtered data yang terakhir
            filterAndDisplayResults(currentFilteredFilms, resultsTitleElement.textContent); 
        });
    }

    // --- Event listener untuk klik pada kartu film (menggunakan event delegation) ---
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

    // --- Event listener untuk link "Beranda" (Hanya jika homeLink ada) ---
    if (homeLink) {
        homeLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            resetToHomeView();
        });
    }

    // Menginisialisasi semua carousel secara manual (Hanya jika ada carousel)
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carouselEl => {
        new bootstrap.Carousel(carouselEl, {
            interval: 5000, 
            pause: 'hover' 
        });
    });

    // Panggil updateLoginLink saat DOM dimuat untuk mengatur status awal
    updateLoginLink();

});