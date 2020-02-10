function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ==============================
//  THEME SCRIPTS
//  Main file for javascript consolidation. Do not write any javascript in this
//  file! Only include other modules as required.
//  Author: Diff - Foxpod
//  Please review practices documentation before contributing.
// ==============================
// ------------------------------
// MODULES
// ------------------------------

/* eslint-disable */

/**
 * UTILITIES LIBRARY
 *
 * @description General global JavaScript utility functions.
 * @namespace theme.utils
 */
(theme => {
  /**
   * Class of general JavaScript utilities.
   */
  class Utilities {
    constructor() {
      // Initialize functions extending objects
      this._handleize(); // Keep track of all unique numbers generated


      this._rendered_numbers = [];
    }
    /**
     * Initializes the handleize function on the String object.
     * Based on {@link https://github.com/nicbou/stringops stringops} by Nicolas Bouliane.
     *
     * @private
     * @memberof Utilities
     */


    _handleize() {
      // UTF to ASCII map. Removes accents.
      var defaultDiacriticsRemovalap = [{
        base: "A",
        letters: "\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
      }, {
        base: "AA",
        letters: "\uA732"
      }, {
        base: "AE",
        letters: "\u00C6\u01FC\u01E2"
      }, {
        base: "AO",
        letters: "\uA734"
      }, {
        base: "AU",
        letters: "\uA736"
      }, {
        base: "AV",
        letters: "\uA738\uA73A"
      }, {
        base: "AY",
        letters: "\uA73C"
      }, {
        base: "B",
        letters: "\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
      }, {
        base: "C",
        letters: "\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E"
      }, {
        base: "D",
        letters: "\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
      }, {
        base: "DZ",
        letters: "\u01F1\u01C4"
      }, {
        base: "Dz",
        letters: "\u01F2\u01C5"
      }, {
        base: "E",
        letters: "\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
      }, {
        base: "F",
        letters: "\u0046\u24BB\uFF26\u1E1E\u0191\uA77B"
      }, {
        base: "G",
        letters: "\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
      }, {
        base: "H",
        letters: "\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
      }, {
        base: "I",
        letters: "\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
      }, {
        base: "J",
        letters: "\u004A\u24BF\uFF2A\u0134\u0248"
      }, {
        base: "K",
        letters: "\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
      }, {
        base: "L",
        letters: "\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
      }, {
        base: "LJ",
        letters: "\u01C7"
      }, {
        base: "Lj",
        letters: "\u01C8"
      }, {
        base: "M",
        letters: "\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
      }, {
        base: "N",
        letters: "\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
      }, {
        base: "NJ",
        letters: "\u01CA"
      }, {
        base: "Nj",
        letters: "\u01CB"
      }, {
        base: "O",
        letters: "\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C"
      }, {
        base: "OI",
        letters: "\u01A2"
      }, {
        base: "OO",
        letters: "\uA74E"
      }, {
        base: "OU",
        letters: "\u0222"
      }, {
        base: "OE",
        letters: "\u008C\u0152"
      }, {
        base: "oe",
        letters: "\u009C\u0153"
      }, {
        base: "P",
        letters: "\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
      }, {
        base: "Q",
        letters: "\u0051\u24C6\uFF31\uA756\uA758\u024A"
      }, {
        base: "R",
        letters: "\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
      }, {
        base: "S",
        letters: "\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
      }, {
        base: "T",
        letters: "\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
      }, {
        base: "TZ",
        letters: "\uA728"
      }, {
        base: "U",
        letters: "\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
      }, {
        base: "V",
        letters: "\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
      }, {
        base: "VY",
        letters: "\uA760"
      }, {
        base: "W",
        letters: "\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
      }, {
        base: "X",
        letters: "\u0058\u24CD\uFF38\u1E8A\u1E8C"
      }, {
        base: "Y",
        letters: "\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
      }, {
        base: "Z",
        letters: "\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
      }, {
        base: "a",
        letters: "\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
      }, {
        base: "aa",
        letters: "\uA733"
      }, {
        base: "ae",
        letters: "\u00E6\u01FD\u01E3"
      }, {
        base: "ao",
        letters: "\uA735"
      }, {
        base: "au",
        letters: "\uA737"
      }, {
        base: "av",
        letters: "\uA739\uA73B"
      }, {
        base: "ay",
        letters: "\uA73D"
      }, {
        base: "b",
        letters: "\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
      }, {
        base: "c",
        letters: "\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184"
      }, {
        base: "d",
        letters: "\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
      }, {
        base: "dz",
        letters: "\u01F3\u01C6"
      }, {
        base: "e",
        letters: "\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
      }, {
        base: "f",
        letters: "\u0066\u24D5\uFF46\u1E1F\u0192\uA77C"
      }, {
        base: "g",
        letters: "\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
      }, {
        base: "h",
        letters: "\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
      }, {
        base: "hv",
        letters: "\u0195"
      }, {
        base: "i",
        letters: "\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
      }, {
        base: "j",
        letters: "\u006A\u24D9\uFF4A\u0135\u01F0\u0249"
      }, {
        base: "k",
        letters: "\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
      }, {
        base: "l",
        letters: "\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
      }, {
        base: "lj",
        letters: "\u01C9"
      }, {
        base: "m",
        letters: "\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
      }, {
        base: "n",
        letters: "\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
      }, {
        base: "nj",
        letters: "\u01CC"
      }, {
        base: "o",
        letters: "\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275"
      }, {
        base: "oi",
        letters: "\u01A3"
      }, {
        base: "ou",
        letters: "\u0223"
      }, {
        base: "oo",
        letters: "\uA74F"
      }, {
        base: "p",
        letters: "\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
      }, {
        base: "q",
        letters: "\u0071\u24E0\uFF51\u024B\uA757\uA759"
      }, {
        base: "r",
        letters: "\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
      }, {
        base: "s",
        letters: "\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
      }, {
        base: "t",
        letters: "\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
      }, {
        base: "tz",
        letters: "\uA729"
      }, {
        base: "u",
        letters: "\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
      }, {
        base: "v",
        letters: "\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
      }, {
        base: "vy",
        letters: "\uA761"
      }, {
        base: "w",
        letters: "\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
      }, {
        base: "x",
        letters: "\u0078\u24E7\uFF58\u1E8B\u1E8D"
      }, {
        base: "y",
        letters: "\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
      }, {
        base: "z",
        letters: "\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
      }]; // Generate the diacritics map to replace accented characters.

      var diacriticsMap = {};

      for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
        var letters = defaultDiacriticsRemovalap[i].letters.split("");

        for (var j = 0; j < letters.length; j++) {
          diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
        }
      }
      /**
       * Replaces accented characters with their non-accented counterparts.<br>
       * Based on {@link https://github.com/nicbou/stringops stringops} by Nicolas Bouliane.
       *
       * @param {boolean} [remove=false] - Whether to remove unicode characters that are not mapped to a non-accented characters.
       *   This includes all non-ascii characters.
       * @param {string} [replacement=Empty string] - The replacement character(s) to use for invalid characters.
       * @returns {string} String without accents.
       * @memberof Utilities
       * @example
       * // returns 'My accented string$.'
       * 'My áccentéd string$.'.noAccents();
       */


      String.prototype.noAccents = function (remove, replacement) {
        // x00-x7E is the ASCII character range
        var withoutAccents = this.replace(/[^\u0000-\u007E]/g, function (ch) {
          return diacriticsMap[ch] || ch;
        });
        replacement = replacement || "";

        if (remove) {
          withoutAccents = withoutAccents.replace(/[^\u0000-\u007E]/g, replacement);
        }

        return withoutAccents;
      };
      /**
       * Returns a "handleized" version of a string suitable for URLs and file names.<br>
       * Based on {@link https://github.com/nicbou/stringops stringops} by Nicolas Bouliane.
       *
       * @param {string} [seperator=-] - The character to use as a separator.
       * @param {string} [replacement=Empty string] - The replacement character(s) to use for invalid characters.
       * @returns {string} The handleized string.
       * @memberof Utilities
       * @example
       * var myString = 'My áccentéd string$.';
       *
       * // returns 'my-accented-string'
       * myString.handleize();
       *
       * // returns 'my_accented_string##'
       * myString.handleize('_', '#');
       */


      String.prototype.handleize = function (separator, replacement) {
        var slug;
        separator = separator || "-";
        replacement = replacement || "";
        slug = this.noAccents(true, replacement).trim().replace(/[^a-z0-9\s-/]/gi, replacement).replace(/[\s/]/gi, separator);
        return slug.toLowerCase();
      };
    }
    /**
     * Curency formating function.
     *
     * @param {(number|string)} price - The price to format.
     * @param {object} options - The options for the currency formatter.
     * @param {boolean} [options.cents=false] - Wether or not the price is currently in cents.
     * @param {string} [options.locale=Shop locale or 'en-CA'] - Override the locale to format to.
     * @param {string} [options.currency=Shop currency or 'CAD'] - Override the currency to output.
     * @param {boolean} [options.no_zeros=false] - To output the price without decimal zeros.
     * @returns {(string|null)} The price formatted based on the locale and currency.
     * @memberof Utilities
     * @example
     * // Returns '$12.56'
     * theme.utils.toMoney(12.56)
     *
     * // Returns '12,56 $'
     * theme.utils.toMoney('12.56', { locale: 'fr-CA', currency: 'CAD' })
     *
     * // Returns '$12.56'
     * theme.utils.toMoney('1256', { cents: true })
     */


    toMoney(price, options = {}) {
      if (!price) {
        console.warn("Utilities.toMoney: Invalid price passed.", price);
        return null;
      }

      let price_string;
      let currency_options = {
        style: "currency"
      };
      price = new Number(price); // Assign defaults if no options are passed.

      options.cents = options.cents || false;
      options.locale = options.locale || (theme.shop ? theme.shop.locale : null) || "en-CA";
      currency_options.currency = options.currency || (theme.shop ? theme.shop.currency : null) || "CAD"; // Convert to dollars if the amount passed is in cents

      if (options.cents) {
        price = price / 100;
      }

      price_string = price.toLocaleString(options.locale, currency_options); // Check if there are decimals and no_zeros option is passed

      /*
        !!~ notation will return false instead of -1 for indexOf, and
        true if 0 or greater.
         For more information on how to use the NOT bitwise operator (~),
        read https://www.w3schools.com/js/js_bitwise.asp
      */

      if (options.no_zeros && !!~price_string.indexOf(".00")) {
        price_string = price_string.replace(".00", "");
      }

      return price_string;
    }
    /**
     * Removes the URL protocol.
     *
     * @param {string} path - The URL to strip out the protocol from.
     * @returns {(string|null)} The URL without protocol.
     * @memberof Utilities
     */


    removeProtocol(path) {
      if (!path) {
        console.error("Utilities.removeProtocol: Invalid path passed.", path);
        return null;
      }

      return path.replace(/http(s)?:/, "");
    }
    /**
     * Adds a Shopify size attribute to an image URL.
     *
     * @param {string} src - The image source URL.
     * @param {string} size - The size parameters to fetch, following Shopify's img_url guidelines.
     * @returns {(string|null)} The updated URL.
     * @memberof Utilities
     * @example
     * theme.utils.getSizedImageUrl('cdn.shopify.com/some-image.jpg', '500x300_crop_center');
     */


    getSizedImageUrl(src, size) {
      if (!size) {
        console.error("Utilities.getSizedImageUrl: Invalid size passed.", size);
        return src;
      }

      if (size === "master") {
        return this.removeProtocol(src);
      }

      var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

      if (match) {
        var prefix = src.split(match[0]);
        var suffix = match[0];
        return this.removeProtocol(prefix[0] + "_" + size + suffix);
      } else {
        console.error("Utilities.getSizedImageUrl: Invalid image URL passed.", src);
        return null;
      }
    }
    /**
     * Created an object from a parameter string.
     *
     * @param {string} object_string - The string to parse to an object.
     * @returns {object} The object created from the string.
     * @memberof Utilities
     * @example
     * // If called on a form that takes a name and email, could return { name: "Joe", email: "joe@diffagency.com" }
     * theme.utils.toObject($form.serialize());
     */


    toObject(object_string) {
      var parameters = {};
      var elements;

      if (!object_string) {
        return {};
      } // Split into each element


      elements = object_string.split("&");
      elements.forEach(element => {
        let equals_index = element.indexOf("="); // check if the query has a value or is only a key

        if (equals_index == -1) {
          // if there's no = then it's only a key, so set the key to the whole element and the value to null
          // Decode to get original characters
          parameters[decodeURIComponent(element)] = null;
        } else {
          // if there's an = then assign up to the = to be the key and everything after to be the value (or null if empty)
          // Decode to get original characters
          let key = decodeURIComponent(element.slice(0, equals_index));
          let value = decodeURIComponent(element.slice(equals_index + 1)) || null;
          parameters[key] = value;
        }
      });
      return parameters;
    }
    /**
     * Extracts the URL parameters into an object.
     *
     * @param {string} [url=window.location.href] - The URL to parse.
     * @returns {object} The query parameters object.
     * @memberof Utilities
     * @example
     * // Returns { name: "Joe", email: "joe@diffagency.com" }
     * theme.utils.getURLParams('https://example.com/?name%3DJoe%26email%3Djoe%40diffagency.com');
     */


    getURLParams(url) {
      var url = url || window.location.href; // Get the string after the '?' from the URL

      var query_string = url.split(/\?([^\#]+)/)[1];

      if (!query_string) {
        return {};
      }

      return this.toObject(query_string);
    }
    /**
     * Sets URL parameters.
     *
     * @param {object} [params] - The parameters to add to the URL.
     * @param {object} [options] - Method options.
     * @param {boolean} [options.clear=false] - Clear previous parameters.
     * @param {boolean} [options.no_overwrite=false] - Don't overwrite parameters with same key.
     * @param {boolean} [options.push_state=false] - Push a window history state. Defaults to replace state.
     * @memberof Utilities
     * @example
     * // Examples with a current URL of 'example.com/?page=2'
     *
     * // Will set url to 'example.com/?page=3&view=grid'
     * theme.utils.setURLParams({ page: 3, view: 'grid' });
     *
     * // Will set url to 'example.com/?page=2'
     * theme.utils.setURLParams({ page: 3 }, { no_overwrite: true });
     *
     * // Will clear parameters: 'example.com/'
     * theme.utils.setURLParams({}, { clear: true });
     *
     * // Will replace parameters: 'example.com/?view=grid'
     * theme.utils.setURLParams({ view: 'grid' }, { clear: true });
     */


    setURLParams(params, options = {}) {
      const current_params = this.getURLParams();
      let new_params = options.clear ? {} : current_params;
      let query_array = [];
      let query_string = ""; // Add new parameters

      Object.keys(params).forEach(key => {
        let param_value = params[key];
        new_params[key] = options.no_overwrite ? new_params[key] || param_value : param_value;
      }); // Convert object to URL string

      Object.keys(new_params).forEach(key => {
        query_array.push(encodeURIComponent(key) + "=" + encodeURIComponent(new_params[key]));
      });

      if (query_array.length) {
        query_string = "?" + query_array.join("&");
      }

      if (options.push_state) {
        window.history.pushState({}, null, query_string);
      } else {
        window.history.replaceState({}, null, query_string);
      }
    }
    /**
     * Returns a modified version of the passed object based on the passed parameters.
     *
     * @param {object} object - The object to modify.
     * @param {object} parameters - The parameters to update.
     * @param {object} [options] - Function options.
     * @param {boolean} [options.no_overwrite=false] - Option to not overwrite existing parameters
     * @param {boolean} [options.clear=false] - To empty the object before updating it.
     * @memberof Utilities
     * @example
     * // Returns { name: 'Joe', age: 18, height: 2 }
     * theme.utils.modifyObject(
     *   { name: 'Joe', age: 17 },
     *   { age: 18, height: 2 }
     * );
     *
     * // Returns { name: 'Joe', age: 17, height: 2 }
     * theme.utils.modifyObject(
     *   { name: 'Joe', age: 17 },
     *   { age: 18, height: 2 },
     *   { no_overwrite: true }
     * );
     *
     * // Returns { age: 18, height: 2 }
     * theme.utils.modifyObject(
     *   { name: 'Joe', age: 17 },
     *   { age: 18, height: 2 },
     *   { clear: true }
     * );
     */


    modifyObject(object, parameters, options) {
      options = options || {};
      let new_object = options.clear ? {} : object || {};

      if (!object || !parameters || typeof parameters !== "object") {
        return new_object || {};
      }

      Object.keys(parameters).forEach(key => {
        new_object[key] = options.no_overwrite ? new_object[key] || parameters[key] : parameters[key];
      });
      return new_object;
    }
    /**
     * Generates a unique number.
     *
     * @param {number} [length=6] - The length of the unique number
     * @returns Unique number.
     * @memberof Utilities
     * @example
     *
     * // Could generate 66145
     * theme.utils.uniqueNumber(5);
     */


    uniqueNumber(length) {
      var length = length || 6;
      var id = Math.floor(Math.random() * Math.pow(10, length));

      while (this._rendered_numbers.indexOf(id) !== -1) {
        id = Math.floor(Math.random() * Math.pow(10, length));
      } // Keep track of the generated number so that it is never generated again.


      this._rendered_numbers.push(id);

      return id;
    }

    decodeHTML(html) {
      const text_area = document.createElement("textarea");
      text_area.innerHTML = html;
      return text_area.value;
    }
    /**
     * Check if mediaquery is valid. Acts as a css media query check for min and max width.
     *
     * @param {String} breakpoint The breakpoint you want to check the browser min or max width against. eg: '799px'
     * @param {String} boundType Can be either 'min' or 'max' (standard is to use min-width for consistency with mobile first.)
     * @returns {Boolean} Describing if the current mediaquery is true or false. Will behave the same way as a css media query.
     * @memberof Utilities
     */


    isMatchingMedia(breakpoint, boundType = "min") {
      let isMatchingMedia = null;

      if (boundType === "min") {
        isMatchingMedia = window.matchMedia(`(min-width: ${breakpoint})`);
      } else if (boundType === "max") {
        isMatchingMedia = window.matchMedia(`(max-width: ${breakpoint})`);
      } else throw new Error('invalid boundType. Use "min" or "max", defaults to min if none is passed.');

      return isMatchingMedia.matches;
    }

  } // Global export


  theme.utils = new Utilities();
})(window.theme = window.theme || {});

((theme, geoip2) => {
  if (typeof geoip2 !== "undefined") {
    const redirect = () => {
      /* This implements the actual redirection. */
      function redirectBrowser(site) {
        // note that if we're already on the correct site, no redirection will happen from this window location reassignment.
        window.location = site;
        localStorage.setItem("redirected", true);
      }
      /* These are the country codes for the countries we have sites for.
       * We will check to see if a visitor is coming from one of these countries.
       * If they are, we redirect them to the country-specific site. If not, we
       * redirect them to world.example.com */


      const sites = {
        de: "https://www.aftershokz.com.de",
        fr: "https://www.aftershokz.fr",
        gb: "https://aftershokz.co.uk",
        us: "https://aftershokz.com",
        ca: "https://aftershokz.ca",
        cz: "http://aftershokz.cz",
        cn: "http://www.aftershokz.com.cn"
      };
      const defaultSite = "https://aftershokz.com";

      function onSuccess(geoipResponse) {
        /* There's no guarantee that a successful response object
         * has any particular property, so we need to code defensively. */
        if (!geoipResponse.country.iso_code) {
          redirectBrowser(defaultSite);
          return;
        }
        /* ISO country codes are in upper case. */


        const code = geoipResponse.country.iso_code.toLowerCase();

        if (sites[code]) {
          if (sites[code] !== window.location) {
            redirectBrowser(sites[code]);
          }
        } else {
          redirectBrowser(defaultSite);
        }
      }
      /* Regardless of the error, we'll send them
       * to the default site. */


      function onError(error) {
        // eslint-disable-next-line no-console
        console.error("Error with GeoIP Detection:", error);
        redirectBrowser(defaultSite);
      }

      geoip2.country(onSuccess, onError);
    }; // the logic here is that if we've already redirected them once this session, we shouldn't force them to do it again.
    // Also if they've specifically selected a country from the dropdown, we'll put a URL Param called "redirected" in their query just to note that they've redirected themselves and we shouldn't redirect them again.


    let alreadyRedirected = localStorage.getItem("redirected");
    const redirectedURLParam = theme.utils.getURLParams(window.location.href).redirected;

    if (redirectedURLParam) {
      localStorage.setItem("redirected", true);
      alreadyRedirected = true;
    }

    if (!alreadyRedirected) {
      //redirect();
    }
  }
})(window.theme, window.geoip2);

(theme => {
  const bundleJSON = document.getElementById("js-bundle-data");

  if (bundleJSON) {
    const bundleDataStore = {
      debug: false,
      state: {
        bundleData: {},
        bundleProduct: {},
        bundleProductColour: "",
        bundleProductSize: ""
      },

      setBundleDataAction(dataModel) {
        if (this.debug) {
          // eslint-disable-next-line no-console
          console.log("setBundleDataAction triggered with", dataModel);
        }

        this.state.bundleData = dataModel;
      },

      getBundleData() {
        return this.state.bundleData;
      },

      setBundleProductAndVariant(product, variant = product.selected_or_first_available_variant) {
        this.state.bundleProductColour = variant.option2 || variant.option1;
        this.state.bundleProductSize = this.getSizeValue(variant.option1);
        this.setBundleProduct(product);
      },

      setBundleProduct(product) {
        this.state.bundleProduct = product;
      },

      getSizeValue(sizeOption) {
        if (sizeOption.toLowerCase().includes("mini")) {
          return "mini";
        }

        return "standard";
      }

    };
    bundleDataStore.setBundleDataAction(JSON.parse(bundleJSON.innerHTML)); // eslint-disable-next-line prefer-destructuring

    bundleDataStore.setBundleProductAndVariant(bundleDataStore.state.bundleData.products[0]); // eslint-disable-next-line no-param-reassign

    theme.bundleDataStore = bundleDataStore;
  }
})(window.theme = window.theme || {});
/* eslint-disable */

/**
 * CART LIBRARY
 *
 * @description Handles the Shopify cart interactions.
 * @namespace theme.cart
 */


((theme, $) => {
  /**
   * Class representing the cart.
   */
  class Cart {
    /**
     * Creates an instance of Cart.
     *
     * @param {object} [cart] - A cart object to use. Passing this argument will avoid an AJAX call to the Shopify API.
     * @constructs Cart
     * @memberof Cart
     */
    constructor(cart) {
      this.content = cart || {};
      this._queue = $.when(); // If no cart is passed, fetch it.

      if (!cart) {
        this.fetch();
      }
    } // ------------------------------
    //  Getters and Setters
    // ------------------------------

    /**
     * The cart object.<br><br>
     * @example
     * // Get the cart object
     * theme.cart.content
     *
     * @type {object}
     * @fires Cart:set
     * @memberof Cart
     */


    get content() {
      return this._object;
    }

    set content(cart) {
      // The Cart class uses a private variable to keep track of the cart content.
      this._object = cart || this._object;
      /**
       * The cart has been updated.
       * The event is attached to the document element.<br><br>
       *
       * @event Cart:set
       * @property {object} cart - The cart object.
       * @memberof Cart
       * @example
       * $(document).on('Cart:set', function(event, cart) {});
       */

      $(document).trigger("Cart:set", this.content);
    } // ------------------------------
    //  Methods
    // ------------------------------

    /**
     * Queries the Shopify API to refresh the cart.<br>
     * Calling this function will update the cart object.
     *
     * @param {object} [options] - Properties to change the behaviour of fetch()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:fetch
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * theme.cart.fetch();
     */


    fetch({
      silent = false
    } = {}) {
      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart.js",
          type: "GET",
          dataType: "json"
        }).done(cart => {
          this.content = cart;

          if (!silent) {
            /**
             * The cart has been fetched.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:fetch
             * @property {object} cart - The cart object.
             * @memberof Cart
             * @example
             * $(document).on('Cart:fetch', function(event, cart) {});
             */
            $(document).trigger("Cart:fetch", this.content);
          }
        }).fail(resp => {
          console.error("Cart.fetch: Failed getting the cart.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Adds an item to cart.
     *
     * @param {(object|number)} item - The item id or item object to add.
     * @param {number} item.id - The id of the variant to add.
     * @param {number} [item.quantity=1] - Quantity to add, defaults to 1.
     * @param {object} [options] - Properties to augment the behaviour of add()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:add
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Adds 1 of item 1234567 to the cart.
     * theme.cart.add(1234567);
     */


    add(item, {
      silent = false
    } = {}) {
      if (!item) {
        console.warn("Cart.add: No item was passed.");
        return $.when();
      } // Set up the object if only an id is passed.


      if (typeof item != "object") {
        item = {
          id: item
        };
      } // Default the quantity to 1 if none is passed.


      item.quantity = item.quantity || 1;
      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart/add.js",
          data: item,
          type: "POST",
          dataType: "json"
        }).done(item => {
          // Refresh the cart
          this.fetch({
            silent: silent
          });

          if (!silent) {
            /**
             * An item has been added to cart.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:add
             * @property {object} item - The item added to cart.
             * @memberof Cart
             * @example
             * $(document).on('Cart:add', function(event, item) {});
             */
            $(document).trigger("Cart:add", item);
          }
        }).fail(resp => {
          console.error("Cart.add: Failed adding to the cart.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Updates an item in the cart.
     *
     * @param {(object|object[]|number|number[])} items - The item id, id array, item object or object array to update.
     * @param {number} items.id - The id of the variant to update.
     * @param {number} [items.quantity=1] - Quantity to add, defaults to 1.
     * @param {object} [options] - Properties to augment the behaviour of update()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:update
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Updated item 1234567's quantity to 5
     * theme.cart.update({ id: 1234567, quantity: 5 });
     *
     * // Updated item 1234567's quantity to 5 and item 7654321's quantity to 1
     * theme.cart.update([{ id: 1234567, quantity: 5 }, 7654321]);
     */


    update(items, {
      silent = false
    } = {}) {
      if (!items) {
        console.warn("Cart.update: No item was passed.");
        return $.when();
      }

      let data = {};
      /**
       * Internal function to convert items to the proper format for Shopify's update API call.
       *
       * @param {object} data - The data object to add the key/value pair to.
       * @param {(object|number)} item - The item id or item object to format.
       * @private
       */

      const _addUpdateItem = item => {
        // Set up the object if only an id is passed.
        if (typeof item === "object") {
          if (!item.id) {
            console.warn("Cart.update: No id was passed with the product object.");
            return $.when();
          }

          data[item.id] = item.quantity || item.quantity === 0 ? item.quantity : 1;
        } else {
          data[item] = 1;
        }
      };

      if (Array.isArray(items)) {
        items.forEach(item => {
          _addUpdateItem(item);
        });
      } else {
        _addUpdateItem(items);
      } // If data is empty, return empty promise


      if (!Object.keys(data).length) {
        return $.when();
      }

      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart/update.js",
          data: {
            updates: data
          },
          type: "POST",
          dataType: "json"
        }).done(cart => {
          // Refresh the cart
          this.content = cart;

          if (!silent) {
            /**
             * An item in the cart has been updated.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:update
             * @property {object} cart - The cart object.
             * @property {object} item - The item changed.
             * @memberof Cart
             * @example
             * $(document).on('Cart:update', function(event, cart, item) {});
             */
            $(document).trigger("Cart:update", [cart, items]);
          }
        }).fail(resp => {
          console.error("Cart.update: Failed updating a cart item.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Change an item in the cart.
     *
     * @param {(object|number)} item - The item id or item object to update.
     * @param {number} item.id - The id of the variant to update.
     * @param {number} [item.quantity=1] - Quantity to add, defaults to 1.
     * @param {object} [options] - Properties to augment the behaviour of change()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:change
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Changes item 1234567's quantity to 2
     * theme.cart.change({ id: 1234567, quantity: 2 });
     */


    change(item, {
      silent = false
    } = {}) {
      if (!item) {
        console.warn("Cart.change: No item was passed.");
        return $.when();
      } // Set up the object if only an id is passed.


      if (typeof item != "object") {
        item = {
          id: item,
          quantity: 1
        };
      }

      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart/change.js",
          data: item,
          type: "POST",
          dataType: "json"
        }).done(cart => {
          // Refresh the cart
          this.content = cart;

          if (!silent) {
            /**
             * An item in the cart's quantity has been changed.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:change
             * @property {object} cart - The cart object.
             * @property {object} item - The item changed.
             * @memberof Cart
             * @example
             * $(document).on('Cart:change', function(event, cart, item) {});
             */
            $(document).trigger("Cart:change", [cart, item]);
          }
        }).fail(resp => {
          console.error("Cart.change: Failed changing a cart quantity.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Updates an item in the cart.
     *
     * @param {(object|object[]|number|number[])} item - The item id, id array, item object or object array to remove.
     * @param {object} [options] - Properties to augment the behaviour of remove()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Removes item 1234567 from the cart
     * theme.cart.remove(1234567);
     */


    remove(items, {
      silent = false
    } = {}) {
      if (!items) {
        console.warn("Cart.remove: No item was passed.");
        return $.when();
      } // Create an array of items with quantity 0 and feed to the update function.


      let remove_items = [];

      if (Array.isArray(items)) {
        items.forEach(item => {
          remove_items.push({
            id: typeof item === "object" ? item.id : item,
            quantity: 0
          });
        });
      } else {
        remove_items.push({
          id: typeof items === "object" ? items.id : items,
          quantity: 0
        });
      }

      return this.update(remove_items, {
        silent: silent
      });
    }
    /**
     * Empty the cart.
     *
     * @param {object} [options] - Properties to augment the behaviour of clear()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:clear
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * theme.cart.clear();
     */


    clear({
      silent = false
    } = {}) {
      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart/clear.js",
          type: "POST",
          dataType: "json"
        }).done(cart => {
          // Refresh the cart
          this.content = cart;

          if (!silent) {
            /**
             * The cart has been cleared.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:clear
             * @property {object} cart - The cart object.
             * @memberof Cart
             * @example
             * $(document).on('Cart:clear', function(event, cart) {});
             */
            $(document).trigger("Cart:clear", cart);
          }
        }).fail(resp => {
          console.error("Cart.clear: Failed clearing the cart.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Updates an attribute in the cart.
     *
     * @param {object} attributes - The attribute(s) to update.
     * @param {object} [options] - The options to pass
     * @param {boolean} [options.no_overwrite=false] - Option to skip setting attributes if they are already set.
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @fires Cart:attributeUpdate
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Update the language attribute to 'fr' and currency to CAD
     * theme.cart.updateAttributes({ langauge: 'fr', currency: 'CAD' });
     *
     * // Update the language attribute to 'fr' but don't overwrite if already set
     * theme.cart.updateAttributes({ langauge: 'fr' }, { no_overwrite: true });
     */


    updateAttributes(attributes, {
      no_overwrite = false,
      silent = false
    } = {}) {
      if (!attributes) {
        console.warn("Cart.updateAttribute: No attributes were passed.");
        return $.when();
      }

      let data = {}; // If we don't overwrite, only add attributes that are not set in cart

      if (no_overwrite) {
        for (let key of Object.keys(attributes)) {
          if (!this.content.attributes[key]) {
            data[key] = attributes[key];
          }
        }
      } else {
        data = attributes;
      } // If data is empty, return empty promise


      if (!Object.keys(data).length) {
        return $.when();
      }

      this._queue = this._queue.then(() => {
        return $.ajax({
          url: "/cart/update.js",
          data: {
            attributes: data
          },
          type: "POST",
          dataType: "json"
        }).done(cart => {
          // Refresh the cart
          this.content = cart;

          if (!silent) {
            /**
             * An item in the cart has been updated.
             * The event is attached to the document element.<br><br>
             *
             * @event Cart:attributeUpdate
             * @property {object} cart - The cart object.
             * @property {object} attributes - The attributes changed.
             * @memberof Cart
             * @example
             * $(document).on('Cart:attributeUpdate', function(event, cart, attributes) {});
             */
            $(document).trigger("Cart:update", [cart, data]);
          }
        }).fail(resp => {
          console.error("Cart.attributeUpdate: Failed updating a cart attribute.", resp);
          console.warn("Clearing the theme.cart._queue object");
          this._queue = $.when();
        });
      });
      return this._queue;
    }
    /**
     * Clears all or specific attributes in the cart.
     *
     * @param {(string|string[])} [attributes] - The attribute(s) to clear. If none are passed, all will be cleared.
     * @param {object} [options] - Properties to augment the behaviour of clearAttributes()
     * @param {Boolean} [options.silent=false] - With silent enabled events will not be triggered
     * @returns {Promise} The AJAX call to Shopify's cart API.
     * @memberof Cart
     * @example
     * // Clears all cart attributes
     * theme.cart.clearAttributes();
     *
     * // Only clears the language attribute
     * theme.cart.clearAttributes('language');
     *
     * // Clears the language and currency attributes
     * theme.cart.clearAttributes(['language', 'currency']);
     */


    clearAttributes(attributes, {
      silent = false
    } = {}) {
      let cleared_attributes = {}; // If no attributes are passed, use all cart attributes to clear

      const attribute_keys = attributes !== undefined ? [].concat(attributes || []) : Object.keys(theme.cart.content.attributes);

      for (let key of attribute_keys) {
        cleared_attributes[key] = "";
      }

      return this.updateAttributes(cleared_attributes, {
        silent: silent
      });
    }

  } // Global export
  // Uses the cart information stored by the global object if available


  theme.cart = new Cart(theme.cart || null);
})(window.theme = window.theme || {}, jQuery);
/**
 * FLYOUT LIBRARY
 *
 * @description Handles flyout elements.
 * @namespace Flyout
 */


((theme, $, bodyScrollLock) => {
  const flyouts = [];
  /**
   * Class names.
   *
   * @private
   * @const
   * @type {Object}
   */

  const CLASSES = {
    flyout: "js-flyout",
    noScroll: "u-no-scroll",
    flyoutActive: "is-active",
    cartFlyout: "cart-flyout-open"
  };
  /**
   * Class representing a flyout element.
   *
   * @classdesc Creates Flyout objects out of elements with the class <code>js-flyout</code> and the data attribute <code>data-flyout-id</code>, where the value is a unique id. The element can optionally have a <code>data-flyout-options</code> attribute, where the value is a JSON object that can have
   *<br><br>
   * 1) a <code>max</code> and/or <code>min</code> property with a value, indicating the maximum or minimum screensize (in pixels) on which the flyout will be enabled.
   * <br><br>
   * A Flyout object requires trigger elements to open/close the flyout, with the data attribute <code>data-flyout-open</code>, <code>data-flyout-close</code>, or <code>data-flyout-toggle</code>. The value of the data attribute must be the data-flyout-id of the flyout element being targeted
   *
   * @example
   * <div class="flyout js-flyout" data-flyout-id="my-flyout" data-flyout-options="{'max':500,'min':200}">
   * This Is My Flyout
   * </div>
   * <button data-flyout-toggle="my-flyout">Toggle Flyout</button>
   *
   * @property {object} elements - Contains the flyout and its triggers
   * @property {string} id - The flyout ID
   * @property {json} options - options for the flyout
   * @property {string} [options.max] - max screen width at which this will be enabled
   * @property {string} [options.min] - min screen width at which this will be enabled
   * @property {string} max - Optional max extracted from options
   * @property {string} min - Optional min extracted from options
   */

  class Flyout {
    /**
     * Creates an instance of Flyout.
     *
     * @param {jQuery} $flyout - The flyout element.
     * @constructs Flyout
     * @memberof flyout
     */
    constructor($flyout) {
      if (!$flyout) {
        // eslint-disable-next-line no-console
        console.error("Flyout.constructor: No element was passed.");
        return false;
      }

      this.elements = {
        flyout: $flyout
      };
      this.id = $flyout.data("flyout-id") || false;
      this.options = $flyout.data("flyout-options") || false;
      this.max = this.options.max && Math.floor(this.options.max) !== this.options.max && !$.isNumeric(this.options.max) || this.max < 0 ? -1 : this.options.max;
      this.min = this.options.min && Math.floor(this.options.min) !== this.options.min && !$.isNumeric(this.options.min) || this.options.min < 0 ? -1 : this.options.min;
      this.disabled = this.isDisabled();
      this.hidden = false;

      if (this.id) {
        this.bindTriggers();
        this.addRoles();
        this.hideFlyout();
        this.run();
      }
    } // ------------------------------
    //  Methods
    // ------------------------------

    /**
     *	Listens and re-checks on window resize to see if the flyout should be disabled
     *
     * @private
     * @memberof Flyout
     */


    run() {
      let windowWidth = $(window).width();
      $(window).resize(() => {
        if ($(window).width() !== windowWidth) {
          windowWidth = $(window).width();
          this.refresh();
        }
      });
    }
    /**
     * checks to see if flyout should be disabled, rebinds triggers, hides the flyout.
     *
     * @private
     * @memberof Flyout
     */


    refresh() {
      this.disabled = this.isDisabled();
      this.bindTriggers();
      this.addRoles();
      this.hideFlyout();
    }
    /**
     * Checks if window size is smaller than min or larger than max.
     *
     * @private
     * @memberof Flyout
     */


    isDisabled() {
      if (this.max === -1 || this.min === -1) {
        return true;
      }

      return this.max < $(window).width() || this.min > $(window).width();
    }
    /**
     * Adds accessibility roles to a trigger element.
     *
     * @param {jQuery} $elem - The trigger to check for accessibility roles.
     * @private
     * @memberof Flyout
     */


    static addRole($elem) {
      if ($elem.prop("tagName") !== "Button" && $elem.attr("type") !== "submit" && !$elem.attr("role") && !$elem.attr("aria-role")) {
        $elem.attr("role", "button");
        $elem.attr("aria-role", "button");
      }
    }
    /**
     * Adds accessibility roles to all trigger elements. Must be run after this.bindTriggers.
     *
     * @private
     * @memberof Flyout
     */


    addRoles() {
      $([this.elements.toggle, this.elements.open, this.elements.close]).each((index, element) => {
        // using the class name here since it's a static method
        Flyout.addRole($(element));
      });
    }
    /**
     * Internal method that binds flyout triggers, based on the flyout element's ID, and adds them to <code>flyout.elements</code>. Handles click events. Note that trigger elements which are loaded through AJAX will have to be re-bound.
     *
     * @private
     * @memberof Flyout
     */


    bindTriggers() {
      this.elements.toggle = $.find(`[data-flyout-toggle="${this.id}"]`);
      this.elements.open = $.find(`[data-flyout-open="${this.id}"]`);
      this.elements.close = $.find(`[data-flyout-close="${this.id}"]`);

      if (this.disabled) {
        $(document).off(`click.flyout-${this.id}`);
        $(this.elements.toggle).off(`click.flyout-${this.id}`);
        $(this.elements.open).off(`click.flyout-${this.id}`);
        $(this.elements.close).off(`click.flyout-${this.id}`);
        return false;
      }

      $(document).off(`click.flyout-${this.id}`);
      $(document).on(`click.flyout-${this.id}`, `[data-flyout-toggle='${this.id}']`, event => {
        event.preventDefault();
        this.toggle();
      });
      $(document).on(`click.flyout-${this.id}`, `[data-flyout-open='${this.id}']`, event => {
        event.preventDefault();
        this.open();
      });
      $(document).on(`click.flyout-${this.id}`, `[data-flyout-close='${this.id}']`, event => {
        event.preventDefault();
        this.close();
      });
      return false;
    }
    /**
     * Internal method that hides the flyout element.
     *
     * @private
     * @memberof Flyout
     */


    hideFlyout() {
      if (this.disabled) {
        this.elements.flyout.hide().removeClass(CLASSES.flyoutActive);
        this.hidden = false;
        $("html").removeClass(CLASSES.noScroll);
        return false;
      } // Hide the flyout if it hasn't already been hidden.


      if (!this.hidden) {
        this.elements.flyout.removeClass(CLASSES.flyoutActive);
        this.hidden = true;
      }

      return false;
    }
    /**
     * Opens the flyout. Adds the class <code>is-active</code> to the flyout element.</code>.
     *
     * @fires Flyout:open
     * @memberof Flyout
     */


    open() {
      /**
       * A flyout element has been opened. Event is attached to a .js-flyout element.
       *
       * @event Flyout:open
       * @memberof Flyout
       * @example
       * $(.js-flyout).on('Flyout:open', function(event) { });
       */
      flyouts.forEach(flyout => {
        if (this.id !== flyout.id && !flyout.hidden) {
          flyout.close();
        }
      });
      $("html").addClass(CLASSES.noScroll);

      if (this.id === "cart-flyout") {
        $("body").addClass(CLASSES.cartFlyout);
      }

      let flyoutOffset = 0;

      if ($(".js-header").length > 0) {
        const stuckBarHeight = $(".js-header").outerHeight();
        flyoutOffset = stuckBarHeight;
      }

      this.elements.flyout.css("top", `${flyoutOffset}px`);
      this.elements.flyout.show().addClass(CLASSES.flyoutActive).on("transitionend webkittransitionEnd otransitionEnd MStransitionEnd", e => {
        $(this).trigger("Flyout:open");
        $(this).off(e);
      });
      this.hidden = false;
    }
    /**
     * Closes the flyout.
     * Removes the <code>is-active</code> class from the flyout element.
     *
     * @fires Flyout:close
     * @memberof Flyout
     */


    close() {
      $("html").removeClass(CLASSES.noScroll);
      $("body").removeClass(CLASSES.cartFlyout);
      this.elements.flyout.removeClass(CLASSES.flyoutActive);
      /**
       * A flyout element has been closed. Event is attached to a .js-flyout element.
       *
       * @event Flyout:close
       * @memberof Flyout
       * @example
       * $(.js-flyout).on('Flyout:close', function(event) { });
       */

      this.elements.flyout.on("transitionend webkittransitionEnd otransitionEnd MStransitionEnd", e => {
        // $(this).hide();
        $(this).off(e);
        $(this).trigger("Flyout:close");
      });
      this.hidden = true;
    }
    /**
     * Toggles the flyout depending on its current state.
     *
     * @memberof Flyout
     * @fires Flyout:toggle
     */


    toggle() {
      /**
       * A flyout element has been toggled. Event is attached to a .js-flyout element.
       *
       * @event Flyout:toggle
       * @memberof Flyout
       * @example
       * $(.js-flyout).on('Flyout:toggle', function(event) { });
       */
      this.elements.flyout.trigger("Flyout:toggle");
      const CART_FLYOUT = ".js-flyout";

      if (!this.hidden) {
        this.close();
        bodyScrollLock.enableBodyScroll(CART_FLYOUT);
      } else {
        this.open();
        bodyScrollLock.disableBodyScroll(CART_FLYOUT);
      }
    }

  } // ------------------------------
  //  Initialization
  // ------------------------------
  // eslint-disable-next-line no-param-reassign


  theme.Flyout = Flyout;
  const flyoutSelector = `.${CLASSES.flyout}`;
  $(flyoutSelector).each(function initialiseFlyouts() {
    // eslint-disable-next-line no-new
    flyouts.push(new theme.Flyout($(this)));
  });
})(window.theme = window.theme || {}, jQuery, window.bodyScrollLock);
/* eslint-disable */

/**
 * PRODUCTS
 *
 * @description Keeps track of all the products on the page
 * @namespace products
 */


((theme, $) => {
  /**
   * Class representing the products object.
   */
  class Products {
    /**
     * Creates an instance of Products.
     *
     * @param {object} [products] - An object of product objects with the handle as the key.
     * @constructs Products
     * @memberof Products
     */
    constructor(products) {
      this._list = products || {};
    } // ------------------------------
    //  Getters and Setters
    // ------------------------------

    /**
     * The product list object.<br><br>
     * @example
     * // Get the product list
     * theme.products.list
     *
     * @type {object}
     * @memberof Products
     */


    get list() {
      return this._list;
    }

    set list(cart) {
      // Don't allow the list to be overwritten
      return false;
    } // ------------------------------
    //  Methods
    // ------------------------------

    /**
     * Update the product list.
     * If the product doesn't exist, it will be added.
     * If the product exists, it will be updated. Parameters would be updated, not replaced.
     *
     * @param {(object|object[])} products - Product, object of products or array of products to add to the list.
     * @fires Products:add
     * @fires Products:change
     * @memberof Products
     * @example
     * // Examples use the following list:
     * // {
     * //   product-a: { handle: 'product-a', title: 'Product A' },
     * //   product-b: { handle: 'product-b', title: 'Product B' }
     * // }
     *
     * // Add 1 product
     * theme.products.update({ handle: 'product-c', title: 'Product C' });
     *
     * // Add product array
     * theme.products.update([
     *   { handle: 'product-c', title: 'Product C' },
     *   { handle: 'product-d', title: 'Product D' }
     * ]);
     *
     * // Add multiple product object
     * theme.products.update({
     *   product-c: { handle: 'product-c', title: 'Product C' },
     *   product-d: { handle: 'product-d', title: 'Product D' }
     * });
     *
     * // If the product exists, it will update the passed parameters
     * // Will result in product a having the following structure:
     * // { handle: 'product-a', title: 'Product A', price: 1200 }
     * theme.products.update({ handle: 'product-a', price: 1200 });
     */


    update(products) {
      if (!products || typeof products !== 'object') {
        return false;
      } // Convert to array if single product is passed


      if (products.handle) {
        products = [products];
      } else if (!Array.isArray(products)) {
        // Convert object of products into array of products
        products = Object.keys(products).map(key => {
          return products[key];
        }).filter(product => {
          return product.handle;
        });
      }

      products.forEach(product => {
        if (product.handle) {
          // If the product doesn't exists, add it, otherwise update it
          if (!this._list[product.handle]) {
            this._list[product.handle] = product;
            /**
             * Products have been added to the global list.
             * The event is attached to the document element.<br><br>
             *
             * @event Products:add
             * @property {object} product_added - The added product
             * @memberof Products
             * @example
             * $(document).on('Products:add', function(event, product_added) {});
             */

            $(document).trigger('Products:add', product);
          } else {
            let product_updated = theme.utils.modifyObject(this._list[product.handle], product);
            this._list[product.handle] = product_updated;
            /**
             * Product has been updated on the global list.
             * The event is attached to the document element.<br><br>
             *
             * @event Products:update
             * @property {object} product_updated - The updated product
             * @memberof Products
             * @example
             * $(document).on('Products:update', function(event, product) {});
             */

            $(document).trigger('Products:update', product_updated);
          }
        }
      });
    }

  } // Global export and initialization
  // Uses the products stored by the global object if available


  theme.products = new Products(theme.products && theme.products.list ? theme.products.list : {});
})(window.theme = window.theme || {}, jQuery);
/**
 * SLIDE GALLERY
 *
 * @description Carousel for the product gallery
 * @namespace theme.slideGallery
 */


(theme => {
  /**
   *
   * @class
   */
  class SlideGallery {
    /**
     * Construct slide gallery.
     *
     * @param  {String} selector
     * @param  {Object} options
     */
    constructor(selector, options = {}) {
      const defaults = {
        active: ".js-gallery-slide.is-active",
        // First active slide
        bg: ".js-gallery-bg",
        // Color background selector
        info: ".js-gallery-info",
        // Selector for text that we need to apply color changes
        light: true,
        // Makes all info elements light on 2nd slide
        animateBg: true // Enables background animations

      };
      this.selector = selector;
      this.settings = _objectSpread({}, defaults, {}, options);
    }
    /**
     * Change slide
     *
     * @param {String} slide
     * @return {SlideGallery}
     */


    go(slide) {
      const currSlide = this.getCurrSlide();

      if (!currSlide.classList.contains("is-anim--out")) {
        // If no slide found then default to first slide in gallery
        const newSlide = document.querySelector(`.js-gallery-slide[data-image-id="${slide}"]`) || document.querySelector(".js-gallery-slide");

        if (newSlide !== null && currSlide !== newSlide) {
          currSlide.classList.add("is-anim-out");

          if (this.settings.animateBg) {
            const color = this.getColor(newSlide);
            this.updateBg(color);
          }

          setTimeout(() => {
            currSlide.style.display = "none";
            currSlide.classList.remove("is-active", "is-anim-out");
            newSlide.classList.add("is-active");
            setTimeout(() => {
              currSlide.style.display = "initial";
            }, 300);
          }, 500);
        }
      }

      return this;
    }
    /**
     * Update background color
     *
     * @param {String} color HEX
     * @return {SlideGallery}
     */


    updateBg(color) {
      if (color !== "") {
        const bg = document.querySelector(this.settings.bg);
        bg.classList.add("is-anim");
        bg.style.backgroundColor = color;

        if (this.settings.light) {
          if (color !== "#ffffff") {
            this.updateInfoColor("light");
          } else {
            this.updateInfoColor("dark");
          }
        }

        setTimeout(() => {
          bg.classList.remove("is-anim");
        }, 500);
      }

      return this;
    }

    updateInfoColor(color) {
      document.querySelectorAll(this.settings.info).forEach(info => {
        if (color === "light") {
          info.classList.add("is-light");
        } else {
          info.classList.remove("is-light");
        }
      });
    }
    /**
     * Get slide background color
     *
     * @param {Object} slide
     * @return {String} color HEX
     */
    // eslint-disable-next-line class-methods-use-this


    getColor(slide) {
      if ("color" in slide.dataset) {
        return slide.dataset.color;
      }

      return "#ffffff";
    }
    /**
     * Get current slide
     *
     * @return {Object}
     */


    get slide() {
      return this.getCurrSlide();
    }
    /**
     * Get current slide
     *
     * @return {Object}
     */


    getCurrSlide() {
      return document.querySelector(this.settings.active);
    }

  } // eslint-disable-next-line no-console


  if (document.querySelector(".js-pdp-gallery") !== null) {
    // Disabling here makes sense since we intend to mutate
    // eslint-disable-next-line no-param-reassign
    theme.slideGallery = new SlideGallery(".js-pdp-gallery");
  }
})(window.theme = window.theme || {});

((theme, Vue) => {
  Vue.component("accordion", {
    data() {
      return {
        show: false
      };
    },

    methods: {
      toggle() {
        this.show = !this.show;
      }

    },
    template: "#js-accordion"
  });
})(window.theme = window.theme || {}, window.Vue);
/* eslint-disable */


(Vue => {
  // Allows browser to inspect the state of Vue instances
  Vue.config.devtools = true; // We change the delimiters to avoid conflicts with Liquid's syntax

  Vue.options.delimiters = ["${", "}"]; // Set up vuelidate for form validation.

  Vue.use(vuelidate.default);

  const install = function (Vue) {
    Vue.directive("Sticky", StickyDirective);
  };

  if (window.Vue) {
    Vue.use(install);
  }

  VueSelect.VueSelect.props.components.default = () => ({
    OpenIndicator: {
      template: "#vue-select-chevron"
    }
  });

  Vue.component("v-select", VueSelect.VueSelect);
})(Vue);

((theme, Vue) => {
  Vue.component("country-selector", {
    props: {
      modifier: {
        type: String,
        default: "",
        required: false
      }
    },

    data() {
      return _objectSpread({
        isActive: false
      }, JSON.parse(document.getElementById("js-country-selector-data").innerHTML));
    },

    computed: {
      modifierClass() {
        if (this.modifier) {
          return `c-country-selector--${this.modifier}`;
        }

        return "";
      },

      currentCountry() {
        return this.countries[this.selectedCountryIndex];
      }

    },

    created() {
      theme.vue_event_bus.$on("close_megamenu", () => {
        this.close();
      });
    },

    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },

      close() {
        this.isActive = false;
      },

      getImgSrcSet(country) {
        return `${country.flagUrl2x} 2x, ${country.flagUrl3x} 3x`;
      },

      getRedirectUrl(country) {
        return `${country.websiteUrl}?redirected=true`;
      }

    },
    template: "#js-country-selector-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  // eslint-disable-next-line no-param-reassign
  theme.vue_event_bus = new Vue();
})(window.theme = window.theme || {}, window.Vue);

(Vue => {
  Vue.filter("truncateText", (text, length = 30, clamp = "...") => {
    if (text.length <= length) return text;
    const truncatedText = text.slice(0, length - clamp.length);
    return truncatedText + clamp;
  });
})(window.Vue);

((theme, Vue, Flickity) => {
  Vue.component("flickity", {
    props: {
      options: {
        type: Object,
        required: true
      }
    },

    mounted() {
      this.init();
    },

    beforeDestroy() {
      this.$flickity.destroy();
      this.$flickity = null;
    },

    methods: {
      /**
       * Initialize a new flickity and emit init event.
       */
      init() {
        this.$flickity = new Flickity(this.$el, this.options);
        this.$emit("init", this.$flickity);
      },

      /**
       * Return the current flickity instance to access directly
       *
       * @return {Flickity}
       */
      flickity() {
        return this.$flickity;
      },

      /**
       * Selecting Slides
       */

      /**
       * Select a slide
       *
       * @param {number} index
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
      select(index, isWrapped, isInstant) {
        this.$flickity.select(index, isWrapped, isInstant);
      },

      /**
       * Change to the next slide
       *
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
      next(isWrapped, isInstant) {
        this.$flickity.next(isWrapped, isInstant);
      },

      /**
       * Change to the previous slide
       *
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
      previous(isWrapped, isInstant) {
        this.$flickity.previous(isWrapped, isInstant);
      },

      /**
       * Select a cell
       *
       * @param {number} value
       * @param {boolean} isWrapped
       * @param {boolean} isInstant
       */
      selectCell(value, isWrapped, isInstant) {
        this.$flickity.selectCell(value, isWrapped, isInstant);
      },

      /**
       * Sizing and Positioning
       */

      /**
       * Trigger a resize event
       */
      resize() {
        this.$flickity.resize();
      },

      /**
       * Trigger a reposition event
       */
      reposition() {
        this.$flickity.reposition();
      },

      /**
       * Adding and removing cells
       */

      /**
       * Prepend elements to flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
      prepend(elements) {
        this.$flickity.prepend(elements);
      },

      /**
       * Append elements to flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
      append(elements) {
        this.$flickity.append(elements);
      },

      /**
       * Insert elements at a given index
       *
       * @param {array|HTMLElement|NodeList} elements
       * @param {number} index
       */
      insert(elements, index) {
        this.$flickity.insert(elements, index);
      },

      /**
       * Remove elements from flickity
       *
       * @param {array|HTMLElement|NodeList} elements
       */
      remove(elements) {
        this.$flickity.remove(elements);
      },

      /**
       * Player
       */

      /**
       * Trigger a playPlayer event
       */
      playPlayer() {
        this.$flickity.playPlayer();
      },

      /**
       * Trigger a stopPlayer event
       */
      stopPlayer() {
        this.$flickity.stopPlayer();
      },

      /**
       * Trigger a pausePlayer event
       */
      pausePlayer() {
        this.$flickity.pausePlayer();
      },

      /**
       * Trigger a unpausePlayer event
       */
      unpausePlayer() {
        this.$flickity.unpausePlayer();
      },

      /**
       * Trigger a rerender event
       */
      rerender() {
        this.$flickity.destroy();
        this.init();
      },

      /**
       * Utilities
       */

      /**
       * Destroy the flickity instance
       */
      destroy() {
        this.$flickity.destroy();
      },

      /**
       * Trigger a rerender event
       */
      reloadCells() {
        this.$flickity.reloadCells();
      },

      /**
       * Get the cell elements
       *
       * @return {array}
       */
      getCellElements() {
        return this.$flickity.getCellElements();
      },

      /**
       * Return flickity data
       *
       * @return {Flickity}
       */
      data() {
        return Flickity.data(this.$el);
      },

      /**
       * Events
       */

      /**
       * Attach an event
       *
       * @param {string} eventName
       * @param {function} listener
       */
      on(eventName, listener) {
        this.$flickity.on(eventName, listener);
      },

      /**
       * Remove an event
       *
       * @param {string} eventName
       * @param {function} listener
       */
      off(eventName, listener) {
        this.$flickity.off(eventName, listener);
      },

      /**
       * Attach an event once
       *
       * @param {string} eventName
       * @param {function} listener
       */
      once(eventName, listener) {
        this.$flickity.once(eventName, listener);
      },

      /**
       * Properties
       */

      /**
       * Return the selected element
       *
       * @return {HTMLElement}
       */
      selectedElement() {
        return this.$flickity.selectedElement;
      },

      /**
       * Return the selected elements
       *
       * @return {array}
       */
      selectedElements() {
        return this.$flickity.selectedElements;
      },

      /**
       * Return the selected index
       *
       * @return {number}
       */
      selectedIndex() {
        return this.$flickity.selectedIndex;
      },

      /**
       * Return the cells
       *
       * @return {array}
       */
      cells() {
        return this.$flickity.cells;
      },

      /**
       * Return the slides
       *
       * @return {array}
       */
      slides() {
        return this.$flickity.slides;
      },

      /**
       * Disable dragging of slider
       */
      disableDrag() {
        this.$flickity.options.draggable = false;
        this.$flickity.updateDraggable();
      },

      /**
       * Enable dragging of slider
       */
      enableDrag() {
        this.$flickity.options.draggable = true;
        this.$flickity.updateDraggable();
      }

    },
    template: "#js-flickity-template"
  });
})(window.theme = window.theme || {}, window.Vue, window.Flickity);

(theme => {
  const headerHeights = {
    mobile: 88,
    desktop: 108
  };
  const defaultDateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric"
  }; // eslint-disable-next-line no-param-reassign

  theme.vue_mixins = {
    tagProcessors: {
      methods: {
        getTagTextFromArray(tags, tagIdentifier) {
          let tagList = tags;

          if (typeof tagList === "string") {
            tagList = tagList.split(",");
          }

          if (tagList) {
            const targetTags = tagList.filter(tag => {
              return tag.startsWith(tagIdentifier);
            });

            if (targetTags.length) {
              const targetTag = targetTags[0];
              const textIndex = targetTag.indexOf(tagIdentifier) + tagIdentifier.length;
              return targetTag.slice(textIndex).replace(/_/g, " ");
            }
          }

          return "";
        },

        getTagText(tag, tagIdentifier) {
          const textIndex = tag.indexOf(tagIdentifier) + tagIdentifier.length;
          return tag.slice(textIndex).replace(/_/g, " ");
        }

      }
    },
    articleObject: {
      data() {
        return {
          articleDateTime: "",
          articlePublishedDate: "",
          mainCategoryTag: "",
          placeholderImageSrc: "https://cdn.shopify.com/s/files/1/0857/5574/files/structure-help-help-search-results-image_3x_f465b79c-34f0-41fd-9732-100024f44991.png?38387"
        };
      },

      mounted() {
        // sets up variables for the article
        this.articleDateTime = new Date(this.article.published_at).toLocaleDateString({
          dateStyle: "full"
        });
        this.articlePublishedDate = new Date(this.article.published_at).toLocaleDateString("en-US", this.dateOptions || defaultDateOptions) || "";
        this.mainCategoryTag = this.getTagTextFromArray(this.article.tags, "_category::") || this.article.blog_title || theme.blog.title;
      }

    },
    stickyHandlers: {
      data() {
        return {
          barIsStuck: false,
          barOffset: {}
        };
      },

      created() {
        window.addEventListener("resize", $.debounce(800, this.determineBarOffset));
        this.determineBarOffset();
      },

      methods: {
        updateStuckState(state) {
          this.barIsStuck = state.sticked;
        },

        determineBarOffset() {
          const breakpoint = parseInt(theme.breakpoints.md, 10);

          if (window.innerWidth > breakpoint) {
            this.barOffset.top = headerHeights.desktop;
          } else {
            this.barOffset.top = headerHeights.mobile;
          }

          this.atcBarReady = false;
          this.$nextTick(() => {
            this.atcBarReady = true;
          });
        }

      }
    },
    modifierClass: {
      props: {
        modifier: {
          type: [String, Array],
          default: "",
          required: false
        }
      },
      computed: {
        modifierClass() {
          if (this.modifier && this.baseClass) {
            if (Array.isArray(this.modifier)) {
              return this.modifier.map(modifierString => `${this.baseClass}--${modifierString}`).join(" ");
            }

            return `${this.baseClass}--${this.modifier}`;
          }

          return "";
        }

      }
    }
  };
})(window.theme = window.theme || {});
/* eslint-disable no-param-reassign */


((theme, Vue) => {
  Vue.component("vue-nav", {
    data() {
      return {
        nav_data: JSON.parse(document.getElementById("js-nav-data").innerHTML)
      };
    },

    created() {
      theme.vue_event_bus.$on("close_megamenu", () => {
        this.closeAll();
      });
    },

    methods: {
      toggleActive(link) {
        if (theme.utils.isMatchingMedia(theme.breakpoints.md, "max")) {
          if (link.is_active && link.blocks) {
            link.blocks.forEach(block => {
              block.is_active = false;
            });
          }

          link.is_active = !link.is_active;

          if (link.is_active) {
            link.is_animating = true;
          } else {
            setTimeout(() => {
              link.is_animating = false;
            }, 200);
          }
        }
      },

      closeAll(link) {
        this.nav_data.nav_top_links.forEach(topLink => {
          if (link !== topLink) {
            topLink.is_active = false;
          }

          topLink.blocks.forEach(block => {
            block.is_active = false;
          });
        });
      },

      toggleTopLinks(link) {
        if (theme.utils.isMatchingMedia(theme.breakpoints.md, "max")) {
          this.closeAll(link);
          this.toggleActive(link);
        }
      },

      checkForBadgeTag(product) {
        const badgeTagIdentifier = "_badge::";
        const badgeTags = product.tags.filter(tag => {
          return tag.startsWith(badgeTagIdentifier);
        });
        return badgeTags.length;
      },

      generateCustomBadgeText(product) {
        const badgeTagIdentifier = "_badge::";

        if (product && product.tags) {
          const badgeTags = product.tags.filter(tag => {
            return tag.startsWith(badgeTagIdentifier);
          });

          if (badgeTags.length) {
            const firstBadgeTag = badgeTags[0];
            const textIndex = firstBadgeTag.indexOf(badgeTagIdentifier) + badgeTagIdentifier.length;
            const badgeText = firstBadgeTag.slice(textIndex).replace(/_/g, " ");
            return badgeText.charAt(0).toUpperCase() + badgeText.slice(1);
          }
        }

        return "";
      }

    },
    template: "#js-nav-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("product-review", {
    mixins: [theme.vue_mixins.modifierClass],
    props: {
      review: {
        type: Object,
        required: true
      },
      truncateCharLength: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        baseClass: "c-review",
        isOpen: false
      };
    },

    computed: {
      hasMoreText() {
        return this.isTruncated && !this.isOpen;
      },

      isTruncated() {
        return this.review.content.length > this.truncateCharLength;
      }

    },
    methods: {
      readMore() {
        this.$emit("read-more-clicked");
      },

      expand() {
        // can be used in case we need to expand it in place
        this.isOpen = true;
      }

    },
    template: "#js-product-review"
  });
})(window.theme = window.theme || {}, window.Vue);

(Vue => {
  Vue.component("product-tile-feature", {
    props: {
      feature: {
        type: Object,
        required: true
      }
    },
    template: "#js-product-tile-feature"
  });
})(window.Vue);

((theme, Vue) => {
  const badgePrefix = "_badge::";
  Vue.component("product-tile", {
    props: {
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      product: {
        type: Object,
        required: true
      },
      tileType: {
        type: String,
        default: "",
        required: false
      },
      isFeatured: {
        type: Boolean,
        default: false,
        required: false
      }
    },

    data() {
      return {
        selectedVariant: null,
        features_expanded: false,
        cta1Class: "o-btn o-btn--outline",
        cta2Class: "o-btn o-btn--fill",
        product_category: this.product.type.includes("Wire") ? "hardware" : "accessories"
      };
    },

    computed: {
      features() {
        let relevantFeatures = [];
        relevantFeatures = this.product.tags.reduce((productFeatures, tag) => {
          if (theme.product_features[tag]) {
            productFeatures.push(theme.product_features[tag]);
          }

          return productFeatures;
        }, []);
        relevantFeatures.sort((a, b) => a.order - b.order);
        return relevantFeatures;
      },

      variantDisplayPrice() {
        return theme.utils.toMoney(this.selectedVariant.price, {
          cents: true
        });
      },

      variantCompareAtPrice() {
        if (this.selectedVariant.compare_at_price && this.selectedVariant.compare_at_price > this.selectedVariant.price) {
          return theme.utils.toMoney(this.selectedVariant.compare_at_price, {
            cents: true
          });
        }

        return false;
      },

      colourOption() {
        let colourOption;
        this.product.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("color") || lowercaseOptionName.includes("colour")) {
            colourOption = option;
          }
        });
        return colourOption || false;
      },

      selectedColour() {
        if (this.colourOption.values) {
          return this.colourOption.values[0];
        }

        return false;
      },

      sizeOption() {
        let sizeOption;
        this.product.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("size")) {
            sizeOption = option;
          }
        });
        return sizeOption || false;
      },

      badge() {
        let badge;

        if (this.product.tags && this.product.tags.length) {
          const productTags = this.product.tags;
          const badgeTags = productTags.filter(this.checkForBadge);

          if (badgeTags.length) {
            badge = badgeTags.map(this.formatBadgeLabel).join(", ");
          }
        }

        return badge || false;
      },

      modifierClass() {
        let classesString = `c-product-tile--${this.product_category} `;

        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            classesString += this.modifier.map(modifierString => `c-product-tile--${modifierString}`).join(" ");
          } else {
            classesString += `c-product-tile--${this.modifier}`;
          }
        }

        return classesString;
      },

      wrapperModifierClass() {
        let classesString = `c-product-tile__wrapper--${this.product_category} `;

        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            classesString += this.modifier.map(modifierString => `c-product-tile__wrapper--${modifierString}`).join(" ");
          } else {
            classesString += `c-product-tile__wrapper--${this.modifier}`;
          }
        }

        return classesString;
      },

      isActive() {
        if (this.tileType === "bundle") {
          if (theme.bundleDataStore.state.bundleProduct === this.product) {
            return "is-active";
          }
        }

        return "";
      },

      isInStock() {
        if (this.selectedVariant.inventory_management === null || this.selectedVariant.inventory_policy === "continue" || this.selectedVariant.inventory_quantity > 0) {
          return true;
        }

        return false;
      }

    },

    mounted() {
      if (this.modifier.includes("narrow")) {
        this.cta1Class = "o-btn o-btn--fill o-btn--tiny";
        this.cta2Class = "o-btn o-btn--outline o-btn--tiny";
      }
    },

    created() {
      this.selectedVariant = this.product.variants.find(variant => {
        // since the selected_or_first_available_variant object won't have the URL on it that we added to the other variant objects in product_json.liquid, we need to find that URL
        return variant.id === this.product.selected_or_first_available_variant.id;
      });
    },

    methods: {
      addToCart(variant) {
        if (!variant) {
          throw Error("Cart.add: No item was passed.");
        }

        if (variant.inventory_management === null || variant.inventory_quantity > 0) {
          const item = {};
          item.id = variant.id;
          item.quantity = 1; // TODO: Remove after BFCM

          if (this.tileType !== "holiday-bundle") {
            theme.cart.add(item).then(response => {
              theme.vue_event_bus.$emit("Cart:add", response);
            }).catch(resp => {
              throw Error("Failed adding to the cart.", resp);
            });
          } else {
            const bundleKey = `bundle_${variant.id}`;
            item.properties = {
              _bundleID: bundleKey
            };
            const promises = [];
            promises.push(theme.cart.add(item, {
              silent: true
            }));
            const holidayBundle = {
              id: 31156268007511,
              quantity: 1,
              properties: {
                _bundleParentID: bundleKey
              }
            };
            promises.push(theme.cart.add(holidayBundle, {
              silent: true
            }));
            Promise.all(promises).then(() => {
              theme.vue_event_bus.$emit("Cart:add");
            });
          }
        }
      },

      toggleFeatures() {
        this.features_expanded = !this.features_expanded;
      },

      featuresTransitionHandler(event) {
        // we listen for the end of the max-height transition occurring on the features wrapper element, so that we can then emit an event that the parent component will listen to in order to resize Flickity (since the tile height has changed).
        if (event.target === this.$refs.featuresWrapper) {
          this.$emit("features-expanded", this.product);
        }
      },

      checkForBadge(tag) {
        return tag.startsWith(badgePrefix);
      },

      formatBadgeLabel(badgeTag) {
        return badgeTag.replace(badgePrefix, "").split("_").map(s => {
          return s.charAt(0).toUpperCase() + s.substring(1);
        }).join(" ");
      },

      selectBundle() {
        theme.bundleDataStore.setBundleProductAndVariant(this.product);
      },

      addCustomization() {
        this.$emit("add-option", this.selectedVariant, this.product);
      },

      onProductTileClicked() {
        this.$emit("product-tile-focused", this.product);
      }

    },
    template: "#js-product-tile"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("search-field", {
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "",
        required: false
      },
      value: {
        type: String,
        default: "",
        required: false
      },
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      }
    },

    data() {
      return {
        search: "",
        labelText: this.$attrs["label-text"] || null,
        inputPlaceholderText: this.$attrs["input-placeholder-text"] || null,
        searchButtonText: this.$attrs["search-button-text"] || null,
        deleteButtonText: this.$attrs["delete-button-text"] || null
      };
    },

    computed: {
      modifierClass() {
        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            return this.modifier.map(modifierString => `c-search-field--${modifierString}`).join(" ");
          }

          return `c-search-field--${this.modifier}`;
        }

        return "";
      },

      inputId() {
        if (this.name) {
          return `q-${this.name}-search-field-input`;
        }

        return "q-search-field-input";
      },

      hasContent() {
        return this.search !== "";
      }

    },
    methods: {
      deleteSearch() {
        this.search = "";
        this.$emit("input", this.search);
      }

    },
    template: "#js-search-field"
  });
})(window.theme = window.theme || {}, window.Vue);

(Vue => {
  Vue.component("size-toggle", {
    props: {
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      sizeOption: {
        type: Object,
        default: null,
        required: false
      },
      selectedSize: {
        type: String,
        default: "Standard Size",
        required: false
      }
    },

    data() {
      return {
        is_active: true
      };
    },

    computed: {
      modifierClass() {
        if (this.modifier) {
          return `o-toggle--${this.modifier}`;
        }

        return "";
      },

      selectedSizeLabel() {
        if (this.selectedSize.toLowerCase().includes("mini")) {
          return "Mini";
        }

        return "Standard";
      }

    },
    methods: {
      toggle() {
        if (this.selectedSize && this.sizeOption) {
          // toggles the size value by comparing the currently selected size to the possible sizes (of two)
          const sizeValue = this.selectedSizeLabel === "Mini" ? "Standard" : "Mini";
          this.$emit("update-size", sizeValue);
        }
      }

    },
    template: "#js-size-toggle"
  });
})(window.Vue);

(Vue => {
  Vue.component("product-star-rating", {
    name: "ProductStarRating",
    props: {
      averageRating: {
        type: Number,
        required: true
      },
      reviewsCount: {
        type: Number,
        default: 0,
        required: false
      },
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      reviewUrl: {
        type: String,
        default: null,
        required: false
      },
      withCount: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        starsOutput: []
      };
    },

    computed: {
      modifierClass() {
        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            return this.modifier.map(modifierString => `o-star-rating--${modifierString}`).join(" ");
          }

          return `o-star-rating--${this.modifier}`;
        }

        return "";
      }

    },

    mounted() {
      let rating = this.averageRating;
      const output = [];
      rating = (Math.round(rating * 10) / 10).toFixed(1) * 100;

      for (let i = 1; i < 6; i += 1) {
        const starRating = i * 100;
        const starRatingHalf = starRating - 50;

        if (rating >= starRating) {
          // Full star
          output.push("star");
        } else if (rating >= starRatingHalf) {
          // Half star
          output.push("half-star");
        } else {
          // Empty star
          output.push("empty-star");
        }
      }

      this.starsOutput = output;
    },

    template: "#js-star-rating-template"
  });
})(window.Vue);

((Vue, theme) => {
  Vue.component("swatches", {
    props: {
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      colourOption: {
        type: Object,
        required: true
      },
      productID: {
        type: Number,
        required: true
      },
      selectedColour: {
        type: String,
        required: true
      },
      showOnMobile: {
        type: Boolean,
        default: true,
        required: false
      },
      isBundle: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    data() {
      return {
        picked: this.selectedColour,
        componentID: theme.utils.uniqueNumber(5)
      };
    },

    computed: {
      pickedColour: {
        get() {
          if (this.isBundle) {
            return theme.bundleDataStore.state.bundleProductColour;
          }

          return this.picked;
        },

        set(pickedColour) {
          const swatches = [...document.querySelectorAll(".js-swatch-radio")];
          swatches.forEach(swatch => swatch.setAttribute("disabled", "true"));
          setTimeout(() => {
            swatches.forEach(swatch => swatch.removeAttribute("disabled"));
          }, 800);
          this.picked = pickedColour;
          this.$emit("input", pickedColour);
        }

      },

      modifierClass() {
        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            return this.modifier.map(modifierString => `o-swatch--${modifierString}`).join(" ");
          }

          return `o-swatch--${this.modifier}`;
        }

        return "";
      }

    },
    watch: {// picked() {
      //   this.$emit("input", this.picked);
      // }
    },
    methods: {
      colourHandle(colourValue) {
        return colourValue.handleize();
      },

      generateInputID(colourValue) {
        return `color-radio-${colourValue}-${this.productID}-${this.componentID}`;
      }

    },
    template: "#js-swatches-template"
  });
})(window.Vue, window.theme = window.theme || {});

((theme, Vue) => {
  Vue.component("variant-selector", {
    props: {
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      product: {
        type: Object,
        required: true
      },
      initialVariant: {
        type: Object,
        required: true
      },
      bundlePicker: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    data() {
      return {
        selectedColour: "",
        selectedSize: "standard size",
        showMobileSwatches: false,
        showMobileSizes: false,
        bundleState: theme.bundleDataStore && theme.bundleDataStore.state || {}
      };
    },

    computed: {
      retrieveBundleProducts() {
        const {
          products
        } = this.bundleState.bundleData;
        const productIdentifiers = products.map(product => {
          return {
            label: product.title,
            value: product
          };
        });
        return productIdentifiers;
      },

      selectedProduct: {
        get() {
          return {
            label: this.bundleState.bundleProduct.title,
            value: this.bundleState.bundleProduct
          };
        },

        set(product) {
          theme.bundleDataStore.setBundleProductAndVariant(product.value);
        }

      },
      selectedProductColour: {
        get() {
          if (this.isBundle()) {
            return this.bundleState.bundleProductColour;
          }

          return this.selectedColour;
        },

        set(newColour) {
          if (this.isBundle()) {
            // eslint-disable-next-line no-param-reassign
            theme.bundleDataStore.state.bundleProductColour = newColour;
          }

          this.selectedColour = newColour;
        }

      },
      selectedProductSize: {
        get() {
          if (this.isBundle()) {
            return this.bundleState.bundleProductSize;
          }

          return this.selectedSize;
        },

        set(newSize) {
          if (this.isBundle()) {
            // eslint-disable-next-line no-param-reassign
            theme.bundleDataStore.state.bundleProductSize = newSize;
          }

          this.selectedSize = newSize;
        }

      },

      variantDisplayPrice() {
        if (this.selectedVariant) {
          return theme.utils.toMoney(this.selectedVariant.price, {
            cents: true
          });
        }

        return null;
      },

      modifierClass() {
        if (this.modifier) {
          if (Array.isArray(this.modifier)) {
            return this.modifier.map(modifierString => `c-variant-selector--${modifierString}`).join(" ");
          }

          return `c-variant-selector--${this.modifier}`;
        }

        return "";
      },

      selectedVariant() {
        const possibleVariants = this.product.variants.filter(variant => {
          // if no sizeOption exists, it's true by default;
          let sizeMatch = true;
          let colourMatch = true;

          if (this.colourOption) {
            colourMatch = false;
            const variantColour = variant.options[this.colourOption.position - 1];
            colourMatch = this.selectedProductColour === variantColour;
          }

          if (this.sizeOption) {
            sizeMatch = false;
            const variantSize = variant.options[this.sizeOption.position - 1].toLowerCase();
            const selectedSizeLowerCase = this.selectedProductSize.toLowerCase();

            if (selectedSizeLowerCase === "mini" && variantSize.includes("mini") || selectedSizeLowerCase === "standard" && !variantSize.includes("mini")) {
              sizeMatch = true;
            }
          }

          return colourMatch && sizeMatch;
        });
        const selectedVariant = possibleVariants[0];
        return selectedVariant;
      },

      colourOption() {
        let colourOption;
        this.product.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("color") || lowercaseOptionName.includes("colour")) {
            colourOption = option;
          }
        });
        return colourOption || false;
      },

      sizeOption() {
        let sizeOption;
        this.product.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("size")) {
            sizeOption = option;
          }
        });
        return sizeOption || false;
      }

    },
    watch: {
      selectedVariant(newVariant) {
        const clonedVariant = newVariant;

        if (clonedVariant) {
          if (this.colourOption) {
            clonedVariant.colourHandle = this.getVariantOptionValue(clonedVariant, this.colourOption).handleize();

            if (theme.slideGallery !== undefined) {
              theme.slideGallery.go(clonedVariant.id);
            }
          }

          this.$emit("update-selected-variant", clonedVariant);
        }
      }

    },

    created() {
      // initialise variant selector using values from initial variant
      this.updateValuesFromVariant(this.initialVariant);
    },

    methods: {
      isBundle() {
        if (Object.keys(this.bundleState).length && this.bundleState.bundleData.products.some(product => {
          return this.product.id === product.id;
        })) {
          return true;
        }

        return false;
      },

      openFitGuide() {
        theme.vue_event_bus.$emit("ProductPage:show-fit-guide");
      },

      updateValuesFromVariant(variant) {
        // intended to be used on initialisation
        let variantColour = null;

        if (this.colourOption) {
          variantColour = this.getVariantOptionValue(variant, this.colourOption);
          this.selectedColour = variantColour;
        }

        let variantSize = null;

        if (this.sizeOption) {
          variantSize = this.getVariantOptionValue(variant, this.sizeOption);

          if (variantSize.toLowerCase().includes("mini")) {
            this.selectedSize = "Mini";
          } else {
            this.selectedSize = "Standard";
          }
        }
      },

      updateSelectedSize(sizeValue) {
        // will be 'mini' or 'standard'
        this.selectedProductSize = sizeValue;
      },

      getVariantOptionValue(variant, option) {
        return variant.options[option.position - 1];
      },

      colourHandle(colourValue) {
        return colourValue.handleize();
      },

      toggleShowMobileSwatches() {
        this.showMobileSwatches = !this.showMobileSwatches;
        this.showMobileSizes = false;
      },

      toggleShowMobileSizes() {
        this.showMobileSizes = !this.showMobileSizes;
        this.showMobileSwatches = false;
      }

    },
    template: "#js-variant-selector-template"
  });
})(window.theme = window.theme || {}, window.Vue); // ------------------------------
// VUE COMPONENTS
// ------------------------------

/* Note: The 'valuePropertyName' and 'labelPropertyName' properties let us render both the v-select Options and the native <select> element's option elements according to a single source of truth, the Options prop.

If an array of complex objects is passed in as the Options prop, v-select will use the 'label' attribute as the property name to find the Label for each option, and the complex Object as the Value for each option.

The native Select will render its options from attributes of the complex Object, using the strings labelPropertyName and valuePropertyName to determine the attributes.

So for example, for a product Dropdown, we might specify a Label attribute 'title' and a valuePropertyName prop 'handle'. The v-select will render each option using the product title as its label and the product object as its value, and the native select will render each option using the product title as its label and the product's handle as its value.
 */


((theme, Vue) => {
  Vue.component("accessible-select", {
    props: {
      options: {
        type: Array,
        required: true
      },
      placeholder: {
        type: String,
        required: false,
        default: ""
      },
      modifier: {
        type: String,
        required: false,
        default: ""
      },
      selectId: {
        type: String,
        required: true
      },
      valuePropertyName: {
        type: String,
        required: false,
        default: "value"
      },
      name: {
        type: String,
        required: false,
        default: ""
      }
    },

    data() {
      return {
        labelPropertyName: this.$attrs.label || "label"
      };
    },

    computed: {
      picked: {
        get() {
          return this.$attrs.value;
        },

        set(value) {
          this.$attrs.value = value; // this.$set(this.$attrs, "value", value);

          this.$emit("input", value);
        }

      }
    },
    watch: {},
    methods: {
      nativePickValue(stringValue) {
        this.picked = this.options.find(obj => obj[this.valuePropertyName] === stringValue);
      }

    },
    template: "#js-accessible-select-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("AmbassadorTile", {
    props: {
      article: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        passion: this.article.passion || ""
      };
    },

    template: "#js-ambassador-tile-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("bundle-tile", {
    props: {
      modifier: {
        type: String,
        default: "",
        required: false
      },
      pageHandle: {
        type: String,
        required: true
      },
      product: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        selectedVariant: null
      };
    },

    computed: {
      getVariantImage() {
        const imageSize = "284x";
        let bundleImage = null;

        if (this.selectedVariant.featured_image && this.selectedVariant.featured_image.src) {
          bundleImage = theme.utils.getSizedImageUrl(this.selectedVariant.featured_image.src, imageSize);
        } else {
          bundleImage = theme.utils.getSizedImageUrl(this.product.images[0], imageSize);
        }

        return bundleImage;
      }

    },

    created() {
      const validVariantTags = this.product.tags.filter(tag => {
        if (tag.split("::")[0] === "_bundle") {
          return true;
        }

        return false;
      });

      if (validVariantTags.length) {
        let bundlePageMatch = false;
        validVariantTags.forEach(tag => {
          const addonTagInfo = tag.split("::");
          const bundlePageHandle = addonTagInfo[1];

          if (bundlePageHandle === this.pageHandle) {
            bundlePageMatch = true;

            if (addonTagInfo.length === 3) {
              const addonVariantID = addonTagInfo[2];
              const variant = this.product.variants.find(x => {
                return String(x.id) === addonVariantID;
              });

              if (variant) {
                this.selectedVariant = variant;
              } else {
                // if the variant ID specified in the tag didn't correspond to a variant in the product
                throw Error(`Invalid tag ${tag}, variant ${addonVariantID} does not exist in product`);
              }
            } else if (addonTagInfo.length === 2) {
              // if the tag only has 2 parts, we assume it's in the format "_bundle::bundle_page_handle"
              this.setSelectedToDefault();
            }
          }
        });

        if (!bundlePageMatch) {
          // if the bundle Page Handle doesn't match the current page Handle,
          throw Error(`Invalid product "${this.product.title}", no tags matching bundle page "${this.pageHandle}"`);
        }
      } else {
        this.setSelectedToDefault();
      }
    },

    methods: {
      addCustomization() {
        this.$emit("add-option", this.selectedVariant, this.product);
      },

      setSelectedToDefault() {
        this.selectedVariant = this.product.variants.find(variant => {
          // since the selected_or_first_available_variant object won't have the URL on it that we added to the other variant objects in product_json.liquid, we need to find that URL
          return variant.id === this.product.selected_or_first_available_variant.id;
        });
      },

      getProductDescription(htmlDescription) {
        const parser = new DOMParser();
        const serializer = new XMLSerializer();
        const htmlProductDescription = parser.parseFromString(htmlDescription, "text/html");
        const shortDescription = htmlProductDescription.getElementsByTagName("p")[0];
        const serializedDescription = serializer.serializeToString(shortDescription);
        return serializedDescription;
      }

    },
    template: "#js-bundle-tile"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  const customizationTiles = "56x56";
  Vue.component("bundler", {
    props: {
      bundleState: {
        type: Object,
        required: true
      },
      selectedVariant: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        flickityOptions: {
          draggable: ">1",
          pageDots: false,
          prevNextButtons: true,
          contain: true,
          imagesLoaded: true,
          groupCells: true,
          arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 65,
            y2: 50,
            x3: 15
          }
        },
        customizations: [null, null, null],
        currentIndex: 0
      };
    },

    computed: {
      getCustomizationStage() {
        return this.currentIndex + 1;
      },

      getProductImage() {
        return this.getImage(this.selectedVariant.featured_image.src, customizationTiles);
      },

      bundleOptions() {
        const bundleOptions = Object.values(this.bundleState.bundleData.bundleOptions);
        const currentOptions = bundleOptions[this.currentIndex];
        return currentOptions;
      },

      isBundleValid() {
        return !this.customizations.some(addon => {
          return Object.is(addon, null);
        });
      }

    },
    watch: {
      bundleOptions() {
        this.$nextTick(() => {
          this.$refs.flickityBundler.init();
        });
      }

    },
    methods: {
      getKey(product, index) {
        return `${product.id}-${index}`;
      },

      getImage(url, size) {
        const imageURL = theme.utils.getSizedImageUrl(url, size);
        return imageURL;
      },

      getAddonImage(addon) {
        let addonImage = "";

        if (addon.selectedVariant.featured_image) {
          addonImage = addon.selectedVariant.featured_image.src;
        } else {
          addonImage = addon.product.featured_image;
        }

        return this.getImage(addonImage, customizationTiles);
      },

      configureOptions(selectedVariant, product) {
        if (this.currentIndex !== 2) {
          this.$refs.flickityBundler.destroy();
        }

        this.customizations.splice(this.currentIndex, 1, {
          selectedVariant,
          product
        });
        this.nextCustomization();
      },

      nextCustomization() {
        if (this.currentIndex < 2 && (this.customizations[this.currentIndex + 1] || this.customizations[this.currentIndex])) {
          this.$refs.flickityBundler.destroy();
          this.currentIndex += 1;
        }
      },

      previousCustomization() {
        if (this.currentIndex > 0) {
          this.$refs.flickityBundler.destroy();
          this.currentIndex -= 1;
        }
      },

      goToOption(index) {
        if (this.customizations[index] || this.customizations[index - 1]) {
          if (this.currentIndex !== index) {
            this.$refs.flickityBundler.destroy();
          }

          this.currentIndex = index;
        }
      },

      addToCart() {
        // add to cart items
        // close modal
        // when a bundle variant is added with any combination of the same 3 sub-items, we want to create a unique key so that it will stack (form a line item) with the same bundle. To achieve this, we sort the sub-item variant IDs to make a unique Key.
        const sortedSubItems = this.customizations.map(addon => addon.selectedVariant).sort((a, b) => a.id - b.id);
        const subItemsKey = sortedSubItems.reduce((acc, item) => {
          return `${acc}-${item.id.toString(36)}`;
        }, "");
        const bundleKey = `bundle_${this.selectedVariant.id}${subItemsKey}`; // Then we add that key as a line item property, to group bundles with the same sub-item and variant choice.

        const productData = {
          id: this.selectedVariant.id,
          quantity: 1,
          properties: {
            _bundleID: bundleKey
          }
        };
        const promises = [];
        promises.push(theme.cart.add(productData, {
          silent: true
        })); // then we add the sub-items, associating them with the bundle via the key again.

        this.customizations.forEach(addon => {
          const variant = addon.selectedVariant;
          const data = {
            id: variant.id,
            quantity: 1,
            properties: {
              _bundleParentID: bundleKey
            }
          };
          promises.push(theme.cart.add(data, {
            silent: true
          }));
        });
        Promise.all(promises).then(() => {
          this.$emit("bundle-added");
        });
      }

    },
    template: "#js-bundler"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue, $) => {
  Vue.component("cart-line-item", {
    props: {
      item: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        quantityMax: 10,
        bundleChildren: this.item.bundleChildren || null,
        infinite: true,
        colourHandle: "",
        sizeHandle: ""
      };
    },

    computed: {
      price() {
        return theme.utils.toMoney(this.item.line_price, {
          cents: true
        });
      }

    },

    mounted() {
      this.colourHandle = this.getColourHandle(this.item);
      this.sizeHandle = this.getSizeHandle(this.item); // when cart is fetched from Shopify backend (after an Add or an Update), the line items in the response have no 'variant' property. So we check:

      if (this.item.variant) {
        // some variants are unmanaged, some are managed but have 'continue', and some are managed but have 'deny'.
        const variantQuantityIsInfinite = this.item.variant.inventory_management === null || this.item.variant.inventory_policy === "continue";
        this.infinite = variantQuantityIsInfinite;

        if (!variantQuantityIsInfinite) {
          // if it's not infinite, restrict the max quantity to either the current inventory or 10, whichever is less
          this.quantityMax = Math.min(10, this.item.variant.inventory_quantity);
        }
      }
    },

    methods: {
      handleQuantityChange(item, $event) {
        const cappedValue = Math.min($event.target.value, this.quantityMax);

        if (this.bundleChildren) {
          // if this is an item with bundle children, that means we need to update all of the quantities in one Update request (to avoid multiple change requests). We'll create an array of objects
          const createUpdate = lineItem => ({
            id: lineItem.key,
            quantity: cappedValue
          });

          const updates = [createUpdate(item), ...this.bundleChildren.map(createUpdate)];
          theme.cart.update(updates);
        } else {
          theme.cart.change({
            id: item.key,
            quantity: cappedValue
          });
        }
      },

      // eslint-disable-next-line func-names
      debouncedQuantityChange: $.debounce(400, function (item, $event) {
        if ($event.target.value !== "") {
          this.handleQuantityChange(item, $event);
        }
      }),

      removeItem(item) {
        if (this.bundleChildren) {
          // eslint-disable-next-line no-console
          console.log(...this.bundleChildren.map(bundleChild => bundleChild.key)); // if this is an item with bundle children, that means we need to remove all of the items in one Remove request (to avoid multiple change requests).

          const updates = [item.key, ...this.bundleChildren.map(bundleChild => bundleChild.key)];
          theme.cart.remove(updates);
        } else {
          theme.cart.remove(item.key);
        }
      },

      getColourHandle(item) {
        let colourValue = false;
        item.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("color") || lowercaseOptionName.includes("colour")) {
            colourValue = option.value.handleize();
          }
        });
        return colourValue;
      },

      getSizeHandle(item) {
        let sizeValue = false;
        item.options_with_values.forEach(option => {
          const lowercaseOptionName = option.name.toLowerCase();

          if (lowercaseOptionName.includes("size")) {
            sizeValue = option.value.toLowerCase().includes("mini") ? "Mini" : "Standard";
          }
        });
        return sizeValue;
      }

    },
    template: "#js-cart-line-item"
  });
})(window.theme = window.theme || {}, window.Vue, jQuery);

(Vue => {
  Vue.component("vue-checkbox", {
    model: {
      event: "change",
      prop: "checked"
    },
    props: {
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      },
      name: {
        type: String,
        default: "",
        required: false
      },
      checked: {
        type: Boolean,
        default: false,
        required: false
      }
    },

    data() {
      return {
        isFocused: false
      };
    },

    methods: {
      toggle(event) {
        this.$emit("change", event.target.checked);
      },

      toggleFocus() {
        this.isFocused = !this.isFocused;
      }

    },
    template: "#js-checkbox-template"
  });
})(window.Vue);

((theme, Vue) => {
  Vue.component("comparison-tile", {
    props: {
      product: {
        type: Object,
        required: true
      },
      isSelected: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    template: "#js-comparison-tile-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("EventTile", {
    mixins: [theme.vue_mixins.tagProcessors, theme.vue_mixins.articleObject],
    props: {
      article: {
        type: Object,
        required: true
      },
      mini: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    data() {
      return {
        eventLocation: this.getTagTextFromArray(this.article.tags, "_location::") || "",
        articlePreview: this.$options.filters.truncateText(this.article.content, 200) || "",
        eventURLDomain: this.article.external_url && new URL(this.article.external_url).hostname.replace("www.", "") || "",
        isOpen: false,
        contentTruncated: this.article.content.length > 200
      };
    },

    watch: {
      isOpen(opened) {
        if (opened) {
          this.articlePreview = this.article.content;
        } else {
          this.articlePreview = this.$options.filters.truncateText(this.article.content, 200) || "";
        }
      }

    },
    methods: {
      toggleOpen() {
        this.isOpen = !this.isOpen;
      }

    },
    template: "#js-event-tile-template"
  });
})(window.theme = window.theme || {}, window.Vue); // Bundle Featured Products Grid / Carousel


((Vue, theme) => {
  Vue.component("featured-prods", {
    props: {
      bundleState: {
        type: Object,
        required: true
      },
      title: {
        type: String,
        default: "",
        required: false
      },
      ctatext: {
        type: String,
        default: "",
        required: false
      },
      ctaurl: {
        type: String,
        default: "",
        required: false
      }
    },

    data() {
      return {
        flickityOptions: {
          draggable: true,
          pageDots: false,
          prevNextButtons: false,
          contain: true,
          imagesLoaded: true,
          watchCSS: true,
          freeScroll: true,
          adaptiveHeight: true,
          on: {
            ready() {
              setTimeout(() => {
                this.element.classList.add("is-ready");
              }, 1000);
            }

          }
        },
        products: this.bundleState.bundleData.products
      };
    },

    methods: {
      onProductTileFocused(event) {
        this.selectBundleProduct(event);
        this.resizeFlickity();
      },

      onHeightChange() {
        this.resizeFlickity();
      },

      resizeFlickity() {
        // remove the class that sets equal heights on the product tiles
        this.$refs.flickity.$el.classList.remove("is-ready"); // calls the "resize" method on Flickity, which recalculates the heights (based on the tile that is now tallest)

        this.$refs.flickity.resize(); // re-adds the class, so that all tiles will be redrawn at 100% (the height of the tallest tile);

        setTimeout(() => {
          this.$refs.flickity.$el.classList.add("is-ready");
        }, 0);
      },

      selectBundleProduct(product) {
        theme.bundleDataStore.setBundleProduct(product);
      }

    },
    template: "#js-featured-prods-template"
  });
})(window.Vue, window.theme = window.theme || {});

(Vue => {
  Vue.component("modal", {
    props: {
      classHook: {
        type: [String, Array],
        default: "",
        required: false
      }
    },
    methods: {
      handleModalMouseDown(event) {
        // this is mousedown instead of 'click' to catch event targets that may disappear after clicking,
        // e.g. Nav Buttons
        if (!event.target.closest(".c-modal__wrapper")) {
          this.$emit("close");
        }
      }

    },
    template: "#js-vue-modal"
  });
})(window.Vue);

((theme, Vue, axios) => {
  const searchTypes = {
    product: "product",
    page: "page",
    article: "article"
  };
  Vue.component("search-box", {
    props: {
      uniqueId: {
        type: String,
        default: "",
        required: false
      },
      modifier: {
        type: [String, Array],
        default: "",
        required: false
      }
    },

    data() {
      return {
        searchTerm: null,
        searchResults: {
          products: {},
          articles: {}
        },
        isSearching: false,
        isUpdatingSearchResults: false
      };
    },

    computed: {
      productResults() {
        let productResults = null;

        if (this.searchResults.products.items && this.searchResults.products.items.length) {
          productResults = {
            title: this.searchResults.products.searchTypes[0],
            seeAllUrl: this.searchResults.products.seeAll,
            items: this.searchResults.products.items
          };
        }

        return productResults;
      },

      showResults() {
        return this.searchTerm && !this.isSearching;
      },

      articleResults() {
        let articleResults = null;

        if (this.searchResults.articles.items && this.searchResults.articles.items.length) {
          articleResults = {
            title: this.searchResults.articles.searchTypes[0],
            seeAllUrl: this.searchResults.articles.seeAll,
            items: this.searchResults.articles.items
          };
        }

        return articleResults;
      },

      searchSummary() {
        const summary = [];

        if (this.productResults) {
          summary.push({
            title: this.productResults.title,
            items: this.productResults.items.slice(0, 2),
            seeAllUrl: this.productResults.seeAllUrl
          });
        }

        if (this.articleResults) {
          summary.push({
            title: this.articleResults.title,
            items: this.articleResults.items.slice(0, 2),
            seeAllUrl: this.articleResults.seeAllUrl
          });
        }

        return summary;
      }

    },
    watch: {
      isUpdatingSearchResults(isUpdating) {
        if (!isUpdating) {
          this.isSearching = false;
        }
      }

    },

    created() {
      this.debouncedSearch = $.debounce(800, this.updateSearchResults);
    },

    methods: {
      getSearchResult(searchType) {
        return axios.get(`/search?view=json&type=${searchType}&q=${this.searchTerm}`).then(response => {
          const jsonResponse = response.data;
          return jsonResponse;
        });
      },

      getSearchResults() {
        return Promise.all([this.getSearchResult(searchTypes.product), this.getSearchResult(searchTypes.article), this.getSearchResult(searchTypes.page)]);
      },

      async updateSearchResults() {
        this.isUpdatingSearchResults = true;
        const results = await this.getSearchResults();
        const {
          0: products,
          1: articles
        } = results;
        this.searchResults.products = products;
        this.searchResults.articles = articles;
        this.isUpdatingSearchResults = false;
      },

      onSearchInput() {
        this.isSearching = true;
        this.debouncedSearch();
      }

    },
    template: "#js-search"
  });
})(window.theme = window.theme || {}, window.Vue, window.axios);

((theme, Vue) => {
  Vue.component("StoryTile", {
    mixins: [theme.vue_mixins.tagProcessors, theme.vue_mixins.articleObject],
    props: {
      article: {
        type: Object,
        required: true
      },
      hasAlternateLink: {
        type: Boolean,
        required: false,
        default: false
      }
    },

    data() {
      return {
        articleTitle: this.article.title,
        articleCTAString: this.article.person ? `Read ${this.article.person}'s story` : "Read the Story" || "",
        target: "_self"
      };
    },

    mounted() {
      if (this.articleTitle.length > 70) {
        this.articleTitle = this.articleTitle.slice(0, 70).concat("...");
      } // This is meant for press articles as they will have no content therefore we store it's
      // external url in the content section.


      if (this.hasAlternateLink) {
        this.article.url = this.article.content;
        this.target = "_blank";
      }
    },

    template: "#js-story-tile-template"
  });
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  Vue.component("bundle-gallery", {
    data() {
      return {
        state: theme.bundleDataStore.state
      };
    },

    computed: {
      featuredImage() {
        const currentImage = this.state.bundleProduct.featured_image;
        const featuredImage = theme.utils.getSizedImageUrl(currentImage, "1000x");
        return featuredImage;
      }

    },
    template: "#js-bundle-gallery"
  });
})(window.theme = window.theme || {}, window.Vue); // ------------------------------
// VUE INSTANCES
// ------------------------------


((Vue, theme, validators, bodyScrollLock, axios) => {
  if (document.querySelector(".js-account")) {
    const addressModal = document.querySelector(".js-address-modal");
    const zipValidation = validators.helpers.regex("zip", /^ *([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[a-zA-Z]) *-* *(\d[a-zA-Z]\d) *$|^ *(\d{5}) *$|^ *(\d{5}) *-* *(\d{4}) *$/);
    const phoneNumberValidation = validators.helpers.regex("phone", /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/); // eslint-disable-next-line no-new
    // eslint-disable-next-line no-param-reassign

    theme.account = new Vue({
      el: ".js-account",
      name: "AccountPage",
      data: {
        customer: theme.customer,
        addressID: null,
        isEditingAddress: false,
        isDeletingAddress: false,
        isAddingAddress: false,
        pages: {
          orders: true,
          addresses: false,
          communications: false
        },
        isLoading: false,
        // Mock data till we have Klaviyo endpoint
        communications: [{
          name: "Communication type 1",
          isSubscribed: false
        }, {
          name: "Communication type 2",
          isSubscribed: true
        }, {
          name: "Communication type 3",
          isSubscribed: false
        }, {
          name: "Communication type 4",
          isSubscribed: false
        }],
        showModal: false,
        provinces: [],
        selectedAddress: {
          first_name: "",
          last_name: "",
          address1: "",
          address2: "",
          city: "",
          province: "",
          province_code: "",
          country_name: "",
          zip: "",
          phone: "",
          default: false
        }
      },
      validations: {
        selectedAddress: {
          zip: {
            zipValidation
          },
          phone: {
            phoneNumberValidation
          }
        }
      },
      methods: {
        show(page) {
          this.hideUnselected(page);
          this.pages[page] = true;
        },

        closeModal() {
          this.showModal = false;
          bodyScrollLock.enableBodyScroll(addressModal);
        },

        buildProvinceSelector(element) {
          this.provinces = JSON.parse(element.dataset.provinces).map(province => {
            return province[0];
          });
        },

        hideUnselected(page) {
          Object.keys(this.pages).forEach(key => {
            if (key !== page) {
              this.pages[key] = false;
            }
          });
        },

        toggleDetails(e) {
          if (e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.orderId) {
            const orderID = e.currentTarget.dataset.orderId;
            const detailsElement = document.getElementById(orderID);
            const activeClass = "is-active";
            const activeText = e.currentTarget.dataset.textActive;
            const inactiveText = e.currentTarget.dataset.textInactive;

            if (detailsElement.classList.contains(activeClass)) {
              e.currentTarget.classList.remove(activeClass);
              detailsElement.classList.remove(activeClass);
              e.currentTarget.firstChild.textContent = inactiveText;
            } else {
              e.currentTarget.classList.add(activeClass);
              detailsElement.classList.add(activeClass);
              e.currentTarget.firstChild.textContent = activeText;
            }
          }
        },

        toggleAddressModal() {
          this.showModal = !this.showModal;

          if (this.showModal) {
            this.$nextTick(() => {
              if (!this.isDeletingAddress && this.$refs.countrySelector.selectedOptions.length) {
                this.buildProvinceSelector(this.$refs.countrySelector.selectedOptions[0]);
              }
            });
            bodyScrollLock.disableBodyScroll(addressModal);
          } else {
            bodyScrollLock.enableBodyScroll(addressModal);
          }
        },

        retrieveCurrentAddress() {
          const currentAddress = this.customer.addresses.find(address => {
            return address.id === this.addressID;
          });

          const formattedAddress = _objectSpread({}, currentAddress);

          const requiredFormatedFields = ["first_name", "last_name", "address1", "address2", "city"];
          requiredFormatedFields.forEach(field => {
            formattedAddress[field] = theme.utils.decodeHTML(currentAddress[field]);
          });
          this.selectedAddress = _objectSpread({}, formattedAddress);
        },

        clearCurrentAddress() {
          this.selectedAddress = {
            first_name: "",
            last_name: "",
            address1: "",
            address2: "",
            city: "",
            province_name: "",
            province_code: "",
            country_name: "",
            zip: "",
            phone: ""
          };
        },

        hideAddressForms() {
          this.isEditingAddress = false;
          this.isDeletingAddress = false;
          this.isAddingAddress = false;
        },

        modifyAddress(modificationType, addressID = false) {
          this.hideAddressForms();
          this.toggleAddressModal();

          if (addressID) {
            this.addressID = addressID;
          } else {
            this.addressID = false;
          }

          this.clearCurrentAddress();

          switch (modificationType) {
            case "add":
              this.isAddingAddress = true;
              break;

            case "edit":
              this.retrieveCurrentAddress();
              this.isEditingAddress = true;
              break;

            case "delete":
              this.retrieveCurrentAddress();
              this.isDeletingAddress = true;
              break;

            default:
          }
        },

        retrieveAddresses() {
          return axios.get("/account/addresses?view=json").then(response => {
            const jsonResponse = response.data;
            return jsonResponse;
          });
        },

        refreshAddresses() {
          return this.retrieveAddresses().then(response => {
            this.customer.addresses = response;
          });
        },

        postAddressModifications(event) {
          event.preventDefault();
          const serializedForm = new FormData(event.target);
          this.$v.$touch();

          if (this.$v.$invalid) {
            throw Error("Invalid Form input data.");
          } else if (this.addressID) {
            // editing address or deleting address
            this.isLoading = true;
            axios.post(`/account/addresses/${this.addressID}`, serializedForm).then(() => {
              return this.refreshAddresses();
            }).then(() => {
              this.isLoading = false;
              this.toggleAddressModal();
            });
          } else {
            // adding address
            this.isLoading = true;
            axios.post("/account/addresses", serializedForm).then(() => {
              return this.refreshAddresses();
            }).then(() => {
              this.isLoading = false;
              this.toggleAddressModal();
            });
          }
        }

      }
    });
  }
})(window.Vue, window.theme = window.theme || {}, window.validators = window.validators || {}, window.bodyScrollLock, window.axios);

((theme, Vue) => {
  if (document.querySelector(".js-article-page")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-article-page",
      name: "ArticlePage",
      mixins: [theme.vue_mixins.tagProcessors, theme.vue_mixins.articleObject],

      data() {
        return {
          article: theme.article,
          mainCategoryTag: "",
          dateOptions: {
            day: "numeric",
            month: "long",
            year: "numeric"
          }
        };
      },

      mounted() {
        this.mainCategoryTag = this.getTagTextFromArray(this.article.tags, "_category::") || theme.blog.title;
      }

    });
  }
})(window.theme = window.theme || {}, window.Vue); // Vue Blog Page app instance.
// Notes: We assume here that we'll only filter by one kind of tag at a time (i.e. not multiple categories / multiple locations)


const tagTypes = ["category", "location"];

((theme, Vue) => {
  if (document.querySelector(".js-blog-page")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-blog-page",
      name: "BlogPage",
      mixins: [theme.vue_mixins.tagProcessors],

      data() {
        return {
          blog: theme.blog,
          selectedTags: tagTypes.reduce((obj, tag) => _objectSpread({}, obj, {
            [tag]: null
          }), {}),
          selectOptions: {},
          initialised: false
        };
      },

      watch: {
        selectedTags: {
          deep: true,

          handler(tags) {
            // tags will be an object with two keys in it, either objects or null (not strings)
            // if both are false/null, we direct them to the blog unfiltered.
            // if either are valid objects, we construct a URL with those tags and direct them to that URL.
            // construct the URL by making an array of the tags, filtering the array, mapping it by tag name, join it with "+".
            if (this.initialised) {
              const urlHandleizeTag = tag => tag.replace("::", "-").handleize("-", "_");

              const tagsArray = tagTypes.map(tagType => tags[tagType]).filter(Boolean);

              if (tagsArray.length) {
                const tagFilterString = tagsArray.map(tagObject => urlHandleizeTag(tagObject.value)).join("+");
                window.location.href = `/blogs/${this.blog.handle}/tagged/${tagFilterString}`;
              } else {
                window.location.href = `/blogs/${this.blog.handle}`;
              }
            }
          }

        }
      },

      created() {
        if (theme.blog.all_tags) {
          // set up the categorySelectOptions and the locationSelectOptions for the dropdowns
          const createSelectOptions = tagType => {
            const validTags = theme.blog.all_tags.filter(tag => this.checkForTagType(tag, tagType));

            if (validTags) {
              this.selectOptions[tagType] = validTags.map(tag => this.convertTagToObject(tag, tagType));
            }
          };

          tagTypes.forEach(createSelectOptions);
        } // initialise the tags that are currently being used to filter the blog


        this.initialiseSelectedTags();
      },

      methods: {
        convertTagToObject(tag, tagType) {
          return {
            label: this.getTagText(tag, `_${tagType}::`),
            value: tag
          };
        },

        checkForTagType: (tag, tagType) => {
          return tag.startsWith(`_${tagType}::`);
        },

        initialiseSelectedTags() {
          /* this method initialises the dropdowns's selected option with the tags that are already used for filtering, according to current_tags on this blog.
           */
          if (theme.blog.current_tags) {
            // we iterate thru the current tags, looking for a tag that matches the tagType we're looking for
            // there will only be two- "category" or "location".
            // if we find it, we set the selectedTags data property accordingly.
            // I anticipate there will be very few tags, and this is just run once, so we can iterate twice.
            const initialiseTag = (tags, tagType) => {
              const selectedTag = tags.find(tag => this.checkForTagType(tag, tagType));

              if (selectedTag) {
                const selectedLabel = this.getTagText(selectedTag, `_${tagType}::`);
                this.selectedTags[tagType] = {
                  value: selectedTag,
                  label: selectedLabel
                };
              }
            };

            tagTypes.forEach(tagType => {
              initialiseTag(theme.blog.current_tags, tagType);
            });
            this.$nextTick(() => {
              this.initialised = true;
            });
          } else {
            this.initialised = true;
          }
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue);
/* eslint-disable no-underscore-dangle */


((theme, Vue) => {
  if (document.querySelector(".js-cart-flyout")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-cart-flyout",
      name: "CartFlyout",
      data: {
        cart: theme.cart
      },
      computed: {
        filteredPrice() {
          // filters out items that are included in a bundle
          if (this.topLevelItems) {
            const topLevelItemsPrice = this.topLevelItems.reduce((total, item) => {
              return total + item.line_price;
            }, 0);
            return theme.utils.toMoney(topLevelItemsPrice, {
              cents: true
            });
          }

          return "loading...";
        },

        topLevelItems() {
          let topLevelItems = [];
          const subItems = {}; // separate

          this.cart.content.items.forEach(item => {
            if (item.properties && item.properties._bundleParentID) {
              // if we've got a _bundleParentID in the line item properties, this is a bundle sub-item (customisation item)
              if (subItems[item.properties._bundleParentID]) {
                subItems[item.properties._bundleParentID].push(item);
              } else {
                subItems[item.properties._bundleParentID] = [item];
              }
            } else {
              topLevelItems.push(item);
            }
          });
          topLevelItems = topLevelItems.map(topLevelItem => {
            if (topLevelItem.properties && topLevelItem.properties._bundleID) {
              const bundleChildren = subItems[topLevelItem.properties._bundleID]; // eslint-disable-next-line no-param-reassign

              topLevelItem.bundleChildren = bundleChildren;
              delete subItems[topLevelItem.properties._bundleID];
            }

            return topLevelItem;
          }); // if there are still some keys on the subItems object, they are orphaned (we didn't find a parent item with a _bundleID matching theirs.) Let's add them to the topLevelItems so that the customer can view them.

          if (Object.keys(subItems).length) {
            Object.keys(subItems).forEach(key => {
              const orphanSubItemArray = subItems[key];
              topLevelItems = topLevelItems.concat(orphanSubItemArray);
            });
          }

          return topLevelItems;
        },

        totalPriceFormatted() {
          return theme.utils.toMoney(this.cart.content.total_price, {
            cents: true
          });
        }

      },
      watch: {
        cart: {
          deep: true,
          handler: newCart => {
            const $cartIcon = $(".js-cart-header-icon");

            if (newCart.content.items.length > 0) {
              $cartIcon.removeClass("is-empty");
            } else {
              $cartIcon.addClass("is-empty");
            }
          }
        }
      },

      created() {
        const toggleCartFlyout = () => {
          $('[data-flyout-toggle="cart-flyout"]').first().trigger("click");
        };

        const cartURLParam = window.location.hash;

        if (cartURLParam === "#cart") {
          setTimeout(() => {
            toggleCartFlyout();
          }, 500);
        }

        theme.vue_event_bus.$on("Cart:add", () => {
          toggleCartFlyout();
        });
      },

      methods: {
        Increment(item) {
          theme.cart.change({
            id: item.key,
            quantity: item.quantity + 1
          });
        },

        Decrement(item) {
          if (item.quantity > 1) {
            theme.cart.change({
              id: item.key,
              quantity: item.quantity - 1
            });
          }
        },

        subtotalPrice() {
          const subtotal = this.cart.content.original_total_price;
          return subtotal > 0 ? theme.utils.toMoney(subtotal, {
            cents: true,
            no_zeros: true
          }) : "$0.00";
        },

        totalPrice() {
          const total = this.cart.content.total_price;
          return total > 0 ? theme.utils.toMoney(total, {
            cents: true,
            no_zeros: true
          }) : "$0.00";
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.axios);

((theme, Vue) => {
  const flickityOptions = {
    cellAlign: "left",
    pageDots: false,
    prevNextButtons: true,
    groupCells: true,
    watchCSS: true,
    contain: true,
    freeScroll: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 65,
      y2: 50,
      x3: 15
    }
  };

  if (document.querySelector(".js-community-page")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-community-page",
      name: "CommunityPage",

      data() {
        return {
          stories: [],
          events: [],
          ambassadors: [],
          stringifyFlickityOptions: JSON.stringify(flickityOptions)
        };
      },

      mounted() {
        // we're performing the same sequence for each of the resources: find the JSON, parse it, assign it to a data property. We use a for loop to keep it DRY.
        ["stories", "events", "ambassadors"].forEach(resourceName => {
          const resourceJSON = document.getElementById(`js-community-data-${resourceName}`);

          if (resourceJSON) {
            const resourceData = JSON.parse(resourceJSON.innerHTML);
            this[resourceName] = resourceData.articles;
          }
        });
      }

    });
  }
})(window.theme = window.theme || {}, window.Vue);
/*

Data Properties:
comparisonProducts - parsed from comparison__json snippet's <script> tag
firstSelectedProduct: first of two possible Selected Products
secondSelectedProduct: second of two possible Selected Products
currentPage: for navigating
lastPositionSelected: for alternating between selection when clicking tiles
showAllSpecs: for truncating the table if more than 6 spec rows

computed:

selectedProductHandles - for checking whether or not a tile should display in the Selected State
specsArray - sets up Specs based on the spec metafields of the First Selected Product (assumption is that all products will have at least some value for it, even if it's "N/A")

On Mounted, we add colourOption property to each product object
*/


((theme, Vue) => {
  if (document.querySelector(".js-comparison-page")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-comparison-page",
      name: "ComparisonPage",
      mixins: [theme.vue_mixins.stickyHandlers],

      data() {
        return {
          comparisonProducts: JSON.parse(document.getElementById("js-comparison-product-data").innerHTML).filter(product => product.handle),
          firstSelectedProduct: null,
          secondSelectedProduct: null,
          currentPage: 1,
          lastPositionSelected: 1,
          showAllSpecs: false
        };
      },

      computed: {
        selectedProductHandles() {
          return [this.firstSelectedProduct && this.firstSelectedProduct.handle, this.secondSelectedProduct && this.secondSelectedProduct.handle];
        },

        specsArray() {
          const specNames = ["Battery life", "Standby time", "Weight", "Water resistance", "Microphone", "Wireless range", "Multipoint pairing", "Titanium band", "Charge time", "Charger", "Battery type", "Moisture detector", "Command controls", "Back-a-track", "Frequency response", "Sensitivity", "Microphone sensitivity", "Compatible profiles", "Compatible codecs", "Warranty"];

          const createSpecObject = specName => ({
            name: specName.replace("_", " "),
            firstProductValue: this.firstSelectedProduct.specs[specName],
            secondProductValue: this.secondSelectedProduct.specs[specName]
          });

          const specsArray = specNames.map(createSpecObject);
          return specsArray;
        }

      },
      watch: {
        currentPage() {
          window.scrollTo(0, 0);
        }

      },

      mounted() {
        this.comparisonProducts = this.comparisonProducts.map(product => {
          const productWithColourOption = product;
          productWithColourOption.colourOption = this.getColourOption(product);
          return productWithColourOption;
        });
      },

      methods: {
        toMoney(amount) {
          return theme.utils.toMoney(amount, {
            cents: true
          });
        },

        selectProduct(product) {
          // check to make sure we're not allowing the customer to compare a product to itself because that would just be wrong
          const isAlreadySelected = this.firstSelectedProduct && this.firstSelectedProduct.handle === product.handle || this.secondSelectedProduct && this.secondSelectedProduct.handle === product.handle;

          if (!isAlreadySelected) {
            if (this.lastPositionSelected === 1) {
              this.firstSelectedProduct = product;
              this.lastPositionSelected = 0;
            } else {
              this.secondSelectedProduct = product;
              this.lastPositionSelected = 1;
            }
          }
        },

        compareProducts() {
          if (this.firstSelectedProduct && this.secondSelectedProduct) {
            this.currentPage = 2;
          }
        },

        getColourOption(product) {
          let colourOption;
          product.options_with_values.forEach(option => {
            const lowercaseOptionName = option.name.toLowerCase();

            if (lowercaseOptionName.includes("color") || lowercaseOptionName.includes("colour")) {
              colourOption = option;
            }
          });
          return colourOption || false;
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue, Fuse) => {
  if (document.querySelector(".js-faq-categories")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-faq-categories",
      name: "FAQCategories",
      data: {
        search: "",
        sectionSettings: JSON.parse(document.getElementById("js-faq-categories-data").innerHTML)
      },
      computed: {
        filteredCategories() {
          if (this.search.trim().length === 0) return this.sectionSettings.categories;
          const searchOptions = {
            threshold: 0.4,
            keys: ["questionsAnswers.answer", "questionsAnswers.question"]
          };
          let fuse = new Fuse(this.sectionSettings.categories, searchOptions);
          const filteredCategories = fuse.search(this.search);
          return filteredCategories.reduce((newFilteredCategories, category) => {
            const currentCategory = _objectSpread({}, category);

            searchOptions.keys = ["question", "answer"];
            fuse = new Fuse(currentCategory.questionsAnswers, searchOptions);
            currentCategory.questionsAnswers = fuse.search(this.search);
            newFilteredCategories.push(currentCategory);
            return newFilteredCategories;
          }, []);
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.Fuse);

((theme, Vue) => {
  if (document.querySelector(".js-featured-prods")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-featured-prods",
      name: "FeaturedProds",
      data: {
        state: theme.bundleDataStore && theme.bundleDataStore.state || {}
      }
    });
  }
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  if (document.querySelector(".js-featured-video-gallery")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-featured-video-gallery",
      name: "FeaturedVideoGallery",

      data() {
        return {
          activeVideo: 1,
          playingVideo: false
        };
      },

      computed: {},
      watch: {
        activeVideo(newValue, oldValue) {
          const iframeIndex = oldValue - 1;
          const youtubeEmbeds = document.querySelectorAll(".js-youtube-embed");
          const youtubeToStop = youtubeEmbeds[iframeIndex];
          youtubeToStop.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
          this.playingVideo = false;
        }

      },

      mounted() {},

      methods: {
        setActiveVideo(videoNum) {
          this.activeVideo = videoNum;
        },

        isPlaying(videoNum) {
          return videoNum === this.activeVideo && this.playingVideo;
        },

        playVideo(iframeRef) {
          this.$refs[iframeRef].src += "&autoplay=1";
          this.playingVideo = true;
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue, bodyScrollLock) => {
  const fitGuideModal = document.querySelector(".js-fit-guide-modal");

  if (document.querySelector(".js-fit-guide-modal")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-fit-guide-modal",
      name: "FitGuide",
      data: {
        showFitGuide: false,
        currentStep: 1,
        totalSteps: 3,
        selectedImageSrcset: "",
        selectedImageAlt: "",
        selectedImageIndex: 1,
        firstStep: true,
        lastStep: false
      },
      watch: {
        currentStep() {
          this.$nextTick(() => {
            this.firstStep = this.currentStep === 1;
            this.lastStep = this.currentStep === this.totalSteps;
          });
        }

      },

      created() {
        theme.vue_event_bus.$on("ProductPage:show-fit-guide", this.openFitGuide);
        const firstImage = document.querySelector(".js-fit-guide-thumb");

        if (firstImage) {
          this.selectedImageSrcset = firstImage.getAttribute("srcset");
          this.selectedImageAlt = firstImage.getAttribute("alt");
        }

        const fitGuideSteps = document.querySelectorAll(".js-fit-guide-step");

        if (fitGuideSteps.length) {
          this.totalSteps = fitGuideSteps.length;
        }
      },

      methods: {
        openFitGuide() {
          this.showFitGuide = true;
          bodyScrollLock.disableBodyScroll(fitGuideModal);
        },

        closeFitGuide() {
          this.showFitGuide = false;
          bodyScrollLock.enableBodyScroll(fitGuideModal);
          this.currentStep = 1;
        },

        next() {
          this.currentStep += 1;
        },

        previous() {
          this.currentStep -= 1;
        },

        selectImage(srcset, alt, index) {
          this.selectedImageSrcset = srcset;
          this.selectedImageAlt = alt;
          this.selectedImageIndex = index;
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.bodyScrollLock);
/* eslint-disable no-param-reassign */


((theme, Vue, validators) => {
  if (document.querySelector(".js-customer-login")) {
    const loginValidation = {
      email: {
        email: validators.email,
        required: validators.required
      },
      password: {
        minLength: validators.minLength(5),
        required: validators.required
      }
    };
    const recoverValidation = {
      email: {
        email: validators.email,
        required: validators.required
      }
    };
    const signupValidation = {
      email: {
        email: validators.email,
        required: validators.required
      },
      password: {
        minLength: validators.minLength(5),
        required: validators.required
      },
      firstName: {
        alpha: validators.alpha,
        required: validators.required
      },
      lastName: {
        alpha: validators.alpha,
        required: validators.required
      }
    };
    const resetValidation = {
      password: {
        minLength: validators.minLength(5),
        required: validators.required
      },
      repeatPassword: {
        sameAsPassword: validators.sameAs("password"),
        required: validators.required
      }
    }; // eslint-disable-next-line no-new

    new Vue({
      el: ".js-customer-login",
      name: "CustomerLogin",
      data: {
        email: null,
        password: null,
        repeatPassword: null,
        firstName: null,
        lastName: null,
        pageStates: {
          login: true,
          register: false,
          recover_password: false,
          reset_password: false
        },
        acceptsMarketing: false,
        template: theme.template.name
      },

      validations() {
        let validation = {};

        if (this.pageStates.login) {
          validation = _objectSpread({}, loginValidation);
        }

        if (this.pageStates.recover_password) {
          validation = _objectSpread({}, recoverValidation);
        }

        if (this.pageStates.register) {
          validation = _objectSpread({}, signupValidation);
        }

        if (this.pageStates.reset_password) {
          validation = _objectSpread({}, resetValidation);
        }

        return validation;
      },

      computed: {
        loginState() {
          return this.pageStates.login;
        },

        registerState() {
          return this.pageStates.register;
        },

        recoverPasswordState() {
          return this.pageStates.recover_password;
        },

        resetPasswordState() {
          return this.pageStates.reset_password;
        }

      },

      created() {
        const params = window.location.search;
        const templateParam = new URLSearchParams(params);

        if (templateParam.has("page")) {
          this.show(templateParam.get("page"));
        } else {
          this.show(theme.template.name);
        }
      },

      methods: {
        show(template) {
          window.history.pushState({
            id: template
          }, "", `${window.location.pathname}?page=${template}`);
          this.hideAll();
          this.clearFields();
          this.pageStates[template] = true;
          this.$v.$reset();
        },

        hideAll() {
          Object.keys(this.pageStates).forEach(key => {
            this.pageStates[key] = false;
          });
        },

        clearFields() {
          this.email = null;
          this.password = null;
          this.repeatPassword = null;
          this.firstName = null;
          this.lastName = null;
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.validators = window.validators || {}); // eslint-disable-next-line no-unused-vars


((Vue, validators, bodyScrollLock) => {
  const elSelector = ".js-product-bundle-newsletter-modal";
  const modal = document.querySelector(elSelector);

  if (modal) {
    // eslint-disable-next-line no-new
    new Vue({
      el: elSelector,
      name: "ProductBundleNewsletterModal",
      data: {
        showModal: false,
        email: null
      },
      validations: {
        email: {
          email: validators.email,
          required: validators.required
        }
      },
      watch: {
        showModal() {
          localStorage.setItem("product_bundle_newsletter_modal", "true");
        }

      },

      created() {
        const modalWasViewed = localStorage.getItem("product_bundle_newsletter_modal");

        if (!modalWasViewed) {
          this.openModal();
        }
      },

      methods: {
        openModal() {
          bodyScrollLock.disableBodyScroll(modal);
          this.showModal = true;
        },

        closeModal() {
          bodyScrollLock.enableBodyScroll(modal);
          this.showModal = false;
        }

      }
    });
  }
})(window.Vue, window.validators, window.bodyScrollLock);

((theme, Vue, bodyScrollLock) => {
  if (document.querySelector(".js-product-page")) {
    const bundleModal = document.querySelector("js-bundle-modal"); // eslint-disable-next-line no-new

    new Vue({
      el: ".js-product-page",
      name: "ProductPage",
      mixins: [theme.vue_mixins.stickyHandlers],
      data: {
        selectedVariant: {},
        productCategory: "hardware",
        vsPlaceholderStyle: {
          height: 0
        },
        isBundlePicker: false,
        isBundlerOpen: false,
        bundleState: theme.bundleDataStore && theme.bundleDataStore.state || {},
        atcBarReady: true
      },
      computed: {
        variantDisplayPrice() {
          return theme.utils.toMoney(this.selectedVariant.price, {
            cents: true
          });
        },

        variantCompareAtPrice() {
          if (this.selectedVariant.compare_at_price && this.selectedVariant.compare_at_price > this.selectedVariant.price) {
            return theme.utils.toMoney(this.selectedVariant.compare_at_price, {
              cents: true
            });
          }

          return false;
        },

        colourOption() {
          let colourOption;
          this.product.options_with_values.forEach(option => {
            const lowercaseOptionName = option.name.toLowerCase();

            if (lowercaseOptionName.includes("color") || lowercaseOptionName.includes("colour")) {
              colourOption = option;
            }
          });
          return colourOption || false;
        },

        sizeOption() {
          let sizeOption;
          this.product.options_with_values.forEach(option => {
            const lowercaseOptionName = option.name.toLowerCase();

            if (lowercaseOptionName.includes("size")) {
              sizeOption = option;
            }
          });
          return sizeOption || false;
        },

        product() {
          if (this.isBundlePicker) {
            return this.bundleState.bundleProduct;
          }

          return theme.product;
        },

        isInStock() {
          if (this.selectedVariant.inventory_management === null || this.selectedVariant.inventory_policy === "continue" || this.selectedVariant.inventory_quantity > 0) {
            return true;
          }

          return false;
        }

      },

      created() {
        if (document.getElementById("js-bundle-data")) {
          this.isBundlePicker = true;
        }

        this.selectedVariant = this.product.selected_or_first_available_variant;
        this.productCategory = this.product.type.includes("Wire") ? "hardware" : "accessories";
      },

      mounted() {
        const variantSelector = document.getElementsByClassName("js-variant-selector-holder");

        if (variantSelector.length) {
          const variantSelectorHeight = variantSelector[0].offsetHeight;
          this.vsPlaceholderStyle = {
            height: `${variantSelectorHeight}px`
          };
        }
      },

      methods: {
        addToCart(variant) {
          if (!variant) {
            throw Error("Cart.add: No item was passed.");
          }

          const item = {};
          item.id = variant.id;
          item.quantity = 1;
          theme.cart.add(item).then(response => {
            theme.vue_event_bus.$emit("Cart:add", response);
          }).catch(resp => {
            throw Error("Failed adding to the cart.", resp);
          });
        },

        toggleBundleModal() {
          this.isBundlerOpen = !this.isBundlerOpen;

          if (this.isBundlerOpen) {
            bodyScrollLock.disableBodyScroll(bundleModal);
          } else {
            bodyScrollLock.enableBodyScroll(bundleModal);
          }
        },

        updateProductData(productData) {
          this.product = _objectSpread({}, productData);
        },

        bundleAdded() {
          this.isBundlerOpen = false;
          bodyScrollLock.enableBodyScroll(bundleModal);
          theme.vue_event_bus.$emit("Cart:add");
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.bodyScrollLock);

((theme, Vue, axios) => {
  const reviewsPerPage = "20";
  const highReviewsLocaleKey = theme.locales.products.product.high_reviews;
  const customerReviewsLocaleKey = theme.locales.products.product.customer_reviews;

  if (document.querySelector(".js-product-reviews")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-product-reviews",
      name: "ProductReviews",
      data: {
        flickityOptions: {
          pageDots: false,
          prevNextButtons: false,
          autoPlay: false,
          contain: true,
          freeScroll: true
        },
        productReviews: [],
        currentPage: 1,
        currentCell: 0,
        bottomline: null,
        isFormVisible: false,
        activeReview: {},
        modalIsOpen: false,
        observer: null
      },
      computed: {
        isLoaded() {
          return this.productReviews.length > 0;
        },

        renderHeading() {
          const numFiveStarRatings = this.bottomline.star_distribution[5];
          if (numFiveStarRatings === 0) return customerReviewsLocaleKey;
          if (numFiveStarRatings < 10) return `${numFiveStarRatings} ${highReviewsLocaleKey}`;
          const intervalOfTen = numFiveStarRatings % 10 === 0;
          if (intervalOfTen) return `${numFiveStarRatings} ${highReviewsLocaleKey}`;
          const rating = Math.floor(numFiveStarRatings / 10) * 10;
          return `Over ${rating} ${highReviewsLocaleKey}`;
        }

      },

      mounted() {
        this.loadReviewsInfo();
        this.observer = new IntersectionObserver(([entry]) => {
          if (entry && entry.isIntersecting) {
            entry.playPlayer();
          } else {
            entry.pausePlayer();
          }
        }); // this.observer.observe(document.querySelector(".js-flickity-reviews"));
      },

      methods: {
        getReviewsInfo() {
          const yotpoApiKey = "4hEThGUS5WAEUYzEKF4PjOB28jgaUJ5uumF7QdAC";
          const productId = theme.product.id;
          const params = {
            per_page: reviewsPerPage,
            page: this.currentPage,
            sort: "rating"
          };
          return axios(`https://api.yotpo.com/v1/widget/${yotpoApiKey}/products/${productId}/reviews.json`, {
            params
          }).then(response => {
            return response.data.response;
          }).catch(response => {
            throw Error("Failed retrieving reviews for product.", response);
          });
        },

        loadReviewsInfo() {
          return this.getReviewsInfo().then(reviewsInfo => {
            this.productReviews.push(...reviewsInfo.reviews);
            this.bottomline = reviewsInfo.bottomline;
          });
        },

        appendReviews() {
          this.currentPage = this.currentPage + 1;
          this.getReviewsInfo().then(reviewsInfo => {
            this.productReviews.push(...reviewsInfo.reviews);
            this.$nextTick(() => {
              this.$refs.flickity.rerender();
            });
          }).then(() => {
            this.$refs.flickity.selectCell(this.currentCell, false, true);
          });
        },

        toggleForm() {
          this.isFormVisible = !this.isFormVisible;

          if (this.isFormVisible) {
            document.querySelector(".yotpo .write-review-wrapper").style.display = "";
            document.querySelector(".yotpo .yotpo-thank-you").style.display = "";
          }
        },

        initFlickity() {
          this.$refs.flickity.on("change", () => {
            console.log("triggered");

            if (this.$refs.flickity.selectedIndex() === this.$refs.flickity.cells().length - 1) {
              return;
            }

            if (this.$refs.flickity.selectedIndex() + 1 === this.$refs.flickity.cells().length - 10) {
              console.log("append new reviews");
              this.currentCell = this.$refs.flickity.selectedIndex();
              this.appendReviews();
            }
          });
        },

        resizeFlickity() {
          this.$nextTick(() => {
            this.$refs.flickity.resize();
          });
        },

        readReview(review) {
          this.activeReview = review;
          this.openModal();
        },

        openModal() {
          this.modalIsOpen = true;
          document.body.classList.add("noscroll");
        },

        closeModal() {
          this.modalIsOpen = false;
          document.body.classList.remove("noscroll");
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.axios);

((theme, Vue) => {
  /* eslint-disable no-new */
  if (document.querySelector(".js-products-grid")) {
    new Vue({
      el: ".js-products-grid",
      name: "ProductsGrid",
      data: {
        products: theme.products.list,
        flickityOptions: {
          draggable: true,
          pageDots: false,
          prevNextButtons: false,
          contain: true,
          imagesLoaded: true,
          watchCSS: true,
          freeScroll: true,
          on: {
            ready() {
              setTimeout(() => {
                // after the slider has been initialised (based on the height of the tallest tile)
                // we add a class that sets all tiles' height to 100%, so they will be equal
                this.element.classList.add("is-ready");
              }, 1000);
            }

          }
        }
      },
      methods: {
        onHeightChange() {
          this.$refs.flickity.$el.classList.remove("is-ready");
          this.$refs.flickity.resize();
          setTimeout(() => {
            this.$refs.flickity.$el.classList.add("is-ready");
          }, 0);
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue); // Vue Blog Page app instance.
// Notes: We assume here that we'll only filter by one category at a time.


((theme, Vue) => {
  if (document.querySelector(".js-search-articles")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-search-articles",
      name: "SearchArticles",

      data() {
        return {
          articles: theme.searchArticles
        };
      }

    });
  }
})(window.theme = window.theme || {}, window.Vue); // Vue Search Flyout app instance.


((theme, Vue) => {
  if (document.querySelector(".js-vue-search-flyout")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-vue-search-flyout",
      name: "SearchFlyout",

      data() {
        return {};
      }

    });
  }
})(window.theme = window.theme || {}, window.Vue);

((theme, Vue) => {
  if (document.querySelector(".js-support-page")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-support-page",
      name: "SupportPage",
      data: {
        supportSearchTerm: "",
        selectedProductGuide: null,
        productGuides: JSON.parse(document.getElementById("js-product-guides-data") && document.getElementById("js-product-guides-data").innerHTML)
      },
      computed: {
        buildProductSupportPageURL() {
          let url = null;

          if (this.selectedProductGuide) {
            url = `${theme.shop.url}/pages/product-guide-${this.selectedProductGuide.value.handle}`;
          }

          return url;
        },

        productImage() {
          let {
            image
          } = this.productGuides[0];

          if (this.selectedProductGuide) {
            image = this.selectedProductGuide.value.image;
          }

          return image;
        },

        productGuideSelectOptions() {
          return this.productGuides.map(item => {
            return {
              label: item.name,
              value: item
            };
          });
        }

      },
      methods: {
        submitSearchQuery() {
          window.location.assign(`/search?type=article&q=${this.supportSearchTerm}+tag:support`);
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.axios); // Note on this.steps data property:
// these should be keyframes at which a new section of the video begins (associated with a flickity slide).


((theme, Vue, Flickity, $, addWheelListener, normalizeWheel) => {
  if (document.querySelector(".js-video-explainer")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-video-explainer",
      name: "VideoExplainer",

      data() {
        return {
          currentSlide: 0,
          steps: [0, 2.8, 5.8, 9.9],
          explainerFlickity: null,
          scrollWheelInitialized: false,
          scrollJackingActive: true
        };
      },

      watch: {
        currentSlide(newValue) {
          if (this.scrollJackingActive && newValue >= 3) {
            setTimeout(() => {
              this.scrollJackingActive = false;
            }, 600);
          }
        }

      },

      mounted() {
        const flickityOptions = {
          fade: true,
          cellAlign: "left",
          selectedAttraction: 0.03,
          draggable: false
        };
        this.explainerFlickity = new Flickity(this.$refs.slider, flickityOptions);
        this.explainerFlickity.on("change", this.onSlideChange);

        if ($(window).width() > 996) {
          this.initialiseScrollWheel();
        } else {// this.initialiseTouchScroll();
        }

        $(window).on("resize orientationChange", () => {
          if ($(window).width() > 996 && !this.scrollWheelInitialized) {
            this.initialiseScrollWheel();
          } else {// this.initialiseTouchScroll();
          }
        });
        this.playTillStep(1);
      },

      methods: {
        initialiseScrollWheel() {
          if (!this.scrollWheelInitialized) {
            this.scrollWheelInitialized = true;
            const throttledNext = $.throttle(1000, true, () => {
              this.explainerFlickity.next();
            });
            const throttledPrevious = $.throttle(1000, true, () => {
              this.explainerFlickity.previous();
            });
            addWheelListener(this.$refs.slider, event => {
              const wheelNormalized = normalizeWheel(event);
              const scrollAmount = wheelNormalized.pixelY;

              if (this.scrollJackingActive) {
                event.preventDefault();

                if (scrollAmount > 30) {
                  throttledNext();
                } else if (scrollAmount < -30) {
                  throttledPrevious();
                }
              }
            });
          }
        },

        initialiseTouchScroll() {
          let start = null;
          const throttledNext = $.throttle(1000, true, () => {
            this.explainerFlickity.next();
          });
          const throttledPrevious = $.throttle(1000, true, () => {
            this.explainerFlickity.previous();
          });
          window.addEventListener("touchstart", e => {
            // eslint-disable-next-line prefer-destructuring
            start = e.changedTouches[0];
          });
          window.addEventListener("touchend", e => {
            const end = e.changedTouches[0];

            if (end.screenY - start.screenY > 30) {
              throttledPrevious();
            } else if (end.screenY - start.screenY < -30) {
              throttledNext();
            }
          });
        },

        onSlideChange(newIndex) {
          const explainerVideo = this.$refs.video;
          const $explainerVideo = $(explainerVideo);
          const almostAtNextStep = newIndex === this.currentSlide + 1 && explainerVideo.currentTime + 0.6 > this.steps[newIndex];

          if (almostAtNextStep) {
            // if we're going to play the next step anyways and it's almost there (within 600ms)
            this.playTillStep(newIndex + 1);
          } else {
            // fade into the selected step
            $explainerVideo.addClass("is-transitioning");
            setTimeout(() => {
              explainerVideo.currentTime = this.steps[newIndex];
              this.playTillStep(newIndex + 1);
            }, 200);
            setTimeout(() => {
              $explainerVideo.removeClass("is-transitioning");
            }, 400);
          }

          this.currentSlide = newIndex;
        },

        playTillStep(stepIndex) {
          const explainerVideo = this.$refs.video;
          let stopTime = this.steps[stepIndex];

          if (typeof stopTime === "undefined") {
            stopTime = explainerVideo.duration;
          }

          function onTimeUpdate() {
            if (explainerVideo.currentTime >= stopTime) {
              explainerVideo.pause();
            }
          }

          $(explainerVideo).off("timeupdate").on("timeupdate", onTimeUpdate);
          explainerVideo.play();
        }

      }
    });
  }
})(window.theme = window.theme || {}, window.Vue, window.Flickity, jQuery, window.addWheelListener, window.normalizeWheel); // ------------------------------
// PARTIALS
// ------------------------------


$(() => {
  // eslint-disable-next-line no-restricted-globals
  if (location.pathname === "/cart") {
    document.location.href = "/#cart";
  }
});
/* eslint-disable func-names */

/* eslint-disable no-undef */

/* eslint-disable prettier/prettier */

/* eslint-disable no-unused-vars */
// ⊙﹏⊙ File of shame -- MAJOR REFACTOR

/**
 * Wraps a string around each word
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input splitted by words
 */

function wrapWords(str, tmpl) {
  return str.replace(/\w+[,.'"]?/g, tmpl || "<span><span>$&</span></span>");
} // const navHeight = document.querySelector(".js-header").offsetHeight;


const navHeight = 108;
const $loading = document.querySelector(".t--loading");
const $logo = document.querySelector(".t--loading-logo");
const $transition = document.querySelector(".t--page-transition");
const $overlay = $transition.querySelector(".t--page-transition-overlay");
const $content = document.querySelector(".t--scrollable");
const ratio = 1.5;
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("is-resizing");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("is-resizing");
  }, 400);
});

if ("IntersectionObserver" in window) {
  const Animations = (() => {
    return {
      _register: {
        callbacks: [],
        data: [],
        queries: []
      },

      init() {
        this.functions.init();
        this.base(); // this._events();
      },

      base() {
        // Add ready state to body
        document.querySelector("body").classList.remove("is-loading"); // Animations.resize.init(true);
        // Animations.scroll.init(true);
      },

      controllers() {// Register controllers
        // $('[controller]').each(function(){
        //   let controller = $(this).attr('controller').charAt(0).toUpperCase() + $(this).attr('controller').slice(1);
        //   if (typeof window[controller] == 'object' && $.inArray(controller, Website._register.controllers) == -1) {
        //     Website._register.controllers.push(controller);
        //     window[controller]._init();
        //   }
        // });
      },

      events() {},

      events_unload() {
        // Unload scroll and resize events
        $(window).unbind("resize");
        $(window).unbind("scroll");
      },

      functions() {
        return {
          init() {
            Animations.transition();
          },

          transition() {
            const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            const transition = document.querySelector(".js-transition-overlay");
            transition.style.height = height; // const $img2 = document.querySelector('.image2');
            // const $logo = document.querySelector('.transition__logo');
            // const $frameBlack = document.querySelector('.page-transition__black');
            // const $frameRed = document.querySelector('.page-transition__red');
            // const $button = document.querySelector('#button');
            // const tltransition = new TimelineLite({
            //   paused: true
            // }).fromTo($frameRed , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
            //   .fromTo($frameBlack , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},.2)
            //   .fromTo($logo , 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},.7)
            //   .set($frameRed, {scaleX:0})
            //   .set($img2, {autoAlpha:0})
            //   .to($frameBlack , 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
            //   .to($logo , .2, {autoAlpha:0 },'-=1.2')
            // $button.addEventListener('click', () => {
            //   tltransition.play(0);
            // });
          }

        };
      },

      resize() {
        return {
          init() {}

        };
      },

      scroll() {
        return {
          init(init) {
            this.header.init(init);
            this.sections.init(); // Call controller scroll events
            // $.each(Website.register.controllers, function(index, controller){
            //   if (typeof window[controller]._scroll == 'object' && typeof window[controller]._scroll._init == 'function')
            //     window[controller]._scroll._init();
            // });
          },

          header() {
            return {
              // eslint-disable-next-line no-unused-vars
              init(_init) {}

            };
          },

          sections() {
            return {
              init() {
                // eslint-disable-next-line no-unused-vars
                const queue = []; // Queue sections
                // $(".fade:not(.init):not(.pre-init)").each(function() {
                //   if (
                //     $(this).offset().top <=
                //     $(window).scrollTop() + $(window).height() - 70
                //   ) {
                //     if (
                //       $(this).offset().top + $(this).height() >=
                //       $(window).scrollTop()
                //     ) {
                //       $(this).addClass("pre-init");
                //       queue.push($(this));
                //     } else {
                //       Website._scroll.sections.reveal($(this));
                //     }
                //   }
                // });
                // Process queue
                // $.each(queue, function(index, $section) {
                //   setTimeout(function() {
                //     Website._scroll.sections.reveal($section);
                //   }, index * 400);
                // });
              },

              // eslint-disable-next-line no-unused-vars
              reveal(_$section) {// Reveal sections
                // $section.addClass("init").removeClass("pre-init");
              }

            };
          }

        };
      }

    };
  })();

  (function () {
    // Page transitions
    window.scrollTo(0, 0);
    document.querySelector("body").classList.add("ready"); // eslint-disable-next-line prefer-template

    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $transition.style.height = `${height}px`;
    $loading.style.height = `${height}px`; // eslint-disable-next-line no-undef

    const tlTransitionIn = new TimelineMax({
      paused: true,
      onComplete: () => {
        document.querySelector("body").classList.add("is-loaded");
      }
    });
    const tlTransitionOut = new TimelineMax({
      paused: true
    });
    const initialLoad = true;

    if (initialLoad) {
      tlTransitionIn.fromTo($logo, 0.5, {
        opacity: 0
      }, {
        opacity: 1
      }).fromTo($overlay, 1.6, {
        y: 0
      }, {
        y: -height,
        ease: Expo.easeInOut
      }, 1.2).fromTo($logo, 1.4, {
        y: 0,
        opacity: 1
      }, {
        y: "-200px",
        opacity: 0,
        ease: Expo.easeInOut
      }, 1.3).fromTo($overlay, 1.3, {
        scaleY: 1
      }, {
        scaleY: 0,
        ease: Expo.easeInOut
      }, 1.6);

      if (document.querySelector(".t--text-hero")) {
        const $textHero = document.querySelector(".t--text-hero");
        $textHero.innerHTML = wrapWords($textHero.innerHTML);
        tlTransitionIn.staggerTo(document.querySelectorAll(".t--text-hero span > span"), 1.2, {
          ease: Expo.easeOut,
          y: "0%",
          overwrite: "all",
          delay: 0.12
        }, 0.09);
      }

      tlTransitionIn.fromTo($loading, 1, {
        scaleY: 1
      }, {
        scaleY: 0,
        ease: Expo.easeInOut
      }, 1.9).fromTo($content, 1.6, {
        y: 2 * height
      }, {
        y: 0,
        ease: Expo.easeInOut,
        onComplete: () => {
          $content.style = "";
        }
      }, 1.2);
    } else {
      tlTransitionIn.fromTo($logo, 0.5, {
        opacity: 0
      }, {
        opacity: 1
      }).fromTo($overlay, 1.6, {
        y: 0
      }, {
        y: -height,
        ease: Expo.easeInOut
      }, 1.2).fromTo($logo, 1.4, {
        y: 0,
        opacity: 1
      }, {
        y: "-200px",
        opacity: 0,
        ease: Expo.easeInOut
      }, 1.3).fromTo($overlay, 1.3, {
        scaleY: 1
      }, {
        scaleY: 0,
        ease: Expo.easeInOut
      }, 1.6).fromTo($loading, 1, {
        scaleY: 1
      }, {
        scaleY: 0,
        ease: Expo.easeInOut
      }, 1.9);
    }

    tlTransitionIn.play(0); // Transition Out
    // Select all links

    const links = document.querySelectorAll("a:not([target='_blank'])");
    links.forEach(link => {
      // Play animation out
      if (!link.href.startsWith("#")) {
        link.addEventListener("click", () => {
          tlTransitionOut.play(0);
        });
      }
    }); // Scroll to event

    const scrollToEvent = e => {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      const {
        scrollTo
      } = e.target.dataset;

      if (scrollTo) {
        TweenMax.to(window, 1, {
          scrollTo: {
            y: document.querySelector(scrollTo).offsetTop - 108
          },
          ease: Expo.easeInOut
        });
      } else if (href && href.match(/^#/)) {
        console.log(document.querySelector(href).offsetTop);
        TweenMax.to(window, 1, {
          scrollTo: {
            y: document.querySelector(href).offsetTop - 108
          },
          ease: Expo.easeInOut
        });
      } else {
        TweenMax.to(window, 1, {
          scrollTo: {
            y: height - navHeight
          },
          ease: Expo.easeInOut
        });
      }
    }; // Set all scroll-to events


    const $scrollLinks = document.querySelectorAll(".js-scroll");

    if ($scrollLinks) {
      $scrollLinks.forEach(link => {
        link.addEventListener("click", e => {
          scrollToEvent(e);
        });
      });
    } // Scroll to getter


    window.scrollToEvent = scrollToEvent;
    const configIn = {
      rootMargin: "0px",
      threshold: 0
    };

    const onIntersect = entries => {
      entries.forEach(entry => {
        const isAbove = entry.boundingClientRect.y < 0;
        entry.target.classList.remove("is-in");

        if (isAbove) {
          entry.target.classList.add("is-out", "is-out--up");
        } else {
          entry.target.classList.add("is-out", "is-out--down");
        }

        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          entry.target.classList.remove("is-out", "is-out--up", "is-out--down");
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, configIn);
    const scrollElements = document.querySelectorAll(".t--ty");
    scrollElements.forEach(element => {
      observer.observe(element);
    });

    if (document.querySelector(".js-feature-stability")) {
      const stability = document.querySelector(".js-feature-stability");
      const configStability = {
        rootMargin: "75px 0px",
        threshold: 0
      };

      const intersectionStability = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
          } else {
            entry.target.classList.remove("is-in");
          }
        });
      };

      const observerStability = new IntersectionObserver(intersectionStability, configStability);
      observerStability.observe(stability);
    } // const video = document.querySelector(".js-video");
    // function videoRatio() {
    //   const videoWrapper = document.querySelector(".js-video-wrapper");
    //   video.height = video.videoHeight;
    //   video.width = video.videoWidth;
    //   console.log("hello");
    //   console.log(video.height);
    //   if (parseInt(videoWrapper.offsetWidth, 10) < video.videoWidth) {
    //     video.height =
    //       (video.videoHeight * parseInt(videoWrapper.offsetWidth, 10)) /
    //       video.videoWidth;
    //     video.width = parseInt(videoWrapper.offsetWidth, 10);
    //   }
    // }
    // // register listener function on metadata load
    // function videoListener() {
    //   videoRatio();
    // }
    // if (video) {
    //   window.onload = videoListener();
    // }
    // var y = "self" == u.dataTarget ? u.height : p.a.height
    //                                 , v = f * y * u.dataRatio;
    //                               m += "translate3d(0," + v + "px,0)"

  })();
} else {
  $loading.remove();
  $transition.remove();
}
/* eslint-disable no-var */

/* eslint-disable no-param-reassign */

/* eslint-disable no-undef */


const waterEffect = document.querySelector(".js-water");
let bgSprite;
let displacementSprite;
let displacementFilter;
let pointerSprite;
let pointerFilter;
let app;
let stage;
var spriteWidth = 1440;
var spriteHeight = 845;
let containerHeight;
var newWidth;
var newHeight;

const resizeHandler = () => {
  newWidth = window.innerWidth;

  if (theme.utils.isMatchingMedia(theme.breakpoints.tablet, "min")) {
    containerHeight = 750;
    const scaleFactor = Math.max(window.innerWidth / spriteWidth, containerHeight / spriteHeight);
    newHeight = Math.ceil(spriteHeight * scaleFactor);
    stage.scale.set(scaleFactor);
  } else {
    newHeight = newWidth;
    stage.scale.set(1);
  }

  app.renderer.view.style.width = "100%";
  app.renderer.view.style.height = "100%"; // Resize the renderer

  app.renderer.resize(newWidth, newHeight);
}; // eslint-disable-next-line no-unused-vars


function onPointerMove(eventData) {
  pointerSprite.visible = true;
  pointerSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y - 25);
}

function setup(_loader, resources) {
  resizeHandler();
  app.stage.addChild(stage);
  window.addEventListener("resize", resizeHandler);
  bgSprite = new PIXI.Sprite(resources.bg.texture);
  bgSprite.interactive = true;
  displacementSprite = new PIXI.Sprite(resources.clouds.texture);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  pointerSprite = new PIXI.Sprite(resources.clouds.texture);
  pointerFilter = new PIXI.filters.DisplacementFilter(pointerSprite);
  displacementSprite.width = bgSprite.width;
  displacementSprite.height = bgSprite.height;
  spriteHeight = bgSprite.height;
  spriteWidth = bgSprite.width;
  pointerSprite.anchor.set(0.5);
  pointerFilter.scale.x = 7;
  pointerFilter.scale.y = 7;
  stage.addChild(bgSprite);
  stage.addChild(displacementSprite);
  stage.addChild(pointerSprite);
  stage.filters = [displacementFilter, pointerFilter];
  pointerSprite.visible = false; // bgSprite.on("mousemove", onPointerMove);

  app.ticker.add(delta => {
    // Offset the sprite position to make vFilterCoord update to larger value.
    // Repeat wrapping makes sure there's still pixels on the coordinates.
    displacementSprite.x += 3.5 * delta;
    displacementSprite.y += 3.5 * delta; // Reset x & y to 0 when x > width to keep values from going to very huge numbers.

    if (displacementSprite.x > displacementSprite.width) {
      displacementSprite.x = 0;
      displacementSprite.y = 0;
    }
  });
}

if (waterEffect) {
  // Images used
  const bgImage = waterEffect.dataset.bg;
  const images = [{
    name: "bg",
    url: bgImage
  }, {
    name: "clouds",
    url: "https://raw.githubusercontent.com/pixijs/examples/gh-pages/examples/assets/pixi-filters/displacement_map_repeat.jpg"
  }];
  const canvasElOptions = {
    autoDensity: true,
    backgroundColor: 0xffffff,
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    view: waterEffect
  };
  app = new PIXI.Application(canvasElOptions);
  stage = new PIXI.Container();
  app.loader.add(images).load(setup); // app.renderer.plugins.interaction.moveWhenInside = true;
}

((theme, $) => {
  $(() => {
    const videoPlayButton = $(".js-featured-video-play-button");

    if (videoPlayButton) {
      videoPlayButton.on("click", e => {
        const $parent = $(e.target).closest(".js-featured-video");
        e.preventDefault();
        $parent.find("iframe").src += "&autoplay=1";
        $parent.addClass("is-active");
      });
    }
  });
})(window.theme = window.theme || {}, jQuery);

((theme, Flickity) => {
  function initialiseNavBarFlickity() {
    // check for existence in all browsers and IE10/11 & Surface
    function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints;
    } // check to determine if an overflow is happening


    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    const navBarListElement = document.querySelector(".js-nav-bar-list");

    if (typeof navBarListElement !== "undefined" && navBarListElement != null && !isTouchDevice() && isOverflowing(navBarListElement)) {
      const navBarSlider = new Flickity(navBarListElement, {
        cellAlign: "left",
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        contain: true
      }); // eslint-disable-next-line no-param-reassign

      theme.navBarSlider = navBarSlider;
    }
  }

  window.addEventListener("load", initialiseNavBarFlickity); // eslint-disable-next-line no-undef
})(theme, Flickity);

(theme => {
  function show(elem) {
    elem.classList.add("is-active");
  }

  function hide(elem) {
    elem.classList.remove("is-active");
  }

  function updateButton(btn, label) {
    const button = btn;
    button.classList.toggle("is-active");
    button.children[0].innerHTML = label;
  }

  function toggle(elem, button) {
    if (elem.classList.contains("is-active")) {
      hide(elem);
      updateButton(button, theme.locales.products.product.show_full_specs);
      return;
    }

    show(elem);
    updateButton(button, theme.locales.products.product.hide_full_specs);
  }

  document.addEventListener("click", event => {
    const toggleButtonClass = ".js-toggle-product-specs-button";
    const productSpecsList = document.querySelector(".js-product-specs-list-wrap");
    if (!event.target.closest(toggleButtonClass) || !productSpecsList) return;
    const button = document.querySelector(toggleButtonClass);
    toggle(productSpecsList, button);
  });
  document.addEventListener("click", event => {
    const benefitHeader = ".js-product-benefit-header";
    if (!event.target.closest(benefitHeader)) return;
    event.target.closest(benefitHeader).parentElement.classList.toggle("is-active");
  });
})(window.theme = window.theme || {});

(google => {
  function adjustDistanceSelect() {
    const distanceSelectEl = document.getElementById("within_distance");
    distanceSelectEl.addEventListener("change", window.codeAddress);

    if (distanceSelectEl) {
      const options = Array.from(distanceSelectEl.options);

      if (options.length) {
        options.forEach(option => {
          const currentOption = option;
          currentOption.value === "0" ? currentOption.textContent = `no limit` : currentOption.textContent = `within ${option.value} miles`;
        });
      }
    }
  }

  function rebuildAddressSearch() {
    const addressSearch = document.getElementById("address_search");
    const addressSearchValue = addressSearch.value;
    addressSearch.onfocus = null;
    addressSearch.value = "";
    addressSearch.placeholder = addressSearchValue;
  }

  function addAddressesListHeader() {
    const addressesListHeadingEl = document.createElement("h3");
    addressesListHeadingEl.classList.add("addresses_heading");
    addressesListHeadingEl.textContent = "Stores near you";
    const addressesListResultsEl = document.createElement("div");
    addressesListResultsEl.classList.add("addresses_results");
    const addressesList = document.getElementById("addresses_list");
    addressesList.insertBefore(addressesListResultsEl, addressesList.firstChild);
    addressesList.insertBefore(addressesListHeadingEl, addressesList.firstChild);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        location: pos
      }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            document.getElementById("address_search").value = results[0].formatted_address;
            document.getElementById("submitBtn").click();
          }
        }
      });
    });
  }

  function rebuildSearchBar() {
    const searchBarNode = document.querySelector(".search_bar");
    const searchBarHTML = searchBarNode.innerHTML;
    const newSearchBarHTML = `<div class="search_bar_inner">
                                <h2 class="search_bar_title">Find in-store</h2>
                                ${searchBarHTML}
                              </div>`;
    searchBarNode.innerHTML = newSearchBarHTML;
  }

  function addGeolocate() {
    const mainSearch = document.querySelector(".main_search_bar");
    const mainSearchButton = document.getElementById("submitBtn");
    const mainSearchButtonClone = mainSearchButton.cloneNode(true);
    mainSearchButton.parentNode.removeChild(mainSearchButton);
    const mainSearchHTML = mainSearch.innerHTML;
    const newMainSearchHTML = `<div class="main_search_bar_field">${mainSearchHTML}</div>`;
    mainSearch.innerHTML = newMainSearchHTML;
    document.querySelector(".main_search_bar_field").appendChild(mainSearchButtonClone);
    const addGeolocateButton = document.createElement("button");
    addGeolocateButton.setAttribute("id", "geolocate-button");
    const addGeolocateTextEl = document.createElement("span");
    addGeolocateTextEl.classList.add("u-visually-hidden");
    addGeolocateTextEl.textContent = "Get my location";
    addGeolocateButton.appendChild(addGeolocateTextEl);
    mainSearch.appendChild(addGeolocateButton);
    addGeolocateButton.addEventListener("click", getCurrentLocation);
  }

  if (typeof window.fixURLS !== "undefined") {
    rebuildSearchBar();
    adjustDistanceSelect();
    rebuildAddressSearch();
    addGeolocate();
    addAddressesListHeader();
    const tempFixURLS = window.fixURLS;

    window.fixURLS = () => {
      if (typeof window.boldMap === "undefined") {
        return;
      }

      const map = window.boldMap;
      const styles = [{
        elementType: "geometry",
        stylers: [{
          color: "#f5f5f5"
        }]
      }, {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#f5f5f5"
        }]
      }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#bdbdbd"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#eeeeee"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#757575"
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#e5e5e5"
        }]
      }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#ffffff"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#757575"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#dadada"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      }, {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      }, {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{
          color: "#e5e5e5"
        }]
      }, {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
          color: "#eeeeee"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#c9c9c9"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      }];
      map.setOptions({
        styles
      });
      tempFixURLS();
      document.querySelectorAll("#custom_field_id_2203").forEach(node => {
        const nodeCopy = node;
        nodeCopy.textContent = node.textContent.replace(/:$/, "");

        if (node.nextSibling.textContent === "Yes") {
          node.classList.add("has-demo-available");
        }
      });
      document.querySelectorAll(".store_website a").forEach(node => {
        const nodeCopy = node;
        nodeCopy.textContent = "Website";
      });
      const results = Array.from(document.getElementById("addresses_list").querySelectorAll("li")).filter(item => {
        return item.hasAttribute("onmouseover");
      });
      const resultsEl = document.querySelector(".addresses_results");

      if (results) {
        if (results.length === 0) {
          resultsEl.textContent = "";
        } else if (results.length === 1) {
          resultsEl.textContent = "1 result";
        } else {
          resultsEl.textContent = `${results.length} results`;
        }
      }
    };

    const tempAddMarkers = window.add_markers;

    window.add_markers = () => {
      // eslint-disable-next-line no-undef
      mainIcon = "https://cdn.shopify.com/s/files/1/0857/5574/files/store-locator-pin__store-location.png?75851"; // eslint-disable-next-line no-undef

      youIcon = "https://cdn.shopify.com/s/files/1/0857/5574/files/store-locator-pin__user-location.png?75851"; // eslint-disable-next-line no-undef

      myshadow = "https://cdn.shopify.com/s/files/1/0857/5574/files/store-locator-pin__shadow.png?75851";
      window.add_markers = tempAddMarkers;
      window.add_markers();
    };
  }
})(window.google);

(Vue => {
  if (document.querySelector(".js-design-guide")) {
    // eslint-disable-next-line no-new
    new Vue({
      el: ".js-design-guide",
      data: {
        exampleDropdownOptions: [{
          value: "Example-Value-1",
          label: "Label for Value 1"
        }, {
          value: "Example-Value-2",
          label: "Label for Value 2"
        }, {
          value: "Example-Value-3",
          label: "Label for Value 3"
        }],
        selectedDropdownOption: null
      }
    });
  }
})(window.Vue);

((theme, Vue, bodyScrollLock) => {
  const flyoutNav = document.querySelector(".js-nav"); // eslint-disable-next-line no-param-reassign

  theme.header = new Vue({
    el: ".js-header",
    name: "Header",
    data: {
      isMegaMenuActive: false,
      isAnimating: false
    },
    methods: {
      toggleMegamenu() {
        this.isMegaMenuActive ? this.closeMegamenu() : this.openMegamenu();
      },

      openMegamenu() {
        this.isAnimating = true;
        this.isMegaMenuActive = true;
        bodyScrollLock.disableBodyScroll(flyoutNav);
        theme.vue_event_bus.$emit("open_megamenu");
      },

      closeMegamenu() {
        this.isMegaMenuActive = false;
        bodyScrollLock.enableBodyScroll(flyoutNav);
        theme.vue_event_bus.$emit("close_megamenu");
        setTimeout(() => {
          this.isAnimating = false;
        }, 200);
      }

    }
  });
})(window.theme = window.theme || {}, window.Vue, window.bodyScrollLock);

(() => {
  if (document.querySelector(".js-challenge")) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }
})();