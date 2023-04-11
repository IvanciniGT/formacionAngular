// Es el compilador/ejecutor de angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Es un modulo que NOSOTROS HEMOS DESARROLLADO
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // Inversión de control
  .catch(dato => console.error(dato));

// Inversión de control ? 
// Le delegamos a un tercero el control del flujo de nuestro código