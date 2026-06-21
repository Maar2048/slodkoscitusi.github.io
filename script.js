document.addEventListener("DOMContentLoaded", () => {
  // Pobieranie elementów formularza
  const sizeSelect = document.getElementById('size');
  const spongeSelect = document.getElementById('sponge');
  const creamSelect = document.getElementById('cream');
  const fruitsCheck = document.getElementById('addon_fruits');
  const crunchCheck = document.getElementById('addon_crunch');
  const dripCheck = document.getElementById('addon_drip');

  // Pobieranie elementów tekstowych do podsumowania
  const sumSize = document.getElementById('sum-size');
  const sumSponge = document.getElementById('sum-sponge');
  const sumCream = document.getElementById('sum-cream');
  const sumAddons = document.getElementById('sum-addons');

  // Pobieranie elementów wizualnych tortu
  const previewSponge = document.getElementById('preview-sponge');
  const previewCream = document.getElementById('preview-cream');
  const previewFruits = document.getElementById('preview-fruits');
  const previewDrip = document.getElementById('preview-drip');

  // Mapowanie wartości wyboru na zmienne CSS
  const spongeColors = {
    'jasny': 'var(--sponge-jasny)',
    'ciemny': 'var(--sponge-ciemny)',
    'red_velvet': 'var(--sponge-red)'
  };

  const creamColors = {
    'smietankowy': 'var(--cream-smietankowy)',
    'czekoladowy': 'var(--cream-czekoladowy)',
    'malinowy': 'var(--cream-malinowy)',
    'pistacjowy': 'var(--cream-pistacjowy)'
  };

  // Funkcja aktualizująca cały prawy panel
  function updatePreview() {
    // 1. Aktualizacja tekstów
    sumSize.textContent = sizeSelect.options[sizeSelect.selectedIndex].text;
    sumSponge.textContent = spongeSelect.options[spongeSelect.selectedIndex].text;
    sumCream.textContent = creamSelect.options[creamSelect.selectedIndex].text;

    let addons = [];
    if(fruitsCheck.checked) addons.push("Owoce");
    if(crunchCheck.checked) addons.push("Chrupka");
    if(dripCheck.checked) addons.push("Drip");
    
    sumAddons.textContent = addons.length > 0 ? addons.join(", ") : "Brak";

    // 2. Aktualizacja wizualizacji tortu
    previewSponge.style.backgroundColor = spongeColors[spongeSelect.value];
    previewCream.style.backgroundColor = creamColors[creamSelect.value];

    // Owoce on/off
    if(fruitsCheck.checked) {
        previewFruits.classList.remove('hidden');
    } else {
        previewFruits.classList.add('hidden');
    }

    // Drip on/off
    if(dripCheck.checked) {
        previewDrip.classList.remove('hidden');
    } else {
        previewDrip.classList.add('hidden');
    }
  }

  // Nasłuchiwanie zmian na każdym istotnym polu (uruchamia podgląd)
  const inputsToWatch = document.querySelectorAll('#cake-form select, #cake-form input[type="checkbox"]');
  inputsToWatch.forEach(element => {
    element.addEventListener('change', updatePreview);
  });
});
