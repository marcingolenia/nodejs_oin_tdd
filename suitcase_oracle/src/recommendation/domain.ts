export const findClothes = (from: Date, to: Date) => {
    const days = (to.getTime() - from.getTime()) / (1000 * 3600 * 24)
    return [`${days} tshirt`, `${days} pair of socks`, `${days} panties`]
}