# 🎨 GUÍA DE DISEÑO - IA TRENDS BLOG

## 📐 PALETA DE COLORES COMPLETA

### 🔵 PRIMARY (Azul Tecnología)
```
50:  #f0f9ff  ███ Muy claro
100: #e0f2fe  ███ Claro
200: #bae6fd  ███ Intermedio claro
300: #7dd3fc  ███ Medio claro
400: #38bdf8  ███ Medio
500: #0ea5e9  ███ BASE - Azul principal
600: #0284c7  ███ Oscuro
700: #0369a1  ███ Más oscuro
800: #075985  ███ Muy oscuro
900: #0c4a6e  ███ Casi negro
```
**USO**: Links, botones principales, iconos, badges

---

### 🟣 SECONDARY (Púrpura IA/ML)
```
50:  #faf5ff  ███ Muy claro
100: #f3e8ff  ███ Claro
200: #e9d5ff  ███ Intermedio claro
300: #d8b4fe  ███ Medio claro
400: #c084fc  ███ Medio
500: #a855f7  ███ BASE - Púrpura IA
600: #9333ea  ███ Oscuro
700: #7e22ce  ███ Más oscuro
800: #6b21a8  ███ Muy oscuro
900: #581c87  ███ Casi negro
```
**USO**: Acentos, gradientes, efectos glow, categorías

---

### 🟢 ACCENT (Verde Éxito)
```
50:  #ecfdf5  ███ Muy claro
100: #d1fae5  ███ Claro
200: #a7f3d0  ███ Intermedio claro
300: #6ee7b7  ███ Medio claro
400: #34d399  ███ Medio
500: #10b981  ███ BASE - Verde éxito
600: #059669  ███ Oscuro
700: #047857  ███ Más oscuro
800: #065f46  ███ Muy oscuro
900: #064e3b  ███ Casi negro
```
**USO**: Botones de éxito, badges positivos, estados activos

---

### ⚪ NEUTRAL (Grises)
```
50:  #fafafa  ███ Casi blanco
100: #f4f4f5  ███ Fondo claro
200: #e4e4e7  ███ Bordes suaves
300: #d4d4d8  ███ Bordes
400: #a1a1aa  ███ Texto deshabilitado
500: #71717a  ███ Texto secundario
600: #52525b  ███ Texto medio
700: #3f3f46  ███ Texto oscuro
800: #27272a  ███ Texto principal oscuro
900: #18181b  ███ BASE - Texto principal
950: #09090b  ███ Negro puro
```
**USO**: Texto, fondos, bordes, sombras

---

## 🌈 GRADIENTES SIGNATURE

### Gradiente Tech (Botones CTA)
```css
background: linear-gradient(to right, #0ea5e9, #a855f7);
```
**Colores**: Primary-500 → Secondary-500  
**USO**: Botones principales, CTAs importantes  
**Clase Tailwind**: `bg-gradient-tech`

---

### Gradiente Hero
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```
**USO**: Hero section, fondos destacados  
**Clase Tailwind**: `bg-gradient-hero`

---

### Gradiente IA
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
**USO**: Fondos alternativos, secciones especiales  
**Clase Tailwind**: `bg-gradient-ai`

---

### Gradiente Dark
```css
background: linear-gradient(to bottom, #09090b, #18181b);
```
**USO**: Footer, secciones oscuras  
**Clase Tailwind**: `bg-gradient-dark`

---

## 🎭 EFECTOS Y SOMBRAS

### Sombras de Tarjetas
```css
/* Normal */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
Clase: shadow-card

/* Hover */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
Clase: shadow-card-hover
```

### Efecto Glow
```css
/* Púrpura */
box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
Clase: shadow-glow

/* Azul */
box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
Clase: shadow-glow-blue
```

### Glassmorphism
```css
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(12px);
Clase: shadow-glass
```

---

## 🔤 TIPOGRAFÍA

### Fuentes
```css
/* Display (Headings) */
font-family: 'Space Grotesk', sans-serif;
Pesos: 400, 500, 600, 700

/* Body (Texto general) */
font-family: 'Inter', system-ui, sans-serif;
Pesos: 300, 400, 500, 600, 700, 800, 900

/* Mono (Código) */
font-family: 'JetBrains Mono', monospace;
Pesos: 400, 500, 600
```

### Escalas de Texto
```
text-xs:    0.75rem  (12px)
text-sm:    0.875rem (14px)
text-base:  1rem     (16px)
text-lg:    1.125rem (18px)
text-xl:    1.25rem  (20px)
text-2xl:   1.5rem   (24px)
text-3xl:   1.875rem (30px)
text-4xl:   2.25rem  (36px)
text-5xl:   3rem     (48px)
text-6xl:   3.75rem  (60px)
text-7xl:   4.5rem   (72px)
```

---

## ✨ ANIMACIONES

### Fade In
```css
@keyframes fade-in {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
Clase: animate-fade-in
Duración: 0.5s
```

### Slide In
```css
@keyframes slide-in {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
Clase: animate-slide-in
Duración: 0.3s
```

### Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
  50%      { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
}
Clase: animate-pulse-glow
Duración: 2s
```

### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-10px); }
}
Clase: animate-float
Duración: 3s
```

---

## 📦 COMPONENTES REUTILIZABLES

### Badge
```jsx
<span className="badge">
  Categoría
</span>
```
**Estilos**: `px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800`

---

### Botón Premium
```jsx
<button className="btn-premium">
  Texto
</button>
```
**Estilos**: Gradiente tech + sombra glow + hover scale

---

### Card Glass
```jsx
<div className="card-glass">
  Contenido
</div>
```
**Estilos**: Fondo blanco/80 + blur + borde blanco/20

---

### Text Gradient
```jsx
<h1 className="text-gradient">
  Título
</h1>
```
**Estilos**: Gradiente primary → secondary en texto

---

## 📱 BREAKPOINTS RESPONSIVE

```javascript
xs:  max-width: 495px   (Móviles pequeños)
sm:  640px              (Móviles)
md:  768px              (Tablets)
lg:  1024px             (Laptops)
xl:  1280px             (Desktops)
2xl: 1536px             (Pantallas grandes)
```

### Estrategia Mobile-First
```jsx
// Base: móvil
className="text-sm"

// Tablet y superior
className="text-sm md:text-base"

// Desktop
className="text-sm md:text-base lg:text-lg"
```

---

## 🎯 ESPACIADO CONSISTENTE

### Spacing Scale
```
0:    0px
0.5:  2px
1:    4px
2:    8px
3:    12px
4:    16px
5:    20px
6:    24px
8:    32px
10:   40px
12:   48px
16:   64px
20:   80px
24:   96px
32:   128px
```

### Uso Común
```jsx
// Padding componentes
p-6          // 24px - Cards
p-8          // 32px - Secciones

// Margin entre elementos
mb-4         // 16px - Pequeño
mb-6         // 24px - Medio
mb-8         // 32px - Grande

// Gap en grids
gap-4        // 16px - Compacto
gap-8        // 32px - Estándar
```

---

## 🖼️ IMÁGENES Y MEDIOS

### Aspect Ratios Recomendados
```
Featured Article: 16:9  (800x450px)
Article Card:     4:3   (800x600px)
Avatar:           1:1   (150x150px)
Hero Background:  21:9  (2560x1080px)
```

### Optimización
- Formato: WebP (fallback JPG)
- Tamaño máximo: 500KB por imagen
- Lazy loading: `loading="lazy"`
- Alt text: Siempre presente y descriptivo

---

## ♿ ACCESIBILIDAD

### Contraste Mínimo (WCAG AA)
```
Texto normal:    4.5:1
Texto grande:    3:1
Elementos UI:    3:1
```

### Focus Visible
```css
*:focus-visible {
  outline: none;
  ring: 2px solid primary-500;
  ring-offset: 2px;
}
```

### ARIA Labels
```jsx
// Botones sin texto
<button aria-label="Abrir menú">
  <MenuIcon />
</button>

// Links
<Link aria-label="Ir a página de inicio">
  <Logo />
</Link>

// Imágenes decorativas
<img alt="" role="presentation" />
```

---

## 🎨 EJEMPLOS DE USO

### Hero Section
```jsx
<section className="bg-gradient-hero py-20">
  <h1 className="text-6xl font-display font-bold text-white">
    Título
  </h1>
  <p className="text-lg text-white/90">
    Descripción
  </p>
  <button className="btn-premium">
    CTA
  </button>
</section>
```

### Article Card
```jsx
<article className="bg-white rounded-xl shadow-card hover:shadow-card-hover">
  <img className="rounded-t-xl" />
  <div className="p-6">
    <span className="badge">Categoría</span>
    <h3 className="text-xl font-display font-bold">Título</h3>
    <p className="text-neutral-600">Excerpt</p>
  </div>
</article>
```

### Newsletter Section
```jsx
<div className="bg-gradient-tech rounded-2xl p-8 text-white">
  <h3 className="text-2xl font-display font-bold">Título</h3>
  <form>
    <input className="bg-white/10 backdrop-blur-sm" />
    <button className="btn-premium">Suscribirse</button>
  </form>
</div>
```

---

## 🚀 MEJORES PRÁCTICAS

### ✅ DO (Hacer)
- Usar clases de Tailwind (no CSS inline)
- Mantener jerarquía visual clara
- Espaciado consistente (múltiplos de 4)
- Animaciones sutiles (< 500ms)
- Contraste AAA en texto principal
- Focus visible en todos los interactivos

### ❌ DON'T (No hacer)
- Colores fuera de la paleta
- Fuentes fuera del sistema
- Animaciones mayores a 1s
- Más de 3 colores por componente
- Sombras muy oscuras
- Hover effects bruscos

---

**¡Diseño listo para impresionar! 🎨✨**
