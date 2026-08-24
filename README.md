# HC-Encrypt 🛡️ | Client-Side Cryptographic Suite

<p align="center">
  <img src="./src/assets/hcencript.png" alt="HC-Encrypt Logo" width="120" />
</p>

<p align="center">
  <b>Cyber-Luxe Glassmorphic Web Application for End-to-End Client-Side Message Encryption & Decryption</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-5.4.4-646CFF?style=flat&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Security-100%25%20Local%20Client--Side-00d857?style=flat" alt="Local Security" />
  <img src="https://img.shields.io/badge/i18n-ES%20%7C%20EN-6366F1?style=flat" alt="i18n" />
</p>

---

## 🌐 Language Navigation / Navegación por Idioma
- [Español (Spanish)](#-español)
- [English](#-english)

---

## 🇪🇸 Español

### 📌 Descripción General
**HC-Encrypt** es una aplicación web moderna diseñada con una estética **Cyber-Luxe Glassmorphism** para cifrar y descifrar mensajes de texto directamente en el navegador. 

Todos los procesos criptográficos se ejecutan **100% en el cliente (localmente)**. Ninguna clave, texto plano o resultado cifrado se envía a servidores externos ni viaja por la red, garantizando total privacidad.

---

### ✨ Características Principales
- **🛡️ Cifrado Local End-to-End**: Operaciones 100% del lado del cliente sin backend ni llamadas de red.
- **🎨 Interfaz Cyber-Luxe**: Diseño con desenfoque de cristal (glassmorphism), gradientes ambientales oscuros y el color verde oficial de la marca (`#00d857`).
- **🔑 Gestión de Clave Secreta**:
  - Visor con botón de ojo para ocultar/mostrar la contraseña.
  - Generador de claves aleatorias criptográficas de 16 caracteres (botón de dado).
  - Medidor visual del nivel de seguridad de clave (4 niveles).
  - Botón para copiar la clave al portapapeles con confirmación visual.
- **📝 Experiencia de Entrada**:
  - Botón "Pegar portapapeles".
  - Contador de caracteres en tiempo real (hasta 5000 caracteres).
  - Botón de limpiar texto con animación.
- **⚡ Motor Criptográfico Optimizado**:
  - Algoritmo de sustitución posicional con delimitadores dinámicos.
  - Búsqueda en tiempo constante $O(1)$ para descifrado ultra rápido.
- **🔁 Flujo Continuo**: Botón "Usar como Entrada" para invertir inmediatamente el texto resultado hacia el área de mensaje.
- **🌐 Multilingüe (i18n)**: Selector dinámico entre Español e Inglés.

---

### 💡 Recomendaciones de Uso
1. **Compartir la clave de forma segura**: El destinatario del mensaje debe tener **exactamente la misma clave secreta** para poder descifrar el contenido.
2. **Canales separados**: Es una buena práctica de seguridad enviar la clave secreta por un canal distinto al del texto cifrado (por ejemplo, la clave por una app de mensajería cifrada y el texto por correo).
3. **Generación aleatoria**: Se recomienda utilizar el botón de dado para generar claves complejas de 16 caracteres cuando se necesite máxima protección.
4. **Casos de uso ideales**: Notas personales privadas, mensajería privada usuario a usuario, juegos de acertijos/escape rooms digitales, u ofuscación de texto plano en sitios web.

---

### 🚀 Instalación y Ejecución Local

#### Prerrequisitos
- **Node.js**: `v18.0.0` o superior
- **npm**: `v9.0.0` o superior

#### Pasos de instalación
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/hrendonl/encrypt-message.git
   cd encrypt-message
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:5173/`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos compilados se generarán en la carpeta `dist/`.

5. **Previsualizar compilación de producción:**
   ```bash
   npm run preview
   ```

6. **Verificar calidad de código (Linter):**
   ```bash
   npm run lint
   ```

---

## 🇬🇧 English

### 📌 Overview
**HC-Encrypt** is a modern web application built with a **Cyber-Luxe Glassmorphism** design system to encrypt and decrypt text messages directly in your browser.

All cryptographic processes run **100% on the client side (locally)**. No keys, plain text, or cipher results are ever transmitted to external servers or network APIs, ensuring total privacy.

---

### ✨ Key Features
- **🛡️ 100% Client-Side Encryption**: Zero network calls or backend processing.
- **🎨 Cyber-Luxe UI**: Dark theme glassmorphism with ambient glow and official logo green branding (`#00d857`).
- **🔑 Secret Key Suite**:
  - Eye visibility toggle button to show or hide the password.
  - 16-character cryptographically random key generator (dice action).
  - Live 4-tier visual key strength meter.
  - 1-Click secret key copy action with visual checkmark feedback.
- **📝 Input Text Experience**:
  - Quick "Paste from clipboard" action.
  - Monospace character counter (up to 5000 characters).
  - Smooth clear text button with rotation animation.
- **⚡ Optimized Cryptography Engine**:
  - Positional substitution algorithm with dynamic delimiters.
  - Constant time $O(1)$ character lookup for instant decryption.
- **🔁 Seamless Workflow**: "Use as Input" button to swap cipher output back into input text for quick round-trip testing.
- **🌐 Internationalization (i18n)**: Instant switcher between English and Spanish.

---

### 💡 Usage Guidelines
1. **Share the Key Securely**: The recipient must use the **exact same secret key** to decrypt your message.
2. **Use Separate Channels**: For best privacy practices, send the secret key over a different communication channel than the encrypted cipher text.
3. **Random Key Generation**: Use the dice button to generate high-entropy 16-character keys for strong protection.
4. **Ideal Use Cases**: Private personal notes, client-to-client secret messaging, CTF puzzles/escape rooms, or client-side text obfuscation.

---

### 🚀 Getting Started & Local Setup

#### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

#### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/hrendonl/encrypt-message.git
   cd encrypt-message
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Production-ready files will be generated in `dist/`.

5. **Preview production build:**
   ```bash
   npm run preview
   ```

6. **Run Linter Check:**
   ```bash
   npm run lint
   ```

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Glassmorphism, Responsive Grid)
- **Internationalization**: `i18next` & `react-i18next`
- **Form Management**: `react-hook-form`
- **Icons**: Bootstrap Icons
- **Typography**: Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`)

---

## 📄 License
Licensed under the [MIT License](LICENSE).
