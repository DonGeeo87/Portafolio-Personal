/**
 * Helper para obtener rutas de imágenes que funcionan en desarrollo y producción
 */
export const getImagePath = (path: string): string => {
  // En Vite, import.meta.env.BASE_URL ya incluye el base path configurado
  const baseUrl = import.meta.env.BASE_URL
  // Remover el slash inicial de la ruta si existe
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Combinar base URL con la ruta
  return `${baseUrl}${cleanPath}`
}
