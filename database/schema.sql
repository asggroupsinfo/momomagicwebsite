CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  recaptcha_score DECIMAL(3,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_recaptcha_score ON contact_submissions(recaptcha_score);

CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  status ENUM('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled') DEFAULT 'pending',
  payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
  payment_method VARCHAR(50),
  total DECIMAL(10,2) NOT NULL,
  estimated_time INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  confirmed_at TIMESTAMP NULL,
  preparing_at TIMESTAMP NULL,
  ready_at TIMESTAMP NULL,
  completed_at TIMESTAMP NULL,
  cancelled_at TIMESTAMP NULL
);

CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);

CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id VARCHAR(50) NOT NULL,
  menu_item_id VARCHAR(50) NOT NULL,
  menu_item_name VARCHAR(200) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

CREATE TABLE IF NOT EXISTS jobs (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  department VARCHAR(100) NOT NULL,
  location VARCHAR(200) NOT NULL,
  type ENUM('full-time', 'part-time', 'contract', 'internship') NOT NULL,
  salary_range VARCHAR(100),
  description TEXT NOT NULL,
  requirements TEXT,
  status ENUM('draft', 'published', 'closed') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs(created_at DESC);

CREATE TABLE IF NOT EXISTS job_applications (
  id VARCHAR(50) PRIMARY KEY,
  job_id VARCHAR(50) NOT NULL,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  resume_url VARCHAR(500),
  cover_letter TEXT,
  status ENUM('new', 'reviewed', 'interview', 'hired', 'rejected') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_job_applications_job_id ON job_applications(job_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);

CREATE TABLE IF NOT EXISTS legal_pages (
  id VARCHAR(50) PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  summary TEXT,
  content LONGTEXT NOT NULL,
  version VARCHAR(20) DEFAULT '1.0',
  status ENUM('draft', 'published', 'scheduled') DEFAULT 'published',
  language VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_legal_pages_slug ON legal_pages(slug);
CREATE INDEX IF NOT EXISTS idx_legal_pages_status ON legal_pages(status);

CREATE TABLE IF NOT EXISTS inventory (
  id VARCHAR(50) PRIMARY KEY,
  menu_item_id VARCHAR(50) NOT NULL,
  menu_item_name VARCHAR(200) NOT NULL,
  stock_level INT NOT NULL DEFAULT 0,
  low_stock_threshold INT DEFAULT 10,
  unit VARCHAR(50) DEFAULT 'pieces',
  last_restocked TIMESTAMP NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inventory_menu_item_id ON inventory(menu_item_id);
CREATE INDEX IF NOT EXISTS idx_inventory_stock_level ON inventory(stock_level);

CREATE TABLE IF NOT EXISTS payment_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  provider VARCHAR(50) NOT NULL,
  is_enabled BOOLEAN DEFAULT FALSE,
  config JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media_files (
  id VARCHAR(50) PRIMARY KEY,
  filename VARCHAR(500) NOT NULL,
  original_name VARCHAR(500) NOT NULL,
  file_size INT NOT NULL,
  mime_type VARCHAR(100),
  width INT,
  height INT,
  folder VARCHAR(200) DEFAULT 'root',
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_media_files_folder ON media_files(folder);
CREATE INDEX IF NOT EXISTS idx_media_files_uploaded_at ON media_files(uploaded_at DESC);

CREATE TABLE IF NOT EXISTS media_usage (
  id INT AUTO_INCREMENT PRIMARY KEY,
  media_id VARCHAR(50) NOT NULL,
  page_url VARCHAR(500) NOT NULL,
  element_type VARCHAR(100),
  used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (media_id) REFERENCES media_files(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_media_usage_media_id ON media_usage(media_id);
CREATE INDEX IF NOT EXISTS idx_media_usage_page_url ON media_usage(page_url);
