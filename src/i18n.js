import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//TODO: Final Station, Departure, Connection Stations, Platform, Delay
i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    // Ceshia
    cs: {
      translations: {
        "display.deartures.lineNumber": "Číslo spoje",
        "display.deartures.finalStation": "Konečná stanice",
        "display.deartures.departure": "Odjezd",
        "display.deartures.connectionStations": "Přes",
        "display.deartures.platform": "Nástupiště",
        "display.deartures.delay": "Zpoždění",
        "display.deartures.arrival": "Příjezd ",
        "display.deartures.freePlaces": "Volná místa",
        "display.deartures.occupiedPlaces": "Obsazená místa",
        "display.deartures.minutes": "min",
      }
    },

    //Slovak
    sk: {
      translations: {
        "display.deartures.lineNumber": "Číslo spoja",
        "display.deartures.finalStation": "Cilová stanice",
        "display.deartures.departure": "Odchod",
        "display.deartures.connectionStations": "Pripojovacie stanice",
        "display.deartures.platform": "Nástupište",
        "display.deartures.delay": "Meškanie",
        "display.deartures.arrival": "Příjezd ",
        "display.deartures.freePlaces": "Voľné miesta",
        "display.deartures.occupiedPlaces": "Obsadené miesta",
        "display.deartures.minutes": "min"
      }
    },

    //English
    en: {
      translations: {
        "display.deartures.lineNumber": "Line number",
        "display.deartures.finalStation": "Final Station",
        "display.deartures.departure": "Departure",
        "display.deartures.connectionStations": "Over",
        "display.deartures.platform": "Platform",
        "display.deartures.delay": "Delay",
        "display.deartures.arrival": "Arrival",
        "display.deartures.freePlaces": "free places",
        "display.deartures.occupiedPlaces": "Occupied places",
        "display.deartures.minutes": "min"
      }
    },

    //Ukrainian
    ua: {
      translations: {
        "display.deartures.lineNumber": "Лінія",
        "display.deartures.finalStation": "Кінцева станція",
        "display.deartures.departure": "Відправлення",
        "display.deartures.connectionStations": "Станції підключення",
        "display.deartures.platform": "Платформа",
        "display.deartures.delay": "Затримка",
        "display.deartures.arrival": "Прибуття",
        "display.deartures.freePlaces": "Вільні місця",
        "display.deartures.occupiedPlaces": "Зайняті місця",
        "display.deartures.minutes": "хв"
      }
    },

    //German
    de: {
      translations: {
        "display.deartures.lineNumber": "Zeilennummer",
        "display.deartures.finalStation": "Endstation",
        "display.deartures.departure": "Abfahrt",
        "display.deartures.connectionStations": "Verbindungsstationen",
        "display.deartures.platform": "Gleis",
        "display.deartures.delay": "Verspätung",
        "display.deartures.arrival": "Ankunft",
        "display.deartures.freePlaces": "Freie Plätze",
        "display.deartures.occupiedPlaces": "Belegte Plätze",
        "display.deartures.minutes": "Mindest"
      }
    },

    //Polish
    pl: {
      translations: {
        "display.deartures.lineNumber": "Linia",
        "display.deartures.finalStation": "Stacja końcowa",
        "display.deartures.departure": "Odjazd",
        "display.deartures.connectionStations": "Stacje połączeń",
        "display.deartures.platform": "Peron",
        "display.deartures.delay": "Opóźnienie",
        "display.deartures.arrival": "Przyjazd",
        "display.deartures.freePlaces": "Wolne miejsca",
        "display.deartures.occupiedPlaces": "Zajęte miejsca",
        "display.deartures.minutes": "min"
      }
    },

    //Hungarian
    hu: {
      translations: {
        "display.deartures.lineNumber": "Vonal",
        "display.deartures.finalStation": "Utolsó állomás",
        "display.deartures.departure": "Indulás",
        "display.deartures.connectionStations": "Csatlakozási állomások",
        "display.deartures.platform": "Peron",
        "display.deartures.delay": "Késés",
        "display.deartures.arrival": "Érkezés",
        "display.deartures.freePlaces": "Szabad helyek",
        "display.deartures.occupiedPlaces": "Elfoglalt helyek",
        "display.deartures.minutes": "min"
      }
    },

    //Russian
    ru: {
      translations: {
        "display.deartures.lineNumber": "Линия",
        "display.deartures.finalStation": "Конечная станция",
        "display.deartures.departure": "Выезд",
        "display.deartures.connectionStations": "Станции подключения",
        "display.deartures.platform": "Платформа",
        "display.deartures.delay": "Задержка",
        "display.deartures.arrival": "Прибытие",
        "display.deartures.freePlaces": "Свободные места",
        "display.deartures.occupiedPlaces": "Занятые места",
        "display.deartures.minutes": "мин"
      }
    },

    //French
    fr: {
      translations: {
        "display.deartures.lineNumber": "Ligne",
        "display.deartures.finalStation": "Station finale",
        "display.deartures.departure": "Départ",
        "display.deartures.connectionStations": "Stations de connexion",
        "display.deartures.platform": "Plate-forme",
        "display.deartures.delay": "Retard",
        "display.deartures.arrival": "Arrivée",
        "display.deartures.freePlaces": "Places gratuites",
        "display.deartures.occupiedPlaces": "Lieux occupés",
        "display.deartures.minutes": "min"
      }
    },

    //Spanish
    es: {
      translations: {
        "display.deartures.lineNumber": "Línea",
        "display.deartures.finalStation": "Estación final",
        "display.deartures.departure": "Salida",
        "display.deartures.connectionStations": "Estaciones de conexión",
        "display.deartures.platform": "Plataforma",
        "display.deartures.delay": "Retrasar",
        "display.deartures.arrival": "Llegada",
        "display.deartures.freePlaces": "Lugares libres",
        "display.deartures.occupiedPlaces": "Lugares ocupados",
        "display.deartures.minutes": "min"
      }
    }
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
