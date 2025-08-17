const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const creatureInfo = document.getElementById('creature-info');

const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const API_BASE_URL = 'https://rpg-creature-api.freecodecamp.rocks/api/creature';

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

async function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a creature name or ID');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/${searchTerm}`);
        
        if (!response.ok) {
            throw new Error('Creature not found');
        }
        
        const data = await response.json();
        displayCreature(data);
        
    } catch (error) {
        alert('Creature not found');
        hideCreatureInfo();
    }
}

function displayCreature(data) {
    types.innerHTML = '';
    
    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    
    data.types.forEach(typeInfo => {
        const typeElement = document.createElement('div');
        typeElement.textContent = typeInfo.name.toUpperCase();
        typeElement.className = `type-badge type-${typeInfo.name}`;
        types.appendChild(typeElement);
    });
    
    data.stats.forEach(statInfo => {
        const statName = statInfo.name;
        const statValue = statInfo.base_stat;
        
        switch (statName) {
            case 'hp':
                hp.textContent = statValue;
                break;
            case 'attack':
                attack.textContent = statValue;
                break;
            case 'defense':
                defense.textContent = statValue;
                break;
            case 'special-attack':
                specialAttack.textContent = statValue;
                break;
            case 'special-defense':
                specialDefense.textContent = statValue;
                break;
            case 'speed':
                speed.textContent = statValue;
                break;
        }
    });
    
    showCreatureInfo();
}

function showCreatureInfo() {
    creatureInfo.style.display = 'block';
    creatureInfo.classList.add('show');
}

function hideCreatureInfo() {
    creatureInfo.style.display = 'none';
    creatureInfo.classList.remove('show');
}

window.addEventListener('load', () => {
    searchInput.value = '';
    hideCreatureInfo();
});