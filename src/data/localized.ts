/**
 * Sprachabhängiger Zugriff auf die Inhalts-Daten.
 * DE = Original-Dateien, EN = *.en-Companion. Zentralisiert, damit die
 * DE-Datendateien unberührt bleiben.
 */
import type { Lang } from '../i18n/ui';
import { branchen, type Branche } from './branchen';
import { branchenEn } from './branchen.en';
import { module as moduleDe, type Modul } from './module';
import { moduleEn } from './module.en';
import { glossar, type GlossarTerm } from './glossar';
import { glossarEn } from './glossar.en';
import { faq, type FaqItem } from './faq';
import { faqEn } from './faq.en';
import { alternatives, type Alternative } from './alternatives';
import { alternativesEn } from './alternatives.en';

export const getBranchen = (lang: Lang): Branche[] => (lang === 'en' ? branchenEn : branchen);
export const getBrancheBySlug = (lang: Lang, slug: string): Branche | undefined =>
  getBranchen(lang).find((b) => b.slug === slug);

export const getModule = (lang: Lang): Modul[] => (lang === 'en' ? moduleEn : moduleDe);
export const getModulBySlug = (lang: Lang, slug: string): Modul | undefined =>
  getModule(lang).find((m) => m.slug === slug);

export const getGlossar = (lang: Lang): GlossarTerm[] => (lang === 'en' ? glossarEn : glossar);

export const getFaq = (lang: Lang): FaqItem[] => (lang === 'en' ? faqEn : faq);

export const getAlternatives = (lang: Lang): Alternative[] => (lang === 'en' ? alternativesEn : alternatives);
export const getAlternativeBySlug = (lang: Lang, slug: string): Alternative | undefined =>
  getAlternatives(lang).find((a) => a.slug === slug);
