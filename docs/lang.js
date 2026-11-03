// Menu des langues du site (les 12 langues de l'app). Anglais par défaut : le HTML des pages est en anglais.
// Les autres langues sont chargées à la demande depuis i18n/<langue>.js, qui remplit SERENEYE_SITE[<langue>][<page>].
// Les éléments traduits portent data-i18n="clé" (contenu) ou data-i18n-attr="attribut:clé;…" (attributs).
const SERENEYE_LANGS = [
  ["en", "🇬🇧", "English"], ["fr", "🇫🇷", "Français"], ["es", "🇪🇸", "Español"], ["de", "🇩🇪", "Deutsch"],
  ["it", "🇮🇹", "Italiano"], ["pt-BR", "🇧🇷", "Português (Brasil)"], ["nl", "🇳🇱", "Nederlands"], ["ja", "🇯🇵", "日本語"],
  ["zh-Hans", "🇨🇳", "简体中文"], ["ko", "🇰🇷", "한국어"], ["ru", "🇷🇺", "Русский"], ["tr", "🇹🇷", "Türkçe"],
];
const SERENEYE_SITE = {};

/// page : nom de la page dans les traductions ; redirect : { langue: URL } pour les langues qui ont leur propre page.
function setupLanguages(page, redirect = {}) {
  const select = document.getElementById("lang-select");
  const codes = SERENEYE_LANGS.map(l => l[0]);
  for (const [code, flag, name] of SERENEYE_LANGS) select.add(new Option(`${flag}  ${name}`, code));

  // Textes anglais d'origine, pour pouvoir revenir à l'anglais
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const original = new Map(nodes.map(el => [el, el.innerHTML]));
  const attrNodes = [...document.querySelectorAll("[data-i18n-attr]")].map(el => ({
    el, pairs: el.dataset.i18nAttr.split(";").map(p => p.split(":")).map(([attr, key]) => ({ attr, key, value: el.getAttribute(attr) })),
  }));
  const title = document.title;

  function store(lang) { try { localStorage.setItem("sereneye-lang", lang); } catch {} }
  function saved() { try { return localStorage.getItem("sereneye-lang"); } catch { return null; } }

  function render(lang) {
    const t = lang === "en" ? null : SERENEYE_SITE[lang]?.[page];
    nodes.forEach(el => { el.innerHTML = t?.[el.dataset.i18n] ?? original.get(el); });
    attrNodes.forEach(({ el, pairs }) => pairs.forEach(({ attr, key, value }) => el.setAttribute(attr, t?.[key] ?? value)));
    document.title = t?.title ?? title;
    document.documentElement.lang = lang;
    select.value = lang;
    // Les liens entre pages gardent la langue choisie
    document.querySelectorAll('a[href^="support.html"], a[href^="privacy.html"]').forEach(a => {
      const target = a.getAttribute("href").split("?")[0];
      a.setAttribute("href", lang === "en" ? target : `${target}?lang=${lang}`);
    });
  }

  function choose(lang, remember = true) {
    if (!codes.includes(lang)) lang = "en";
    if (remember) store(lang);
    if (redirect[lang]) { location.href = redirect[lang]; return; }
    if (lang === "en" || SERENEYE_SITE[lang]) return render(lang);
    const script = document.createElement("script");
    script.src = `i18n/${lang}.js`;
    script.onload = () => render(lang);
    script.onerror = () => render("en");
    document.head.appendChild(script);
  }

  select.addEventListener("change", () => choose(select.value));
  // ?lang=xx dans l'adresse (liens depuis l'App Store ou les pages françaises), sinon le dernier choix, sinon l'anglais
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const initial = fromUrl || saved() || "en";
  if (redirect[initial] && !fromUrl) { select.value = "en"; render("en"); return; }  // pas de redirection automatique
  choose(initial, Boolean(fromUrl));
}
