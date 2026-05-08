const { input, select, confirm } = require('@inquirer/prompts');
const { searchContent, getContentDetail } = require('../models/searchModel');

const mainMenu = async () => {
  console.log('\n🎬 Bienvenido a Streaming Search App\n');

  const query = await input({ message: '🔍 ¿Qué película o serie deseas buscar?' });

  const results = await searchContent(query);

  if (!results || results.length === 0) {
    console.log('\n❌ No se encontraron resultados.');
    return mainMenu();
  }

  const choices = results.map((item) => ({
    name: `${item.title || item.name} (${item.media_type === 'movie' ? 'Película' : 'Serie'})`,
    value: { id: item.id, type: item.media_type },
  }));

  const selected = await select({
    message: '📋 Selecciona un resultado:',
    choices,
  });

  const detail = await getContentDetail(selected.id, selected.type);

  console.log('\n📌 Detalle:');
  console.log(`  Título     : ${detail.title || detail.name}`);
  console.log(`  Descripción: ${detail.overview}`);
  console.log(`  Puntuación : ${detail.vote_average}`);
  console.log(`  Estreno    : ${detail.release_date || detail.first_air_date}`);

  const again = await confirm({ message: '¿Deseas hacer otra búsqueda?' });

  if (again) return mainMenu();
  console.log('\n👋 ¡Hasta luego!\n');
};

module.exports = { mainMenu };
