export default function getPersonalityType(
  openness: number = 50,
  emotionality: number = 50
) {
  if (openness < 0 || openness > 100 || emotionality < 0 || emotionality > 100) {
    throw new Error("Openness and Emotionality should be between 0 and 100.");
  }

  if (openness > 75 && emotionality > 75) {
    return {
      title: "The Visionary Dreamer",
      description:
        "You are deeply imaginative and emotionally expressive. Your passion for innovation and emotional depth makes you a natural creator and dreamer.",
    };
  } else if (openness > 75 && emotionality > 50) {
    return {
      title: "The Creative Idealist",
      description:
        "Highly creative and thoughtful, you bring new ideas to life while maintaining a nuanced understanding of emotions.",
    };
  } else if (openness > 75 && emotionality <= 50) {
    return {
      title: "The Analytical Innovator",
      description:
        "You thrive on creativity but prefer to channel it logically. Your focus is on intellectual discovery rather than emotional exploration.",
    };
  } else if (openness > 50 && emotionality > 75) {
    return {
      title: "The Passionate Explorer",
      description:
        "You are open to new experiences and deeply emotional, often seeking meaningful connections and creative pursuits.",
    };
  } else if (openness > 50 && emotionality > 50) {
    return {
      title: "The Balanced Creator",
      description:
        "You balance creativity and emotionality, exploring new ideas while remaining grounded in emotional awareness.",
    };
  } else if (openness > 50 && emotionality <= 50) {
    return {
      title: "The Curious Thinker",
      description:
        "You enjoy exploring ideas and concepts thoughtfully while maintaining emotional composure and focus.",
    };
  } else if (openness <= 50 && emotionality > 75) {
    return {
      title: "The Empathetic Realist",
      description:
        "Emotionally expressive yet practical, you bring warmth and stability to your relationships and ideas.",
    };
  } else if (openness <= 50 && emotionality > 50) {
    return {
      title: "The Grounded Optimist",
      description:
        "You are emotionally attuned and practical, valuing stability and meaningful connections in your life.",
    };
  } else if (openness <= 50 && emotionality <= 50) {
    return {
      title: "The Rational Realist",
      description:
        "You are grounded and logical, focusing on stability and practicality in your decisions and ideas.",
    };
  } else if (openness <= 25 && emotionality <= 25) {
    return {
      title: "The Pragmatic Observer",
      description:
        "You prefer tradition and avoid unnecessary risks. Your logical mindset helps you remain focused on achieving tangible results.",
    };
  } else if (openness > 25 && openness <= 50 && emotionality <= 25) {
    return {
      title: "The Cautious Explorer",
      description:
        "You have a reserved curiosity, preferring to explore ideas carefully while maintaining a grounded emotional outlook.",
    };
  } else if (openness <= 25 && emotionality > 25 && emotionality <= 50) {
    return {
      title: "The Reserved Empath",
      description:
        "Emotionally aware yet practical, you approach relationships and ideas cautiously but with care and thoughtfulness.",
    };
  } else {
    return {
      title: "The Steady Realist",
      description:
        "Practical and emotionally balanced, you are grounded and focused on stability and tradition.",
    };
  }
}