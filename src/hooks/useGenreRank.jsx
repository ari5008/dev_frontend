function getGenreRank(genre) {
  switch (genre) {
    case 'ポップ':
      return 1;
    case '可愛い':
      return 2;
    case 'ロック':
      return 3;
    case 'ヒップホップ':
      return 4;
    case 'レトロ':
      return 5;
    case 'アンニュイ':
      return 6;
    case '癒されたい':
      return 7;
    case 'テンションが上がる':
      return 8;
    case '無心で聞きたい':
      return 9;
    case 'ドライブで聞きたい':
      return 10;
    case '最近のおすすめ':
      return 11;
    default:
      return 0;
  }
}

export const useGenreRank = (genre) => {
  return getGenreRank(genre);
}