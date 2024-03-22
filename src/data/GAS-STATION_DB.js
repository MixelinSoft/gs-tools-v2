const firms = {
  prima: 'ТОВ "ПРІМАРІУС"',
  alete: 'ТОВ "АЛЕТЕЯ"',
};

// const template = {
//   gsId: '01',
//   gsNumber: '1',
//   gsFirm: firms.prima,
//   phone: '+38063',
//   address: 'м. Днiпро, ',
//   zip: '',
//   region: '',
//   gps: '',
// };

const gsDB = [
  // 01 - ТОВ "ПРIМАРIУС"
  // ! Add Phone Number
  // {
  //   gsId: '01',
  //   gsNumber: '1',
  //   gsFirm: firms.prima,
  //   // phone: "+380",
  //   address: 'проспект Богдана Хмельницького, 135-А',
  //   zip: '49032',
  //   region: 'Шевченкiвський',
  //   gps: '!1m18!1m12!1m3!1d770.0489542633202!2d35.00072809965026!3d48.39958775694396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb34570ade35%3A0x632689b649e536f6!2z0JDQstGW0LDRgSDQn9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708689558331!5m2!1suk!2sua',
  // },

  // 02 - ТОВ "ПРIМАРIУС"
  {
    gsId: '02',
    gsNumber: '2',
    gsFirm: firms.prima,
    phone: '+380632966982',
    address: 'вулиця Космічна, 30',
    zip: '49100',
    region: 'Соборний',
    gps: '!1m18!1m12!1m3!1d540.8914617804971!2d35.03976145567536!3d48.411988236877924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb589c6bfb91%3A0x423cbc8e4dc0c78e!2sSentosa%20Oil!5e0!3m2!1suk!2sua!4v1708675350332!5m2!1suk!2sua',
    linkToGm: 'AVWVJ7evur2uuS157',
  },

  // 04 - ТОВ "ПРIМАРIУС"
  {
    gsId: '04',
    gsNumber: '4',
    gsFirm: firms.prima,
    phone: '+380632967020',
    address: 'вулиця Костя Гордієнка, 2-А',
    zip: '49064',
    region: 'Новокодацький',
    gps: '!1m18!1m12!1m3!1d1305.7133642391127!2d34.98913700767761!3d48.472581170892646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3b39cbcd811%3A0x807b22d254497944!2sSentosa%20Oil!5e0!3m2!1suk!2sua!4v1708688781609!5m2!1suk!2sua',
    linkToGm: 'FLeqymbJNTq5fcFT9',
  },

  // 05 - ТОВ "ПРIМАРIУС"
  {
    gsId: '05',
    gsNumber: '5',
    gsFirm: firms.prima,
    phone: '+380632967029',
    address: 'вулиця Набережна Заводська, 56',
    zip: '49019',
    region: 'Новокодацький',
    gps: '!1m18!1m12!1m3!1d2644.3143681596844!2d34.93884357627463!3d48.48886352664041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe179b004a51b%3A0xc4f862201f9d876d!2sYukon!5e0!3m2!1suk!2sua!4v1708778146842!5m2!1suk!2sua',
    linkToGm: 'cmLj1neiZQ3GPpFE8',
  },

  //07 - ТОВ "ПРIМАРIУС"
  {
    gsId: '07p',
    gsNumber: '7',
    gsFirm: firms.prima,
    phone: '+380632967051',
    address: 'вулиця Робоча, 23-Ж',
    zip: '49006',
    region: 'Чечеловський',
    gps: '!1m14!1m8!1m3!1d5291.450909367539!2d35.008876!3d48.461797000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe306c3adff95%3A0x356ef5a41f275d47!2sAvias!5e0!3m2!1sru!2sua!4v1708689721168!5m2!1sru!2sua',
    linkToGm: 'T6oZwGKrJqEknjzS8',
    tables: true,
  },

  //08 - ТОВ "ПРIМАРIУС"
  {
    gsId: '08',
    gsNumber: '8',
    gsFirm: firms.prima,
    phone: '+380632967096',
    address: 'проспект Пилипа Орлика, 18-А',
    zip: '49069',
    region: 'Центральний',
    gps: '!1m18!1m12!1m3!1d438.73702889140435!2d35.023290922973004!3d48.44920789515315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe317ccccb331%3A0xad37562676fc3bc0!2z0JDQktCG0JDQoSDQv9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708678349596!5m2!1suk!2sua',
    linkToGm: 'h2J7t8Pcys33T8yy7',
  },

  //09 - ТОВ "ПРIМАРIУС"
  {
    gsId: '09',
    gsNumber: '9',
    gsFirm: firms.prima,
    phone: '+380632967110',
    address: 'вулиця Макарова, 27-Д',
    zip: '49047',
    region: 'Чечеловський',
    gps: '!1m18!1m12!1m3!1d540.6617568540771!2d35.00018685971972!3d48.433578734239894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3676cb1bc99%3A0xe97f49e27979b7e8!2sAvias!5e0!3m2!1suk!2sua!4v1708628881775!5m2!1suk!2sua',
    linkToGm: 'tA7sfHsQjNaB5TKr9',
  },

  //10 - ТОВ "ПРIМАРIУС"
  {
    gsId: '10',
    gsNumber: '10',
    gsFirm: firms.prima,
    phone: '+380632967127',
    address:
      'територiя Новоолександрiвської с/р, Комплекс будiвель та споруд №307',
    zip: '52072',
    region: 'Днiпровський',
    gps: '!1m14!1m8!1m3!1d21203.897431382844!2d35.078933!3d48.370377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfbc74ca3f273%3A0x158981d5d4be991a!2z0JDQl9ChINCQ0LLQuNCw0YEg0L_Qu9GO0YE!5e0!3m2!1suk!2sua!4v1708689806247!5m2!1suk!2sua',
    linkToGm: 'rxQiPP3MYU8NMXzH7',
  },

  //11 - ТОВ "ПРIМАРIУС"
  {
    gsId: '11',
    gsNumber: '11',
    gsFirm: firms.prima,
    phone: '+380632967140',
    address: 'проспект Богдана Хмельницького, 164',
    zip: '49033',
    region: 'Шевченкiвський',
    gps: '!1m18!1m12!1m3!1d3202.1598791126485!2d34.99912995972218!3d48.38309617823266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb2772def4f1%3A0xf31d59a7fe85466d!2z0KHQtdC90YLQvtC30LAg0J7RltC7!5e0!3m2!1suk!2sua!4v1708687833448!5m2!1suk!2sua',
    linkToGm: 'puVixxBfwBtz3i4N6',
  },

  //12 - ТОВ "ПРIМАРIУС"
  {
    gsId: '12',
    gsNumber: '12',
    gsFirm: firms.prima,
    phone: '+380632967203',
    address: 'проспект Гагаріна, 38А',
    zip: '49010',
    region: 'Соборний',
    gps: '!1m14!1m8!1m3!1d10587.365944453913!2d35.04945!3d48.440382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe332fd7db90d%3A0xf01dfb3c80617048!2z0KHQtdC90YLQvtC30LAg0J7RltC7!5e0!3m2!1suk!2sua!4v1708690090849!5m2!1suk!2sua',
    linkToGm: 'J8LztyThzQsnTRWT8',
  },

  //13 - ТОВ "ПРIМАРIУС"
  // ! Add ZIP
  // ! Add Region
  {
    gsNumber: '13',
    gsId: '13',
    gsFirm: firms.prima,
    phone: '+380632967213',
    address: 'вулиця Бориса Кротова, 40',
    gps: '!1m18!1m12!1m3!1d645.5085962678179!2d34.9733011096212!3d48.39550482086093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe4d0caba5113%3A0x7f3eb1b5df822231!2z0JDQl9ChICLQkNCy0ZbQsNGBIg!5e0!3m2!1suk!2sua!4v1708629025755!5m2!1suk!2sua',
    linkToGm: 'oio6TZjfndhceWqv6',
  },

  //14 - ТОВ "ПРIМАРIУС"
  {
    gsId: '14',
    gsNumber: '14',
    gsFirm: firms.prima,
    phone: '+380632967223',
    address: 'вулиця Велика Дiївська, 181',
    zip: '49018',
    region: 'Новокодацький',
    gps: '!1m14!1m8!1m3!1d2645.036452248855!2d34.91273736441802!3d48.4750144026317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe143a2c4b897%3A0x68196ce6fcffdd95!2sSentosa%20Oil!5e0!3m2!1suk!2sua!4v1708690301542!5m2!1suk!2sua',
    linkToGm: 'nnvTgFKBHnjUov5D6',
  },

  //16 - ТОВ "ПРIМАРIУС"
  {
    gsId: '16p',
    gsNumber: '16',
    gsFirm: firms.prima,
    phone: '+380632967329',
    address: 'вулиця Маяковського, 39',
    zip: '49066',
    region: 'Новокодацький',
    gps: '!1m14!1m8!1m3!1d42319.78612804145!2d34.968882!3d48.47597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3cebc4f9c37%3A0x2d9b50f887fd33a5!2sAvias%20Plus!5e0!3m2!1sru!2sua!4v1708690448902!5m2!1sru!2sua',
    linkToGm: '5yRDU1M2T8Rz5kjP8',
    tables: true,
  },

  //17 - ТОВ "ПРIМАРIУС"
  {
    gsId: '17p',
    gsNumber: '17',
    gsFirm: firms.prima,
    phone: '+380632967353',
    address: 'проспект Сергія Нігояна, 87',
    zip: '49064',
    region: 'Новокодацький',
    gps: '!1m14!1m8!1m3!1d10579.888141216925!2d34.974788!3d48.47625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3cbc76781c7%3A0xdddb4df4964f2d95!2sUkrnafta!5e0!3m2!1sru!2sua!4v1708690544176!5m2!1sru!2sua',
    linkToGm: 'MYKNv9rdYYRB6jCV9',
    tables: true,
  },

  //18 - ТОВ "ПРIМАРIУС"
  {
    gsId: '18',
    gsNumber: '18',
    gsFirm: firms.prima,
    phone: '+380632967360',
    address: 'вулиця Набережна Перемоги, 146',
    zip: '49106',
    region: 'Соборний',
    gps: '!1m18!1m12!1m3!1d1324.170429173142!2d35.081177968113806!3d48.41160007771817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfc8f19e38a53%3A0x3b559da7d7c3f38d!2z0K7QutC-0L0!5e0!3m2!1suk!2sua!4v1708688420249!5m2!1suk!2sua',
    linkToGm: 'VrNT1t2CJoKM64Qr6',
  },

  //20 - ТОВ "ПРIМАРIУС"
  {
    gsId: '20',
    gsNumber: '20',
    gsFirm: firms.prima,
    phone: '+380632967401',
    zip: '49041',
    region: 'Шевченкiвський',
    address: 'Запорізьке шосе, 88',
    gps: '!1m18!1m12!1m3!1d2649.4931976009057!2d35.03824637713591!3d48.389471071272354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb6d4b763edd%3A0x4acf7d319f1f7275!2z0JDQstGW0LDRgSDQn9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708677255007!5m2!1suk!2sua',
    linkToGm: 'BmhTLFbA3FJSVbEv9',
  },

  //23 - ТОВ "ПРIМАРIУС"
  {
    gsId: '23',
    gsNumber: '23',
    gsFirm: firms.prima,
    phone: '+380632967414',
    address: 'проспект Олександра Поля, 93-Б',
    zip: '49054',
    region: 'Центральний',
    gps: '!1m18!1m12!1m3!1d379.74270356380623!2d35.02066142421831!3d48.44923905259773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3165ba3d139%3A0xbbeee9ab5ed3a17b!2z0JDQkknQkNChINC_0LvRjtGB!5e0!3m2!1suk!2sua!4v1708676242969!5m2!1suk!2sua',
    linkToGm: 'BxGKQPFtRt3Ac3VL8',
  },

  //25 - ТОВ "ПРIМАРIУС"
  {
    gsId: '25',
    gsNumber: '25',
    gsFirm: firms.prima,
    phone: '+380632967461',
    address: 'проспект Пилипа Орлика, 23-А',
    zip: '49069',
    region: 'Центральний',
    gps: '!1m14!1m8!1m3!1d5292.749170838484!2d35.022408000000006!3d48.449342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3164995ce53%3A0x8ddd5baacde43f02!2z0JDQl9ChINCQ0JLQmNCQ0KEg0J_Qm9Cu0KE!5e0!3m2!1sru!2sua!4v1708690944158!5m2!1sru!2sua',
    linkToGm: 'Ub7PbZkHFHZHFcDH8',
  },

  //26 - ТОВ "ПРIМАРIУС"
  {
    gsId: '26',
    gsNumber: '26',
    gsFirm: firms.prima,
    phone: '+380632967502',
    zip: '49038',
    region: 'Центральний',
    address: 'вулиця Курчатова, 3',
    gps: '!1m18!1m12!1m3!1d1094.4219476877054!2d35.01076203243985!3d48.47397091263769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2541096f3e9%3A0xb3a32641049c2e66!2z0JDQl9ChINCQ0LLRltCw0YE!5e0!3m2!1suk!2sua!4v1708675996399!5m2!1suk!2sua',
    linkToGm: 'umsQeTb8LzHsy1SL7',
  },

  //27 - ТОВ "ПРIМАРIУС"
  {
    gsId: '27',
    gsNumber: '27',
    gsFirm: firms.prima,
    phone: '+380632967503',
    zip: '49061',
    region: 'Центральний',
    address: 'проспект Богдана Хмельницького, 24-Н',
    gps: '!1m18!1m12!1m3!1d1306.787727968678!2d35.01312523806914!3d48.43081799280176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe35ae1dc6beb%3A0x58f9fcdb061e635d!2z0JDQl9ChINCQ0LLRltCw0YE!5e0!3m2!1suk!2sua!4v1708628364944!5m2!1suk!2sua',
    linkToGm: 'zQLg9M3BDirHd6vA8',
  },

  //28 - ТОВ "ПРIМАРIУС"
  // ! - Add Phone
  {
    gsId: '28',
    gsNumber: '28',
    gsFirm: firms.prima,
    // phone: "+38063",
    address: 'вулиця Курчатова, 5',
    zip: '49038',
    region: 'Чечеловський',
    gps: '!1m14!1m8!1m3!1d5290.252909797403!2d35.009831!3d48.473288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2541096f3e9%3A0xb3a32641049c2e66!2z0JDQl9ChINCQ0LLRltCw0YE!5e0!3m2!1suk!2sua!4v1708691207619!5m2!1suk!2sua',
    linkToGm: 'MkrWZSNvU6c9s1Lj8',
  },

  //29 - ТОВ "ПРIМАРIУС"
  {
    gsId: '29',
    gsNumber: '29',
    gsFirm: firms.prima,
    phone: '+380632967519',
    address: 'вулиця Ульянова, 17',
    zip: '49101',
    region: 'Центральний',
    gps: '!1m18!1m12!1m3!1d1322.8830423860838!2d35.02379903912107!3d48.4610174928203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe31d22f57859%3A0x130bce2eb9b8d41f!2z0JDQstGW0LDRgSDQn9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708691301763!5m2!1suk!2sua',
    linkToGm: 'iHbrjpuM1EasiJGJ7',
  },

  //30 - ТОВ "ПРIМАРIУС"
  // ! Add ZIP
  {
    gsId: '30',
    gsNumber: '30',
    gsFirm: firms.prima,
    phone: '+380632966971',
    address: 'вулиця Михайла Коцюбинського, 1',
    // zip: '49000',
    region: 'Соборний',
    gps: '!1m18!1m12!1m3!1d165.33668834004766!2d35.05154642168019!3d48.46828978793236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3e77b71ea07%3A0x99e1ab92eb031b3!2z0J7RgtC10LvRjCDQlNC90LXQv9GAICjQv9Cw0YDQutC-0LLQutCwKSDQkNCS0IbQkNChINC_0LvRjtGB!5e0!3m2!1suk!2sua!4v1708687495806!5m2!1suk!2sua',
    linkToGm: 'qvPyxnQfR8cewdyF7',
  },

  //31 - ТОВ "ПРIМАРIУС"
  {
    gsId: '31',
    gsNumber: '31',
    gsFirm: firms.prima,
    phone: '+380632967537',
    address: 'вулиця Князя Ярослава Мудрого, 64',
    zip: '49038',
    region: 'Центральний',
    gps: '!1m18!1m12!1m3!1d917.2707366444758!2d35.02518435265088!3d48.47818751788607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2f63e64b031%3A0xcbc97244bd7fed37!2z0JDQstGW0LDRgSs!5e0!3m2!1suk!2sua!4v1708677157600!5m2!1suk!2sua',
    linkToGm: 'qsv1wjsCWj7eXEUX8',
  },

  //32 - ТОВ "ПРIМАРIУС"
  {
    gsId: '32',
    gsNumber: '32',
    gsFirm: firms.prima,
    phone: '+380632967520',
    address: 'вулиця Набережна Перемоги, 42-К',
    zip: '49094',
    region: 'Соборний',
    gps: '!1m18!1m12!1m3!1d1095.1304026272694!2d35.069856475566155!3d48.441118571027076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfcd0d1edd179%3A0x8fb1b081398ca54d!2z0JDQstGW0LDRgSDQn9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708675911021!5m2!1suk!2sua',
    linkToGm: 'RHUhCrVTY8SVXjZ69',
  },

  //33 - ТОВ "ПРIМАРIУС"
  {
    gsId: '33',
    gsNumber: '33',
    gsFirm: firms.prima,
    phone: '+380632967543',
    address: 'вулиця Набережна Заводська, 33',
    zip: '49019',
    region: 'Новокодацький',
    gps: '!1m18!1m12!1m3!1d1557.1388769929397!2d34.957408151542204!3d48.49262981067283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe1873cf46da1%3A0xeeb6c843b005aede!2z0JDQktCG0JDQoSDQv9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708676428304!5m2!1suk!2sua',
    linkToGm: '51PeSaZXJxEcXvPN6',
  },

  //35 - ТОВ "ПРIМАРIУС"
  {
    gsId: '35',
    gsNumber: '35',
    gsFirm: firms.prima,
    phone: '+380632967547',
    address: 'Криворізьке шосе, 17-А',
    zip: '49035',
    region: 'Чечеловський',
    gps: '!1m18!1m12!1m3!1d2647.056637940331!2d34.945550331633285!3d48.436252737360164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe59d20dd38ed%3A0xf991ee610867b73b!2sAvias!5e0!3m2!1suk!2sua!4v1708628764036!5m2!1suk!2sua',
    linkToGm: 'kS2TAZWyFKDooPHB8',
  },

  //36 - ТОВ "ПРIМАРIУС"
  {
    gsFirm: firms.prima,
    address: 'Криворізьке шосе, 16-Г',
    zip: '49037',
    region: 'Новокодацький',
    gsId: '36',
    gsNumber: '36',
    phone: '+380632967568',
    gps: '!1m18!1m12!1m3!1d1859.8413829073224!2d34.946910630029684!3d48.434498770334585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe47baabad799%3A0xbb26b4ba1d8d2e98!2sAvias!5e0!3m2!1suk!2sua!4v1708691629768!5m2!1suk!2sua',
    linkToGm: 'N5xz3vhaQE687eqe6',
  },

  //37 - ТОВ "ПРIМАРIУС"
  // ! Add ZIP
  // ! Add Region
  {
    gsFirm: firms.prima,
    address: 'вулиця Набережна Заводська, 31-А',
    // zip: '',
    // region: '',
    gsId: '37',
    gsNumber: '37',
    phone: '+380632506670',
    gps: '!1m18!1m12!1m3!1d661.0484438847033!2d34.9804388856729!3d48.49117612942123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe22515743457%3A0x94b623da7103b309!2z0JPQu9C-0YDQuNGD0YEsINCz0LDQtyDQtdGB0YLRjCE!5e0!3m2!1sru!2sua!4v1708782869062!5m2!1sru!2sua',
    linkToGm: '4oQjkf4nYbvBwQZQ9',
  },

  //01 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '01a',
    gsNumber: '1',
    gsFirm: firms.alete,
    phone: '+380933070501',
    address: 'вулиця Маршала Малиновського, 66-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1843.4644423623317!2d35.07937626045409!3d48.47623475097347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2ba93e72951%3A0x1f638748e0a9e48a!2z0JDQktCG0JDQoSDQv9C70Y7RgQ!5e0!3m2!1sru!2sua!4v1710930965845!5m2!1sru!2sua',
    linkToGm: 'mnFUpQSVkbZAJ7wD6',
  },

  //03 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '03a',
    gsNumber: '3',
    gsFirm: firms.alete,
    phone: '+380933070183',
    address: 'вулиця 6-ї Стрілецької Дивізії, 5',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d917.6041889296463!2d35.07433818417197!3d48.45974321419231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2cd0959400b%3A0x2a6cadabb77bd70d!2z0K7QutC-0L0!5e0!3m2!1suk!2sua!4v1708628634169!5m2!1suk!2sua',
    linkToGm: 'iSHzg46tzuRoZbyh9',
  },

  //04 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '04a',
    gsNumber: '4',
    gsFirm: firms.alete,
    phone: '+380634219674',
    address: 'площа Десантників, 9',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1858.1507606972882!2d35.0262665912462!3d48.48066739484964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe25f4f96b093%3A0xc71bd15e9b1fa999!2sRubix!5e0!3m2!1sru!2sua!4v1708627822184!5m2!1sru!2sua',
    linkToGm: 'yj2DddY2pGaDtxFd8',
  },

  //08 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '08a',
    gsNumber: '8',
    gsFirm: firms.alete,
    phone: '+380677215602',
    address: 'вулиця Петра Бикова, 41',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1638.2938409070441!2d35.03853817495911!3d48.51995104066837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958bdd0a06d83%3A0x4e9e8bb130750125!2z0JDQstGW0LDRgQ!5e0!3m2!1suk!2sua!4v1708628518574!5m2!1suk!2sua',
    linkToGm: '11ubfDYi2fn6WjXC9',
  },

  //09 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '09a',
    gsNumber: '9',
    gsFirm: firms.alete,
    phone: '+380672459614',
    address: 'вулиця Набережна Заводська, 55',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1577.388640233654!2d34.9381489228265!3d48.48834276989318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe179b004a51b%3A0xc4f862201f9d876d!2sYukon!5e0!3m2!1suk!2sua!4v1708688573677!5m2!1suk!2sua',
    linkToGm: 'cmLj1neiZQ3GPpFE8',
  },

  //10 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '10a',
    gsNumber: '10',
    gsFirm: firms.alete,
    phone: '+380933070110',
    address: 'проспект Слобожанський, 41',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1321.834217954304!2d35.07220395709325!3d48.50124959560888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9587b0e536e8f%3A0xf6f55fa9ca043353!2z0L_RgNC-0YHQv9C10LrRgiDQodC70L7QsdC-0LbQsNC90YHRjNC60LjQuSwgNDEsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1708777883281!5m2!1suk!2sua',
    linkToGm: 'injs4e4gwQKzjSTm7',
  },

  //13 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '13a',
    gsNumber: '13',
    gsFirm: firms.alete,
    phone: '+380933070430',
    address: 'Донецьке шосе, 124-В',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d330.2930627398871!2d35.034271125561!3d48.526629281861794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958b821bac7cf%3A0x8fad87d9801c397a!2z0JDQl9ChINCu0LrQvtC9!5e0!3m2!1suk!2sua!4v1708687735649!5m2!1suk!2sua',
    linkToGm: 'rLwz2dxM3u97eciA7',
  },

  //25 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '25a',
    gsNumber: '25',
    gsFirm: firms.alete,
    phone: '+380672459578',
    address: 'Запорізьке шосе, 30-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1095.7132634008935!2d35.024770214120096!3d48.414077732501724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfbe444aaa35b%3A0x6ed2118bd3c1a3!2z0KLQntCSItCi0LjRgtCw0L0g0J_RgNCw0LnQtCIg0JDQl9ChIDI1!5e0!3m2!1suk!2sua!4v1708946749101!5m2!1suk!2sua',
    linkToGm: 'HTwDACDQFqZMEFRu6',
  },

  //26 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '26a',
    gsNumber: '26',
    gsFirm: firms.alete,
    phone: '+380676370820',
    address: 'вулиця Янтарна, 71',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2642.71588016325!2d35.044342900000004!3d48.519510999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95895e5a93a39%3A0x60cf43837f00007c!2z0JDQl9ChIFNlbnRvc2EgT2ls!5e0!3m2!1sru!2sua!4v1709033198716!5m2!1sru!2sua',
    linkToGm: 'c8ray6dWuJhXFPiD6',
  },

  //27 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '27a',
    gsNumber: '27',
    gsFirm: firms.alete,
    phone: '+380676370821',
    address: 'вулиця Андрія Сахарова, 80',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d917.6012252618859!2d35.20946674111265!3d48.45990716722415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d956168e6d6c6b%3A0x3bcdbe32202c813d!2z0JDQstC40LDRgQ!5e0!3m2!1suk!2sua!4v1708688034005!5m2!1suk!2sua',
    linkToGm: 'kQyog1HFqjYUAU7FA',
  },

  //28 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '28a',
    gsNumber: '28',
    gsFirm: firms.alete,
    phone: '+380676370822',
    address: 'вул.Дружби, 4, смт.Слобожанське',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d379.014184205365!2d35.09300101510682!3d48.54658800238681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95911440a2add%3A0x6f2ebb724bd01bbf!2z0JDQl9ChINCQ0LLQuNCw0YE!5e0!3m2!1sru!2sua!4v1708676897255!5m2!1sru!2sua',
    linkToGm: 'USX83qdsx7EqW6yP7',
    tables: true,
  },

  //29 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '29a',
    gsNumber: '29',
    gsFirm: firms.alete,
    phone: '+380676370826',
    address: 'вулиця Маршала Малиновського, 108',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d624.2262570661701!2d35.11119860429936!3d48.468451534665256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfd503efce60f%3A0x69792cd7eb500c36!2z0YPQuy4g0JzQsNGA0YjQsNC70LAg0JzQsNC70LjQvdC-0LLRgdC60L7Qs9C-LCAxMDgsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1709033340990!5m2!1sru!2sua',
    linkToGm: 'Cn2HJXwZiTBRGZVy9',
  },

  //30 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '30a',
    gsNumber: '30',
    gsFirm: firms.alete,
    phone: '+380676370805',
    address: 'вулиця Каштанова, 9',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2643.5794165452353!2d35.076245!3d48.5029564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9593e4e3d1829%3A0xf10d1161b8287d7a!2zRW5lcmd5INCQ0JfQoSDQkNCy0LjQsNGB!5e0!3m2!1sru!2sua!4v1709033436216!5m2!1sru!2sua',
    linkToGm: 'ns77UETDYtdGuoto7',
  },

  //31 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '31a',
    gsNumber: '31',
    gsFirm: firms.alete,
    phone: '+380676370806',
    address: 'Донецьке шосе, 25',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2642.960321087315!2d34.99871211253074!3d48.51482532470247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe200f0fa870d%3A0x297a769f779c8cbb!2z0JDQktCG0JDQoSDQv9C70Y7RgQ!5e0!3m2!1suk!2sua!4v1708687963233!5m2!1suk!2sua',
    linkToGm: 'jEaD8PCRH3Ua7PAs7',
  },

  //32 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '32a',
    gsNumber: '32',
    gsFirm: firms.alete,
    phone: '+380676370829',
    address: 'проспект Слобожанський, 2-Б',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2644.3919185701334!2d35.0639365!3d48.48737630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe29ba7a20cf1%3A0x73e5a6b9bebdb19a!2z0JDQstC40LDRgQ!5e0!3m2!1sru!2sua!4v1709032695010!5m2!1sru!2sua',
    linkToGm: 'N8i9RTFSbB8ch2C66',
  },

  //33 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '33a',
    gsNumber: '33',
    gsFirm: firms.alete,
    phone: '+380676370830',
    address: 'проспект Слобожанський, 1-Б',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2644.3752481838137!2d35.062818!3d48.487696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe29b101284d1%3A0xef2c1e6cff8954c0!2z0JDQstC40LDRgQ!5e0!3m2!1sru!2sua!4v1709032928230!5m2!1sru!2sua',
    linkToGm: 'U4WiS6NqfuvBrXd47',
  },

  //34 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '34a',
    gsNumber: '34',
    gsFirm: firms.alete,
    phone: '+380676370831',
    address: 'вулиця Німецька, 7-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d624.0999761594019!2d35.16023579466657!3d48.478716892474246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d957c6a5fb6b17%3A0x3712548a1d9a084a!2z0JDQstC40LDRgQ!5e0!3m2!1sru!2sua!4v1709033631552!5m2!1sru!2sua',
    linkToGm: 'kKVcFgL3cDksCEht8',
  },

  //35 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '35a',
    gsNumber: '35',
    gsFirm: firms.alete,
    phone: '+380676370810',
    address: 'вулиця 20-річчя Перемоги, 61-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d438.98789124596124!2d35.12660230217282!3d48.42016529173916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfc51dc3e8d5b%3A0xe4cf169992d01c9f!2z0KHQtdC90YLQvtC30LAg0J7RltC7!5e0!3m2!1suk!2sua!4v1708628052115!5m2!1suk!2sua',
    linkToGm: 'kS2TAZWyFKDooPHB8',
  },

  //36 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  {
    gsId: '36a',
    gsNumber: '36',
    gsFirm: firms.alete,
    phone: '+380676370816',
    address: 'вулиця Центральна, 212, с.Балівка',
    zip: '52010',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2636.8665028305763!2d34.757292899999996!3d48.6315366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9625910c3aa3f%3A0x8847b946e0ab3e31!2sAzs%20Avias%20Plyus!5e0!3m2!1sru!2sua!4v1709033887481!5m2!1sru!2sua',
    linkToGm: 'CUpN2tBvP1ReCfkV7',
  },

  //37 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  // ! Add ZIP
  {
    gsId: '37a',
    gsNumber: '37',
    gsFirm: firms.alete,
    phone: '+380676370813',
    address: 'а/д Дніпро-Царичанка, км26+400б, Обухівка',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d622.9334093944664!2d34.86399132407413!3d48.573470098548455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d960237b729447%3A0x871a020e92a5f78f!2sAzs%20Avias%20Plyus!5e0!3m2!1sru!2sua!4v1709034011450!5m2!1sru!2sua',
    linkToGm: 'GwhxEih7FUiG2rnZA',
  },

  //38 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  // ! Add ZIP
  {
    gsId: '38a',
    gsNumber: '38',
    gsFirm: firms.alete,
    phone: '+380676370814',
    address: 'Донецьке шосе, 2-Г',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2643.2742312588935!2d34.986629199999996!3d48.50880749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe1f7df51eb7d%3A0x689f923df44f9aea!2z0JDQstC40LDRgSDQn9C70Y7RgSwg0J3QsNGH0LDQu9C-INCT0JDQp9Cr!5e0!3m2!1sru!2sua!4v1709035251581!5m2!1sru!2sua',
    linkToGm: 'Fuczs7pEZRrf8F717',
  },

  //39 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  // ! Add ZIP
  {
    gsId: '39a',
    gsNumber: '39',
    gsFirm: firms.alete,
    phone: '+380676225389',
    address: 'вулиця Святогірська, 2',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2644.7942354818233!2d35.1750469!3d48.4796603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d957165d0acc83%3A0xa175cf1d532ff4c1!2z0JDQl9ChINCQ0JLQhtCQ0KE!5e0!3m2!1sru!2sua!4v1709035736439!5m2!1sru!2sua',
    linkToGm: '9sSvSTTc85A9oSQFA',
  },

  //40 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '40a',
    gsNumber: '40',
    gsFirm: firms.alete,
    phone: '+380676103971',
    address: 'вулиця Архімеда, 1-К',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d746.8444563659982!2d35.08344939397908!3d48.52741081346209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958fbe3204049%3A0x66f74ec75c30da59!2z0JDQl9ChINCQ0LLRltCw0YE!5e0!3m2!1suk!2sua!4v1708792255626!5m2!1suk!2sua',
    linkToGm: 'krzoLPvKdNzMA2WWA',
  },

  //41 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  // ! Add ZIP
  {
    gsId: '41a',
    gsNumber: '41',
    gsFirm: firms.alete,
    phone: '+380676370823',
    address: 'вулиця Вітчизняна, 67-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2643.1704501931263!2d35.0289911!3d48.5107971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958a1c55c16fd%3A0xe89b451184e87f2c!2sSentosa%20Oil!5e0!3m2!1sru!2sua!4v1709033085499!5m2!1sru!2sua',
    linkToGm: 'TeidM5KuUcwxwdEAA',
  },

  //42 - ТОВ "АЛЕТЕЯ"
  // ! Add Region
  // ! Add ZIP
  {
    gsId: '42a',
    gsNumber: '42',
    gsFirm: firms.alete,
    phone: '+380676340801',
    address: 'вулиця Осіння, 2',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2643.6628133780764!2d35.0862815!3d48.5013574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9586e605d4813%3A0xdf6f00ba0c98920a!2z0JDQl9ChIEFOUA!5e0!3m2!1sru!2sua!4v1709035345923!5m2!1sru!2sua',
    linkToGm: 'aoHD89sLSxhntUPZ9',
  },

  //43 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '43a',
    gsNumber: '43',
    gsFirm: firms.alete,
    phone: '+380933071196',
    address: 'Зоряний бульвар, 19-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d918.1688557909706!2d35.014917461241744!3d48.42849769552416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe35a77c715f5%3A0x7220eceea8a0f3f8!2z0K7QutC-0L0!5e0!3m2!1suk!2sua!4v1708687590692!5m2!1suk!2sua',
    linkToGm: 'vguPS46LPjfVDAeDA',
  },

  //44 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '44a',
    gsNumber: '44',
    gsFirm: firms.alete,
    phone: '+380933071184',
    address: 'вулиця Січеславська Набережна, 57',
    // zip: '',
    // region: '',
    gps: '!1m14!1m8!1m3!1d2645.5311341543575!2d35.067917!3d48.465525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c606bb2fb3%3A0xb36f2e1e9199232!2z0K7QutC-0L0g0YHQtdGA0LLQuNGBINCQ0LfRgSMy!5e0!3m2!1sru!2sua!4v1708691821032!5m2!1sru!2sua',
    linkToGm: 'nJUFVbWSSd9iX53z9',
  },

  //45 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '45a',
    gsNumber: '45',
    gsFirm: firms.alete,
    phone: '+380933070996',
    address: 'проїзд Олександра Гальченко, 19',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d645.4770359168929!2d35.01579659600452!3d48.39799229254792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb47f50bd763%3A0xf8588dabf028f514!2z0L_RgNC-0ZfQt9C0INCe0LvQtdC60YHQsNC90LTRgNCwINCT0LDQu9GM0YfQtdC90LrQviwgMTksINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1708627555734!5m2!1suk!2sua',
    linkToGm: 'qf7hdqdWKrLC37wy7',
  },

  //46 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '46a',
    gsNumber: '46',
    gsFirm: firms.alete,
    phone: '+380933070640',
    address: 'вулиця Дніпросталівська, 8',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d245.97731711388522!2d35.10279919792471!3d48.50188935650448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9597615f9b09d%3A0xeb5f129d0b95bc89!2z0JDQstGC0L7QvNC-0LnQutCwIFBJVExJTkU!5e0!3m2!1suk!2sua!4v1708688156080!5m2!1suk!2sua',
    linkToGm: 'QJEzvS88Br2s2E3p8',
  },

  //47 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '47a',
    gsNumber: '47',
    gsFirm: firms.alete,
    phone: '+380933071150',
    address: 'Донецьке шосе, 182',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2641.8214226049213!2d35.05320471253173!3d48.53665392317396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958dbf3f9f80f%3A0xa42a44ab03ef0c3a!2z0K7QutC-0L0!5e0!3m2!1suk!2sua!4v1708688223674!5m2!1suk!2sua',
    linkToGm: 'QJEzvS88Br2s2E3p8',
  },

  //48 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '48a',
    gsNumber: '48',
    gsFirm: firms.alete,
    phone: '+380933071060',
    address: 'вулиця Передова, 530-К',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1856.3758149010844!2d34.96440487442934!3d48.52910336898299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95f62156fd0c7%3A0x53997ffe81560237!2sYukon%20Service!5e0!3m2!1suk!2sua!4v1708675247306!5m2!1suk!2sua',
    linkToGm: 't2PYQBxaJXRGeSjz8',
  },

  //49 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '49a',
    gsNumber: '49',
    gsFirm: firms.alete,
    phone: '+380933071162',
    address: 'вулиця Дніпросталівська, 4-Д',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1304.9284728617697!2d35.099507630840414!3d48.50307480725516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9586ad0ad5211%3A0x15060ee8cb47c001!2sYukon!5e0!3m2!1suk!2sua!4v1708628215585!5m2!1suk!2sua',
    linkToGm: 'ZwW9qAEDKHT2CVHj8',
  },

  //50 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  // ! Add GPS
  {
    gsId: '50a',
    gsNumber: '50',
    gsFirm: firms.alete,
    phone: '+380933070968',
    address: 'вулиця Яснополянська, 6',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d748.8709163227725!2d35.058167191606195!3d48.389854131175944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb76868128bf%3A0x14ee4bf3b1b49f87!2sYukon%20Service!5e0!3m2!1sru!2sua!4v1708778245834!5m2!1sru!2sua',
    linkToGm: 'PiXrj22R6Zrs9Zr7A',
  },

  //53 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '53a',
    gsNumber: '53',
    gsFirm: firms.alete,
    phone: '+380933070874',
    address: 'Донецьке шосе, 91-А',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d1856.6772665406554!2d35.01623740295479!3d48.52087969626227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958ae31a21e6b%3A0x75f2274f5206522!2z0JDQl9ChINCu0LrQvtC9INGB0LXRgNCy0ZbRgQ!5e0!3m2!1suk!2sua!4v1708675166742!5m2!1suk!2sua',
    linkToGm: 'R2azXAATGJKywvj59',
  },

  //56 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '56a',
    gsNumber: '56',
    gsFirm: firms.alete,
    phone: '+380933070605',
    address: 'вулиця Зелена, 32, с. Долинське',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d5300.658358750986!2d34.7167493!3d48.3734125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe909d1d1afd3%3A0x3f7270a57a03a996!2sAzs%20Yukon!5e0!3m2!1sru!2sua!4v1711109777785!5m2!1sru!2sua',
    linkToGm: 'GR2F656WUi2gjeXA8',
  },

  //57 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '57a',
    gsNumber: '57',
    gsFirm: firms.alete,
    phone: '+380933070706',
    address: 'вулиця Дружби, 17, смт.Слобожанське',
    // zip: '',
    // region: '',
    gps: '!1m14!1m8!1m3!1d2641.201140985237!2d35.09192530938352!3d48.54853940628248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9591419be72c1%3A0xa6139ec91246da7b!2z0JDQl9Ch!5e0!3m2!1sru!2sua!4v1708687011032!5m2!1sru!2sua',
    linkToGm: 'a3zBmSja78CSKYjw9',
  },

  //58 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '58a',
    gsNumber: '58',
    gsFirm: firms.alete,
    phone: '+380933070763',
    address: 'вулиця Шосейна, 205',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d746.002395406919!2d35.135648909170115!3d48.58448433554814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d95bbffbb38b11%3A0xb5207fb49558d949!2z0K7QutC-0L0!5e0!3m2!1sru!2sua!4v1708781762269!5m2!1sru!2sua',
    linkToGm: '1Xgwv9ToSijBpsTx7',
  },

  //59 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  // ! Add GPS
  {
    gsId: '59a',
    gsNumber: '59',
    gsFirm: firms.alete,
    phone: '+380933070753',
    address: 'вулиця Магістральна, 35',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2641.5088465368067!2d35.0544419!3d48.5426436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958d7f48b089b%3A0xd0c3a7511b67d6c!2sYukon%20Service!5e0!3m2!1sru!2sua!4v1708781429338!5m2!1sru!2sua',
    linkToGm: 'JbpdyN8aCQWDms7y6',
  },

  //60 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '60a',
    gsNumber: '60',
    gsFirm: firms.alete,
    phone: '+380933070728',
    address: 'вулиця Солідарністі, 4-Б, Обухівка',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2642.325676207647!2d34.88580969351057!3d48.52699009726046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe041e2fe542d%3A0xc2362d9d89bc2093!2sYukon%20Service!5e0!3m2!1suk!2sua!4v1708675741839!5m2!1suk!2sua',
    linkToGm: 'nU6oZUp51iaUeL5G6',
  },

  //61 - ТОВ "АЛЕТЕЯ"
  // ! Add ZIP
  // ! Add Region
  {
    gsId: '61a',
    gsNumber: '61',
    gsFirm: firms.alete,
    phone: '+380933070558',
    address: 'вулиця Гаванська, 15-Д',
    // zip: '',
    // region: '',
    gps: '!1m18!1m12!1m3!1d2647.5458721766017!2d35.11647845269168!3d48.42686221509755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfc561781aec1%3A0xea93d3804e931996!2z0K7QutC-0L0!5e0!3m2!1suk!2sua!4v1708778967510!5m2!1suk!2sua',
    linkToGm: 'tKLY2j52YxMBQgxY8',
  },
];

export default gsDB;
