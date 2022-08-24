# Patrones de Diseño

Ejercicio de ejemplo para la charla de patrones de diseño

## Environment setup
```
npm install
```

## Start app

```
npm start
```

## Endpoint para consultar productos sugeridos

http://localhost:3005/suggested-products/{productId}/{siteId} por GET

### Ejemplo

curl --location --request GET 'http://localhost:3005/suggested-products/1/MLA'

## Endpoint para modificar la estrategia de solución

http://localhost:3005/configure por PUT

Request body

```
{
  "strategy": {strategy}
}
```

Donde **{strategy}** puede ser: first, second, third o arrow-functions

### Ejemplo

curl --location --request PUT 'http://localhost:3005/configure' \
--header 'Content-Type: application/json' \
--data-raw '{
    "strategy": "first"
}'
