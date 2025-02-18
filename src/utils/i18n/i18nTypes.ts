export const supportedLangs = ['en', 'ko', 'zh', 'ja', 'pt_BR'] as const
export type LangType = typeof supportedLangs[number]

export const SUPPORTED_LANGUAGUES = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' }, // chinese
  { label: '日本人', value: 'ja' }, // japanese
  { label: '한국어', value: 'ko' }, // korean
  { label: 'Português (Brasil)', value: 'pt_BR' }, // portuguese
] as { label: string; value: LangType }[]
