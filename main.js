// Konfigurasi game
const config = {
  type: Phaser.AUTO,
  width: 800,  // Lebar game
  height: 600, // Tinggi game
  physics: {
    default: 'arcade', // Menggunakan fisika arcade
    arcade: {
      gravity: { y: 0 }, // Tanpa gravitasi
      debug: false // Menonaktifkan debug
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// Membuat game instance
const game = new Phaser.Game(config);

let player; // Variabel untuk menyimpan karakter

// Fungsi untuk memuat aset (gambar)
function preload() {
  this.load.image('player', 'assets/player.png'); // Mengimpor gambar karakter
}

// Fungsi untuk membuat objek di layar
function create() {
  // Membuat karakter di tengah layar
  player = this.physics.add.sprite(400, 300, 'player');

  // Membuat kontrol untuk karakter menggunakan tombol arah
  player.setCollideWorldBounds(true); // Membuat karakter tidak keluar dari batas layar
}

// Fungsi untuk memperbarui posisi dan aksi karakter
function update() {
  const cursors = this.input.keyboard.createCursorKeys();

  // Gerakkan karakter dengan tombol arah
  if (cursors.left.isDown) {
    player.setVelocityX(-160); // Bergerak ke kiri
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(160); // Bergerak ke kanan
  }
  else {
    player.setVelocityX(0); // Tidak bergerak jika tidak ada input
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-160); // Bergerak ke atas
  }
  else if (cursors.down.isDown) {
    player.setVelocityY(160); // Bergerak ke bawah
  }
  else {
    player.setVelocityY(0); // Tidak bergerak jika tidak ada input
  }
}
