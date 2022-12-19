import ImDevWeb from '../imageFormation/imDevWeb.png'
import ImElectro from '../imageFormation/imElectro.png'
import ImElectronique from '../imageFormation/imElectronique.png'
 
const FormationData =
[
    {
        "id" : "001",
        "titre": " Développeur web",
        "ecole": "Chez Openclassrooms",
        "date_lieu": "Paris, France | Mai - Novembre 2022",
        "contenu": [
            "Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS ;",
            "Ajouter du contenu audio et vidéo en HTML5 ;",
            "Animer les pages web avec CSS3 ;",
            "Appliquer les standards du web et les normes en vigueur ;",
            "Construire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette) ;",
            "Améliorer le référencement naturel en utilisant les balises selon leur sémantique ;",
            "Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript ;",
            "Se connecter à un service web pour exploiter des données tierces (API) ;",
            "Gérer les comptes utilisateurs ;",
            "Concevoir un site maintenable grâce à la gestion des erreurs et exceptions ;",
            "Créer, gérer et afficher le contenu d’une base de données."
        ],
        "ulisimage":ImDevWeb
    },
    {
        "id" : "010",
        "titre": "Informatique et ingénierie des systèmes complexes",
        "ecole": "CY Cergy Paris Université",
        "date_lieu": "Cergy, France | Septembre 2018 - Septembre 2019",
        "contenu":[
            "Architecture des Systèmes reconfigurables",
            "Méthodes et conception des systèmes reconfigurables",
            "Traitement numériques des images",
            "Traitement d’information et systèmes temps réel",
            "Systèmes électroniques implantables",
            "Intelligence artificielle",
            "Communication embarquées",
            "Initiation à la recherche scientifique"
        ],
        "ulisimage":ImElectro
    },
    {
        "id" : "011",
        "titre": "Licence Électronique",
        "ecole": "Université Djillali Liabes",
        "date_lieu": " Sidi Bel Abbès, Algérie | Septembre 2016 - Juin 2017",
        "contenu":[
                "Conception des systèmes à microprocesseurs",
                "Electronique numériques & analogiques",
                "Systèmes asservis",
                "Capteurs intelligents",
                "Réseaux informatiques"
        ],
        "ulisimage": ImElectronique
    }
]
 
export default FormationData

