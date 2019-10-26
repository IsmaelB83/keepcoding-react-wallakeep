# Practica del módulo de fundamentos react
Wallakeep - React Frontend for the Nodepop API (https://github.com/IsmaelB83/keepcoding-backend-node)

### Contents
- [Introducción](#INTRODUCCION)
- [Instalación y ejecución](#INSTALACIÓN-Y-EJECUCIÓN)
  - [Descarga](#Descarga)
  - [Instalación](#Inicialización-de-base-de-datos)
  - [Ejecución](#Ejecución)
  - [Configuración](#Configuración)


### INTRODUCCION

Este proyecto proporciona un frontend en react para trabajar sobre la API de Nodepop (https://github.com/IsmaelB83/keepcoding-backend-node). Se puede utilizar como
punto de partida (muy básico) de una tienda online de anuncios (tipo wallapop).

En este documento se detalla el modo de utilización del frontal en REACT. Para documentación detallada de la API puedes utilizar el repo siguiente https://github.com/IsmaelB83/keepcoding-backend-node

### INSTALACIÓN Y EJECUCIÓN

## Descarga

Para descargar este repositorio:
```
\downloads\git clone https://github.com/IsmaelB83/keepcoding-react-wallakeep   (o bien con ssh)
\downloads\git clone git@github.com:IsmaelB83/keepcoding-react-wallakeep.git
```

**NOTA IMPORTANTE**: Adicionalmente recuerda descargar el repo de la API, y arrancar la aplicación antes de intentar arrancar el frontal react. En caso contrario la aplicación REACT no podrá conectar a la API.

## Instalación de modulos

Utiliza npm install para instalar todas las dependencias de la aplicación
```
\downloads\keepcoding-react-wallakeep\npm install
```

## Ejecución

Para arrancar la aplicación react utilizaremos npm start (esta aplicación utiliza create-react-app):
```
\downloads\keepcoding-react-wallakeep\npm start
```

## Configuración

En el fichero ubicado en /src/config.js puedes configurar varios parámetros importantes para la aplicación, como son la **url de la API de Nodepop** a la que va a puntar el frontal, la url base donde sirve esa API las **imagenes**, 
y el **número máximo de anuncios** que queremos ver en el grid de anuncios del home (por pagina). Todo esto debería ser configurable a nivel de usuario en una futura versión.
```js
const config = {
    API_URL: 'http://localhost:3001/apiv1',
    API_IMAGES: 'http://localhost:3001/',
    MAX_ADVERTS_GRID: 20
}
```