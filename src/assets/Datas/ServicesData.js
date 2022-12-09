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
        "titre":"Conception des maquettes pour les sites web",
        "contenu": " je conçois les maquettes pour les site web, pour entreprise, association ou site e-commerce. J'utilise figma et canvas.",
        "Exemple": [
            ImKadaBio,
            ImPortfolio
        ]
    },
    {
        "id":"01",
        "titre":"Accompagnement à la redaction de CV professionne et portfolio",
        "contenu": " J'accompagne les étudients à la rédaction de leurs CV (curriculum vitae) et portfolio. Soit avec word, powerpoint ou canvas.",
        "Exemple": [
            ImCV
        ]
    }

]

export default ServicesData