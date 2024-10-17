import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db: SQLiteDBConnection | undefined;

  constructor(private platform: Platform) {
    this.initDB();
  }

  async initDB() {
    try {
      // Esperar que la plataforma esté lista si es en dispositivos móviles
      await this.platform.ready();

      // Crear conexión a la base de datos
      const dbConnection = await CapacitorSQLite.createConnection({
        database: 'mydb',
        version: 1,
        encrypted: false,
        mode: 'no-encryption',
      });

      if (dbConnection) {
        this.db = dbConnection;
        await this.db.open();

        // Crear la tabla manualmente si no existe
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT
          );
        `);

        console.log('Database and table initialized successfully');
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  async addItem(name: string): Promise<any> {
    try {
      const result = await this.db?.run(`INSERT INTO items (name) VALUES (?)`, [name]);
      return result;
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  async getItems(): Promise<any[]> {
    try {
      const result = await this.db?.query('SELECT * FROM items');
      return result?.values ?? [];
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  }
}
