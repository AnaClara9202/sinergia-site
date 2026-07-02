export type City = { name: string; taxa: 240 | 480 | 720 };

const T480 = new Set([
  'Angra dos Reis', 'Barra do Piraí', 'Bom Jardim', 'Duas Barras', 'Itaocara',
  'Nova Friburgo', 'Petrópolis', 'Santo Antônio de Pádua', 'São José do Vale do Rio Preto',
  'Sumidouro', 'Teresópolis',
]);

const T720 = new Set([
  'Barra Mansa', 'Itatiaia', 'Paraíba do Sul', 'Resende', 'Três Rios', 'Volta Redonda',
]);

const ALL_RJ = [
  'Angra dos Reis', 'Aperibé', 'Araruama', 'Areal', 'Armação dos Búzios', 'Arraial do Cabo',
  'Barra do Piraí', 'Barra Mansa', 'Belford Roxo', 'Bom Jardim', 'Bom Jesus do Itabapoana',
  'Cabo Frio', 'Cachoeiras de Macacu', 'Cambuci', 'Campos dos Goytacazes', 'Cantagalo',
  'Carapebus', 'Cardoso Moreira', 'Carmo', 'Casimiro de Abreu', 'Comendador Levy Gasparian',
  'Conceição de Macabu', 'Cordeiro', 'Duas Barras', 'Duque de Caxias', 'Engenheiro Paulo de Frontin',
  'Guapimirim', 'Iguaba Grande', 'Itaboraí', 'Itaguaí', 'Italva', 'Itaocara', 'Itaperuna',
  'Itatiaia', 'Japeri', 'Laje do Muriaé', 'Macaé', 'Macuco', 'Magé', 'Mangaratiba',
  'Maricá', 'Mendes', 'Mesquita', 'Miguel Pereira', 'Miracema', 'Natividade', 'Nilópolis',
  'Niterói', 'Nova Friburgo', 'Nova Iguaçu', 'Paracambi', 'Paraíba do Sul', 'Paraty',
  'Paty do Alferes', 'Petrópolis', 'Pinheiral', 'Piraí', 'Porciúncula', 'Porto Real',
  'Quatis', 'Queimados', 'Quissamã', 'Resende', 'Rio Bonito', 'Rio Claro', 'Rio das Flores',
  'Rio das Ostras', 'Rio de Janeiro', 'Santa Maria Madalena', 'Santo Antônio de Pádua',
  'São Fidélis', 'São Francisco de Itabapoana', 'São Gonçalo', 'São João da Barra',
  'São João de Meriti', 'São José de Ubá', 'São José do Vale do Rio Preto',
  'São Pedro da Aldeia', 'São Sebastião do Alto', 'Sapucaia', 'Saquarema', 'Seropédica',
  'Silva Jardim', 'Sumidouro', 'Tanguá', 'Teresópolis', 'Trajano de Moraes', 'Três Rios',
  'Valença', 'Varre-Sai', 'Vassouras', 'Volta Redonda',
];

export const CITIES: City[] = ALL_RJ.sort((a, b) => a.localeCompare(b, 'pt-BR')).map((name) => {
  const taxa = T720.has(name) ? 720 : T480.has(name) ? 480 : 240;
  return { name, taxa };
});
