const healthLevel = {
  green: {
    status: 'healthy',
  },
  yellow: {
    status: 'wounded',
  },
  red: {
    status: 'critical',
  },
};

export default function whatMyHealth({ name, health }) {
  if (health > 50) {
    return healthLevel.green.status;
  }
  if (health > 15 && health < 50) {
    return healthLevel.yellow.status;
  }
  if (health < 15) {
    return healthLevel.red.status;
  }
}
