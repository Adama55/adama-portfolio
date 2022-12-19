import Affiche from '../imageService/affiche.png'
import CarteVisite from '../imageService/carteVisite.png'
import Logotype from '../imageService/logotype.png'
import ImKadaBio from '../imageService/imKadaBio.PNG'
import ImCV from '../imageService/imCV.png'
import ImPortfolio from '../imageService/imPortfolio.PNG'
 
const ServicesData =
[
    {
        "id":"01",
        "titre":"Développement des sites web",
        "contenu": " Je conçois les maquettes des sites web, pour entreprise, association ou site e-commerce. J'utilise figma et canvas. Pour le développement, je les fais en javascript ou avec le framework React js ",
        "Exemple": [
            ImKadaBio,
            ImPortfolio
        ]
    },
    {
        
        "id":"01",
        "titre":"Conception logo, affiche et carte de visite",
        "contenu": "Je conçois des logos, affiches publicitaires, cartes de visites et cartes d'invitations. J'accompagne mes clients à choisir leurs logos, à structurer leurs pages réseaux sociaux ou des techniques pour attirer plus de clients.",
        "Exemple": [
             Logotype,
             Affiche,
             CarteVisite
        ]
    },
    {
        "id":"01",
        "titre":"Accompagnement à la rédaction de CV professionnel et portfolio",
        "contenu": " J'accompagne les étudiants à la rédaction de leurs CV (curriculum vitae) et portfolio. Soit avec word, powerpoint ou canvas.",
        "Exemple": [
            ImCV
        ]
    }
 
]
 
export default ServicesData
 