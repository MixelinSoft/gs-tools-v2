const firms = {
  prima: "ПРІМАРІУС",
  alete: "АЛЕТЕЯ",
};

const gsDB = [
  {
    gsId: "01",
    gsNumber: "1",
    gsFirm: firms.prima,
    // phone: "+380",
    address: "м. Днiпро, пр. Богдана Хмельницького, 135",
  },

  {
    gsId: "02",
    gsNumber: "2",
    gsFirm: firms.prima,
    phone: "+380632966982",
    address: "м. Днiпро, вул. Космiчна, 30",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.1825530972822!2d35.04026253207326!3d48.41113451104672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb589c0864a1%3A0xec21b7536cd4d9cc!2z0YPQuy4g0JrQvtGB0LzQuNGH0LXRgdC60LDRjywgMzAsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1689170965074!5m2!1sru!2sua",
  },

  {
    gsId: "06",
    gsNumber: "6",
    gsFirm: firms.prima,
    // phone: "+",
    address: "м. Днiпро, Донецьке шосе, 25-а",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.478538528204!2d34.99997811474409!3d48.51488751157993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe200f05cf68f%3A0xeb74745d2f4afa26!2z0JTQvtC90LXRhtC60L7QtSDRiC4sIDI1LCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1689171256579!5m2!1sru!2sua",
  },

  {
    gsId: "07",
    gsNumber: "7",
    gsFirm: firms.prima,
    phone: "+380632967051",
    address: "м. Днiпро, вул.Робоча, 23-ж",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1322.8904305869276!2d35.00733562851025!3d48.46073399833822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe306c3adff95%3A0x356ef5a41f275d47!2sAvias!5e0!3m2!1sru!2sua!4v1689171375973!5m2!1sru!2sua",
    tables: {
      a95e: {
        type: "A-95 Energy",
        typeId: "a95e",
        tankId: 1,
        tube: 40,
        maxHeight: 279,
        maxCapacity: 26572,
        minCapcity: 1325,
        capacityTable: [
          31, 50, 74, 102, 133, 167, 204, 243, 284, 328, 374, 421, 471, 522,
          575, 629, 686, 743, 802, 863, 925, 989, 1053, 1119, 1187, 1255, 1325,
          1396, 1468, 1541, 1615, 1691, 1767, 1845, 1923, 2003, 2083, 2165,
          2247, 2330, 2414, 2499, 2585, 2672, 2760, 2848, 2938, 3028, 3119,
          3210, 3303, 3396, 3490, 3584, 3680, 3776, 3873, 3970, 4068, 4167,
          4266, 4366, 4467, 4568, 4640, 4773, 4876, 4980, 5084, 5189, 5294,
          5400, 5506, 5613, 5721, 5829, 5937, 6046, 6156, 6266, 6376, 6487,
          6598, 6710, 6822, 6934, 7048, 7161, 7275, 7389, 7504, 7618, 7734,
          7850, 7966, 8082, 8199, 8316, 8433, 8551, 8669, 8787, 8906, 9025,
          9144, 9263, 9383, 9503, 9623, 9744, 9864, 9985, 10106, 10228, 10349,
          10471, 10593, 10715, 10837, 10960, 11083, 11205, 11328, 11451, 11574,
          11698, 11821, 11945, 12068, 12192, 12316, 12440, 12564, 12688, 12812,
          12936, 13060, 13184, 13309, 13433, 13558, 13683, 13806, 13930, 14054,
          14178, 14302, 14426, 14550, 14674, 14797, 14921, 15044, 15168, 15291,
          15414, 15537, 15659, 15782, 15904, 16027, 16149, 16271, 16392, 16514,
          16635, 16756, 16877, 16997, 17118, 17238, 17357, 17477, 17596, 17715,
          17834, 17952, 18070, 18188, 18306, 18423, 18540, 18656, 18772, 18888,
          19003, 19118, 19233, 19347, 19461, 19574, 19688, 19800, 19912, 20024,
          20135, 20246, 20357, 20466, 20576, 20685, 20793, 20901, 21009, 21116,
          21222, 21328, 21433, 21538, 21642, 21746, 21849, 21951, 21053, 22154,
          22254, 22354, 22454, 22552, 22650, 22748, 22844, 22940, 23035, 23130,
          23223, 23316, 23408, 23500, 23591, 23680, 23769, 23858, 23945, 24031,
          24117, 24202, 24286, 24369, 24451, 24532, 24612, 24691, 24769, 24846,
          24922, 24997, 25071, 25144, 25215, 25285, 25355, 25423, 25489, 25555,
          25619, 25682, 25743, 25803, 25862, 25919, 25974, 26028, 26080, 26130,
          26179, 26225, 26270, 26313, 26353, 26391, 26426, 26459, 26488, 26514,
          26536, 26552, 26563, 26569, 26572,
        ],
      },

      a92: {
        type: "А-92",
        tankId: 2,
        tube: 34,
        maxHeight: 281,
        maxCapacity: 26763,
        minCapcity: 1461,
        capacityTable: [
          15, 27, 44, 66, 93, 123, 157, 193, 232, 273, 316, 362, 409, 459, 510,
          563, 618, 674, 732, 791, 852, 915, 978, 1043, 1110, 1178, 1247, 1317,
          1388, 1461, 1534, 1609, 1685, 1762, 1840, 1919, 1999, 2080, 2162,
          2246, 2329, 2414, 2500, 2587, 2674, 2763, 2852, 2942, 3033, 3125,
          3217, 3311, 3405, 3499, 3595, 3691, 3788, 3886, 2984, 4083, 4183,
          4283, 4385, 4486, 4588, 4691, 4795, 4899, 5004, 5109, 5215, 5321,
          5428, 5536, 5644, 5752, 5861, 5971, 6081, 6192, 6303, 6414, 6526,
          6639, 6752, 6865, 6979, 7093, 7207, 7322, 7438, 7554, 7670, 7786,
          7903, 8021, 8138, 8256, 8375, 8493, 8612, 8731, 8851, 8971, 9091,
          9212, 9332, 9453, 9575, 9696, 9818, 9940, 10062, 10184, 10307, 10430,
          10553, 10676, 10800, 10923, 11047, 11171, 11295, 11419, 11544, 11668,
          11793, 11918, 12043, 12168, 12293, 12418, 12544, 12669, 12794, 12919,
          13045, 13171, 13297, 13424, 13548, 13674, 13798, 13924, 14049, 14174,
          14300, 14425, 14550, 14675, 14800, 14925, 15050, 15175, 15299, 15423,
          15548, 15672, 15796, 15920, 16043, 16167, 16290, 16413, 16536, 16658,
          16781, 16903, 17025, 17146, 17268, 17389, 17510, 17630, 17751, 17871,
          17990, 18110, 18229, 18348, 18466, 18585, 18702, 18820, 18937, 19054,
          19170, 19286, 19402, 19517, 19632, 19746, 19860, 19974, 20087, 20199,
          20312, 20423, 20535, 20645, 20756, 20866, 20975, 21084, 21192, 21300,
          21407, 21514, 21620, 21725, 21830, 21935, 22038, 22142, 22244, 22346,
          22447, 22548, 22648, 22747, 22846, 22944, 23041, 23138, 23234, 23329,
          23423, 23517, 23609, 23701, 23793, 23883, 23973, 24061, 24149, 24236,
          24322, 24408, 24492, 24575, 24658, 24739, 24820, 24899, 24977, 25055,
          25131, 25206, 25280, 25353, 25425, 25496, 25565, 25633, 25700, 25765,
          25829, 25892, 25954, 26013, 26072, 26129, 26184, 26237, 26289, 26339,
          26387, 26433, 26477, 26519, 26558, 26595, 26629, 26660, 26688, 26711,
          26730, 26744, 26753, 26759, 26762, 26763,
        ],
      },

      a95: {
        type: "А-95",
        tankId: 3,
        tube: 39,
        maxHeight: 275,
        maxCapacity: 26519,
        minCapcity: 1432,
        capacityTable: [
          109, 141, 176, 213, 253, 296, 340, 387, 436, 486, 539, 593, 649, 706,
          765, 826, 888, 951, 1016, 1082, 1149, 1218, 1288, 1359, 1432, 1505,
          1580, 1656, 1732, 1810, 1889, 1969, 2050, 2133, 2216, 229, 2384, 2470,
          2557, 2644, 2733, 2822, 2912, 3003, 3095, 3188, 3281, 3375, 3470,
          3566, 3662, 3759, 3857, 3955, 4055, 4154, 4255, 4356, 4458, 4560,
          4663, 4767, 4871, 4976, 5082, 5188, 5294, 5401, 5509, 5617, 5726,
          5835, 5945, 6055, 6166, 6277, 6389, 6501, 6613, 6726, 6840, 6954,
          7068, 7183, 7298, 7414, 7530, 7646, 7763, 7880, 7997, 8115, 8233,
          8351, 8470, 8589, 8709, 8828, 8948, 9069, 9189, 9310, 9431, 9552,
          9674, 9796, 9918, 10040, 10163, 10285, 10408, 10531, 10655, 10778,
          10902, 11026, 11150, 11274, 11398, 11523, 11647, 11772, 11897, 12022,
          12147, 12272, 12397, 12522, 12647, 12773, 12898, 13023, 13149, 13274,
          13400, 13526, 13651, 13776, 13902, 14027, 14152, 14278, 14403, 14528,
          14653, 14778, 14903, 15027, 15152, 15276, 15401, 15525, 15649, 15773,
          15897, 16020, 16144, 16267, 16390, 16512, 16635, 16757, 16879, 17001,
          17122, 17244, 17365, 17486, 17606, 17726, 17846, 17966, 18085, 18204,
          18322, 18441, 18559, 18676, 18793, 18910, 19027, 19143, 19259, 19374,
          19489, 19603, 19717, 19831, 19944, 20057, 20169, 20281, 20392, 20503,
          20613, 20723, 20832, 20941, 21049, 21157, 21264, 21371, 21477, 21582,
          21687, 21791, 21895, 21998, 22101, 22202, 22303, 22404, 22504, 22603,
          22701, 22799, 22896, 22992, 23088, 23183, 23277, 23370, 23462, 23554,
          23645, 23735, 23824, 23912, 23999, 24086, 24171, 24256, 24340, 24422,
          24504, 24585, 24665, 24743, 24821, 24898, 24973, 25047, 25120, 25192,
          25263, 25333, 25401, 25468, 25533, 25598, 25661, 25722, 25782, 25840,
          25897, 25952, 26005, 26057, 26107, 26155, 26201, 26244, 26286, 26325,
          26361, 26395, 26425, 26452, 26475, 26492, 26501, 26508, 26513, 26516,
          26518, 26519,
        ],
      },

      diesel: {
        type: "ДТ",
        tankId: 4,
        tube: 44,
        maxHeight: 281,
        maxCapacity: 26852,
        minCapcity: 1763,
        capacityTable: [
          0, 0, 4, 17, 37, 61, 89, 120, 154, 191, 230, 271, 315, 361, 408, 458,
          509, 562, 617, 674, 732, 791, 852, 915, 979, 1044, 1110, 1178, 1247,
          1317, 1389, 1461, 1535, 1610, 1686, 1763, 1841, 1920, 2000, 2081,
          2164, 2247, 2331, 2416, 2501, 2588, 2676, 2764, 2853, 2944, 3034,
          3126, 3219, 3312, 3406, 3501, 3596, 3693, 3790, 3887, 3986, 4085,
          4185, 4285, 4386, 4488, 4590, 4693, 4796, 4900, 5005, 5110, 5216,
          5323, 5430, 5537, 5645, 5754, 5863, 5972, 6082, 6193, 6304, 6416,
          6528, 6640, 6753, 6866, 6980, 7094, 7209, 7324, 7439, 7555, 7671,
          7787, 7904, 8022, 8139, 8257, 8375, 8494, 8613, 8732, 8852, 8972,
          9092, 9212, 9333, 9454, 9575, 9696, 9818, 9940, 10062, 10185, 10307,
          10430, 10553, 10676, 10800, 10923, 11047, 11171, 11295, 11419, 11544,
          11668, 11793, 11917, 12042, 12167, 12292, 12417, 12542, 12668, 12793,
          12918, 13044, 13169, 13295, 13420, 13545, 13671, 13796, 13922, 14047,
          14172, 14297, 14423, 14548, 14673, 14798, 14922, 15047, 15172, 15296,
          15421, 15545, 15669, 15793, 15917, 16040, 16164, 16287, 16410, 16533,
          16655, 16778, 16900, 17022, 17144, 17265, 17387, 17508, 17628, 17749,
          17869, 17989, 18108, 18228, 18347, 18465, 18583, 18701, 18819, 18936,
          19053, 19170, 19286, 19402, 19517, 19632, 19747, 19861, 19975, 20088,
          20201, 20314, 20426, 20537, 20648, 20759, 20869, 20979, 21088, 21196,
          21304, 21412, 21519, 21626, 21731, 21837, 21942, 22046, 22149, 22252,
          22355, 22456, 22557, 22658, 22758, 22857, 22955, 23053, 23150, 23246,
          23342, 23437, 23531, 23624, 23717, 23809, 23900, 23990, 24079, 24168,
          24256, 24342, 24428, 24513, 24597, 24681, 24763, 24844, 24924, 25003,
          25082, 25159, 25235, 25310, 25384, 25457, 25528, 25598, 25668, 25736,
          25802, 25867, 25931, 25994, 26055, 26115, 26173, 26230, 26285, 26338,
          26389, 26439, 26487, 26533, 26577, 26619, 26658, 26695, 26729, 26761,
          26789, 26813, 26833, 26848, 26852,
        ],
      },
    },
  },

  {
    gsNumber: "13",
    gsId: "13",
    gsFirm: firms.prima,
    phone: "+380632967213",
    address: "м. Днiпро, вул. Кротова, 40",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.582866318761!2d34.97210692518881!3d48.395760333480546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe4d0caba5113%3A0x7f3eb1b5df822231!2sAzs%20%22Avias%22!5e0!3m2!1sru!2sua!4v1689171860504!5m2!1sru!2sua",
  },

  {
    gsId: "16",
    gsNumber: "16",
    gsFirm: firms.prima,
    phone: "+380632967329",
    address: "м. Днiпро, вул.Маяковського, 39",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10580.044319577402!2d34.95703040013044!3d48.475501078863616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3cebc4f9c37%3A0x8a9aebd3724eb8c9!2z0LLRg9C7LiDQnNCw0Y_QutC-0LLRgdGM0LrQvtCz0L4sIDM5LCDQlNC90ZbQv9GA0L4sINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1689165717692!5m2!1sru!2sua",
    tables: {
      a95e: {
        type: "A-95 Energy",
        typeId: "a95e",
        tankId: 1,
        tube: 101,
        maxHeight: 238,
        maxCapacity: 21000,
        minCapcity: 502,
        capacityTable: [
          0, 22, 44, 66, 88, 110, 145, 185, 225, 265, 305, 349, 400, 451, 502,
          553, 606, 665, 725, 785, 845, 904, 970, 1037, 1104, 1171, 1238, 1308,
          1381, 1455, 1528, 1601, 1675, 1754, 1832, 1911, 1989, 2068, 2151,
          2234, 2317, 2400, 2484, 2570, 2657, 2745, 2832, 2919, 3008, 3099,
          3190, 3282, 3373, 3464, 3559, 3653, 3747, 3842, 3936, 4033, 4131,
          4228, 4325, 4423, 4520, 4616, 4712, 4808, 4905, 5002, 5101, 5201,
          5300, 5400, 5499, 5601, 5703, 5805, 5907, 6009, 6112, 6216, 6320,
          6423, 6527, 6632, 6738, 6843, 6949, 7055, 7161, 7268, 7375, 7482,
          7590, 7697, 7805, 7914, 8023, 8132, 8241, 8350, 8460, 8571, 8681,
          8791, 8901, 9012, 9122, 9233, 9343, 9454, 9565, 9677, 9789, 9901,
          10013, 10124, 10236, 10348, 10460, 10571, 10683, 10795, 10907, 11018,
          11130, 11142, 11354, 11466, 11579, 11691, 11803, 11914, 12026, 12137,
          12248, 12359, 12470, 12581, 12692, 12802, 12913, 13024, 13133, 13243,
          13352, 13462, 13572, 13680, 13789, 13897, 14005, 14114, 14221, 14328,
          14436, 14543, 14650, 14757, 14862, 14968, 15073, 15179, 15284, 15387,
          15490, 15594, 15697, 15800, 15902, 16003, 16105, 16206, 16307, 16407,
          16506, 16605, 16704, 16803, 16902, 17000, 17097, 17195, 17293, 17390,
          17485, 17579, 17673, 17767, 17861, 17953, 18043, 18134, 18224, 18315,
          18404, 18490, 18577, 18663, 18750, 18836, 18920, 19003, 19086, 19170,
          19253, 19333, 19411, 19489, 19568, 19646, 19723, 19798, 19873, 19948,
          20023, 20096, 20155, 20215, 20275, 20335, 20394, 20447, 20498, 20549,
          20600, 20651, 20696, 20735, 20775, 20815, 20855, 20890, 20912, 20934,
          20956, 20978, 21000,
        ],
      },

      a92: {
        type: "А-92",
        tankId: 2,
        tube: 114,
        maxHeight: 238,
        maxCapacity: 21000,
        minCapcity: 511,
        capacityTable: [
          0, 22, 45, 67, 90, 112, 147, 188, 228, 269, 310, 355, 407, 459, 511,
          563, 616, 676, 737, 798, 859, 919, 986, 1064, 1123, 1191, 1259, 1330,
          1405, 1479, 1553, 1628, 1703, 1783, 1863, 1943, 2023, 2102, 2187,
          2271, 2356, 2441, 2525, 2613, 2702, 2790, 2879, 2968, 3059, 3151,
          3244, 3336, 3429, 3522, 3618, 3714, 3810, 3906, 4002, 4101, 4200,
          4299, 4398, 4497, 4594, 4691, 4787, 4884, 4980, 5077, 5177, 5276,
          5376, 5475, 5575, 5676, 5778, 5879, 5981, 6082, 6185, 6289, 6393,
          6497, 6601, 6705, 6811, 6916, 7022, 7128, 7233, 7341, 7449, 7556,
          7664, 7771, 7880, 7989, 8097, 8206, 8315, 8424, 8534, 8643, 8753,
          8862, 8972, 9083, 9194, 9305, 9415, 9526, 9637, 9749, 9861, 9972,
          10084, 10195, 10307, 10419, 10530, 10642, 10754, 10865, 10977, 11089,
          11201, 11313, 11425, 11537, 11649, 11761, 11873, 11984, 12096, 12207,
          12318, 12430, 12541, 12651, 12762, 12872, 12983, 13093, 13203, 13312,
          13422, 13532, 13641, 13750, 13859, 13968, 14077, 14185, 14294, 14401,
          14509, 14616, 14724, 14831, 14936, 15042, 15148, 15253, 15359, 15463,
          15567, 15671, 15665, 15879, 15982, 16084, 16186, 16288, 16390, 16491,
          16591, 16691, 16791, 16891, 16990, 17088, 17186, 17283, 17381, 17479,
          17572, 17664, 17757, 17849, 17942, 18032, 18121, 18210, 18298, 18387,
          18475, 18559, 18644, 18729, 18813, 18898, 18977, 19057, 19137, 19217,
          19297, 19372, 19447, 19521, 19595, 19670, 19741, 19809, 19877, 19946,
          20014, 20081, 20141, 20202, 20263, 20324, 20384, 20437, 20489, 20541,
          20593, 20645, 20690, 20731, 20772, 20812, 20853, 20888, 20910, 20933,
          20955, 20978, 2100,
        ],
      },

      a95: {
        type: "А-95",
        tankId: 3,
        tube: 128,
        maxHeight: 238,
        maxCapacity: 21000,
        minCapcity: 511,
        capacityTable: [
          0, 22, 45, 67, 90, 112, 148, 188, 229, 269, 310, 355, 407, 459, 511,
          563, 616, 677, 738, 799, 859, 920, 987, 1055, 1123, 1191, 1260, 1331,
          1406, 1480, 1554, 1629, 1705, 1785, 1864, 1944, 2024, 2104, 2188,
          2273, 2358, 2442, 2527, 2615, 2704, 2793, 2881, 2970, 3061, 3154,
          3246, 3339, 3432, 3525, 3621, 3717, 3813, 3909, 4005, 4104, 4203,
          4302, 4401, 4500, 4598, 4694, 4790, 4886, 4983, 5079, 5178, 5276,
          5375, 5473, 5572, 5672, 5773, 5874, 5975, 6075, 6178, 6281, 6384,
          6487, 6590, 6694, 6800, 6907, 7013, 7119, 7226, 7332, 7439, 7546,
          7653, 7759, 7868, 7977, 8086, 8195, 8304, 8412, 8521, 8630, 8738,
          8847, 8956, 9066, 9176, 9287, 9397, 9507, 9618, 9728, 9839, 9950,
          10060, 10171, 10282, 10392, 10503, 10614, 10725, 10837, 10949, 11062,
          11174, 11286, 11398, 11509, 11621, 11733, 11845, 11956, 12067, 12178,
          12289, 12400, 12511, 12621, 12731, 12841, 12951, 13061, 13170, 13280,
          13389, 13498, 13608, 13716, 13824, 13933, 14041, 14149, 14256, 14363,
          14469, 14576, 14682, 14789, 14895, 15001, 15108, 15214, 15321, 15423,
          15526, 15628, 15731, 15833, 15935, 16037, 16139, 16241, 16343, 16444,
          16543, 16643, 16742, 16841, 16940, 17036, 17132, 17228, 17324, 17421,
          17517, 17613, 17709, 17805, 17902, 17995, 18087, 18179, 18271, 18362,
          18453, 18542, 18630, 18719, 18808, 18896, 18976, 19056, 19136, 19215,
          19295, 19371, 19446, 19520, 19594, 19669, 19740, 19809, 19877, 19945,
          20013, 20080, 20141, 20201, 20262, 20323, 20384, 20437, 20489, 20541,
          20593, 20645, 20690, 20731, 20771, 20812, 20853, 20888, 20910, 20933,
          20955, 20978, 21000,
        ],
      },
      diesel: {
        type: "ДТ",
        tankId: 4,
        tube: 142,
        maxHeight: 238,
        maxCapacity: 21000,
        minCapcity: 508,
        capacityTable: [
          0, 22, 45, 67, 89, 112, 147, 187, 227, 268, 308, 353, 405, 457, 508,
          560, 613, 673, 734, 794, 855, 915, 982, 1050, 1118, 1185, 1253, 1324,
          1398, 1472, 1546, 1620, 1696, 1775, 1855, 1934, 2014, 2093, 2177,
          2262, 2346, 2430, 2514, 2601, 2690, 2778, 2867, 2955, 3045, 3137,
          3230, 3322, 3414, 3507, 3602, 3698, 3794, 3889, 3985, 4079, 4172,
          4266, 4360, 4453, 4548, 4645, 4742, 4838, 4935, 5032, 5132, 5231,
          5331, 5430, 5530, 5631, 5732, 5834, 5935, 6036, 6139, 6242, 6346,
          6449, 6552, 6656, 6761, 6867, 6972, 7077, 7183, 7290, 7397, 7504,
          7611, 7718, 7827, 7935, 8044, 8153, 8261, 8371, 8480, 8589, 8699,
          8808, 8917, 9028, 9138, 9248, 9358, 9469, 9579, 9690, 9801, 9912,
          10023, 10134, 10246, 10358, 10470, 10581, 10693, 10805, 10917, 11029,
          11141, 11252, 11364, 11476, 11588, 11700, 11812, 11923, 12034, 12146,
          12257, 12368, 12479, 12590, 12700, 12811, 12922, 13032, 13142, 13251,
          13360, 13470, 13579, 13688, 13797, 13906, 14015, 14124, 14232, 14339,
          14447, 14554, 14661, 14768, 14874, 14980, 15085, 15191, 15297, 15400,
          15504, 15607, 15710, 15814, 15916, 16018, 16120, 16222, 16324, 16425,
          16524, 16623, 16722, 16821, 16920, 17017, 17115, 17212, 17309, 17406,
          17500, 17594, 17688, 17782, 17875, 17968, 18060, 18151, 18243, 18335,
          18426, 18513, 18600, 18688, 18775, 18862, 18946, 19029, 19112, 19195,
          19278, 19358, 19437, 19515, 19594, 19673, 19747, 19815, 19882, 19950,
          20018, 20085, 20145, 20206, 20266, 20327, 20387, 20440, 20492, 20543,
          20595, 20647, 20692, 20732, 20773, 20813, 20853, 20888, 20911, 20933,
          20955, 20978, 21000,
        ],
      },
    },
  },

  {
    gsId: "17",
    gsNumber: "17",
    gsFirm: firms.prima,
    phone: "+380632967353",
    address: "м. Днiпро, пр.Сергiя Нiгояна, 87",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.995270771918!2d34.972663796327865!3d48.47580431746021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3cbc76781c7%3A0xdddb4df4964f2d95!2sUkrnafta!5e0!3m2!1sru!2sua!4v1689172680400!5m2!1sru!2sua",
  },

  {
    gsId: "20",
    gsNumber: "20",
    gsFirm: firms.prima,
    phone: "+380632967401",
    address: "м. Днiпро, Запорiзьске шосе, 88",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.3715026493434!2d35.04064158914979!3d48.38960911078709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb6d4b407bcd%3A0x61570d0dbf515d4e!2z0JfQsNC_0L7RgNC-0LbRgdC60L7QtSDRiC4sIDg4LCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1689172844672!5m2!1sru!2sua",
  },

  {
    gsId: "25",
    gsNumber: "25",
    gsFirm: firms.prima,
    phone: "+380632967461",
    address: "м. Днiпро, вул. Пилипа Орлика, 23-а",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1323.1899412805967!2d35.02123143683088!3d48.44924035281803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3164995ce53%3A0x8ddd5baacde43f02!2z0JDQl9ChINCQ0JLQmNCQ0KEg0J_Qm9Cu0KE!5e0!3m2!1sru!2sua!4v1689172964410!5m2!1sru!2sua",
  },

  {
    gsId: "26",
    gsNumber: "26",
    gsFirm: firms.prima,
    phone: "+380632967502",
    address: "м. Днiпро, вул. Курчатова, 3",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.2727875245564!2d35.011523719773585!3d48.473965211112535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe25699d8b88b%3A0x7038b11295d51a7e!2z0YPQuy4g0JrRg9GA0YfQsNGC0L7QstCwLCAz!5e0!3m2!1sru!2sua!4v1689173124891!5m2!1sru!2sua",
  },

  {
    gsId: "27",
    gsNumber: "27",
    gsFirm: firms.prima,
    // phone: "+380",
    address: "м. Днiпро",
  },

  {
    // телфон правильный, нужен адресс
    gsId: "28",
    gsNumber: "28",
    gsFirm: firms.prima,
    // phone: "+38632967506",
    address: "м. Днiпро, вул. Курчатова,",
  },

  {
    gsId: "29",
    gsNumber: "29",
    gsFirm: firms.prima,
    phone: "+380632967519",
    address: "м. Днiпро, вул. Ульянова, 17",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.72024981747313!2d35.02441530816781!3d48.4610958895177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe31d22f57859%3A0x130bce2eb9b8d41f!2sAvias%20Plus!5e0!3m2!1sru!2sua!4v1689173254901!5m2!1sru!2sua",
  },

  {
    // номер правильный, нет адресса
    gsId: "30",
    gsNumber: "30",
    gsFirm: firms.alete,
    // phone: "+380676370805",
    address: "",
  },

  {
    gsId: "35",
    gsNumber: "35",
    gsFirm: firms.prima,
    // phone: "+38063",
    address: "м. Днiпро, Криворiзьке шоссе, 17а",
  },

  {
    // телефон правильный нужен адресс
    gsId: "36",
    gsNumber: "36",
    gsFirm: firms.prima,
    // phone: "+380632967568",
    address: "м. Днiпро, ",
  },

  {
    // телефон правильный, нет адресса
    gsId: "37",
    gsNumber: "37",
    gsFirm: firms.prima,
    // phone: "+380632506670",
    address: "м. Днiпро, ",
  },

  {
    // номер правильный, нужен адресс
    gsId: "35a",
    gsNumber: "35",
    gsFirm: firms.alete,
    // phone: "+380676370810",
    address: "м. Днiпро, вул. 20 Рiччя Перемоги,",
  },

  {
    // телефон правильный, нужен адресс
    gsId: "40a",
    gsNumber: "40",
    gsFirm: firms.alete,
    // phone: "+380676103971",
    address: "м. Днiпро, ",
  },

  {
    gsId: "44a",
    gsNumber: "44",
    gsFirm: firms.alete,
    phone: "+380933071184",
    address: "м. Днiпро, вул. Набережна Сiчеславська, 57",
    gps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.3793922357871!2d35.06733668478566!3d48.465785237806244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2c606bb2fb3%3A0xb36f2e1e9199232!2z0K7QutC-0L0g0YHQtdGA0LLQuNGBINCQ0LfRgSMy!5e0!3m2!1sru!2sua!4v1689173352245!5m2!1sru!2sua",
  },
];

export default gsDB;