export default function binomial(n, r) {
    if (typeof n !== "number" || typeof r !== "number") return false;
    var coeff = 1;
    for (var x = n - r + 1; x <= n; x++) coeff *= x;
    for (x = 1; x <= r; x++) coeff /= x;
    return coeff;
}
