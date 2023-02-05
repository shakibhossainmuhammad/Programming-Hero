function centiToMeter(centi) {
  const meter = centi * 0.01;
  return meter;
}

const centermeter = 100;
const meter = centiToMeter(centermeter);
console.log(meter);
