export function priceToCurrency(price: number, currency: string = 'BRL'): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
    }).format((Number(price) / 100))
}