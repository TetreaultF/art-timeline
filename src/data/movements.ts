export interface Movement {
  id: string;
  name: string;
  start: number;
  end: number;
  color: string;
  description: string;
  fullDescription: string;
  image: string;
}

export const movements: Movement[] = [
  {
    id: "prehistoric-art",
    name: "Art préhistorique",
    start: -40000,
    end: -3500,
    color: "#8d5524",
    description: "Premières formes d'expression artistique humaines.",
    fullDescription: "S'étendant du Paléolithique supérieur jusqu'à l'avènement de l'écriture au Néolithique, l'art préhistorique marque l'éveil de la pensée symbolique chez Homo sapiens. Cet art se manifeste principalement à travers l'art pariétal au fond des grottes profondes, l'art rupestre sur parois rocheuses à l'air libre et un art mobilier composé de statuettes de fécondité sculptées dans l'ivoire ou la pierre.\n\nLes artistes préhistoriques ont exploité les reliefs naturels de la roche pour conférer du volume et du dynamisme aux silhouettes d'animaux (mammouths, bisons, chevaux, aurochs) tracées au charbon de bois, à l'ocre rouge et à l'argile. Les représentations humaines demeurent schématiques ou allégoriques, tandis que les empreintes de mains en négatif témoignent d'une volonté farouche d'ancrer la présence humaine dans la matière.\n\nCes créations transcendaient la simple fonction décorative pour remplir des fonctions rituelles, cosmologiques et spirituelles liées aux mythes de création et aux cycles de chasse. L'art préhistorique pose les fondations anthropologiques de la création visuelle, reliant la survie matérielle à la transcendance symbolique.",
    image: "/movement-images/prehistoric-art.png"
  },
  {
    id: "antiquity",
    name: "Art de l'Antiquité",
    start: -3500,
    end: 500,
    color: "#b08968",
    description: "Arts des premières grandes civilisations (Égypte, Grèce, etc.).",
    fullDescription: "Englobant les civilisations fondatrices du bassin méditerranéen, du Proche-Orient et d'Asie, l'art de l'Antiquité correspond à la sédentarisation, à l'émergence des cités-États et à l'institutionnalisation des panthéons religieux. Il formalise pour la première fois des canons esthétiques codifiés au service des souverains, de l'administration politique et des prêtres.\n\nCette période voit l'essor de réalisations architecturales colossales — pyramides, ziggourats, temples à colonnades et palais royaux — conçues pour matérialiser la puissance divine sur terre. La sculpture, la fresque murale et la métallurgie développent des langages formels allant de la stylisation hiératique mésopotamienne et égyptienne jusqu'à la quête de proportions harmonieuses et d'idéalisme naturaliste dans le monde gréco-romain.\n\nL'art antique a institué les grands archétypes visuels et mythologiques qui ont nourri toute la tradition artistique occidentale et orientale subséquente, associant la maîtrise technique à la célébration civique et sacrée.",
    image: "/movement-images/antiquity.png"
  },
  {
    id: "egyptian",
    name: "Art égyptien",
    start: -6000,
    end: -30,
    color: "#d4a017",
    description: "Art monumental et symbolique de l'Égypte antique.",
    fullDescription: "Élaboré le long de la vallée du Nil durant plus de trois millénaires, l'art égyptien est intrinsèquement lié à la théocratie pharaonique et au culte de l'au-delà. D'une stabilité stylistique exceptionnelle, il obéit à des règles de proportion et de perspective axonométrique strictes, où la taille des figures dépend directement de leur rang hiérarchique dans l'ordre cosmique et social.\n\nLes artistes et scribes appliquent la convention de l'aspectif : les visages, bras et jambes sont figurés de profil tandis que le torse et les yeux sont montrés de face, garantissant que chaque composante anatomique conserve sa lisibilité magique éternelle. Dans les tombes et temples, les bas-reliefs polychromes, les hiéroglyphes gravés et les statues de basalte ou de calcaire ont pour rôle d'assurer la survie spirituelle du Ka dans le royaume d'Osiris.\n\nDe l'architecture funéraire monumentale des pyramides de Gizeh aux trésors orfévrés du Nouvel Empire, l'art égyptien célèbre la permanence, l'harmonie universelle (Maât) et la victoire de l'ordre divin sur le chaos.",
    image: "/movement-images/egyptian.png"
  },
  {
    id: "mesopotamia",
    name: "Art de Mésopotamie",
    start: -3500,
    end: -539,
    color: "#c4a35a",
    description: "Art des civilisations mésopotamiennes et de la région du Levant.",
    fullDescription: "Développé dans le croissant fertile entre le Tigre et l'Euphrate par les Sumériens, Akkadiens, Babyloniens et Assyriens, l'art mésopotamien célèbre le pouvoir militaire, l'autorité royale et les alliances religieuses. En l'absence de carrières de pierre abondantes, ces civilisations ont excellé dans l'architecture en briques crues et cuites, inventant la brique émaillée et érigeant de vertigineuses ziggourats reliant le ciel et la terre.\n\nLa statuaire se caractérise par des figures d'orants aux yeux exorbités en coquillage et lapis-lazuli, traduisant une dévotion perpétuelle envers les divinités. Sous les empires assyrien et néo-babylonien, le relief narratif atteint une intensité dramatique inédite à travers des frises sculptées de chasses aux lions, de batailles épiques et de taureaux ailés androcéphales gardant les portes des palais.\n\nL'art mésopotamien a posé les fondations de la propagande impériale et du droit public, comme l'illustre la stèle du Code de Hammourabi combinant écriture cunéiforme et iconographie théocratique.",
    image: "/movement-images/mesopotamia.png"
  },
  {
    id: "precolumbian",
    name: "Arts précolombiens",
    start: -1500,
    end: 1500,
    color: "#7a6c2e",
    description: "Arts des civilisations d'Amérique avant l'arrivée des Européens.",
    fullDescription: "S'épanouissant en Mésoamérique (Olmèques, Mayas, Aztèques) et dans l'aire andine (Chavín, Nazca, Mochica, Incas), les arts précolombiens regroupent des civilisations d'une virtuosité technique et symbolique remarquable. Étroitement liés aux calendriers astronomiques, aux mythes fondateurs et au culte des forces naturelles, ces arts traduisent une relation symbiotique entre l'homme et le cosmos.\n\nL'architecture se distingue par de gigantesques pyramides à degrés érigées selon des alignements solaires rigoureux, tandis que la sculpture sur jade, basalte et obsidienne donne corps à un panthéon de créatures hybrides intégrant le jaguar, le serpent à plumes et l'aigle. Les artisans andins ont atteint des sommets inégalés dans l'orfèvrerie cérémonielle en or et argent, ainsi que dans le tissage de textiles polychromes complexes.\n\nBrusquement interrompues par la conquête espagnole au seizième siècle, ces traditions artistiques témoignent d'une cosmologie riche où le sacrifice, la métamorphose chamanique et la géométrie sacrée occupaient le cœur de la vie civique.",
    image: "/movement-images/precolumbian.png"
  },
  {
    id: "greek",
    name: "Art grec",
    start: -1100,
    end: -30,
    color: "#a8c0d6",
    description: "Art de la civilisation grecque antique.",
    fullDescription: "Évoluant de la période géométrique jusqu'à l'ère hellénistique en passant par l'apogée classique, l'art grec a révolutionné la représentation du corps humain en fondant son esthétique sur le canon des proportions, la symétrie et la quête de l'idéal anatomique. L'art s'affranchit du hiératisme oriental pour introduire le contrapposto, conférant un équilibre organique et un dynamisme naturel à la statuaire en marbre et en bronze.\n\nDans le domaine architectural, la rationalité grecque se formalise par les ordres dorique, ionique et corinthien, qui régissent la construction de temples périptères majestueux comme le Parthénon d'Athènes. La céramique à figures noires puis à figures rouges constitue un support narratif d'exception pour illustrer la mythologie homérique et la vie quotidienne de la cité démocratique.\n\nÀ la fin de l'époque hellénistique, l'idéalisme serein fait place à un réalisme dramatique, explorant le pathétique, la vieillesse et la violence des passions, posant ainsi les canons humanistes fondamentaux qui influenceront toute la Renaissance et le néoclassicisme.",
    image: "/movement-images/greek.png"
  },
  {
    id: "celtic",
    name: "Art celte",
    start: -800,
    end: 100,
    color: "#4a7c59",
    description: "Art des peuples celtes d'Europe.",
    fullDescription: "Fleurissant à travers l'Europe centrale et occidentale durant les périodes de Hallstatt et de La Tène, l'art celte est une esthétique raffinée de l'abstraction, de la métamorphose et du dynamisme linéaire. Essentiellement mobilier et artisanal, il s'exprime dans le travail virtuose du bronze, de l'or, de l'émail et du fer sur des parures (torques, fibules), des armes d'apparat et des récipients rituels.\n\nLes artisans celtes ont rejeté le naturalisme méditerranéen au profit de motifs géométriques curvilignes complexes : triskèles, spirales imbriquées, esses et palmettes végétales stylisées. Les visages humains et les silhouettes d'animaux (chevaux, sangliers, oiseaux aquatiques) s'y fondent de manière polymorphe dans le lacis des lignes ornementales.\n\nCet univers visuel sophistiqué reflète une spiritualité druidique axée sur la fluidité des états d'existence et les mystères de la nature. Il connaîtra une résurgence spectaculaire au début du Moyen Âge dans l'art insulaire chrétien d'Irlande et de Grande-Bretagne.",
    image: "/movement-images/celtic.png"
  },
  {
    id: "etruscan",
    name: "Art étrusque",
    start: -600,
    end: -60,
    color: "#b05e3a",
    description: "Art funéraire et décoratif de l'Étrurie antique.",
    fullDescription: "Épanoui dans le centre de l'Italie avant l'assimilation progressive par la République romaine, l'art étrusque se distingue par sa spontanéité, sa vitalité sensorielle et son extraordinaire culture funéraire. Fortement influencés par les échanges commerciaux avec la Grèce, les artistes étrusques ont développé une sensibilité propre, accordant une place prépondérante à la fête, à la musique et au rôle civique des femmes.\n\nLes tombes peintes de Tarquinia révèlent des fresques éclatantes de banquets, de danses extatiques et de jeux athlétiques baignés d'une lumière chaleureuse. La sculpture funéraire en terre cuite (terre cuite polychrome) et en bronze atteint un degré d'expressivité remarquable, immortalisant des époux allongés côte à côte avec des sourires empreints de sérénité sur les couvercles des sarcophages.\n\nL'ingénierie et l'urbanisme étrusques, notamment l'utilisation de la voûte en plein cintre et des temples à haut podium, ont directement transmis à Rome les principes architecturaux et rituels qui allaient structurer l'Empire.",
    image: "/movement-images/etruscan.png"
  },
  {
    id: "roman",
    name: "Art romain",
    start: -300,
    end: 476,
    color: "#8c7b6b",
    description: "Architecture, sculpture et mosaïque dans l'Empire romain.",
    fullDescription: "Héritier direct des traditions étrusques et grecques, l'art romain adapte ces influences pour concevoir un langage esthétique pragmatique, monumental et monumentalement civique. Grâce à l'invention révolutionnaire du béton hydraulique (opus caementicium) et à la maîtrise parfaite de l'arc, de la voûte et du dôme, Rome transforme le paysage architectural à travers des amphithéâtres, aqueducs, thermes et basiliques d'une échelle inédite.\n\nDans le domaine de la sculpture, les Romains innovent par un réalisme véridique (le vérisme républicain) qui documente fidèlement les rides, calvities et traits individuels des ancêtres, avant d'adopter sous l'Empire un style augustéen plus idéalisé pour célébrer la pax romana. Le relief narratif historique, illustré magistralement par la colonne Trajane, enregistre les victoires militaires avec une précision documentaire chirurgicale.\n\nLa peinture murale décorative, préservée à Pompéi et Herculanum, ainsi que la mosaïque de pavement, démontrent une maîtrise virtuose de la perspective illusionniste, des trompe-l'œil architecturaux et des scènes de genre, fixant les standards artistiques de l'Occident impérial.",
    image: "/movement-images/roman.png"
  },
  {
    id: "buddhist",
    name: "Art bouddhique",
    start: -268,
    end: 500,
    color: "#c9a84c",
    description: "Art spirituel né en Inde et s'étant propagé dans toute l'Asie.",
    fullDescription: "Né sur le sous-continent indien sous le patronage de l'empereur Ashoka avant de diffuser le long des routes de la soie vers la Chine, la Corée, le Japon et l'Asie du Sud-Est, l'art bouddhique traduit visuellement les enseignements de l'Éveil et la quête de libération du cycle des réincarnations (samsara). À ses débuts aniconiques, le Bouddha était évoqué par des symboles sacrés : la roue du Dharma, l'arbre de la Bodhi, ses empreintes de pas ou le stupa funéraire.\n\nAux premiers siècles de notre ère, les ateliers gréco-bouddhiques du Gandhara et les sculpteurs de Mathura forgent la première représentation anthropomorphe du Bouddha, mariant le drapé hellénistique à la posture yogique méditative. Le canon iconographique s'établit autour des marques sacrées (ushnisha, urna), des gestes rituels des mains (mudras) et de l'expression de compassion infinie propre aux bodhisattvas.\n\nÀ travers les sanctuaires troglodytiques d'Ajanta, les pagodes monumentales et la statuaire dorée, cet art a façonné la vie contemplative de tout le continent asiatique, unissant une rigueur iconologique spirituelle à une profonde douceur plastique.",
    image: "/movement-images/buddhist.png"
  },
  {
    id: "medieval",
    name: "Art médiéval",
    start: 500,
    end: 1500,
    color: "#6c757d",
    description: "Art religieux et symbolique du Moyen Âge.",
    fullDescription: "Couvrant un millénaire de transformations politiques et spirituelles en Europe, de la chute de Rome à l'aube des Temps modernes, l'art médiéval est fondamentalement théocentrique. Il subordonne la représentation du monde matériel à l'exaltation du salut de l'âme, transformant l'image en une théologie visuelle accessible aux fidèles lettrés comme analphabètes.\n\nCet ensemble monumental rassemble des courants majeurs tels que l'art carolingien, ottonien, roman et gothique. Il s'illustre par la richesse des manuscrits enluminés exécutés dans le silence des scriptoriums monastiques, le travail raffiné des reliquaires en orfèvrerie et émail champlevé, ainsi que la sculpture ornementale des portails et chapiteaux de pierre.\n\nL'art médiéval a progressivement réintroduit l'observation de la nature et l'expression des sentiments humains au sein d'une architecture de plus en plus audacieuse, pavant la voie à l'humanisme de la Renaissance.",
    image: "/movement-images/medieval.png"
  },
  {
    id: "byzantine",
    name: "Art byzantin",
    start: 330,
    end: 1453,
    color: "#9b59b6",
    description: "Art sacré de l'Empire byzantin; mosaïques et icônes.",
    fullDescription: "Art d'État et de foi de l'Empire romain d'Orient centré sur Constantinople, l'art byzantin a développé une esthétique sacrée hiératique et somptueuse, conçue comme un reflet terrestre de la cour céleste. Rejetant le réalisme tridimensionnel païen, il privilégie la stylisation des figures, les poses frontales et l'utilisation de fonds dorés chatoyants qui dématérialisent l'espace physique.\n\nLe génie byzantin atteint son apogée dans la mosaïque monumentale en tesselles de verre doré ornant les coupoles et absides d'églises comme Sainte-Sophie ou Saint-Vital de Ravenne, où le Christ Pantocrator domine l'assemblée avec sévérité et majesté. L'icône peinte sur bois à l'encaustique ou à la détrempe devient un objet de vénération théologique central, conçue comme une fenêtre mystique vers le divin.\n\nMalgré la crise iconoclaste des huitième et neuvième siècles, l'art byzantin a maintenu une continuité canonique sans équivalent, rayonnant puissamment sur les mondes slave, orthodoxe et vénitien jusqu'à la chute de l'Empire.",
    image: "/movement-images/byzantine.png"
  },
  {
    id: "islamic",
    name: "Arts de l'Islam",
    start: 622,
    end: 1258,
    color: "#1e8449",
    description: "Arts des civilisations musulmanes de l'âge d'or de l'islam jusqu'au XIXe siècle.",
    fullDescription: "S'étendant de l'Andalousie jusqu'aux confins de l'Inde moghole, les arts de l'Islam ont élaboré une culture visuelle d'un immense raffinement, marquée par la primauté de la parole coranique et le principe de l'unicité divine (Tawhid). En raison de la réserve théologique envers la représentation anthropomorphe dans les contextes cultuels, les artistes ont excellé dans la calligraphie arabe sacrée, les entrelacs géométriques complexes et les motifs végétaux stylisés (arabesques).\n\nL'architecture des mosquées, médersas et palais se distingue par l'utilisation magistrale de la cour centrale, des arcs outrepassés, des voûtes en nids d'abeilles (muqarnas) et des revêtements de céramique à glaçure lustrée créant de somptueux jeux de lumière. Dans le domaine profane et princier, l'art du livre s'épanouit à travers la miniature persane et moghole, célébrant la poésie, la chasse et les épopées courtoises.\n\nLes arts décoratifs du métal damasquiné, du verre émaillé, du bois sculpté et du tapis de cour témoignent d'une unité esthétique remarquable combinée à une virtuosité artisanale admirée dans le monde entier.",
    image: "/movement-images/islamic.png"
  },
  {
    id: "romanesque",
    name: "Art roman",
    start: 1000,
    end: 1150,
    color: "#7d6b4f",
    description: "Architecture de pierre massive typique des premiers siècles chrétiens.",
    fullDescription: "Premier grand style artistique paneuropéen depuis l'Antiquité, l'art roman émerge à l'aube du second millénaire sous l'impulsion du renouveau monastique (Cluny) et du développement des grands chemins de pèlerinage vers Saint-Jacques-de-Compostelle, Rome et Jérusalem. Il se caractérise par des églises de pierre massives aux murs épais, épaulées de contreforts robustes et éclairées par d'étroites fenêtres en plein cintre.\n\nL'introduction de la voûte en berceau et de la voûte d'arêtes en maçonnerie permet de couvrir de vastes espaces tout en protégeant les sanctuaires contre les incendies. La sculpture monumentale s'intègre rigoureusement au cadre architectural : les tympans des portails dépeignent le Jugement dernier ou l'Apocalypse avec une vigueur expressive saisissante, tandis que les chapiteaux historiés foisonnent d'animaux fantastiques, de monstres et d'épisodes bibliques.\n\nL'art roman est un art de la ferveur et de la crainte divine, où la pénombre des nefs invite au recueillement mystique et à la méditation sur le salut face aux tentations du monde terrestre.",
    image: "/movement-images/romanesque.png"
  },
  {
    id: "viking",
    name: "Art viking",
    start: 750,
    end: 1100,
    color: "#5d6d7e",
    description: "Art ornemental et narratif des peuples nordiques.",
    fullDescription: "Issu des traditions scandinaves de l'âge du fer et enrichi par les expéditions maritimes à travers l'Europe et l'Atlantique Nord, l'art viking est une expression artisanale brillante axée sur la sculpture sur bois, le travail du métal et l'érection de pierres runiques commémoratives. D'une grande richesse typologique (styles d'Oseberg, Borre, Jelling, Mammen, Ringerike et Urnes), il se distingue par des entrelacs dynamiques de bêtes fabuleuses aux corps étirés et rubanés.\n\nLes artisans nordiques ornent la proue de leurs drakkars, leurs armes, leurs bijoux en argent et leurs traîneaux cérémoniels de figures de dragons menaçants et d'animaux agrippeurs entremêlés dans des lacis serrés. Ces motifs zoomorphes combinent une grande complexité linéaire avec une énergie plastique tendue.\n\nÀ mesure que la Scandinavie s'évangélise au dixième et onzième siècles, l'art viking fusionne ses mythes païens de l'Edda avec l'iconographie chrétienne, comme en témoignent les églises en bois debout (stavkirke) dont les portails mêlent croix latines et rinceaux animaliers ancestraux.",
    image: "/movement-images/viking.png"
  },
  {
    id: "anglo-saxon",
    name: "Art insulaire et anglo-saxon",
    start: 500,
    end: 1066,
    color: "#2c5948",
    description: "Art des peuples des îles Britanniques jusqu'à la conquête normande.",
    fullDescription: "Développé en Irlande, en Écosse et en Angleterre du haut Moyen Âge, l'art insulaire et anglo-saxon réalise une synthèse extraordinaire entre l'héritage ornemental celte, le style animalier germanique et la culture chrétienne méditerranéenne apportée par les missionnaires. Il s'exprime dans une orfèvrerie de prestige somptueuse — illustrée par le trésor funéraire royal de Sutton Hoo avec ses émaux cloisonnés et grenats étincelants — et dans l'érection de hautes croix monumentales en pierre sculptée.\n\nLe sommet de cette culture réside dans la production de manuscrits bibliques enluminés d'une virtuosité inégalée, tels que le Livre de Kells ou les Évangiles de Lindisfarne. Les pages tapis y déploient des labyrinthes géométriques microscopiques, des spirales et des entrelacs zoologiques d'une précision chirurgicale, transformant le texte sacré en un chef-d'œuvre optique de méditation.\n\nCet art a joué un rôle déterminant dans la préservation de la culture chrétienne occidentale durant les siècles d'instabilité continentale, avant d'être progressivement absorbé par le roman après la conquête normande de 1066.",
    image: "/movement-images/anglo-saxon.png"
  },
  {
    id: "gothic",
    name: "Art gothique",
    start: 1150,
    end: 1500,
    color: "#2e4a6b",
    description: "Style artistique médiéval caractérisé par ses voûtes et son utilisation de la lumière.",
    fullDescription: "Né en Île-de-France sous l'impulsion de l'abbé Suger à Saint-Denis avant de conquérir toute l'Europe, l'art gothique transforme radicalement l'architecture religieuse et l'esprit médiéval. Grâce à la combinaison de la croisée d'ogives, de l'arc brisé et des arcs-boutants extérieurs, les architectes parviennent à alléger les murs porteurs pour ériger des cathédrales vertigineuses où la lumière colorée des vitraux devient l'expression physique de la grâce divine.\n\nLa sculpture s'émancipe de la paroi pour adopter un naturalisme gracieux et humanisé : les drapés deviennent fluides, les visages s'animent de sourires bienveillants et l'iconographie accorde une place royale à la Vierge Marie et aux scènes de piété intime. Dans la peinture et l'enluminure (comme chez les frères de Limbourg), l'observation minutieuse de la vie quotidienne et du paysage annonce l'art moderne.\n\nÉvoluant du gothique classique vers le rayonnant puis le flamboyant avec ses résilles de pierre complexes, ce style incarne l'apogée urbain et intellectuel du Moyen Âge, unissant prouesse technique et élévation spirituelle.",
    image: "/movement-images/gothic.png"
  },
  {
    id: "early-netherlandish",
    name: "Art primitif flamand",
    start: 1420,
    end: 1520,
    color: "#a68a64",
    description: "Développement de la peinture flamande détaillée en actuelle Belgique.",
    fullDescription: "Fleurissant dans les riches cités marchandes des Pays-Bas méridionaux (Bruges, Gand, Bruxelles, Tournai), l'art des primitifs flamands révolutionne la peinture occidentale par le perfectionnement de la peinture à l'huile et un naturalisme microscopique d'une précision saisissante. Portés par des maîtres comme Jan van Eyck, Rogier van der Weyden et Robert Campin, ces artistes capturent le monde visible avec une fidélité optique absolue.\n\nGrâce à l'application de multiples couches de glacis translucides, les peintres flamands rendent avec un éclat inédit la texture des étoffes de velours, les reflets métalliques, la transparence des larmes et la profondeur atmosphérique des paysages. Chaque détail domestique est chargé d'un symbolisme théologique subtil, intégrant le mystère divin au cœur du cadre bourgeois contemporain.\n\nCet art brille également dans l'art du portrait psychologique individualisé et l'invention d'univers oniriques foisonnants comme chez Jérôme Bosch, exerçant une fascination et une influence directes sur toute la Renaissance européenne.",
    image: "/movement-images/early-netherlandish.png"
  },
  {
    id: "renaissance",
    name: "Renaissance",
    start: 1400,
    end: 1600,
    color: "#f4a261",
    description: "Renouveau des arts inspiré de l'Antiquité et de l'art gréco-romain.",
    fullDescription: "Rupture majeure marquant l'entrée dans l'ère moderne, la Renaissance opère un renouveau intellectuel et artistique spectaculaire fondé sur la redécouverte des textes antiques, l'essor de l'humanisme et une foi inébranlable dans les capacités rationnelles de l'être humain. L'artiste s'émancipe du statut d'artisan corporatiste pour devenir un savant, maîtrisant les mathématiques, l'anatomie, la botanique et la philosophie.\n\nCette période formalise l'invention de la perspective linéaire à point de fuite unique (théorisée par Brunelleschi et Alberti), le modelé par le clair-obscur et le sfumato vaporeux, permettant d'organiser l'espace de manière cohérente et d'inscrire le corps humain idéalisé dans un environnement tridimensionnel mesurable. L'architecture renoue avec les proportions modulaires, les colonnes, frontons et coupoles de l'Antiquité classique.\n\nS'étendant de l'Italie aux foyers septentrionaux, la Renaissance pose les fondements esthétiques durables de l'art occidental, célébrant la dignité de l'homme et l'harmonie des lois universelles.",
    image: "/movement-images/renaissance.png"
  },
  {
    id: "italian-renaissance",
    name: "Renaissance italienne",
    start: 1400,
    end: 1600,
    color: "#e8975a",
    description: "Foyer principal de la Renaissance.",
    fullDescription: "Éclose à Florence au début du Quattrocento sous le mécénat éclairé des Médicis avant d'atteindre son apogée à Rome et Venise au Cinquecento, la Renaissance italienne représente l'un des sommets absolus de l'histoire de l'art. Guidée par le néoplatonisme et l'idéal humaniste, elle fait de l'homme la mesure de toutes choses, réconciliant la mythologie païenne antique et la foi chrétienne.\n\nLa Haute Renaissance voit triompher des génies universels : Léonard de Vinci et son sfumato poétique, Michel-Ange et sa puissance anatomique sculpturale au plafond de la chapelle Sixtine, et Raphaël incarnant la grâce, l'équilibre et la perfection spatiale. À Venise, des maîtres comme Titien, Giorgione et Véronèse fondent une école rivale basée sur la sensualité de la couleur (colorito) et la lumière atmosphérique.\n\nLa Renaissance italienne a redéfini le rôle de l'artiste dans la société et légué des chefs-d'œuvre architecturaux et picturaux qui ont servi de modèles académiques universels durant des siècles.",
    image: "/movement-images/italian-renaissance.png"
  },
  {
    id: "flemish-renaissance",
    name: "Renaissance flamande",
    start: 1500,
    end: 1584,
    color: "#d4845a",
    description: "Fusion du naturalisme flamand et de la Renaissance italienne.",
    fullDescription: "Née au seizième siècle de la rencontre féconde entre la tradition du détail minutieux des primitifs des Pays-Bas et les leçons humanistes de la Renaissance italienne, la Renaissance flamande invente un style singulier, robuste et visionnaire. Des artistes voyageurs comme Quentin Metsys, Jan Gossaert et Bernard van Orley intègrent les décors à l'antique, le nu héroïque et la perspective mathématique dans leurs compositions nordiques.\n\nLe mouvement trouve son incarnation la plus magistrale et originale dans l'œuvre de Pieter Brueghel l'Ancien. Délaissant l'idéalisme aristocratique méridional, Brueghel consacre ses toiles aux proverbes populaires, aux foires paysannes exubérantes et à des panoramas grandioses où la condition humaine est replacée dans le cycle perpétuel des saisons et des forces cosmiques.\n\nLa Renaissance flamande s'est également affirmée dans l'essor du portrait bourgeois, de la scène de genre moralisante et du paysage autonome, forgeant une identité esthétique durable qui nourrira le Siècle d'or hollandais et le baroque flamand.",
    image: "/movement-images/flemish-renaissance.png"
  },
  {
    id: "german-renaissance",
    name: "Renaissance allemande",
    start: 1470,
    end: 1600,
    color: "#c87941",
    description: "Influencé par la Renaissance italienne, centré sur la religion et l'humanisme.",
    fullDescription: "Développée dans le Saint-Empire romain germanique sous l'influence directe de la Réforme protestante et de l'humanisme intellectuel d'Érasme, la Renaissance allemande combine une tension spirituelle intense et une curiosité scientifique sans bornes. Elle trouve son phare en Albrecht Dürer, peintre et théoricien qui voyage en Italie et assimile les principes géométriques et anatomiques pour les acclimater au nord des Alpes.\n\nCette période se distingue par l'essor spectaculaire des arts graphiques (gravure sur bois et taille-douce sur cuivre), qui permettent une diffusion démocratique et rapide des idées religieuses et philosophiques à travers l'Europe. Tandis que Dürer excelle dans la rigueur formelle, Matthias Grünewald pousse l'expressivité mystique à un degré déchirant dans le retable d'Issenheim, et Lucas Cranach l'Ancien met son atelier au service de la théologie de Martin Luther.\n\nAssociant la minutie gothique tardive à la clarté humaniste, la Renaissance allemande a produit une méditation profonde sur la condition humaine, la mortalité et la place de la conscience individuelle.",
    image: "/movement-images/german-renaissance.png"
  },
  {
    id: "mannerism",
    name: "Maniérisme",
    start: 1520,
    end: 1600,
    color: "#e76f51",
    description: "Style artistique exagérant les formes de la Renaissance.",
    fullDescription: "Émergeant dans le sillage du sac de Rome de 1527 et de la crise religieuse de la Réforme, le maniérisme (de l'italien maniera) rompt avec l'harmonie classique, la symétrie et la lisibilité sereine de la Haute Renaissance. Confrontés à la perfection indépassable de Raphaël et Michel-Ange, les artistes choisissent d'en styliser les codes avec une sophistication intellectuelle, une élégance raffinée et une audace formelle délibérée.\n\nLe style se caractérise par l'allongement serpentin des corps (figura serpentinata), des compositions asymétriques saturées ou décentrées, des perspectives vertigineuses et une palette de couleurs acides, froides et contrastées. Des maîtres comme Pontormo, Rosso Fiorentino, Parmigianino, Bronzino et Le Greco créent des espaces troublants où règne une tension psychologique feutrée et une virtuosité théâtrale.\n\nArt de cour aristocratique et complexe, le maniérisme reflète les angoisses d'un monde en mutation géopolitique et spirituelle, annonçant par ses excès dramatiques la sensibilité baroque à venir.",
    image: "/movement-images/mannerism.png"
  },
  {
    id: "baroque",
    name: "Baroque",
    start: 1600,
    end: 1750,
    color: "#7b1a1a",
    description: "Mouvement caractérisé par l'exubérance, le mouvement et le contraste.",
    fullDescription: "Né à Rome sous l'impulsion de la Contre-Réforme catholique avant de se propager dans toute l'Europe et l'Amérique latine, le baroque transforme l'art en un instrument de persuasion émotionnelle, de séduction sensorielle et de mise en scène de la grandeur religieuse et monarchique. Il tourne le dos à la froideur intellectuelle maniériste pour privilégier l'illusion d'optique, le dynamisme impétueux et l'apothéose théâtrale.\n\nL'architecture baroque fusionne la peinture, la sculpture et la stéréotomie dans des espaces ondulants et immersifs rythmés par des dômes majestueux, des colonnes torses et des trompe-l'œil célestes. En peinture et sculpture, des maîtres comme Le Bernin, Rubens, Rembrandt et Velázquez capturent le paroxysme de l'action, l'instabilité du temps et le pathétique des sentiments à travers des diagonales fougueuses et des matières sensuelles.\n\nLe baroque a célébré la vie dans toute sa précarité et sa splendeur, transformant l'espace urbain et ecclésial en une scène monumentale de célébration mystique et politique.",
    image: "/movement-images/baroque.png"
  },
  {
    id: "caravaggism",
    name: "Caravagisme",
    start: 1600,
    end: 1650,
    color: "#4b0f0f",
    description: "Courant du baroque influencé par les œuvres du Caravage.",
    fullDescription: "Courant révolutionnaire initié à Rome par Michelangelo Merisi da Caravaggio (Le Caravage), le caravagisme bouleverse la peinture européenne du premier dix-septième siècle par son naturalisme sans fard et son utilisation radicale du clair-obscur ténébriste. Rejetant les conventions idéalisantes de l'académisme, Le Caravage peint directement d'après le motif en prenant pour modèles de saints et martyrs des gens du peuple aux pieds sales et aux visages burinés.\n\nLa marque distinctive du mouvement repose sur un éclairage latéral violent et dramatique, émergeant d'un fond obscur et impénétrable pour frapper violemment les corps au moment culminant de la scène. Ce dispositif théâtral élimine la distance entre l'œuvre et le spectateur, conférant aux épisodes sacrés une vérité humaine brute et une urgence physique immédiate.\n\nLe caravagisme a suscité une onde de choc continentale, inspirant directement des écoles entières de peintres : les caravagistes d'Utrecht (Honthorst, Ter Brugghen), les maîtres napolitains (Ribera, Artemisia Gentileschi), les peintres français (Georges de La Tour, Valentin de Boulogne) et espagnols (Zurbarán).",
    image: "/movement-images/caravaggism.png"
  },
  {
    id: "ukiyo-e",
    name: "Ukiyo-e",
    start: 1603,
    end: 1868,
    color: "#3f0091",
    description: "Estampes japonaises représentant le Japon durant l'époque d'Edo.",
    fullDescription: "S'épanouissant durant l'ère d'Edo sous le shogunat Tokugawa, l'ukiyo-e — qui se traduit poétiquement par « images du monde flottant » — est un mouvement artistique urbain et populaire associé aux plaisirs éphémères de la nouvelle bourgeoisie marchande. Réalisé grâce à une collaboration sophistiquée entre le dessinateur, le graveur sur bois, l'imprimeur et l'éditeur, cet art a démocratisé l'image à travers l'estampe xylographique polychrome (nishiki-e).\n\nLes sujets abordent d'abord les courtisanes réputées des quartiers de plaisir de Yoshiwara (bijin-ga) et les acteurs célèbres du théâtre kabuki (yakusha-e), avant de se tourner vers la faune, la flore et les paysages grandioses. Des maîtres universels comme Katsushika Hokusai et Utagawa Hiroshige immortalisent le mont Fuji, les relais du Tokaido et les caprices de la météo avec un sens magistral de la ligne claire, des cadrages asymétriques plongeants et des aplats de bleu de Prusse.\n\nL'ouverture forcée du Japon au dix-neuvième siècle a provoqué l'arrivée massive de ces estampes en Occident, déclenchant la vague du japonisme qui a profondément bouleversé les impressionnistes, les nabis et les créateurs de l'Art nouveau.",
    image: "/movement-images/ukiyo-e.png"
  },
  {
    id: "classicism",
    name: "Classicisme",
    start: 1660,
    end: 1715,
    color: "#c2ae4a",
    description: "Recherche de l'ordre, de la raison, de la mesure et de l'harmonie.",
    fullDescription: "Développé en France sous le règne personnel de Louis XIV et institutionnalisé par la création de l'Académie royale de peinture et de sculpture, le classicisme incarne un idéal d'ordre rationnel, de mesure, de clarté et de majesté au service de l'État monarchique. S'opposant aux débordements dynamiques et aux caprices du baroque, il puise ses principes dans l'Antiquité gréco-romaine et la leçon d'équilibre de Raphaël.\n\nThéorisé par Nicolas Poussin et incarné dans le domaine religieux et historique par Charles Le Brun, le classicisme établit une stricte hiérarchie des genres picturaux, plaçant la peinture d'histoire au sommet. La composition est régie par la primauté du dessin sur la couleur, la géométrie rigoureuse, la retenue des passions et l'ordonnancement mesuré des figures dans un paysage idéal.\n\nEn architecture et urbanisme, illustrés par le château de Versailles de Le Vau, Hardouin-Mansart et les jardins de Le Nôtre, le classicisme met en scène la domination de la raison humaine sur la nature chaotique, forgeant une esthétique officielle de la perfection et de l'harmonie pérenne.",
    image: "/movement-images/classicism.png"
  },
  {
    id: "rococo",
    name: "Rococo",
    start: 1720,
    end: 1780,
    color: "#2ca681",
    description: "Style décoratif privilégiant l'élégance et le plaisir visuel.",
    fullDescription: "Émergeant à Paris après la mort de Louis XIV avec la Régence et le règne de Louis XV, le rococo marque une réaction hédoniste et intimiste contre la monumentalité solennelle du classicisme louis-quatorzien. Délaissant les grands sujets héroïques et la propagande royale, l'aristocratie et la haute bourgeoisie privilégient le confort des salons privés, l'élégance galante, la frivolité spirituelle et les plaisirs des sens.\n\nLe style se caractérise par l'omniprésence de motifs asymétriques inspirés des coquillages, des rocailles et du monde végétal, une profusion de dorures subtiles, des miroirs et une palette de tons pastel lumineux (rose poudré, bleu ciel, vert amande). En peinture, Antoine Watteau invente le genre poétique de la fête galante, relayé par la volupté sensuelle de François Boucher et l'énergie virtuose et espiègle de Jean-Honoré Fragonard.\n\nDiffusé à travers les cours européennes, notamment en Allemagne et en Autriche où il s'épanouit dans une architecture religieuse lumineuse et festive, le rococo incarne la grâce, l'esprit et la légèreté de vivre du siècle des Lumières avant le retour de la rigueur civique.",
    image: "/movement-images/rococo.png"
  },
  {
    id: "neoclassicism",
    name: "Néo-classicisme",
    start: 1760,
    end: 1840,
    color: "#cf9817",
    description: "Retour aux idéaux antiques et à la rigueur et à la sobriété.",
    fullDescription: "Né sous l'impulsion des découvertes archéologiques majeures d'Herculanum et de Pompéi et théorisé par Johann Joachim Winckelmann, le néoclassicisme proclame un retour radical à la « noble simplicité et calme grandeur » de l'Antiquité grecque et romaine. En rupture totale avec les frivolités décoratives du rococo, ce mouvement s'affirme comme une entreprise morale, patriotique et civique au cœur des bouleversements des révolutions américaine et française et de l'Empire napoléonien.\n\nLes artistes néoclassiques rejettent la couleur séductrice au profit de la pureté du contour, de la netteté du dessin et d'une clarté de composition orthogonale digne des bas-reliefs antiques. Mené par Jacques-Louis David, le mouvement met en scène des exempla virtutis — le serment civique, le sacrifice héroïque et le sens du devoir — dans des espaces sobres et fermés.\n\nEn sculpture avec Antonio Canova et Bertel Thorvaldsen, comme en architecture avec les péristyles et coupoles monumentales, le néoclassicisme aspire à un idéal universel et intemporel de beauté rationnelle et de vertu républicaine.",
    image: "/movement-images/neoclassicism.png"
  },
  {
    id: "romanticism",
    name: "Romantisme",
    start: 1790,
    end: 1850,
    color: "#a7657e",
    description: "Mouvement centré sur l'émotion, l'imagination et le sublime.",
    fullDescription: "Émergé en Europe à la fin du dix-huitième siècle en réaction au rationalisme strict des Lumières et à l'ordre froid du néoclassicisme, le romantisme proclame la souveraineté absolue de la sensibilité individuelle, de l'imagination poétique et du tumulte émotionnel. Marqué par les désillusions post-révolutionnaires et l'essor de la révolution industrielle, l'artiste romantique se pose en génie solitaire et tourmenté, en prise avec le mal du siècle.\n\nLe mouvement explore le concept esthétique du sublime : une fascination mêlée d'effroi face à la puissance démesurée et indomptable de la nature, illustrée par les brumes mystiques de Caspar David Friedrich ou les tempêtes atmosphériques incandescentes de J. M. W. Turner. En France, Géricault et Delacroix traduisent la tragédie contemporaine, la violence des passions et l'orientalisme fantastique à travers une touche fiévreuse et des harmonies colorées vibrantes.\n\nLe romantisme a également soutenu les luttes nationales pour la liberté des peuples, célébrant le folklore médiéval et les forces nocturnes de l'inconscient, redéfinissant à jamais la création comme un acte de liberté viscérale.",
    image: "/movement-images/romanticism.png"
  },
  {
    id: "academism",
    name: "Académisme",
    start: 1850,
    end: 1880,
    color: "#b4b4b4",
    description: "Art guidé par les standards des Académies des Beaux-Arts.",
    fullDescription: "Dominant les institutions artistiques, les Salons officiels et le marché de l'art européen au milieu du dix-neuvième siècle, l'académisme (ou art pompier) repose sur l'enseignement strict dispensé par les Écoles des Beaux-Arts. Héritier du classicisme et du néoclassicisme, il consacre la suprématie absolue du dessin préparatoire, de l'anatomie rigoureuse d'après le modèle vivant, de la perspective géométrique et du rendu lisse et poli de la surface peinte (le « fini »).\n\nLes artistes académiques, à l'image de William Bouguereau, Alexandre Cabanel, Jean-Léon Gérôme et Thomas Couture, excellent dans la peinture d'histoire, les allégories mythologiques et l'orientalisme documentaire minutieux. Leurs toiles répondent au goût de la bourgeoisie triomphante du Second Empire et de la Troisième République, friande d'érudition historique rassurante et de sensualité idéale contenue dans un cadre moral respectable.\n\nBien que vivement combattu par les avant-gardes réalistes et impressionnistes pour son conservatisme technique et institutionnel, l'académisme témoigne d'une virtuosité technique prodigieuse et a profondément façonné la culture visuelle et monumentale du dix-neuvième siècle.",
    image: "/movement-images/academism.png"
  },
  {
    id: "realism",
    name: "Réalisme",
    start: 1840,
    end: 1880,
    color: "#2b2d2e",
    description: "Représentation fidèle de la réalité sociale.",
    fullDescription: "Né en France au lendemain des bouleversements politiques de la Révolution de 1848 et théorisé par Gustave Courbet, le réalisme rejette catégoriquement l'idéalisation néoclassique et les évasions imaginaires du romantisme. Guidé par la montée des idées socialistes et l'essor du positivisme scientifique, le mouvement s'assigne pour mission de peindre la société contemporaine telle qu'elle est, sans artifices ni embellissements moraux.\n\nCourbet, Honoré Daumier et Jean-François Millet provoquent le scandale en accordant aux scènes ordinaires du monde paysan et du prolétariat urbain les dimensions monumentales réservées jusqu'alors à la grande peinture d'histoire religieuse ou monarchique. L'application de la matière picturale, souvent épaisse, rugueuse et travaillée au couteau, reflète la dureté du travail physique et la réalité matérielle des corps.\n\nEn déclarant ne pouvoir peindre que ce que l'œil peut voir dans son propre temps, le réalisme a brisé les hiérarchies académiques séculaires, affirmant la valeur démocratique de l'art et ouvrant directement la voie à la modernité picturale.",
    image: "/movement-images/realism.png"
  },
  {
    id: "impressionism",
    name: "Impressionnisme",
    start: 1860,
    end: 1886,
    color: "#43b9d1",
    description: "Peinture de la lumière et de l'instant.",
    fullDescription: "Né en rupture ouverte avec le système des Salons officiels et marqué par l'exposition historique de 1874 dans l'atelier du photographe Nadar, l'impressionnisme constitue l'une des révolutions esthétiques les plus décisives de l'art moderne. Emmené par Claude Monet, Auguste Renoir, Camille Pissarro, Edgar Degas et Berthe Morisot, le groupe abandonne la narration historique pour saisir l'immédiateté fugitive des sensations visuelles et les métamorphoses de la lumière naturelle.\n\nFavorisés par l'invention du tube de peinture souple et le développement du réseau ferroviaire, les peintres sortent des ateliers pour peindre sur le motif en plein air. Ils délaissent les noirs académiques et les contours nets au profit d'une touche fragmentée, vive et rapide, juxtaposant des couleurs pures directement sur la toile pour que le mélange optique s'opère dans l'œil du spectateur.\n\nLeurs toiles capturent la vie moderne parisienne, les loisirs dominicaux en bord de Seine, les gares fumantes et les variations atmosphériques au fil des heures, transformant la peinture d'un rendu intellectuel du sujet en une célébration de la pure perception lumineuse.",
    image: "/movement-images/impressionism.png"
  },
  {
    id: "symbolism",
    name: "Symbolisme",
    start: 1880,
    end: 1910,
    color: "#0f4e19",
    description: "Art basé sur les symboles et l'imaginaire.",
    fullDescription: "Émergé en Europe à la fin du dix-neuvième siècle en réaction directe au positivisme scientifique, au naturalisme littéraire et au matérialisme impressionniste, le symbolisme proclame la primauté de l'idée, du rêve et du mystère spirituel. Inspirés par la poésie de Baudelaire, Mallarmé et Verlaine, les artistes symbolistes chercheent à donner une forme sensible à l'invisible, aux angoisses existentielles et aux profondeurs psychologiques de l'âme humaine.\n\nLe mouvement se caractérise par une iconographie énigmatique peuplée de mythes antiques réinterprétés, de figures bibliques vénéneuses (comme Salomé), de femmes fatales, de paysages oniriques crépusculaires et d'allégories de la mort et de la sensualité. Des maîtres comme Gustave Moreau, Odilon Redon, Pierre Puvis de Chavannes, Fernand Khnopff et Arnold Böcklin utilisent des lignes synthétiques et des couleurs évocatrices pour suggérer plutôt que décrire.\n\nCourant international polymorphe, le symbolisme a constitué une passerelle essentielle entre la fin du romantisme et les avant-gardes du vingtième siècle, préparant le terrain pour l'expressionnisme et le surréalisme.",
    image: "/movement-images/symbolism.png"
  },
  {
    id: "postimpressionism",
    name: "Postimpressionnisme",
    start: 1886,
    end: 1905,
    color: "#367e98",
    description: "Prolongement de l'impressionnisme.",
    fullDescription: "Terme forgé par le critique Roger Fry pour désigner la période d'expérimentations intenses qui succède à la dernière exposition impressionniste de 1886, le postimpressionnisme regroupe des démarches artistiques majeures qui repensent la structure et la fonction de l'image. Tout en conservant la luminosité et les couleurs vives de leurs prédécesseurs, ces artistes refusent de se limiter à l'enregistrement passif et éphémère de la lumière naturelle.\n\nCe foyer d'innovations s'articule autour de personnalités indépendantes et géniales : Paul Cézanne cherche à « faire de l'impressionnisme quelque chose de solide et de durable » en géométrisant les volumes ; Vincent van Gogh projette ses tourments intérieurs par une touche convulsive et des couleurs expressives pures ; Paul Gauguin s'évade vers le synthétisme et le primitivisme pour renouer avec le mystère spirituel ; et Henri de Toulouse-Lautrec croque le spectacle de la nuit montmartroise d'un trait incisif.\n\nEn émancipant la forme, l'espace et la couleur de la simple copie du réel, le postimpressionnisme constitue le véritable creuset duquel vont directement jaillir le fauvisme, le cubisme et l'abstraction.",
    image: "/movement-images/postimpressionism.png"
  },
  {
    id: "art-nouveau",
    name: "Art nouveau",
    start: 1890,
    end: 1914,
    color: "#2ec4b6",
    description: "Style décoratif inspiré de la nature.",
    fullDescription: "Mouvement international total né au tournant du vingtième siècle (désigné selon les pays sous les noms de Jugendstil, Modernismo, Sezessionsstil ou Stile Liberty), l'Art nouveau ambitionne d'abolir la frontière séculaire entre les beaux-arts traditionnels et les arts appliqués décoratifs. En réaction à l'industrialisation déshumanisante et au pastiche historiciste académique, il aspire à transformer le cadre de vie quotidien en une œuvre d'art totale (Gesamtkunstwerk).\n\nLe style puise son vocabulaire formel dans l'observation des rythmes organiques de la nature : lignes courbes ondulantes en coup de fouet, arabesques végétales souples, insectes (libellules) et silhouettes féminines aux chevelures dénouées. Architectes et designers comme Victor Horta, Hector Guimard, Antoni Gaudí, Émile Gallé et Gustav Klimt subliment le fer forgé, le verre multicouche, la céramique et les bois précieux.\n\nEn unissant la liberté du geste ornemental à l'utilisation novatrice des matériaux industriels, l'Art nouveau a marqué une rupture poétique audacieuse qui a ouvert la voie au design moderne et à l'Art déco.",
    image: "/movement-images/art-nouveau.png"
  },
  {
    id: "pointillism",
    name: "Pointillisme",
    start: 1886,
    end: 1910,
    color: "#1c3f64",
    description: "Peinture par points de couleur.",
    fullDescription: "Également nommé divisionnisme ou néo-impressionnisme par le critique Félix Fénéon, le pointillisme est fondé par Georges Seurat et Paul Signac à partir d'une volonté de doter les intuitions impressionnistes d'une assise scientifique et méthodique rigoureuse. S'appuyant sur les traités d'optique contemporains d'Eugène Chevreul (loi du contraste simultané des couleurs) et d'Ogden Rood, le mouvement rationalise la décomposition de la lumière.\n\nAu lieu de mélanger les pigments sur la palette, le peintre applique sur la toile de minuscules points ou touches carrées de couleurs pures juxtaposées selon un calcul précis. C'est la rétine du spectateur qui, en observant l'œuvre à une distance adéquate, opère la synthèse optique, conférant aux surfaces une luminosité vibrante et une intensité chromatique supérieure aux mélanges physiques traditionnels.\n\nLes compositions néo-impressionnistes, caractérisées par un calme monumental, une géométrie sous-jacente stricte et un hiératisme intemporel, ont profondément influencé les recherches chromatiques des fauves et la rigueur structurelle des futuristes italiens.",
    image: "/movement-images/pointillism.png"
  },
  {
    id: "naive-art",
    name: "Art naïf",
    start: 1890,
    end: 1950,
    color: "#f94144",
    description: "Style spontané et non académique.",
    fullDescription: "Qualifié également d'art primitif moderne ou d'art autodidacte, l'art naïf rassemble des créateurs qui ont développé leur pratique artistique en marge des académies, des écoles officielles et des circuits traditionnels du marché de l'art. Révélé au grand public grâce à l'admiration passionnée que lui portaient des avant-gardistes comme Alfred Jarry, Pablo Picasso et Guillaume Apollinaire, Henri Rousseau (dit le Douanier Rousseau) en demeure la figure emblématique et tutélaire.\n\nCe style se caractérise par une fraîcheur narrative singulière, un refus instinctif des règles de la perspective linéaire classique, une simplification des volumes et une application soignée d'aplats de couleurs intenses et lumineuses. Les artistes naïfs peignent avec un sens minutieux et foisonnant du détail, qu'il s'agisse de jungles exotiques fantastiques, de scènes civiques villageoises ou de portraits d'une candeur touchante.\n\nLoin d'un simple manque de technique, l'art naïf exprime une sincérité visionnaire, une liberté poétique totale et une capacité d'émerveillement direct qui ont inspiré les surréalistes dans leur quête de spontanéité.",
    image: "/movement-images/naive-art.png"
  },
  {
    id: "american-realism",
    name: "Réalisme américain",
    start: 1900,
    end: 1940,
    color: "#29190d",
    description: "Représentation de la vie urbaine et des paysages ruraux des États-Unis.",
    fullDescription: "S'affirmant au début du vingtième siècle à travers l'école d'Ashcan avant d'évoluer vers le précisionnisme et le régionalisme durant la Grande Dépression, le réalisme américain s'affranchit de la dépendance esthétique envers l'Europe pour forger une identité visuelle authentiquement américaine. Les artistes plongent leur regard dans la réalité brute de la métropole industrielle en pleine expansion comme dans les grands espaces du Midwest rural.\n\nCe mouvement capture les contrastes violents de la modernité : l'énergie populaire des rues new-yorkaises chez George Bellows, la perfection géométrique et glacée des complexes industriels chez Charles Sheeler, et les mythes de l'Amérique agraire chez Grant Wood. Chez Edward Hopper, le réalisme atteint une intensité psychologique universelle, immortalisant des figures isolées dans des diners de nuit ou des bureaux silencieux, métaphores poignantes de l'aliénation urbaine contemporaine.\n\nPar son observation lucide, son refus de l'ornement superficiel et son ancrage social profond, le réalisme américain a constitué la chronique visuelle essentielle des espoirs, des doutes et de la solitude d'une nation en pleine mutation.",
    image: "/movement-images/american-realism.png"
  },
  {
    id: "fauvism",
    name: "Fauvisme",
    start: 1905,
    end: 1910,
    color: "#ff7723",
    description: "Couleurs pures et expression forte.",
    fullDescription: "Première grande avant-garde du vingtième siècle, le fauvisme éclate au Salon d'automne de 1905 à Paris, où le critique Louis Vauxcelles qualifie par dérision la salle centrale de « cage aux fauves » en découvrant les toiles aux couleurs explosives d'Henri Matisse, André Derain, Maurice de Vlaminck et Albert Marquet. Ce mouvement éphémère mais fulgurant proclame l'autonomie absolue de la couleur par rapport à la réalité visuelle du sujet représenté.\n\nLes peintres fauves appliquent des aplats de tons purs sortis directement du tube de peinture, sans dégradés ni mélanges préalables. Les ombres ne sont plus rendues par du noir ou du brun mais par des contrastes de complémentaires vibrants, et les contours simplifiés structurent l'espace de façon bidimensionnelle, transfigurant les paysages méditerranéens et les portraits en de pures symphonies chromatiques.\n\nLe fauvisme libère la sensation émotionnelle du carcan de l'imitation descriptive, établissant que la couleur sur la toile possède sa propre logique musicale et expressive, ouvrant ainsi la voie à toutes les audaces de l'art abstrait.",
    image: "/movement-images/fauvism.png"
  },
  {
    id: "expressionism",
    name: "Expressionnisme",
    start: 1905,
    end: 1925,
    color: "#9d0208",
    description: "Déformation expressive de la réalité.",
    fullDescription: "Né en Allemagne au début du vingtième siècle autour des collectifs Die Brücke à Dresde (Ernst Ludwig Kirchner, Karl Schmidt-Rottluff) et Der Blaue Reiter à Munich (Vassily Kandinsky, Franz Marc), l'expressionnisme est une réaction viscérale contre l'impressionnisme et l'académisme bourgeois. Il ne s'agit plus de représenter le monde extérieur, mais d'extérioriser les angoisses existentielles, la ferveur spirituelle et la détresse psychique de l'artiste dans un monde industrialisé et menaçant.\n\nLe langage formel expressionniste repose sur la distorsion violente des figures, des lignes anguleuses et acérées inspirées des sculptures primitives et de la gravure sur bois médiévale, ainsi qu'une palette de couleurs dissonantes et stridentes. Les thèmes explorent la solitude métropolitaine, la misère sociale, la sexualité tourmentée et le traumatisme sanglant de la Première Guerre mondiale (notamment chez Otto Dix et George Grosz).\n\nEn subordonnant l'harmonie classique à la sincérité du cri intérieur, l'expressionnisme a marqué durablement la peinture, le théâtre, la littérature et le cinéma muet de l'entre-deux-guerres.",
    image: "/movement-images/expressionism.png"
  },
  {
    id: "cubism",
    name: "Cubisme",
    start: 1907,
    end: 1920,
    color: "#ee89c1",
    description: "Déconstruction des formes en volumes géométriques.",
    fullDescription: "Initié par Pablo Picasso avec Les Demoiselles d'Avignon en 1907 et développé en étroite collaboration avec Georges Braque et Juan Gris, le cubisme constitue la rupture spatiale la plus radicale de l'art occidental depuis l'invention de la perspective à la Renaissance. S'inspirant de la consigne de Cézanne de « traiter la nature par le cylindre, la sphère et le cône » et de la stylisation des masques africains, le mouvement détruit le point de vue unique et illusionniste.\n\nLe cubisme traverse deux phases majeures : le cubisme analytique (1909-1912), où les objets sont fragmentés en facettes géométriques sous des angles de vision multiples et simultanés dans une palette quasi monochrome de gris et d'ocres ; puis le cubisme synthétique (1912-1919), qui réintroduit la couleur et réinvente le réel par l'invention révolutionnaire des collages et papiers collés, insérant du papier journal, du carton et des matériaux industriels sur la toile.\n\nEn transformant le tableau en un objet autonome possédant sa propre structure interne plutôt qu'en une fenêtre ouverte sur le monde, le cubisme a redéfini le statut même de l'œuvre d'art et engendré l'ensemble des avant-gardes géométriques du siècle.",
    image: "/movement-images/cubism.png"
  },
  {
    id: "art-deco",
    name: "Art déco",
    start: 1910,
    end: 1940,
    color: "#56658d",
    description: "Style géométrique et luxueux.",
    fullDescription: "Consacré officiellement lors de l'Exposition internationale des arts décoratifs et industriels modernes de Paris en 1925, l'Art déco s'impose comme le style dominant de l'entre-deux-guerres, incarnant l'optimisme technologique des Années folles, la vitesse et le luxe moderne. En opposition directe avec les formes asymétriques et fluides de l'Art nouveau, il privilégie une géométrisation rigoureuse, la symétrie architecturale et la pureté des lignes aérodynamiques (streamline).\n\nLe mouvement opère une synthèse brillante entre des influences diverses : la fragmentation du cubisme, l'énergie cinétique du futurisme, l'exotisme des ballets russes et la redécouverte archéologique du tombeau de Toutânkhamon. Les créateurs associent l'artisanat d'art le plus raffiné (marqueterie d'ébène de Macassar, galuchat, laque) à des matériaux modernes comme le verre dépoli, le chrome, l'aluminium et le béton armé.\n\nDe la peinture monumentale de Tamara de Lempicka aux flèches étincelantes des gratte-ciel new-yorkais (comme le Chrysler Building), l'Art déco a façonné l'esthétique internationale de l'élégance urbaine et du progrès industriel.",
    image: "/movement-images/art-deco.png"
  },
  {
    id: "dadaism",
    name: "Dadaïsme",
    start: 1916,
    end: 1924,
    color: "#c9ab6f",
    description: "Mouvement anti-art et absurde.",
    fullDescription: "Né à Zurich en pleine Première Guerre mondiale au Cabaret Voltaire sous l'égide de Hugo Ball, Tristan Tzara, Jean Arp et Marcel Janco, le mouvement Dada surgit comme un cri de révolte viscéral contre la folie meurtrière du conflit armé et la faillite morale de la société bourgeoise occidentale. Rejetant la logique rationaliste, le nationalisme et les valeurs académiques séculaires, Dada choisit l'absurde, la provocation, le non-sens et l'ironie décapante comme armes de libération artistique.\n\nLe mouvement étend rapidement ses ramifications à Berlin, Hanovre, Cologne, Paris et New York, inventant des formes d'expression radicalement nouvelles : poèmes sonores incohérents, photomontages satiriques découpés dans la presse (Hannah Höch, John Heartfield), collages basés sur les lois du hasard et performances théâtrales tapageuses. À New York, Marcel Duchamp opère un séisme conceptuel absolu en inventant le readymade, démontrant qu'un objet manufacturé banal (un urinoir, une roue de vélo) devient une œuvre d'art par le simple choix intentionnel de l'artiste.\n\nDada a sapé les fondements traditionnels de l'objet d'art, ouvrant directement la voie au surréalisme et constituant la source fondamentale de tout l'art conceptuel, de la performance et de l'art contemporain.",
    image: "/movement-images/dadaism.png"
  },
  {
    id: "suprematism",
    name: "Suprématisme",
    start: 1915,
    end: 1930,
    color: "#000000",
    description: "Expression d'une réalité artistique abstraite, géométrique et détachée.",
    fullDescription: "Fondé en Russie par Kazimir Malevitch et dévoilé à Pétrograd lors de la mémorable exposition 0,10 en décembre 1915, le suprématisme proclame la « suprématie de la pure sensibilité plastique » dans les arts visuels. Rejetant catégoriquement toute figuration, toute imitation de la nature et tout utilitarisme social, Malevitch aspire à libérer la peinture du fardeau de la représentation matérielle pour atteindre le « zéro de la forme ».\n\nLe vocabulaire suprématiste est réduit à des formes géométriques pures — carrés, cercles, croix et rectangles — peintes en aplats unicolores sur des fonds blancs infinis évoquant l'espace cosmique. Le Carré noir sur fond blanc s'érige en icône absolue de cette révolution, suivi par des compositions dynamiques où les formes polychromes semblent flotter en lévitation, pour culminer avec le Carré blanc sur fond blanc de 1918, sommet de la dématérialisation mystique.\n\nAccompagné par des artistes comme Olga Rozanova, Ivan Kliun et El Lissitzky, le suprématisme a profondément bouleversé la théorie spatiale moderne, influençant le Bauhaus, le constructivisme et l'art abstrait international.",
    image: "/movement-images/suprematism.png"
  },
  {
    id: "surrealism",
    name: "Surréalisme",
    start: 1924,
    end: 1966,
    color: "#6a4c93",
    description: "Exploration de l'inconscient et des rêves.",
    fullDescription: "Fondé à Paris par le poète André Breton avec la publication du premier Manifeste du surréalisme en 1924, ce mouvement interdisciplinaire puise dans les théories psychanalytiques de Sigmund Freud pour libérer l'esprit humain du carcan de la logique rationaliste et des tabous moraux de la société bourgeoise. Le surréalisme se donne pour projet d'explorer le « fonctionnement réel de la pensée », accordant une place prépondérante aux rêves, au désir, au hasard objectif et aux pulsions de l'inconscient.\n\nLe mouvement se déploie à travers deux grandes approches plastiques : d'une part, l'automatisme psychique et le biomorphisme expérimental de Joan Miró, Max Ernst et André Masson (pratiquant le frottage, le grattage et le dessin automatique) ; d'autre part, la transcription hyperréaliste et méticuleuse d'univers oniriques hallucinatoires chez Salvador Dalí (avec sa méthode paranoïaque-critique), René Magritte et Yves Tanguy, juxtaposant des objets familiers dans des contextes insolites et poétiques.\n\nEngagé politiquement et poétiquement, le surréalisme a révolutionné la littérature, la photographie, le cinéma et les arts visuels, restant l'une des avant-gardes les plus influentes et pérennes du vingtième siècle.",
    image: "/movement-images/surrealism.png"
  },
  {
    id: "group-of-seven",
    name: "Groupe des Sept",
    start: 1920,
    end: 1933,
    color: "#118ab2",
    description: "Création d'une identité artistique canadienne et représentation du territoire.",
    fullDescription: "Formé officiellement à Toronto en 1920 par Lawren Harris, J. E. H. MacDonald, Arthur Lismer, A. Y. Jackson, Frank Johnston, Franklin Carmichael et F. H. Varley — profondément inspirés par l'esprit pionnier de Tom Thomson mort prématurément en 1917 —, le Groupe des Sept est la première avant-garde picturale à forger une identité visuelle nationale canadienne autonome. Rejetant les conventions académiques européennes inadaptées aux immensités nordiques, ces artistes parcourent le Bouclier canadien, Algoma et l'Arctique pour en saisir la force élémentaire brute.\n\nLeur style se caractérise par des touches de peinture vigoureuses, une palette de couleurs riches et éclatantes, des rythmes décoratifs affirmés et une simplification stylisée des formes géologiques et végétales. Les pins tourmentés battus par les vents, les lacs cristallins et les aurores boréales deviennent les symboles d'une nature sauvage indomptée, spirituelle et majestueuse. Le groupe s'associe également à des artistes majeurs comme Emily Carr pour célébrer les territoires de la côte Ouest.\n\nEn élevant le paysage nordique au rang de mythe fondateur, le Groupe des Sept a jeté les bases de la modernité artistique au Canada, marquant un tournant décisif dans l'histoire culturelle du pays.",
    image: "/movement-images/group-of-seven.png"
  },
  {
    id: "abstract-expressionism",
    name: "Expressionnisme abstrait",
    start: 1943,
    end: 1965,
    color: "#d84f4f",
    description: "Abstraction à grande échelle, centrée sur l'acte de la peinture.",
    fullDescription: "Premier grand mouvement artistique d'avant-garde né aux États-Unis, centré sur l'École de New York au lendemain de la Seconde Guerre mondiale, l'expressionnisme abstrait déplace le centre de gravité mondial de l'art de Paris vers New York. Traumatisés par les horreurs de la guerre et la menace nucléaire, les artistes s'émancipent de toute figuration pour faire de la surface de la toile le théâtre d'une exploration existentielle, psychologique et gestuelle sans compromis.\n\nLe mouvement se divise en deux tendances majeures : l'action painting, incarné par Jackson Pollock et sa technique révolutionnaire du dripping projetant le corps entier dans la danse picturale du all-over, aux côtés de la férocité gestuelle de Willem de Kooning et Franz Kline ; et le color field painting, mené par Mark Rothko, Barnett Newman et Clyfford Still, qui déploient d'immenses étendues de couleurs pures vibrantes pour susciter une expérience méditative, émotionnelle et spirituelle du sublime.\n\nMené également par des figures pionnières comme Lee Krasner, Helen Frankenthaler et Joan Mitchell, l'expressionnisme abstrait a redéfini la peinture comme un acte d'énergie pure, monumental et libérateur.",
    image: "/movement-images/abstract-expressionism.png"
  },
  {
    id: "pop-art",
    name: "Pop art",
    start: 1955,
    end: 1975,
    color: "#ff0000",
    description: "Mouvement inspiré de la culture populaire et de la consommation de masse.",
    fullDescription: "Émergé au milieu des années cinquante au Royaume-Uni avec l'Independent Group avant de trouver son épicentre et son retentissement planétaire aux États-Unis au début des années soixante, le Pop art marque une rupture radicale avec l'intériorité et l'angoisse de l'expressionnisme abstrait. Les artistes s'approprient directement les symboles de la société de consommation triomphante, de la publicité de masse, des bandes dessinées, des emballages de supermarché et de la culture des célébrités médiatiques.\n\nEn employant des procédés mécaniques et semi-industriels comme la sérigraphie à la Factory chez Andy Warhol ou la reproduction manuelle méticuleuse de la trame de points Benday des comic books chez Roy Lichtenstein, le Pop art évacue délibérément la touche expressive de l'artiste. Claes Oldenburg métamorphose les objets du quotidien par des sculptures monumentales molles ou géantes, tandis que James Rosenquist réagence les codes du panneau d'affichage publicitaire.\n\nÀ la fois miroir fasciné et critique ironique du capitalisme d'après-guerre, le Pop art a aboli la frontière séculaire entre la « haute culture » muséale et la culture populaire de masse, redéfinissant pour toujours la nature du regard contemporain.",
    image: "/movement-images/pop-art.png"
  },
  {
    id: "brutalism",
    name: "Brutalisme",
    start: 1950,
    end: 1980,
    color: "#5f6872",
    description: "Esthétique brute et architecturale.",
    fullDescription: "Courant architectural et sculptural majeur de l'après-guerre issu des dernières recherches de Le Corbusier et théorisé au Royaume-Uni par Alison et Peter Smithson ainsi que par le critique Reyner Banham, le brutalisme tire son nom de l'utilisation expressive du béton brut (brut de décoffrage). Né dans le contexte de la reconstruction européenne et de l'expansion de l'État-providence, il défend une architecture honnête, monumentale et sociale, refusant tout ornement bourgeois superflu.\n\nL'esthétique brutaliste se caractérise par la mise en valeur intransigeante des matériaux de construction laissés à l'état brut (béton affichant la texture du bois de coffrage, brique, acier), des structures porteuses géométriques audacieuses, des volumes massifs et l'exposition visible des circulations fonctionnelles (cages d'escaliers, gaines techniques). Des ensembles comme la Cité radieuse de Marseille, Habitat 67 à Montréal ou le Barbican Estate à Londres illustrent cette volonté de concevoir des cités utopiques intégrées.\n\nPar sa puissance sculpturale minérale et son ambition civique généreuse, le brutalisme a incarné l'une des expressions les plus audacieuses et intransigeantes du modernisme architectural du vingtième siècle.",
    image: "/movement-images/brutalism.png"
  },
  {
    id: "contemporary-art",
    name: "Art contemporain",
    start: 1945,
    end: 2026,
    color: "#34a0fe",
    description: "Pratiques artistiques modernes et actuelles.",
    fullDescription: "Succédant aux avant-gardes modernes à partir de la seconde moitié du vingtième siècle, l'art contemporain se caractérise par l'éclatement définitif des médiums traditionnels au profit d'une liberté formelle et conceptuelle illimitée. L'art ne se définit plus par la maîtrise académique de la peinture sur chevalet ou de la sculpture sur marbre, mais s'étend à l'installation immersive, la performance corporelle, l'art vidéo, le Land art, l'art numérique et les pratiques relationnelles et participatives.\n\nLes artistes contemporains s'emparent des débats cruciaux de notre époque : la mondialisation, les questions d'identité et de genre, la crise écologique, les mémoires postcoloniales et l'omniprésence des technologies numériques et des flux financiers. De la provocation conceptuelle des Young British Artists (Damien Hirst, Tracey Emin) au street art contestataire de Banksy, des chambres de miroirs infinies de Yayoi Kusama à la puissance néo-expressionniste de Jean-Michel Basquiat, les démarches créatives interrogent sans cesse les limites de l'espace muséal et de l'espace public.\n\nGlobalisé, interactif et pluridisciplinaire, l'art contemporain transforme l'acte esthétique en une expérience critique partagée, invitant chaque spectateur à devenir un interprète actif de la complexité du monde d'aujourd'hui.",
    image: "/movement-images/contemporary-art.png"
  }
];