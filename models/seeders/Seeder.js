// Load mongose Start Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/motivationwall');

// Add seeders
var quotesSeeder = require('./quotesSeeder');

// Run Seeders
quotesSeeder.seed();

// Close connection
mongoose.connection.close()
