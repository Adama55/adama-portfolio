
import ImManip from '../imageExperience/imManip.png'
import ImCtcase from '../imageExperience/imCtcase.png'
import ImEnie from '../imageExperience/imEnie.png'

const ExperiencesData = [
    {
        "id" : "101",
        "poste": "Ingénieur électronique",
        "entreprise": "Startup Ctcase",
        "date_lieu": "Drancy, France | Avril - Novembre 2021",
        "contenu":[
                "⬜ Mission:",
                "Membre fondateur,",
                "Chargé d’effectuer l’inventaire des matériels et passer la commande, mise en place des tests et les soudures électroniques.",
                "A l’issue de cette expérience je suis capable d’établir le cahier de charge pour un projet de taille moyenne représentant les fonctionnalités et évaluer le coup budgetaire.",
                "  ",
                " ⬜ Environnements techniques : ",
                "Tinkercad",
                "Proteus"
            ],
        "ulisimage": ImCtcase
    },
    {
        "id" : "110",
        "poste": "Architecte des Systèmes Reconfigurables,Stage",
        "entreprise": "Laboratoire ETIS",
        "date_lieu": "Cergy, France | Avril - Septembre 2019",
        "contenu":[
            "⬜ Contexte : ",
            "La tendance actuelle dans la conception des systèmes sur puces, vise à intégrer des milliers d’unités de calcul sur une même puce, afin d’augmenter la performance du système. Ces systèmes multi-cores souffrent d’énormes problèmes, la latence de la communication, la mauvaise exploitation des ressources disponibles,la dissipation thermique etc.", 
            "Face à ces limites, le laboratoire ETIS en collaboration avec d’autres laboratoires, LIP6, IETR et l’entreprise NXP ont mené le projet Winocod(Wired RF Network on Chip recongurable on Demand) en 2012 nancé par ANR (Agence Nationale de la Recherche) pour montrer la nécessité d’utilisation de la communication RF au sein des réseaux sur puce en anglais (network on chip (NoC)).",
            "C’est dans ce contexte que l’équipe CELL du Laboratoire ETIS a développé un prototype démonstrateur de l’architecture Winocod pour mettre en évidence les caractères novateurs de la communication RF au sein des réseaux sur puce. Ce démonstrateur Winocod est composé de trois cartes FPGA, mon sujet de ce stage portais précisement sur les problèmes de synchronisation entre ces cartes FPGAs utilisées dans le démonstrateur de WiNoCod.",
            "  ",
            "⬜ Objectif :",
            "Ma mission était d'étudier le prototype, proposer une méthode de résolution et valider avec des testes",
            "  ",
            "⬜ Tâches effectuées :",
            "Rédaction de l'Etat de l'art lié aux problèmes d'interconnexion",
            "Rédaction de l'état de l'art lié aux problèmes de synchronisations",
            "Identification de quelques sources du problème avec après avoir étudié le prototype",
            "Proposition de méthode et procédure",
            "Développement du code en vhdl",
            "Quelque testes effectués en simulation et implémentation directe sur les cartes FPGA.",
            "  ",
            "⬜ Environnements techniques :",
            "Développement FPGA",
            "Logiciel Xilinx ISE",
            "Analyzer logic",
            "Data sheet XIlinix Virtex 06 ML605 (FPGA), FMC110et FMC407 (cartes d'acquisition RF)",
            "Matlab et programmation C"
        ],
        "ulisimage": ImManip
    },
    {
        "id" : "111",
        "poste": "Test et Validation Electronique, Stage",
        "entreprise": "Entreprise ENIE",
        "date_lieu": " Sidi bel Abbes, Algérie| Mars - Avril 2017",
        "contenu":[
            "⬜ Contexte :",
            "Le stage rentre dans cadre de découverte proposée par l'université aux étudiants mais pas obligatoire.",
            "  ",
            "⬜ Objectif :",
            "Découvrir le milieu professionnel, mettre en pratique les acquis théoriques",
            "  ",
            "⬜ Tâches effectuées :",
            "Participer à l'intégration des composants électroniques",
            "Participer aux teste et validation des téléviseurs",
            "Assister aux montages des panneaux solaires",
            "Assister à la fabrication des machines à laver",
            "  ",
            "⬜ Environnements techniques :",
            "Outils de simulation des schémas électronique (Multisim)",
            "Conception des circuits intégrés (Proteus)."
        ],
        "ulisimage":ImEnie
    }
]

export default ExperiencesData