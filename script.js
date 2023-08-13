var map = L.map('map').setView([-10.282238, -36.563444], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 14,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([-10.29559, -36.58207]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.27796, -36.5644]).addTo(map)
    .bindPopup('Sequestro')

L.marker([-10.29297,	-36.58247]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.28321, -36.56879]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.2868, -36.55816]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.29540, -36.58230]).addTo(map)
    .bindPopup('Desobediência')

L.marker([-10.2802, -36.55493]).addTo(map)
    .bindPopup('Violência sexual')

L.marker([-10.28387, -36.56257]).addTo(map)
    .bindPopup('Vandalismo')

L.marker([-10.28367, -36.55173]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.29589, -36.5778]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.2858, -36.55647]).addTo(map)
    .bindPopup('Tentativa de homicídio')

L.marker([-10.29473, -36.57945]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.29240, -36.58390]).addTo(map)
    .bindPopup('Mandado em aberto')

L.marker([-10.28722, -36.56091]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.29220, -36.58420]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.28786, -36.56402]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.29640, -36.58100]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.29690, -36.58000]).addTo(map)
    .bindPopup('Porte de arma')

L.marker([-10.29395, -36.58407]).addTo(map)
    .bindPopup('Homicídio')

L.marker([-10.29659, -36.58060]).addTo(map)
    .bindPopup('Tentativa de homicídio')

L.marker([-10.29599, -36.58157]).addTo(map)
    .bindPopup('Violência contra a mulher')

L.marker([-10.29475, -36.58307]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.29520, -36.58257]).addTo(map)
    .bindPopup('Tentativa de homicídio')

L.marker([-10.27856, -36.5649]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.27696, -36.5637]).addTo(map)
    .bindPopup('Tráfico de drogas')

L.marker([-10.27726, -36.5639]).addTo(map)
    .bindPopup('Violência contra mulher')

L.marker([-10.27750, -36.5641]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.27480, -36.5621]).addTo(map)
    .bindPopup('Estupro')

L.marker([-10.27550, -36.5625]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.27600, -36.5629]).addTo(map)
    .bindPopup('Roubo')

L.marker([-10.27796, -36.5644]).addTo(map)
    .bindPopup('Porte de arma')

L.marker([-10.27996, -36.5659]).addTo(map)
    .bindPopup('Tentativa de homicídio')

/*L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();

L.marker([]).addTo(map)
    .bindPopup('')
    .openPopup();
*/