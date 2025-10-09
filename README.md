# 💼 Mi Portfolio Personal

Un portafolio web personal desarrollado con tecnologías modernas para mostrar mi experiencia, habilidades y proyectos de manera profesional y atractiva.

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript que añade tipado estático
- **Tailwind CSS** - Framework de CSS para diseño rápido y responsive
- **Vite** - Build tool rápido y moderno

## ✨ Características

- 🎨 Diseño moderno y responsive
- 🌙 Modo oscuro/claro
- 📱 Optimizado para dispositivos móviles
- ⚡ Carga rápida y optimizada
- 🔍 SEO friendly
- 📧 Formulario de contacto funcional
- 🎯 Secciones organizadas (Sobre mí, Proyectos, Habilidades, Contacto)

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-portfolio.git
   cd tu-portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta el proyecto en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Construye para producción**
   ```bash
   npm run build
   # o
   yarn build
   ```

5. **Previsualiza la build de producción**
   ```bash
   npm run preview
   # o
   yarn preview
   ```

## 📁 Estructura del Proyecto

```
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utilidades y helpers
│   ├── styles/           # Archivos de estilos
│   ├── assets/           # Imágenes y recursos
│   └── types/            # Definiciones de TypeScript
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Personalización

### Colores y Tema
Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Tus colores personalizados
        }
      }
    }
  }
}
```

### Contenido
- Edita la información personal en `src/data/personal.ts`
- Actualiza los proyectos en `src/data/projects.ts`
- Modifica las habilidades en `src/data/skills.ts`

## 🌐 Despliegue

Este proyecto está configurado para ser desplegado fácilmente en:

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Arrastra y suelta la carpeta `dist` después de hacer build
- **GitHub Pages**: Usa GitHub Actions para despliegue automático

### Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Configura el output directory: `dist`
4. Despliega

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run type-check` - Verifica los tipos de TypeScript

## 📞 Contacto

- **Email**: stivensAA04@outlook.com
- **LinkedIn**: [Tu Perfil](https://www.linkedin.com/in/stevens-aliaga-arauco-05bb39226/)
- **GitHub**: [Tu GitHub](https://github.com/ISAASPWDI)
- **Portfolio**: [Tu Portfolio](https://myportfolio-eight-lake-84.vercel.app/)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
