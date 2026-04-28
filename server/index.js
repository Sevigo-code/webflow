import express from 'express'
import cors from 'cors'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Base de datos SQLite - se crea sola si no existe
const db = new Database(join(__dirname, 'tienda.db'))

// Crear tablas y llenar datos iniciales
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    rating REAL NOT NULL,
    badge TEXT,
    icon TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    date TEXT NOT NULL,
    read_time TEXT NOT NULL,
    category TEXT NOT NULL,
    color TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`)

// Solo insertar datos si la tabla está vacía
const productCount = db.prepare('SELECT COUNT(*) as count FROM products').get()
if (productCount.count === 0) {
  const insertProduct = db.prepare(
    'INSERT INTO products (name, category, price, rating, badge, icon) VALUES (?, ?, ?, ?, ?, ?)'
  )
  insertProduct.run('RTX 4090 Suprim', 'Gráficas', 1799, 4.9, 'Top Seller', 'Cpu')
  insertProduct.run('Corsair K95 Platinum', 'Periféricos', 229, 4.8, 'Nuevo', 'Keyboard')
  insertProduct.run('Audífonos HyperX Cloud', 'Audio', 149, 4.7, null, 'Headphones')
  insertProduct.run('Monitor ASUS 240Hz', 'Monitores', 599, 4.6, null, 'Monitor')
  insertProduct.run('Mouse Logitech G Pro X', 'Periféricos', 89, 4.8, 'Oferta', 'Mouse')
  insertProduct.run('SSD Samsung 990 Pro 2TB', 'Almacenamiento', 179, 4.9, 'Nuevo', 'HardDrive')
}

const newsCount = db.prepare('SELECT COUNT(*) as count FROM news').get()
if (newsCount.count === 0) {
  const insertNews = db.prepare(
    'INSERT INTO news (title, excerpt, date, read_time, category, color) VALUES (?, ?, ?, ?, ?, ?)'
  )
  insertNews.run(
    'RTX 50 Anunciada: Nueva Generación de GPUs NVIDIA',
    'NVIDIA reveló su próxima generación de tarjetas gráficas con ray tracing mejorado y DLSS 4.0 integrado...',
    '15 Mar, 2026', '6 min lectura', 'Hardware', '#00f0ff'
  )
  insertNews.run(
    'Guía Completa: Cómo Elegir el Mejor Monitor Gaming',
    'Análisis detallado sobre resolución, Hz, tiempos de respuesta y tecnologías de sincronización...',
    '10 Mar, 2026', '8 min lectura', 'Tutoriales', '#8a2be2'
  )
  insertNews.run(
    'Gaming en 4K: Análisis de Rendimiento en Última Generación',
    'Benchmark de los juegos más exigentes con configuración ultra en resolución 4K...',
    '05 Mar, 2026', '5 min lectura', 'Benchmarks', '#ff003c'
  )
}

// ---- RUTAS ----

// GET todos los productos
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all()
  res.json(products)
})

// GET noticias
app.get('/api/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all()
  res.json(news)
})

// GET carrito (con info del producto)
app.get('/api/cart', (req, res) => {
  const items = db.prepare(`
    SELECT cart.id, cart.quantity, products.name, products.price, products.icon, products.category
    FROM cart
    JOIN products ON cart.product_id = products.id
  `).all()
  res.json(items)
})

// POST agregar al carrito
app.post('/api/cart', (req, res) => {
  const { product_id } = req.body

  if (!product_id) {
    return res.status(400).json({ error: 'product_id es requerido' })
  }

  // Si ya está en el carrito, incrementar cantidad
  const existing = db.prepare('SELECT * FROM cart WHERE product_id = ?').get(product_id)
  if (existing) {
    db.prepare('UPDATE cart SET quantity = quantity + 1 WHERE product_id = ?').run(product_id)
  } else {
    db.prepare('INSERT INTO cart (product_id, quantity) VALUES (?, 1)').run(product_id)
  }

  res.json({ ok: true })
})

// DELETE quitar del carrito
app.delete('/api/cart/:id', (req, res) => {
  const { id } = req.params
  db.prepare('DELETE FROM cart WHERE id = ?').run(id)
  res.json({ ok: true })
})

// DELETE vaciar carrito completo
app.delete('/api/cart', (req, res) => {
  db.prepare('DELETE FROM cart').run()
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
