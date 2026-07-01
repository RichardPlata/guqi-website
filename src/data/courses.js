import obesidadImg from "../assets/images/Obesidad-Image.webp";
import prostataImg from "../assets/images/Prostata-Image.jpg";

const courses = [
  {
    title: "Ingeniería de la Obesidad",
    image: obesidadImg,
    duration: "Curso especializado",

    text:
      "Formación enfocada en comprender la obesidad desde una perspectiva integrativa.",

    description:
      "Este programa profundiza en el origen físico, emocional y energético de la obesidad desde una visión integrativa, proporcionando herramientas de evaluación y tratamiento para profesionales de la salud.",

    audience: [
      "Profesionales de la salud",
      "Terapeutas",
      "Estudiantes",
      "Personas interesadas en medicina integrativa",
    ],

    topics: [
      "Biomagnetismo",
      "Inflamación",
      "Factores emocionales",
      "Evaluación energética",
      "Protocolos terapéuticos",
    ],
  },

  {
    title: "Inflamación de la Próstata",

    image: prostataImg,

    duration: "Curso especializado",

    text:
      "Comprende la relación entre inflamación, emociones y medicina integrativa.",

    description:
      "Curso enfocado en comprender los procesos inflamatorios prostáticos desde una perspectiva física, emocional y energética para complementar el abordaje terapéutico.",

    audience: [
      "Terapeutas",
      "Profesionales de la salud",
      "Estudiantes",
    ],

    topics: [
      "Inflamación",
      "Desvalorización",
      "Humillación",
      "Biomagnetismo",
      "Casos clínicos",
    ],
  },
];

export default courses;