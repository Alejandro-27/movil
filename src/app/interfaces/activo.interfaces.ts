export interface Activo {
  id: string;
  name: string;
  symbol: string;
  current_price: number; // precio actual en USD
  price_change_percentage_24h: number; // porcentaje de cambio
  image: string; // URL de la imagen del activo
  isFavorite?: boolean;
}