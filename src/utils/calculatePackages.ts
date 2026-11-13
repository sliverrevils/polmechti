type PriceKg = Record<number, number>;

interface PackageResult {
    weight: number;
    pricePerKg: number;
    packagePrice: number;
    count: number;
}

interface CalculationPackagesResult {
    requiredWeight: number;
    totalWeight: number;
    excessWeight: number;
    totalPrice: number;
    packages: PackageResult[];
}

export function calculatePackages(
    requiredWeight: number,
    priceKg: PriceKg,
): CalculationPackagesResult {
    if (!Number.isFinite(requiredWeight) || requiredWeight <= 0) {
        throw new Error("Вес должен быть больше 0");
    }

    const options = Object.entries(priceKg)
        .map(([weight, pricePerKg]) => ({
            weight: Number(weight),
            pricePerKg,
        }))
        .filter(
            (item) =>
                Number.isFinite(item.weight) &&
                item.weight > 0 &&
                Number.isFinite(item.pricePerKg) &&
                item.pricePerKg >= 0,
        )
        .sort((a, b) => b.weight - a.weight);

    if (!options.length) {
        throw new Error("Не указаны доступные упаковки");
    }

    let remainingWeight = requiredWeight;
    const packages: PackageResult[] = [];

    for (const option of options) {
        const count = Math.floor(remainingWeight / option.weight);

        if (count > 0) {
            packages.push({
                weight: option.weight,
                pricePerKg: option.pricePerKg,
                packagePrice: option.weight * option.pricePerKg,
                count,
            });

            remainingWeight = Number((remainingWeight - count * option.weight).toFixed(6));
        }
    }

    // Если остался вес, докупаем одну упаковку минимального размера
    if (remainingWeight > 0) {
        const smallest = options[options.length - 1];

        const existing = packages.find((item) => item.weight === smallest.weight);

        if (existing) {
            existing.count += 1;
        } else {
            packages.push({
                weight: smallest.weight,
                pricePerKg: smallest.pricePerKg,
                packagePrice: smallest.weight * smallest.pricePerKg,
                count: 1,
            });
        }
    }

    const totalWeight = packages.reduce((sum, item) => sum + item.weight * item.count, 0);

    const totalPrice = packages.reduce((sum, item) => sum + item.packagePrice * item.count, 0);

    return {
        requiredWeight,
        totalWeight,
        excessWeight: Number((totalWeight - requiredWeight).toFixed(6)),
        totalPrice,
        packages,
    };
}
