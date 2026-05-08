const { input, select, confirm } = require('@inquirer/prompts');
const { searchContent, getContentDetail } = require('../models/searchModel');

const mainMenu = async () => {
  console.log('\nï¿½ï¿½ Bienvenido a Streaming Search App\n');

  const query = await input({ message: 'í´ Â¿QuÃ© pelÃ­cula o serie deseas buscar?' });

  const results = await searchContent(query);

  if (!results || results.length === 0) {
    console.log('\nâŒ No se encontraron resultados.');
    return mainMenu();
  }

  const choices = results.map((item) => ({
    name: `${item.title || item.name} (${item.media_type === 'movie' ? 'PelÃ­cula' : 'Serie'})`,
    value: { id: item.id, type: item.media_type },
  }));

  const selected = await select({
    message: 'í³‹ Selecciona un resultado:',
    choices,
  });

  const detail = await getContentDetail(selected.id, selected.type);

  console.log('\ní³Œ Detalle:');
  console.log(`  TÃ­tulo     : ${detail.title || detail.name}`);
  console.log(`  DescripciÃ³n: ${detail.overview}`);
  console.log(`  PuntuaciÃ³n : ${detail.vote_average}`);
  console.log(`  Estreno    : ${detail.release_date || detail.first_air_date}`);

  const again = await confirm({ message: 'Â¿Deseas hacer otra bÃºsqueda?' });

  if (again) return mainMenu();
  console.log('\ní±‹ Â¡Hasta luego!\n');
};

module.exports = { mainMenu };
