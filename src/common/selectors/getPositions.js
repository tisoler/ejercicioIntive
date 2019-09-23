
export default function getPositions(data) {
  return [...new Set(data.map((x) => x.position))]
    .sort().map((p) => ({ id: p, name: p }));
}
